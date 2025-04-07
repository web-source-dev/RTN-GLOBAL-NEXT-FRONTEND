"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { 
  Search, 
  ChevronRight, 
  FileText,
  BookOpen,
  Briefcase,
  Layers,
  Settings,
  MessageSquare
} from "lucide-react";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { getAllServices } from "@/data/services";
import { portfolioItems } from "@/data/portfolio-items";
import { getAllIndustries } from "@/data/industries";
import { caseStudies } from "@/data/case-studies";

// Define interfaces for different content types
interface Service {
  title: string;
  description: string;
  fullDescription?: string;
  category: string;
  slug: string;
}

interface PortfolioItem {
  title: string;
  description: string;
  slug: string;
  category?: string;
  client?: string;
  industry?: string;
  tags: string[];
}

interface Industry {
  title: string;
  name?: string;
  description: string;
  slug: string;
}

interface CaseStudy {
  title: string;
  slug: string;
  client: string;
  industry: string;
  summary?: string;
  challenge?: string;
  solution?: string;
  services: string[];
}

interface KnowledgeArticle {
  title: string;
  description: string;
  category: string;
  url: string;
  lastUpdated: string;
}

interface BlogPost {
  title: string;
  description: string;
  category: string;
  url: string;
  publishDate: string;
  author: string;
}

interface SearchResults {
  services: Service[];
  portfolio: PortfolioItem[];
  industries: Industry[];
  caseStudies: CaseStudy[];
  knowledge: KnowledgeArticle[];
  blog: BlogPost[];
}

interface SearchSuggestion {
  title: string;
  url: string;
  type: string;
  icon: JSX.Element;
  description?: string;
}

// Create a client component that uses useSearchParams
function SearchPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams?.get("q") || "");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isSearching, setIsSearching] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResults>({
    services: [],
    portfolio: [],
    industries: [],
    caseStudies: [],
    knowledge: [],
    blog: []
  });
  const [totalResults, setTotalResults] = useState(0);
  const [sortBy, setSortBy] = useState("relevance");

  // Process search query from URL on load
  useEffect(() => {
    const query = searchParams?.get("q");
    if (query) {
      setSearchQuery(query);
      performSearch(query);
    }
  }, [searchParams]);

  // Handle search form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      performSearch(searchQuery);
      setShowSuggestions(false);
    }
  };

  // Add this to fix the unused variable warning
  const handleSortChange = (value: string) => {
    setSortBy(value);
  };

  // Perform quick search for suggestions
  const getSearchSuggestions = (query: string): SearchSuggestion[] | null => {
    if (!query.trim()) return null;
    
    const lowerQuery = query.toLowerCase();
    const suggestions: SearchSuggestion[] = [];
    
    // Get service suggestions (max 2)
    try {
      const allServices = getAllServices();
      const serviceResults = allServices
        .filter(service => {
          if (!service) return false;
          return (
            (service.title && service.title.toLowerCase().includes(lowerQuery)) ||
            (service.description && service.description.toLowerCase().includes(lowerQuery))
          );
        })
        .slice(0, 2);
      
      serviceResults.forEach(service => {
        if (!service) return;
        suggestions.push({
          title: service.title || "Untitled Service",
          description: (service.description || "").substring(0, 80) + "...",
          url: `/services/${service.slug || ""}`,
          type: "Service",
          icon: <Settings className="h-4 w-4" />
        });
      });
    } catch (error) {
      console.error("Error getting service suggestions:", error);
    }
    
    // Get portfolio suggestions (max 2)
    try {
      const portfolioResults = portfolioItems
        .filter(item => {
          if (!item) return false;
          return (
            (item.title && item.title.toLowerCase().includes(lowerQuery)) ||
            (item.description && item.description.toLowerCase().includes(lowerQuery))
          );
        })
        .slice(0, 2);
      
      portfolioResults.forEach(item => {
        if (!item) return;
        suggestions.push({
          title: item.title || "Untitled Portfolio Item",
          description: (item.description || "").substring(0, 80) + "...",
          url: `/portfolio/${item.slug || ""}`,
          type: "Portfolio",
          icon: <Briefcase className="h-4 w-4" />
        });
      });
    } catch (error) {
      console.error("Error getting portfolio suggestions:", error);
    }
    
    // Get industry suggestions (max 2)
    try {
      const allIndustries = getAllIndustries();
      const industryResults = allIndustries
        .filter((industry: any) => {
          if (!industry) return false;
          return (
            (industry.title && industry.title.toLowerCase().includes(lowerQuery)) ||
            (industry.description && industry.description.toLowerCase().includes(lowerQuery))
          );
        })
        .slice(0, 2);
      
      industryResults.forEach((industry: any) => {
        if (!industry) return;
        suggestions.push({
          title: industry.title || "Untitled Industry",
          description: (industry.description || "").substring(0, 80) + "...",
          url: `/industries/${industry.slug || ""}`,
          type: "Industry",
          icon: <Layers className="h-4 w-4" />
        });
      });
    } catch (error) {
      console.error("Error getting industry suggestions:", error);
    }
    
    // Get case study suggestions (max 2)
    try {
      const caseStudyResults = caseStudies
        .filter(study => {
          if (!study) return false;
          return (
            (study.title && study.title.toLowerCase().includes(lowerQuery)) ||
            (study.summary && study.summary.toLowerCase().includes(lowerQuery))
          );
        })
        .slice(0, 2);
      
      caseStudyResults.forEach(study => {
        if (!study) return;
        const summary = study.summary ? study.summary.substring(0, 80) + "..." : `Case study on ${study.client || ""}`;
        suggestions.push({
          title: study.title || "Untitled Case Study",
          description: summary,
          url: `/case-studies/${study.slug || ""}`,
          type: "Case Study",
          icon: <FileText className="h-4 w-4" />
        });
      });
    } catch (error) {
      console.error("Error getting case study suggestions:", error);
    }
    
    return suggestions.slice(0, 6); // Limit to 6 suggestions total
  };
  
  // Get suggestions based on current search query
  const searchSuggestions = searchQuery.trim() !== "" ? getSearchSuggestions(searchQuery) : null;
  
  // Handle suggestion click
  const handleSuggestionClick = (url: string) => {
    router.push(url);
    setShowSuggestions(false);
  };
  
  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = () => {
      setShowSuggestions(false);
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Perform search across all content types
  const performSearch = (query: string) => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    const lowerQuery = query.toLowerCase();
    
    // Search in services
    const allServices = getAllServices();
    const serviceResults = allServices.filter(service => 
      service.title.toLowerCase().includes(lowerQuery) ||
      service.description.toLowerCase().includes(lowerQuery) ||
      service.fullDescription?.toLowerCase().includes(lowerQuery) ||
      service.category.toLowerCase().includes(lowerQuery)
    );
    
    // Search in portfolio
    const portfolioResults = portfolioItems.filter(item => 
      item.title.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery) ||
      (item.category?.toLowerCase().includes(lowerQuery) || false) ||
      (item.client?.toLowerCase().includes(lowerQuery) || false) ||
      (item.industry?.toLowerCase().includes(lowerQuery) || false) ||
      (item.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) || false)
    );
    
    // Search in industries
    const allIndustries = getAllIndustries();
    const industryResults = allIndustries.filter((industry: any) => {
      return (
        industry.title.toLowerCase().includes(lowerQuery) ||
        industry.description.toLowerCase().includes(lowerQuery)
      );
    });
    
    // Search in case studies
    const caseStudyResults = caseStudies.filter(study => 
      study.title.toLowerCase().includes(lowerQuery) ||
      study.slug.toLowerCase().includes(lowerQuery) ||
      study.client.toLowerCase().includes(lowerQuery) ||
      study.industry.toLowerCase().includes(lowerQuery) ||
      study.summary?.toLowerCase().includes(lowerQuery) ||
      study.challenge?.toLowerCase().includes(lowerQuery) ||
      study.solution?.toLowerCase().includes(lowerQuery) ||
      (Array.isArray(study.services) && study.services.some(service => 
        service.toLowerCase().includes(lowerQuery)
      ))
    );
    
    // Mock knowledge base results (replace with actual API call in production)
    const knowledgeResults = [
      {
        title: "How to set up your account",
        description: "Learn how to create and configure your RTN Global account for the first time.",
        category: "Getting Started",
        url: "/knowledge-base/getting-started/account-setup",
        lastUpdated: "2023-09-15"
      },
      {
        title: "Troubleshooting common issues",
        description: "Solutions for the most frequently encountered problems with our services.",
        category: "Troubleshooting",
        url: "/knowledge-base/troubleshooting/common-issues",
        lastUpdated: "2023-10-20"
      }
    ].filter(item => 
      item.title.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery) ||
      item.category.toLowerCase().includes(lowerQuery)
    );
    
    // Mock blog results (replace with actual API call in production)
    const blogResults = [
      {
        title: "10 Web Design Trends for 2024",
        description: "Explore the latest web design trends that will dominate the digital landscape in 2024.",
        category: "Web Design",
        url: "/blog/web-design-trends-2024",
        publishDate: "2024-01-05",
        author: "Sarah Johnson"
      },
      {
        title: "How AI is Revolutionizing Digital Marketing",
        description: "Discover how artificial intelligence is transforming the way businesses approach digital marketing.",
        category: "Digital Marketing",
        url: "/blog/ai-revolutionizing-digital-marketing",
        publishDate: "2023-12-18",
        author: "Michael Chen"
      }
    ].filter(item => 
      item.title.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery) ||
      item.category.toLowerCase().includes(lowerQuery) ||
      item.author.toLowerCase().includes(lowerQuery)
    );
    
    // Set results
    const results = {
      services: serviceResults,
      portfolio: portfolioResults,
      industries: industryResults,
      caseStudies: caseStudyResults,
      knowledge: knowledgeResults,
      blog: blogResults
    };
    
    setSearchResults(results as unknown as SearchResults);
    setTotalResults(
      serviceResults.length + 
      portfolioResults.length + 
      industryResults.length +
      caseStudyResults.length +
      knowledgeResults.length +
      blogResults.length
    );
    
    setIsSearching(false);
  };

  // Filter results based on active category
  const getFilteredResults = (): SearchResults => {
    if (activeCategory === "all") {
      return {
        services: searchResults.services,
        portfolio: searchResults.portfolio,
        industries: searchResults.industries,
        caseStudies: searchResults.caseStudies,
        knowledge: searchResults.knowledge,
        blog: searchResults.blog
      };
    }
    
    return {
      services: activeCategory === "services" ? searchResults.services : [],
      portfolio: activeCategory === "portfolio" ? searchResults.portfolio : [],
      industries: activeCategory === "industries" ? searchResults.industries : [],
      caseStudies: activeCategory === "case-studies" ? searchResults.caseStudies : [],
      knowledge: activeCategory === "knowledge" ? searchResults.knowledge : [],
      blog: activeCategory === "blog" ? searchResults.blog : []
    };
  };

  // Sort results by selected criterion
  const getSortedResults = (results: SearchResults): SearchResults => {
    const { services, portfolio, industries, caseStudies, knowledge, blog } = results;
    
    // Apply sorting to each array
    const sortResults = <T extends { title: string; publishDate?: string; lastUpdated?: string }>(arr: T[]): T[] => {
      const sorted = [...arr];
      switch (sortBy) {
        case "a-z":
          return sorted.sort((a, b) => a.title.localeCompare(b.title));
        case "z-a":
          return sorted.sort((a, b) => b.title.localeCompare(a.title));
        case "recent":
          return sorted.sort((a, b) => {
            // Use publishDate for blog, lastUpdated for knowledge, and fallback
            const dateA = a.publishDate || a.lastUpdated || "2023-01-01";
            const dateB = b.publishDate || b.lastUpdated || "2023-01-01";
            return new Date(dateB).getTime() - new Date(dateA).getTime();
          });
        case "oldest":
          return sorted.sort((a, b) => {
            const dateA = a.publishDate || a.lastUpdated || "2023-01-01";
            const dateB = b.publishDate || b.lastUpdated || "2023-01-01";
            return new Date(dateA).getTime() - new Date(dateB).getTime();
          });
        default:
          return sorted;
      }
    };
    
    return {
      services: sortResults(services),
      portfolio: sortResults(portfolio),
      industries: sortResults(industries),
      caseStudies: sortResults(caseStudies),
      knowledge: sortResults(knowledge),
      blog: sortResults(blog)
    };
  };

  // Filter and sort results
  const filteredResults = getFilteredResults();
  const sortedResults = getSortedResults(filteredResults);

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-background to-muted/20 py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Search RTN Global</h1>
            
            {/* Search Form */}
            <form onSubmit={handleSubmit} className="relative">
              <div className="relative flex items-center">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search for anything..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSuggestions(e.target.value.trim() !== "");
                  }}
                  onFocus={() => {
                    if (searchQuery.trim() !== "") {
                      setShowSuggestions(true);
                    }
                  }}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent click from closing suggestions
                    if (searchQuery.trim() !== "") {
                      setShowSuggestions(true);
                    }
                  }}
                  className="pl-12 py-6 text-base rounded-full border-border focus:border-primary pr-28"
                />
                <Button 
                  type="submit" 
                  className="absolute right-1.5 top-1/2 transform -translate-y-1/2 rounded-full px-5"
                >
                  Search
                </Button>
              </div>
              
              {/* Search Suggestions */}
              {showSuggestions && searchSuggestions && searchSuggestions.length > 0 && (
                <div 
                  className="absolute z-[100] w-full mt-1 bg-background rounded-md border border-border shadow-lg overflow-hidden backdrop-blur-sm" 
                  onClick={(e) => e.stopPropagation()}
                  style={{ backgroundColor: 'var(--background)', backdropFilter: 'blur(8px)' }}
                >
                  <div className="max-h-96 overflow-y-auto p-2">
                    <p className="text-xs font-medium text-muted-foreground mb-2 px-2">
                      Suggestions
                    </p>
                    <ul className="space-y-1">
                      {searchSuggestions.map((suggestion, index) => (
                        <li 
                          key={index}
                          className="px-3 py-2 hover:bg-muted rounded-md cursor-pointer transition-colors"
                          onClick={() => handleSuggestionClick(suggestion.url)}
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-1">
                              {suggestion.icon}
                            </div>
                            <div>
                              <p className="font-medium line-clamp-1">{suggestion.title}</p>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <span className="font-medium">{suggestion.type}</span>
                                {suggestion.description && (
                                  <>
                                    <span className="mx-1.5">•</span>
                                    <span className="line-clamp-1">{suggestion.description}</span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-2 pt-2 border-t border-border">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="w-full text-primary"
                        onClick={handleSubmit}
                      >
                        View all results for {searchQuery}
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      
      {/* Results Section */}
      {searchParams?.get("q") && (
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            {/* Results Header */}
            <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  {isSearching ? "Searching..." : 
                   `${totalResults} results for ${searchParams.get("q")}`}
                </h2>
                {!isSearching && totalResults === 0 && (
                  <p className="text-muted-foreground">
                    No results found. Try a different search term or browse our popular categories below.
                  </p>
                )}
              </div>
            </div>
            
            {isSearching ? (
              <div className="space-y-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <Skeleton className="h-6 w-2/3" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                ))}
              </div>
            ) : totalResults > 0 ? (
              <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
                <TabsList className="mb-8 w-full overflow-x-auto flex items-center gap-1 bg-muted/30 p-1 rounded-lg">
                  <TabsTrigger value="all" className="flex-shrink-0">
                    All Results ({totalResults})
                  </TabsTrigger>
                  {searchResults.services.length > 0 && (
                    <TabsTrigger value="services" className="flex-shrink-0">
                      <Settings className="h-4 w-4 mr-2" />
                      Services ({searchResults.services.length})
                    </TabsTrigger>
                  )}
                  {searchResults.portfolio.length > 0 && (
                    <TabsTrigger value="portfolio" className="flex-shrink-0">
                      <Briefcase className="h-4 w-4 mr-2" />
                      Portfolio ({searchResults.portfolio.length})
                    </TabsTrigger>
                  )}
                  {searchResults.industries.length > 0 && (
                    <TabsTrigger value="industries" className="flex-shrink-0">
                      <Layers className="h-4 w-4 mr-2" />
                      Industries ({searchResults.industries.length})
                    </TabsTrigger>
                  )}
                  {searchResults.caseStudies.length > 0 && (
                    <TabsTrigger value="case-studies" className="flex-shrink-0">
                      <FileText className="h-4 w-4 mr-2" />
                      Case Studies ({searchResults.caseStudies.length})
                    </TabsTrigger>
                  )}
                  {searchResults.knowledge.length > 0 && (
                    <TabsTrigger value="knowledge" className="flex-shrink-0">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Knowledge Base ({searchResults.knowledge.length})
                    </TabsTrigger>
                  )}
                  {searchResults.blog.length > 0 && (
                    <TabsTrigger value="blog" className="flex-shrink-0">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Blog ({searchResults.blog.length})
                    </TabsTrigger>
                  )}
                </TabsList>
                
                <div className="space-y-12">
                  <TabsContent value="all" className="space-y-12 mt-0">
                    {/* Services */}
                    {sortedResults.services.length > 0 && (
                      <ResultSection 
                        title="Services" 
                        icon={<Settings className="h-5 w-5 text-primary" />}
                        results={sortedResults.services}
                        renderItem={(service: Service) => (
                          <ResultCard
                            title={service.title}
                            description={service.description}
                            href={`/services/${service.slug}`}
                            category={service.category}
                          />
                        )}
                        viewAllLink={sortedResults.services.length > 3 ? 
                          { href: "#", onClick: () => setActiveCategory("services") } : undefined}
                      />
                    )}
                    
                    {/* Portfolio */}
                    {sortedResults.portfolio.length > 0 && (
                      <ResultSection 
                        title="Portfolio Projects" 
                        icon={<Briefcase className="h-5 w-5 text-primary" />}
                        results={sortedResults.portfolio.slice(0, 3)}
                        renderItem={(project: PortfolioItem) => (
                          <ResultCard
                            title={project.title}
                            description={project.description}
                            href={`/portfolio/${project.slug || ""}`}
                            category={project.category}
                          />
                        )}
                        viewAllLink={sortedResults.portfolio.length > 3 ? 
                          { href: "#", onClick: () => setActiveCategory("portfolio") } : undefined}
                      />
                    )}
                    
                    {/* Industries */}
                    {sortedResults.industries.length > 0 && (
                      <ResultSection 
                        title="Industries" 
                        icon={<Layers className="h-5 w-5 text-primary" />}
                        results={sortedResults.industries.slice(0, 3)}
                        renderItem={(industry: Industry) => (
                          <ResultCard
                            title={industry.title}
                            description={industry.description}
                            href={`/industries/${industry.slug}`}
                            category="Industry"
                          />
                        )}
                        viewAllLink={sortedResults.industries.length > 3 ? 
                          { href: "#", onClick: () => setActiveCategory("industries") } : undefined}
                      />
                    )}
                    
                    {/* Case Studies */}
                    {sortedResults.caseStudies.length > 0 && (
                      <ResultSection 
                        title="Case Studies" 
                        icon={<FileText className="h-5 w-5 text-primary" />}
                        results={sortedResults.caseStudies.slice(0, 3)}
                        renderItem={(study: CaseStudy) => (
                          <ResultCard
                            title={study.title}
                            description={study.summary || (study.challenge?.substring(0, 150) + "...") || ""}
                            href={`/case-studies/${study.slug}`}
                            category={study.industry}
                          />
                        )}
                        viewAllLink={sortedResults.caseStudies.length > 3 ? 
                          { href: "#", onClick: () => setActiveCategory("case-studies") } : undefined}
                      />
                    )}
                    
                    {/* Knowledge Base */}
                    {sortedResults.knowledge.length > 0 && (
                      <ResultSection 
                        title="Knowledge Base" 
                        icon={<BookOpen className="h-5 w-5 text-primary" />}
                        results={sortedResults.knowledge.slice(0, 3)}
                        renderItem={(article: KnowledgeArticle) => (
                          <ResultCard
                            title={article.title}
                            description={article.description}
                            href={article.url}
                            category={article.category}
                            meta={`Last updated: ${formatDate(article.lastUpdated)}`}
                          />
                        )}
                        viewAllLink={sortedResults.knowledge.length > 3 ? 
                          { href: "#", onClick: () => setActiveCategory("knowledge") } : undefined}
                      />
                    )}
                    
                    {/* Blog */}
                    {sortedResults.blog.length > 0 && (
                      <ResultSection 
                        title="Blog Posts" 
                        icon={<MessageSquare className="h-5 w-5 text-primary" />}
                        results={sortedResults.blog.slice(0, 3)}
                        renderItem={(post: BlogPost) => (
                          <ResultCard
                            title={post.title}
                            description={post.description}
                            href={post.url}
                            category={post.category}
                            meta={`By ${post.author} • ${formatDate(post.publishDate)}`}
                          />
                        )}
                        viewAllLink={sortedResults.blog.length > 3 ? 
                          { href: "#", onClick: () => setActiveCategory("blog") } : undefined}
                      />
                    )}
                  </TabsContent>
                  
                  {/* Individual Category Tabs */}
                  <TabsContent value="services" className="mt-0">
                    <ResultSection 
                      title="Services" 
                      icon={<Settings className="h-5 w-5 text-primary" />}
                      results={sortedResults.services}
                      renderItem={(service: Service) => (
                        <ResultCard
                          title={service.title}
                          description={service.description}
                          href={`/services/${service.slug}`}
                          category={service.category}
                        />
                      )}
                    />
                  </TabsContent>
                  
                  <TabsContent value="portfolio" className="mt-0">
                    <ResultSection 
                      title="Portfolio Projects" 
                      icon={<Briefcase className="h-5 w-5 text-primary" />}
                      results={sortedResults.portfolio}
                      renderItem={(project: PortfolioItem) => (
                        <ResultCard
                          title={project.title}
                          description={project.description}
                          href={`/portfolio/${project.slug || ""}`}
                          category={project.category}
                        />
                      )}
                    />
                  </TabsContent>
                  
                  <TabsContent value="industries" className="mt-0">
                    <ResultSection 
                      title="Industries" 
                      icon={<Layers className="h-5 w-5 text-primary" />}
                      results={sortedResults.industries}
                      renderItem={(industry: Industry) => (
                        <ResultCard
                          title={industry.title}
                          description={industry.description}
                          href={`/industries/${industry.slug}`}
                          category="Industry"
                        />
                      )}
                    />
                  </TabsContent>
                  
                  <TabsContent value="case-studies" className="mt-0">
                    <ResultSection 
                      title="Case Studies" 
                      icon={<FileText className="h-5 w-5 text-primary" />}
                      results={sortedResults.caseStudies}
                      renderItem={(study: CaseStudy) => (
                        <ResultCard
                          title={study.title}
                          description={study.summary || (study.challenge?.substring(0, 150) + "...") || ""}
                          href={`/case-studies/${study.slug}`}
                          category={study.industry}
                        />
                      )}
                    />
                  </TabsContent>
                  
                  <TabsContent value="knowledge" className="mt-0">
                    <ResultSection 
                      title="Knowledge Base" 
                      icon={<BookOpen className="h-5 w-5 text-primary" />}
                      results={sortedResults.knowledge}
                      renderItem={(article: KnowledgeArticle) => (
                        <ResultCard
                          title={article.title}
                          description={article.description}
                          href={article.url}
                          category={article.category}
                          meta={`Last updated: ${formatDate(article.lastUpdated)}`}
                        />
                      )}
                    />
                  </TabsContent>
                  
                  <TabsContent value="blog" className="mt-0">
                    <ResultSection 
                      title="Blog Posts" 
                      icon={<MessageSquare className="h-5 w-5 text-primary" />}
                      results={sortedResults.blog}
                      renderItem={(post: BlogPost) => (
                        <ResultCard
                          title={post.title}
                          description={post.description}
                          href={post.url}
                          category={post.category}
                          meta={`By ${post.author} • ${formatDate(post.publishDate)}`}
                        />
                      )}
                    />
                  </TabsContent>
                </div>
              </Tabs>
            ) : (
              // No results found
              <div className="py-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6">
                  <Search className="h-8 w-8 text-muted-foreground/60" />
                </div>
                <h3 className="text-xl font-medium mb-2">No results found</h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-8">
                  We couldn&apos;t find any content matching your search query. Try using different keywords or browse our popular sections below.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
                  <QuickLink 
                    title="Services" 
                    href="/services" 
                    icon={<Settings className="h-5 w-5" />} 
                    description="Explore our range of digital services"
                  />
                  <QuickLink 
                    title="Knowledge Base" 
                    href="/knowledge-base" 
                    icon={<BookOpen className="h-5 w-5" />} 
                    description="Find help articles and guides"
                  />
                  <QuickLink 
                    title="Portfolio" 
                    href="/portfolio" 
                    icon={<Briefcase className="h-5 w-5" />} 
                    description="View our recent projects"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* No search yet */}
      {!searchParams?.get("q") && (
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-3">Popular Searches</h2>
              <p className="text-muted-foreground">
                Browse some of our most popular topics or use the search bar above
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {["Web Development", "Mobile Apps", "E-commerce", "Digital Marketing", "SEO", "UI/UX Design", "WordPress", "API Integration"].map((term) => (
                <Button 
                  key={term} 
                  variant="outline" 
                  className="rounded-full" 
                  onClick={() => {
                    setSearchQuery(term);
                    router.push(`/search?q=${encodeURIComponent(term)}`);
                    performSearch(term);
                  }}
                >
                  {term}
                </Button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CategoryCard 
                title="Services" 
                icon={<Settings className="h-6 w-6" />}
                href="/services"
                links={[
                  { label: "Web Development", href: "/services/web-development" },
                  { label: "Mobile Apps", href: "/services/mobile-apps" },
                  { label: "UI/UX Design", href: "/services/ui-ux-design" }
                ]}
              />
              
              <CategoryCard 
                title="Portfolio" 
                icon={<Briefcase className="h-6 w-6" />}
                href="/portfolio"
                links={[
                  { label: "Recent Projects", href: "/portfolio" },
                  { label: "Case Studies", href: "/case-studies" },
                  { label: "Client Testimonials", href: "/testimonials" }
                ]}
              />
              
              <CategoryCard 
                title="Knowledge Base" 
                icon={<BookOpen className="h-6 w-6" />}
                href="/knowledge-base"
                links={[
                  { label: "Getting Started", href: "/knowledge-base/getting-started" },
                  { label: "Tutorials", href: "/knowledge-base/tutorials" },
                  { label: "FAQs", href: "/faq" }
                ]}
              />
              
              <CategoryCard 
                title="Industries" 
                icon={<Layers className="h-6 w-6" />}
                href="/industries"
                links={[
                  { label: "Technology", href: "/industries/technology" },
                  { label: "E-commerce", href: "/industries/e-commerce" },
                  { label: "Healthcare", href: "/industries/healthcare" }
                ]}
              />
              
              <CategoryCard 
                title="Support" 
                icon={<MessageSquare className="h-6 w-6" />}
                href="/support"
                links={[
                  { label: "Contact Us", href: "/contact" },
                  { label: "Submit a Request", href: "/support/submit" },
                  { label: "Ticket Status", href: "/support/ticket-status" }
                ]}
              />
              
              <CategoryCard 
                title="Resources" 
                icon={<FileText className="h-6 w-6" />}
                href="/resources"
                links={[
                  { label: "Guides & Ebooks", href: "/resources#guides" },
                  { label: "Templates", href: "/resources#templates" },
                  { label: "Tools", href: "/resources#tools" }
                ]}
              />
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

// Main page component with Suspense
export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading search page...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}

// Helper components
interface ResultSectionProps<T> {
  title: string;
  icon: React.ReactNode;
  results: T[];
  renderItem: (item: T) => React.ReactNode;
  viewAllLink?: { href: string; onClick?: () => void };
}

function ResultSection<T>({ title, icon, results, renderItem, viewAllLink }: ResultSectionProps<T>) {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          {icon}
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        {viewAllLink && (
          <Button 
            variant="link" 
            size="sm" 
            className="text-primary"
            onClick={viewAllLink.onClick}
            asChild={!viewAllLink.onClick}
          >
            {viewAllLink.onClick ? (
              <span>View all ({results.length})</span>
            ) : (
              <Link href={viewAllLink.href}>View all ({results.length})</Link>
            )}
          </Button>
        )}
      </div>
      
      <div className="space-y-6">
        {results.map((item, index) => (
          <div key={index}>
            {renderItem(item)}
          </div>
        ))}
      </div>
    </section>
  );
};

type ResultCardProps = {
  title: string;
  description: string;
  href: string;
  category?: string;
  meta?: string;
}

const ResultCard = ({ title, description, href, category, meta }: ResultCardProps) => {
  return (
    <Link href={href} className="block p-4 rounded-lg border border-border hover:border-primary hover:shadow-sm bg-card transition-all">
      <div className="flex flex-col">
        {category && (
          <span className="text-xs font-medium text-muted-foreground mb-2 inline-block">
            {category}
          </span>
        )}
        <h3 className="text-lg font-medium mb-2 hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {description}
        </p>
        {meta && (
          <div className="text-xs text-muted-foreground mt-auto">
            {meta}
          </div>
        )}
      </div>
    </Link>
  );
};

type QuickLinkProps = {
  title: string;
  href: string;
  icon: React.ReactNode;
  description: string;
}

const QuickLink = ({ title, href, icon, description }: QuickLinkProps) => {
  return (
    <Link href={href} className="flex flex-col items-center text-center p-6 rounded-lg border border-border hover:border-primary hover:shadow-sm bg-card transition-all">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Link>
  );
};

type CategoryCardProps = {
  title: string;
  icon: React.ReactNode;
  href: string;
  links: Array<{ label: string; href: string }>;
}

const CategoryCard = ({ title, icon, href, links }: CategoryCardProps) => {
  return (
    <div className="p-6 rounded-lg border border-border bg-card hover:shadow-sm transition-all">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      
      <ul className="space-y-2 mb-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link 
              href={link.href} 
              className="text-sm flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <ChevronRight className="h-3 w-3 mr-1.5 flex-shrink-0" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      
      <Link 
        href={href} 
        className="text-sm font-medium text-primary hover:underline"
      >
        Browse all {title.toLowerCase()} →
      </Link>
    </div>
  );
};

// Helper function to format dates
const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  }).format(date);
}; 