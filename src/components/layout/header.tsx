"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon, MenuIcon, X, UserCircle, Settings, LogOut, User as UserIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useAuth } from "@/lib/contexts/auth-provider"
import { Avatar } from "@/components/ui/avatar"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const { user, isAuthenticated, logout } = useAuth()
  const userMenuRef = useRef<HTMLDivElement>(null)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Get user initials for avatar fallback
  const getUserInitials = () => {
    if (!user || !user.firstName) return "U"
    return user.firstName
      .split(" ")
      .map(name => name[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-primary font-bold text-xl"
          >
            <span>RTN Global</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-foreground/80"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </Button>

            {isAuthenticated ? (
              <div className="relative" ref={userMenuRef}>
                <button 
                  className="flex items-center focus:outline-none"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  aria-label="User menu"
                >
                  <Avatar
                    src={user?.avatar || undefined}
                    alt={`${user?.firstName || ''} ${user?.lastName || ''}`.trim()}
                    className="h-9 w-9"
                    fallback={getUserInitials()}
                  />
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-background border border-border rounded-md shadow-lg py-1 z-50">
                    <div className="px-4 py-3 border-b border-border">
                      <p className="text-sm font-medium text-foreground truncate">{user?.firstName} {user?.lastName}</p>
                      <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
                    </div>
                    
                    <Link href="/profile" onClick={() => setIsUserMenuOpen(false)}>
                      <div className="px-4 py-2 text-sm text-foreground hover:bg-muted flex items-center gap-2 cursor-pointer">
                        <UserIcon className="h-4 w-4" />
                        <span>Profile</span>
                      </div>
                    </Link>
                    
                    <Link href="/dashboard" onClick={() => setIsUserMenuOpen(false)}>
                      <div className="px-4 py-2 text-sm text-foreground hover:bg-muted flex items-center gap-2 cursor-pointer">
                        <UserCircle className="h-4 w-4" />
                        <span>Dashboard</span>
                      </div>
                    </Link>
                    
                    {user?.role === "admin" && (
                      <Link href="/admin" onClick={() => setIsUserMenuOpen(false)}>
                        <div className="px-4 py-2 text-sm text-foreground hover:bg-muted flex items-center gap-2 cursor-pointer">
                          <Settings className="h-4 w-4" />
                          <span>Admin Panel</span>
                        </div>
                      </Link>
                    )}
                    
                    <div className="border-t border-border my-1"></div>
                    
                    <button 
                      onClick={() => {
                        logout();
                        setIsUserMenuOpen(false);
                      }}
                      className="w-full px-4 py-2 text-sm text-foreground hover:bg-muted flex items-center gap-2 cursor-pointer"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/auth/login">
                <Button variant="outline" size="sm">
                  Login
                </Button>
              </Link>
            )}

            <Link href="/free-consultation">
              <Button size="sm">
                Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="mr-2"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </Button>
            
            {isAuthenticated && (
              <div className="relative mr-2" ref={userMenuRef}>
                <button 
                  className="flex items-center focus:outline-none"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  aria-label="User menu"
                >
                  <Avatar 
                    className="h-8 w-8 cursor-pointer hover:ring-2 hover:ring-primary transition-all"
                    src={user?.avatar|| undefined}
                    alt={`${user?.firstName || ''} ${user?.lastName || ''}`.trim()}
                    fallback={getUserInitials()}
                  />
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-background border border-border rounded-md shadow-lg py-1 z-50">
                    <div className="px-4 py-3 border-b border-border">
                      <p className="text-sm font-medium text-foreground truncate">{user?.firstName} {user?.lastName}</p>
                      <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
                    </div>
                    
                    <Link href="/profile" onClick={() => setIsUserMenuOpen(false)}>
                      <div className="px-4 py-2 text-sm text-foreground hover:bg-muted flex items-center gap-2 cursor-pointer">
                        <UserIcon className="h-4 w-4" />
                        <span>Profile</span>
                      </div>
                    </Link>
                    
                    <Link href="/dashboard" onClick={() => setIsUserMenuOpen(false)}>
                      <div className="px-4 py-2 text-sm text-foreground hover:bg-muted flex items-center gap-2 cursor-pointer">
                        <UserCircle className="h-4 w-4" />
                        <span>Dashboard</span>
                      </div>
                    </Link>
                    
                    {user?.role === "admin" && (
                      <Link href="/admin" onClick={() => setIsUserMenuOpen(false)}>
                        <div className="px-4 py-2 text-sm text-foreground hover:bg-muted flex items-center gap-2 cursor-pointer">
                          <Settings className="h-4 w-4" />
                          <span>Admin Panel</span>
                        </div>
                      </Link>
                    )}
                    
                    <div className="border-t border-border my-1"></div>
                    
                    <button 
                      onClick={() => {
                        logout();
                        setIsUserMenuOpen(false);
                      }}
                      className="w-full px-4 py-2 text-sm text-foreground hover:bg-muted flex items-center gap-2 cursor-pointer"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            )}
            
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-5 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-foreground/80"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              {isAuthenticated ? (
                <>
                  <Link 
                    href="/profile" 
                    className="w-full block mb-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button variant="outline" className="w-full justify-start">
                      <UserIcon className="h-4 w-4 mr-2" />
                      Profile
                    </Button>
                  </Link>
                  <Link 
                    href="/dashboard" 
                    className="w-full block mb-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button variant="outline" className="w-full justify-start">
                      <UserCircle className="h-4 w-4 mr-2" />
                      Dashboard
                    </Button>
                  </Link>
                  {user?.role === "admin" && (
                    <Link 
                      href="/admin" 
                      className="w-full block mb-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Button variant="outline" className="w-full justify-start">
                        <Settings className="h-4 w-4 mr-2" />
                        Admin Panel
                      </Button>
                    </Link>
                  )}
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => {
                      logout();
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </>
              ) : (
                <Link 
                  href="/auth/login" 
                  className="w-full block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>
              )}
              <Link 
                href="/free-consultation" 
                className="w-full block mt-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="w-full">
                  Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
} 