"use client";

import { useState, FormEvent, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Search, RefreshCw, MessageSquare } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import API from "@/lib/api/api-provider";
import { AuthAPI } from "@/lib/api/api-provider";
import { formatDate } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { Avatar } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";

interface Comment {
  content: string;
  createdAt: string;
  user: {
    _id: string;
    name?: string;
    role?: string;
    avatar?: string;
  };
}

interface TicketData {
  _id: string;
  ticketNumber: string;
  issueCategory: string;
  issueTitle: string;
  description: string;
  stepsToReproduce?: string;
  priority: string;
  status: string;
  attachments?: string;
  createdAt: string;
  updatedAt: string;
  comments: Comment[];
  userId: string;
}

interface UserData {
  _id: string;
  name?: string;
  email?: string;
  role?: string;
  avatar?: string;
}

export default function TicketStatus({ ticketNumber }: { ticketNumber?: string }) {
  const [searchTicket, setSearchTicket] = useState(ticketNumber || "");
  const [ticket, setTicket] = useState<TicketData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [comment, setComment] = useState("");
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);

  // Check if user is logged in
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await AuthAPI.getMe();
        setCurrentUser(response.data);
        setIsLoggedIn(true);
      } catch (error) {
        setIsLoggedIn(false);
      }
    };
    
    checkAuth();
  }, []);

  // If ticket number is provided as a prop, fetch it on mount
  useEffect(() => {
    if (ticketNumber) {
      fetchTicket(ticketNumber);
    }
  }, [ticketNumber]);

  const fetchTicket = useCallback(async (ticketNum: string) => {
    if (!ticketNum.trim()) {
      toast({
        title: "Ticket number required",
        description: "Please enter a valid ticket number",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await API.get(`/api/forms/support/ticket/${ticketNum}`);
      if (response.data.success) {
        setTicket(response.data.data);
      } else {
        toast({
          title: "Ticket not found",
          description: "The ticket number you entered does not exist",
          variant: "destructive",
        });
        setTicket(null);
      }
    } catch (error) {
      toast({
        title: "Error fetching ticket",
        description: "There was an error retrieving your ticket information",
        variant: "destructive",
      });
      setTicket(null);
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await fetchTicket(searchTicket);
  };

  const handleAddComment = async () => {
    if (!comment.trim()) {
      toast({
        title: "Comment cannot be empty",
        description: "Please enter a comment",
        variant: "destructive",
      });
      return;
    }

    if (!isLoggedIn) {
      toast({
        title: "Authentication required",
        description: "Please log in to add a comment",
        variant: "destructive",
      });
      return;
    }

    if (!ticket) return;

    setIsSubmittingComment(true);

    try {
      console.log("Adding comment to ticket:", ticket.ticketNumber);
      
      // Use the correct API endpoint for adding comments
      await API.post(`/api/forms/support/tickets/${ticket.ticketNumber}/comments`, {
        content: comment,
      });

      toast({
        title: "Comment added",
        description: "Your comment has been added successfully",
      });

      // Refresh ticket data
      fetchTicket(ticket.ticketNumber);
      setComment("");
    } catch (error) {
      console.error("Error adding comment:", error);
      
      const errorMessage = 
        (error as { response?: { data?: { message?: string, error?: string } } })?.response?.data?.message || 
        (error as { response?: { data?: { message?: string, error?: string } } })?.response?.data?.error || 
        (error instanceof Error ? error.message : "There was an error adding your comment");
        
      toast({
        title: "Error adding comment",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmittingComment(false);
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "low":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "high":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
      case "critical":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "in_progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "waiting_for_customer":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "resolved":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "closed":
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  const formatStatusText = (status: string) => {
    return status
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Support Ticket Status
          </CardTitle>
          <CardDescription className="text-center">
            Enter your ticket number to check the status of your support request
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              placeholder="Enter ticket number (e.g., TKT-123456789)"
              value={searchTicket}
              onChange={(e) => setSearchTicket(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" disabled={isLoading} className="shrink-0">
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Search className="h-4 w-4 mr-2" />
              )}
              {isLoading ? "Searching..." : "Search"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {ticket && (
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
              <div>
                <CardTitle className="text-xl">
                  Ticket #{ticket.ticketNumber}
                </CardTitle>
                <CardDescription>
                  Created on {formatDate(new Date(ticket.createdAt))}
                </CardDescription>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className={getPriorityColor(ticket.priority)}>
                  {ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)} Priority
                </Badge>
                <Badge variant="outline" className={getStatusColor(ticket.status)}>
                  {formatStatusText(ticket.status)}
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => fetchTicket(ticket.ticketNumber)}
                  className="ml-2"
                >
                  <RefreshCw className="h-4 w-4 mr-1" />
                  Refresh
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">{ticket.issueTitle}</h3>
              <p className="text-sm text-muted-foreground">
                Category: {ticket.issueCategory.charAt(0).toUpperCase() + ticket.issueCategory.slice(1)}
              </p>
            </div>

            <Accordion type="single" collapsible defaultValue="description">
              <AccordionItem value="description">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>
                  <div className="text-sm whitespace-pre-line p-4 bg-muted/30 rounded-md">
                    {ticket.description}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {ticket.stepsToReproduce && (
                <AccordionItem value="steps">
                  <AccordionTrigger>Steps to Reproduce</AccordionTrigger>
                  <AccordionContent>
                    <div className="text-sm whitespace-pre-line p-4 bg-muted/30 rounded-md">
                      {ticket.stepsToReproduce}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}

              {ticket.attachments && (
                <AccordionItem value="attachments">
                  <AccordionTrigger>Attachments</AccordionTrigger>
                  <AccordionContent>
                    <div className="p-4 bg-muted/30 rounded-md">
                      <a
                        href={ticket.attachments.startsWith("http") 
                          ? ticket.attachments 
                          : `${process.env.NEXT_PUBLIC_API_URL}/${ticket.attachments}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center"
                      >
                        View Attachment
                      </a>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}

              <AccordionItem value="comments">
                <AccordionTrigger>
                  Comments ({ticket.comments?.length || 0})
                </AccordionTrigger>
                <AccordionContent>
                  {ticket.comments && ticket.comments.length > 0 ? (
                    <div className="space-y-4 mt-2">
                      {ticket.comments.map((comment, index) => (
                        <div key={index} className="flex gap-3 p-3 rounded-md border border-border">
                          <div className="shrink-0">
                            <Avatar
                              src={comment.user?.avatar}
                              alt={comment.user?.name || "User"}
                              fallback={(comment.user?.name?.[0] || "U").toUpperCase()}
                              size="sm"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                              <div className="font-medium text-sm">
                                {comment.user?.name || "Support Team"}
                                {comment.user?.role && (
                                  <span className="ml-2 text-xs text-muted-foreground">
                                    {comment.user.role}
                                  </span>
                                )}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {formatDate(new Date(comment.createdAt))}
                              </div>
                            </div>
                            <p className="text-sm">{comment.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground py-2">
                      No comments yet
                    </p>
                  )}

                  {isLoggedIn && (
                    <div className="mt-4 space-y-2">
                      {currentUser && (
                        <div className="text-sm text-muted-foreground mb-2">
                          Commenting as {currentUser.name || currentUser.email || "Authenticated User"}
                        </div>
                      )}
                      <Label htmlFor="comment" className="text-sm font-medium">
                        Add a comment
                      </Label>
                      <Textarea
                        id="comment"
                        placeholder="Type your comment here..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="h-24"
                      />
                      <div className="flex justify-end">
                        <Button
                          type="button"
                          onClick={handleAddComment}
                          disabled={isSubmittingComment || !comment.trim()}
                        >
                          {isSubmittingComment ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              <MessageSquare className="mr-2 h-4 w-4" />
                              Add Comment
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 