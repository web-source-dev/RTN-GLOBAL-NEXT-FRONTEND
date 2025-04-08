"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MenuIcon, X, UserCircle, Settings, LogOut, User as UserIcon, ChevronDown, Search } from "lucide-react"
import { useAuth } from "@/lib/contexts/auth-provider"
import { Avatar } from "@/components/ui/avatar"

// Import mega menus
import { ServicesMegaMenu } from "./mega-menus/services-mega-menu"
import { IndustriesMegaMenu } from "./mega-menus/industries-mega-menu"
import { CaseStudiesMegaMenu } from "./mega-menus/case-studies-mega-menu"
import { BlogMegaMenu } from "./mega-menus/blog-mega-menu"

// Environment variables for different domains
const DASHBOARD_URL = process.env.NEXT_PUBLIC_USER_DASHBOARD_URL || '';
const ADMIN_URL = process.env.NEXT_PUBLIC_ADMIN_DASHBOARD_URL || '';

// Navigation items with mega menu flags
const navItems = [
  { name: "Home", href: "/", hasMegaMenu: false },
  { name: "Services", href: "/services", hasMegaMenu: true, megaMenuComponent: ServicesMegaMenu },
  { name: "Industries", href: "/industries", hasMegaMenu: true, megaMenuComponent: IndustriesMegaMenu },
  { name: "Case Studies", href: "/case-studies", hasMegaMenu: true, megaMenuComponent: CaseStudiesMegaMenu },
  { name: "Blog", href: "/blog", hasMegaMenu: true, megaMenuComponent: BlogMegaMenu },
  { name: "About", href: "/about", hasMegaMenu: false },
  { name: "Contact", href: "/contact", hasMegaMenu: false },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const pathname = usePathname()
  const router = useRouter()
  const { user, isAuthenticated } = useAuth()
  const userMenuRef = useRef<HTMLDivElement>(null)
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const headerRef = useRef<HTMLDivElement>(null)

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
  // Close mega menu when scrolling starts
  useEffect(() => {
    const handleScrollStart = () => {
      setActiveMegaMenu(null)
    }
    
    window.addEventListener("scroll", handleScrollStart)
    return () => window.removeEventListener("scroll", handleScrollStart)
  }, [])

  // Handle mega menu hover
  const handleMenuMouseEnter = (name: string) => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current)
      megaMenuTimeoutRef.current = null
    }
    setActiveMegaMenu(name)
  }

  const handleMenuMouseLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null)
    }, 300)
  }

  const handleMegaMenuMouseEnter = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current)
      megaMenuTimeoutRef.current = null
    }
  }

  const handleMegaMenuMouseLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null)
    }, 300)
  }

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

  // Render active mega menu
  const renderActiveMegaMenu = () => {
    const activeItem = navItems.find(item => item.name === activeMegaMenu);
    if (activeItem && activeItem.hasMegaMenu && activeItem.megaMenuComponent) {
      const MegaMenu = activeItem.megaMenuComponent;
      return (
        <div 
          onMouseEnter={handleMegaMenuMouseEnter}
          onMouseLeave={handleMegaMenuMouseLeave}
        >
          <MegaMenu />
        </div>
      );
    }
    return null;
  }

  return (
    <div ref={headerRef}>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled || activeMegaMenu
            ? "bg-background/95 backdrop-blur-sm shadow-sm"
            : "bg-background"
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
            <nav className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.hasMegaMenu && handleMenuMouseEnter(item.name)}
                  onMouseLeave={handleMenuMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                      pathname === item.href || pathname.startsWith(`${item.href}/`) 
                        ? "text-primary" 
                        : "text-foreground/80",
                      item.hasMegaMenu ? "gap-1" : ""
                    )}
                    onClick={() => item.hasMegaMenu && setActiveMegaMenu(null)}
                  >
                    {item.name}
                    {item.hasMegaMenu && (
                      <ChevronDown 
                        className={cn(
                          "h-4 w-4 transition-transform", 
                          activeMegaMenu === item.name ? "rotate-180" : ""
                        )}
                      />
                    )}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Search"
                onClick={() => router.push('/search')}
                className="text-foreground/80 hover:text-primary hover:bg-primary/5"
              >
                <Search className="h-5 w-5" />
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
                    <div className="absolute right-0 mt-2 w-56 bg-white border border-border rounded-md shadow-lg py-1 z-50">
                      <div className="px-4 py-3 border-b border-border">
                        <p className="text-sm font-medium text-foreground truncate">{user?.firstName} {user?.lastName}</p>
                        <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
                      </div>
                      
                      <a 
                        onClick={() => setIsUserMenuOpen(false)}
                        href={user?.role === "user" ? `${DASHBOARD_URL}/dashboard/user/profile` : `${ADMIN_URL}/profile`}
                        className="px-4 py-2 text-sm text-foreground hover:bg-muted flex items-center gap-2 cursor-pointer"
                      >
                        <UserIcon className="h-4 w-4" />
                        <span>Profile</span>
                      </a>
                      {user?.role === "user" && (
                      <a 
                        onClick={() => setIsUserMenuOpen(false)}
                        href={`${DASHBOARD_URL}/dashboard/user`}
                        className="px-4 py-2 text-sm text-foreground hover:bg-muted flex items-center gap-2 cursor-pointer"
                      >
                        <UserCircle className="h-4 w-4" />
                        <span>Dashboard</span>
                      </a>
                      )}
                      {user?.role === "admin" && (
                        <a 
                          onClick={() => setIsUserMenuOpen(false)}
                          href={`${ADMIN_URL}`}
                          className="px-4 py-2 text-sm text-foreground hover:bg-muted flex items-center gap-2 cursor-pointer"
                        >
                          <Settings className="h-4 w-4" />
                          <span>Admin Panel</span>
                        </a>
                      )}
                      
                      <div className="border-t border-border my-1"></div>
                      
                      <button 
                        onClick={() => {
                          setIsUserMenuOpen(false);
                          router.push('/auth/logout');
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

              <Link href="/contact/free-consultation">
                <Button size="sm">
                  Free Consultation
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
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
                    <div className="absolute right-0 mt-2 w-56 bg-white border border-border rounded-md shadow-lg py-1 z-50">
                      <div className="px-4 py-3 border-b border-border">
                        <p className="text-sm font-medium text-foreground truncate">{user?.firstName} {user?.lastName}</p>
                        <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
                      </div>
                      <Link
                        href={
                          user?.role === "user"
                            ? `${DASHBOARD_URL}/dashboard/user/profile`
                            : `${ADMIN_URL}/profile`
                        }
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <div className="px-4 py-2 text-sm text-foreground hover:bg-muted flex items-center gap-2 cursor-pointer">
                          <UserIcon className="h-4 w-4" />
                          <span>Profile</span>
                        </div>
                      </Link>
                      
                      {user?.role === "user" && (
                        <Link 
                          href={`${DASHBOARD_URL}/dashboard/user`}
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <div className="px-4 py-2 text-sm text-foreground hover:bg-muted flex items-center gap-2 cursor-pointer">
                            <UserCircle className="h-4 w-4" />
                            <span>Dashboard</span>
                          </div>
                        </Link>
                      )}
                      
                      {user?.role === "admin" && (
                        <Link
                          href={`${ADMIN_URL}`}
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <div className="px-4 py-2 text-sm text-foreground hover:bg-muted flex items-center gap-2 cursor-pointer">
                            <Settings className="h-4 w-4" />
                            <span>Admin Panel</span>
                          </div>
                        </Link>
                      )}
                      
                      <div className="border-t border-border my-1"></div>
                      
                      <button 
                        onClick={() => {
                          setIsUserMenuOpen(false);
                          router.push('/auth/logout');
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
                aria-label="Search"
                onClick={() => router.push('/search')}
                className="mr-1"
              >
                <Search className="h-5 w-5" />
              </Button>
              
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
          <div className="md:hidden bg-white border-t border-border">
            <div className="px-4 py-5 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between text-sm font-medium transition-colors hover:text-primary",
                      pathname === item.href ? "text-primary" : "text-foreground/80"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                    {item.hasMegaMenu && (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Link>
                </div>
              ))}
              <div className="pt-4 border-t border-border">
                {isAuthenticated ? (
                  <>
                    <Link
                      href={
                        user?.role === "user"
                          ? `${DASHBOARD_URL}/dashboard/user/profile`
                          : `${ADMIN_URL}/profile`
                      }
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block mb-2"
                    >
                      <Button variant="outline" className="w-full justify-start">
                        <UserIcon className="h-4 w-4 mr-2" />
                        Profile
                      </Button>
                    </Link>
                    <Link 
                      href={`${DASHBOARD_URL}/dashboard/user`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block mb-2"
                    >
                      <Button variant="outline" className="w-full justify-start">
                        <UserCircle className="h-4 w-4 mr-2" />
                        Dashboard
                      </Button>
                    </Link>
                    {user?.role === "admin" && (
                      <Link 
                        href={`${ADMIN_URL}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block mb-2"
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
                        setIsMobileMenuOpen(false);
                        router.push('/auth/logout');
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
                  href="/contact/free-consultation" 
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

        {/* Mega Menu Container */}
        {renderActiveMegaMenu()}
      </header>
    </div>
  )
} 