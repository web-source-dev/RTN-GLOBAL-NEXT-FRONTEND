"use client"

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Send, Paperclip, X, MoreVertical } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Chip } from "@/components/ui/chip";
import API from "@/lib/api/api-provider";
import { useAuth } from "@/lib/contexts/auth-provider";

interface Message {
  _id?: string;
  sender: {
    _id: string;
    firstName: string;
    lastName: string;
    role: string;
    avatar?: string;
  };
  content: string;
  attachment?: {
    filename: string;
    path: string;
    mimetype: string;
  };
  timestamp: string;
}

interface LiveChatProps {
  sessionId?: string;
  isAdmin?: boolean;
  onClose?: () => void;
  customStyles?: React.CSSProperties;
}

export default function LiveChat({ sessionId: propSessionId, isAdmin = false, onClose, customStyles }: LiveChatProps) {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sessionStatus, setSessionStatus] = useState<"initialized" | "waiting" | "active" | "closed">("waiting");
  
  // Refs
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const cursorPositionRef = useRef<number | null>(null);
  const lastMessagesLengthRef = useRef<number>(0);
  const pollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pollingActiveRef = useRef<boolean>(false);

  // Polling and Data Management
  const currentDataRef = useRef({
    messages: [] as Message[],
    status: "" as string
  });

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Store cursor position
  const storeCursorPosition = useCallback(() => {
    if (inputRef.current === document.activeElement) {
      cursorPositionRef.current = inputRef.current?.selectionStart ?? null;
    }
  }, []);

  // Restore cursor position
  const restoreCursorPosition = useCallback(() => {
    if (inputRef.current && cursorPositionRef.current !== null) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(cursorPositionRef.current, cursorPositionRef.current);
      // Only restore once, then reset
      cursorPositionRef.current = null;
    }
  }, []);

  // Scroll to the bottom when messages change
  useEffect(() => {
    if (messages.length > lastMessagesLengthRef.current) {
      scrollToBottom();
      lastMessagesLengthRef.current = messages.length;
    }
  }, [messages, scrollToBottom]);
  
  // Cleanup polling on unmount
  useEffect(() => {
    return () => {
      if (pollTimeoutRef.current) {
        clearTimeout(pollTimeoutRef.current);
        pollingActiveRef.current = false;
      }
    };
  }, []);

  // Initialize the chat session
  useEffect(() => {
    if (propSessionId) {
      setSessionId(propSessionId);
      fetchSession(propSessionId, true);
    } else {
      startChatSession();
    }
  }, [propSessionId]);

  // Periodic polling function that handles state updates carefully
  const pollForUpdates = useCallback(async (sid: string) => {
    if (!sid || !pollingActiveRef.current) return;
    
    try {
      const response = await API.get(`/api/chat/session/${sid}`);
      const newData = response.data;
      
      // Compare with current refs to see if update is needed
      const messagesChanged = JSON.stringify(currentDataRef.current.messages) !== 
                             JSON.stringify(newData.messages || []);
      const statusChanged = currentDataRef.current.status !== newData.status;
      
      // Update our ref data
      currentDataRef.current = {
        messages: newData.messages || [],
        status: newData.status
      };
      
      // Only update state if needed to prevent unnecessary renders
      if (messagesChanged || statusChanged) {
        // Save cursor position before state update
        storeCursorPosition();
        
        // Separate timeout to ensure these updates happen in separate cycles
        setTimeout(() => {
          if (messagesChanged) {
            setMessages(newData.messages || []);
          }
          
          if (statusChanged) {
            setSessionStatus(newData.status);
          }
          
          // Restore cursor in the next frame after state updates
          setTimeout(restoreCursorPosition, 0);
        }, 0);
      }
      
      // Schedule next poll if not closed
      if (newData.status !== "closed" && pollingActiveRef.current) {
        pollTimeoutRef.current = setTimeout(() => pollForUpdates(sid), 3000);
      } else {
        pollingActiveRef.current = false;
      }
    } catch (error) {
      console.error("Poll error:", error);
      
      // Retry polling after a delay on error
      if (pollingActiveRef.current) {
        pollTimeoutRef.current = setTimeout(() => pollForUpdates(sid), 5000);
      }
    }
  }, [storeCursorPosition, restoreCursorPosition]);
  
  // Start polling
  const startPolling = useCallback((sid: string) => {
    if (pollTimeoutRef.current) {
      clearTimeout(pollTimeoutRef.current);
    }
    
    pollingActiveRef.current = true;
    pollForUpdates(sid);
  }, [pollForUpdates]);
  
  // Initialize chat session
  const startChatSession = async () => {
    try {
      setLoading(true);
      const response = await API.post("/api/chat/session");
      
      if (response.data) {
        const sessionData = response.data;
        setSessionId(sessionData._id);
        setMessages(sessionData.messages || []);
        setSessionStatus(sessionData.status);
        
        // Update our ref data
        currentDataRef.current = {
          messages: sessionData.messages || [],
          status: sessionData.status
        };
        
        // Start polling if not in initialized state
        if (sessionData.status !== "initialized") {
          startPolling(sessionData._id);
        }
      }
    } catch (error) {
      console.error("Chat session error:", error);
      setError("Failed to start chat session");
    } finally {
      setLoading(false);
    }
  };

  // Fetch session once (used for initial fetch or manual refresh)
  const fetchSession = async (id: string, startPollingAfter = false) => {
    try {
      // Save cursor position
      storeCursorPosition();
      
      setLoading(true);
      const response = await API.get(`/api/chat/session/${id}`);
      
      const sessionData = response.data;
      setMessages(sessionData.messages || []);
      setSessionStatus(sessionData.status);
      
      // Update our ref data
      currentDataRef.current = {
        messages: sessionData.messages || [],
        status: sessionData.status
      };
      
      // Start polling if requested and session is not closed
      if (startPollingAfter && sessionData.status !== "closed") {
        startPolling(id);
      }
    } catch (error) {
      console.error("Fetch session error:", error);
      setError("Failed to load chat session");
    } finally {
      setLoading(false);
      // Restore cursor position
      setTimeout(restoreCursorPosition, 0);
    }
  };

  // Send a new message
  const handleSendMessage = async (event: React.FormEvent) => {
    event.preventDefault();
    if ((!newMessage.trim() && !file) || loading || sessionStatus === "closed") return;

    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("content", newMessage.trim());
      if (file) {
        formData.append("attachment", file);
      }

      const response = await API.post(`/api/chat/message/${sessionId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      if (response.data) {
        const messageData = response.data;
        setMessages(messageData.messages || []);
        setSessionStatus(messageData.status);
        setNewMessage("");
        setFile(null);
        
        // Update our ref data
        currentDataRef.current = {
          messages: messageData.messages || [],
          status: messageData.status
        };
        
        // Start or continue polling
        if (!pollingActiveRef.current && messageData.status !== "closed") {
          startPolling(sessionId as string);
        }
        
        // Focus the input field
        setTimeout(() => {
          inputRef.current?.focus();
        }, 0);
      }
    } catch (error) {
      console.error("Send message error:", error);
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle file selection
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile && selectedFile.size <= 5 * 1024 * 1024) { // 5MB limit
      setFile(selectedFile);
    } else {
      setError("File size should be less than 5MB");
    }
  };

  return (
    <div 
      className="flex flex-col rounded-lg shadow-lg bg-white overflow-hidden h-[85vh] w-full max-w-2xl mx-auto mt-12 border"
      style={{ 
        ...(isAdmin ? { width: "100%" } : { width: "50vw" }),
        ...customStyles 
      }}
    >
      {/* Chat Header */}
      <div className="p-4 bg-primary text-primary-foreground flex items-center gap-3">
        <div className="relative">
          <Avatar 
            size="md"
            fallback={isAdmin ? "A" : "S"}
            className={sessionStatus === "active" ? "bg-green-500" : "bg-amber-500"}
          />
          <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-primary ${
            sessionStatus === "active" ? "bg-green-500" : "bg-amber-500"
          }`}></div>
        </div>
        
        <div className="flex-grow">
          <h2 className="font-semibold text-lg">
            {isAdmin ? "Customer Support" : "Live Chat Support"}
          </h2>
          <p className="text-xs opacity-80">
            {sessionStatus === "initialized" ? "Start chatting..." :
             sessionStatus === "waiting" ? "Waiting for agent..." :
             sessionStatus === "active" ? "Chat active" : "Chat ended"}
          </p>
        </div>
        
        {onClose && customStyles?.height !== "100%" && (
          <button 
            onClick={onClose}
            className="text-primary-foreground/90 hover:text-primary-foreground"
            aria-label="Close chat"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Messages Area */}
      <div className="flex-grow overflow-auto p-4 bg-gray-50 flex flex-col gap-4">
        {messages.map((message, index) => (
          <div
            key={message._id || index}
            className={`flex ${message.sender?._id === user?.id ? "flex-row-reverse" : "flex-row"} gap-2 max-w-[80%] ${
              message.sender?._id === user?.id ? "self-end" : "self-start"
            }`}
          >
            <Avatar
              size="sm"
              src={message.sender?.avatar}
              alt={`${message.sender?.firstName || "User"}'s avatar`}
              fallback={message.sender?.firstName?.[0] || "?"}
              className={message.sender?.role === "admin" ? "bg-primary" : "bg-secondary"}
            />
            
            <div>
              <div className={`relative p-3 rounded-lg ${
                message.sender?._id === user?.id 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-white text-foreground shadow-sm"
              }`}>
                <p>{message.content}</p>
                
                {message.attachment && (
                  <a 
                    href={`${process.env.NEXT_PUBLIC_API_URL}/${message.attachment.path}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-2 flex items-center gap-1 px-2 py-1 rounded text-xs ${
                      message.sender?._id === user?.id 
                        ? "bg-primary-foreground/20 text-primary-foreground" 
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Paperclip size={14} />
                    <span>{message.attachment.filename}</span>
                  </a>
                )}
              </div>
              
              <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                <span>{message.sender?.firstName} {message.sender?.lastName}</span>
                
                {message.sender?.role === "admin" && (
                  <Badge variant="secondary" className="text-[10px] py-0 px-1.5 h-4">
                    Agent
                  </Badge>
                )}
                
                <time dateTime={new Date(message.timestamp).toISOString()}>
                  {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </time>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t">
        {error && (
          <p className="text-destructive text-xs mb-2">{error}</p>
        )}
        
        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileSelect}
            accept="image/*,.pdf,.doc,.docx"
            aria-label="Attach file"
            id="chat-file-upload"
          />
          
          <Button
            type="button"
            size="icon"
            variant="ghost"
            onClick={() => fileInputRef.current?.click()}
            disabled={loading || sessionStatus === "closed"}
            aria-label="Attach file (maximum 5MB)"
          >
            <Paperclip size={18} />
          </Button>
          
          <Input
            ref={inputRef}
            placeholder={
              sessionStatus === "closed" ? "Chat ended" :
              sessionStatus === "initialized" ? "Start chatting..." :
              "Type your message..."
            }
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            disabled={loading || sessionStatus === "closed"}
            className="rounded-full"
            autoFocus={sessionStatus !== "closed"}
            onClick={() => cursorPositionRef.current = inputRef.current?.selectionStart || null}
            onFocus={() => cursorPositionRef.current = inputRef.current?.selectionStart || null}
            onKeyDown={() => cursorPositionRef.current = inputRef.current?.selectionStart || null}
          />
          
          <Button
            type="submit"
            disabled={loading || (!newMessage.trim() && !file) || sessionStatus === "closed"}
            className="rounded-full px-4"
          >
            {loading ? (
              <div className="h-5 w-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                Send
                <Send size={16} className="ml-2" />
              </>
            )}
          </Button>
        </form>
        
        {file && (
          <div className="mt-2">
            <Chip
              label={file.name}
              variant="primary"
              size="sm"
              onDelete={() => setFile(null)}
            />
          </div>
        )}
      </div>

      {/* Status Messages */}
      {sessionStatus === "initialized" && !isAdmin && (
        <div className="p-3 bg-blue-50 text-blue-700 border-t border-blue-100">
          <p className="text-sm">Start chatting by sending your first message</p>
        </div>
      )}
    </div>
  );
} 