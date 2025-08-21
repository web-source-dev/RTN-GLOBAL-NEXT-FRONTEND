"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  ChevronRight, 
  Download, 
  FileText, 
  FileSpreadsheet, 
  FileCheck,
  FileCode,
  Search,
  BookOpen,
} from "lucide-react";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { HeroSection } from "@/components/sections/hero-section";

// Resource types
type ResourceType = "guide" | "template" | "checklist" | "tool" | "ebook" | "toolkit";

// Resource categories
type ResourceCategory = 
  | "web-development" 
  | "mobile-development" 
  | "ui-ux-design" 
  | "digital-marketing" 
  | "seo" 
  | "content-creation"
  | "business";

// Resource interface
interface Resource {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  type: ResourceType;
  downloadUrl: string;
  thumbnailUrl: string;
  fileSize: string;
  fileFormat: string;
  featured?: boolean;
  new?: boolean;
  popular?: boolean;
  downloadCount?: number;
  publishedDate: string;
  updatedDate?: string;
}

// Sample resources data
const resourcesData: Resource[] = [
  {
    id: "web-development-checklist",
    title: "Web Development Project Checklist",
    description: "A comprehensive checklist to ensure your web development project covers all essential aspects from planning to launch.",
    category: "web-development",
    type: "checklist",
    downloadUrl: "/downloads/web-development-project-checklist.pdf",
    thumbnailUrl: "/images/resources/web-dev-checklist.jpg",
    fileSize: "1.2 MB",
    fileFormat: "PDF",
    featured: true,
    downloadCount: 3450,
    publishedDate: "2023-09-15",
    updatedDate: "2024-01-10"
  },
  {
    id: "seo-guide-2024",
    title: "The Ultimate SEO Guide for 2024",
    description: "Learn the latest SEO strategies and tactics to improve your website's visibility in search engines.",
    category: "seo",
    type: "guide",
    downloadUrl: "/downloads/ultimate-seo-guide-2024.pdf",
    thumbnailUrl: "/images/resources/seo-guide.jpg",
    fileSize: "4.5 MB",
    fileFormat: "PDF",
    featured: true,
    new: true,
    downloadCount: 2120,
    publishedDate: "2024-01-05"
  },
  {
    id: "content-calendar-template",
    title: "Content Calendar Template 2024",
    description: "Plan and organize your content strategy with this ready-to-use content calendar template for the entire year.",
    category: "content-creation",
    type: "template",
    downloadUrl: "/downloads/content-calendar-template-2024.xlsx",
    thumbnailUrl: "/images/resources/content-calendar.jpg",
    fileSize: "890 KB",
    fileFormat: "XLSX",
    popular: true,
    downloadCount: 5670,
    publishedDate: "2023-12-10"
  },
  {
    id: "mobile-app-wireframe-kit",
    title: "Mobile App Wireframe Kit",
    description: "A collection of wireframe templates to help you plan and design your mobile application's interface and user experience.",
    category: "mobile-development",
    type: "template",
    downloadUrl: "/downloads/mobile-app-wireframe-kit.sketch",
    thumbnailUrl: "/images/resources/wireframe-kit.jpg",
    fileSize: "24 MB",
    fileFormat: "Sketch",
    downloadCount: 1890,
    publishedDate: "2023-08-20",
    updatedDate: "2023-11-15"
  },
  {
    id: "digital-marketing-ebook",
    title: "Digital Marketing Fundamentals",
    description: "A comprehensive guide to digital marketing strategies including social media, email marketing, content, and analytics.",
    category: "digital-marketing",
    type: "ebook",
    downloadUrl: "/downloads/digital-marketing-fundamentals.pdf",
    thumbnailUrl: "/images/resources/marketing-ebook.jpg",
    fileSize: "8.7 MB",
    fileFormat: "PDF",
    popular: true,
    downloadCount: 4320,
    publishedDate: "2023-07-12",
    updatedDate: "2023-12-05"
  },
  {
    id: "responsive-email-templates",
    title: "Responsive Email Templates Bundle",
    description: "A collection of 10 professionally designed and responsive HTML email templates for your marketing campaigns.",
    category: "digital-marketing",
    type: "template",
    downloadUrl: "/downloads/responsive-email-templates.zip",
    thumbnailUrl: "/images/resources/email-templates.jpg",
    fileSize: "5.4 MB",
    fileFormat: "ZIP",
    downloadCount: 3210,
    publishedDate: "2023-06-18"
  },
  {
    id: "ui-design-principles-guide",
    title: "UI Design Principles Guide",
    description: "Learn the core principles of effective user interface design with practical examples and best practices.",
    category: "ui-ux-design",
    type: "guide",
    downloadUrl: "/downloads/ui-design-principles.pdf",
    thumbnailUrl: "/images/resources/ui-design-guide.jpg",
    fileSize: "6.2 MB",
    fileFormat: "PDF",
    downloadCount: 2780,
    publishedDate: "2023-05-25",
    updatedDate: "2023-09-30"
  },
  {
    id: "seo-audit-tool",
    title: "SEO Audit Spreadsheet Tool",
    description: "A comprehensive spreadsheet tool to perform detailed SEO audits of your website and identify improvement opportunities.",
    category: "seo",
    type: "tool",
    downloadUrl: "/downloads/seo-audit-tool.xlsx",
    thumbnailUrl: "/images/resources/seo-audit-tool.jpg",
    fileSize: "1.8 MB",
    fileFormat: "XLSX",
    popular: true,
    downloadCount: 6540,
    publishedDate: "2023-04-14",
    updatedDate: "2024-01-08"
  },
  {
    id: "ux-research-toolkit",
    title: "UX Research Toolkit",
    description: "A collection of templates, questionnaires, and methodologies for conducting effective user experience research.",
    category: "ui-ux-design",
    type: "tool",
    downloadUrl: "/downloads/ux-research-toolkit.zip",
    thumbnailUrl: "/images/resources/ux-research.jpg",
    fileSize: "12 MB",
    fileFormat: "ZIP",
    featured: true,
    downloadCount: 2340,
    publishedDate: "2023-03-10",
    updatedDate: "2023-10-22"
  },
  {
    id: "web-accessibility-checklist",
    title: "Web Accessibility Checklist",
    description: "Ensure your website meets accessibility standards with this comprehensive WCAG 2.1 checklist.",
    category: "web-development",
    type: "checklist",
    downloadUrl: "/downloads/web-accessibility-checklist.pdf",
    thumbnailUrl: "/images/resources/accessibility.jpg",
    fileSize: "980 KB",
    fileFormat: "PDF",
    downloadCount: 4120,
    publishedDate: "2023-02-18",
    updatedDate: "2023-11-05"
  },
  {
    id: "business-plan-template",
    title: "Business Plan Template",
    description: "A professional business plan template to help you structure your business ideas and secure funding.",
    category: "business",
    type: "template",
    downloadUrl: "/downloads/business-plan-template.docx",
    thumbnailUrl: "/images/resources/business-plan.jpg",
    fileSize: "2.3 MB",
    fileFormat: "DOCX",
    downloadCount: 5890,
    publishedDate: "2023-01-20",
    updatedDate: "2023-08-15"
  },
  {
    id: "social-media-content-planner",
    title: "Social Media Content Planner",
    description: "Plan and schedule your social media content across multiple platforms with this comprehensive planner.",
    category: "digital-marketing",
    type: "template",
    downloadUrl: "/downloads/social-media-planner.xlsx",
    thumbnailUrl: "/images/resources/social-media.jpg",
    fileSize: "1.5 MB",
    fileFormat: "XLSX",
    new: true,
    downloadCount: 1870,
    publishedDate: "2024-01-03"
  }
];

// Category display info
const categoryInfo: Record<ResourceCategory, { label: string, color: string }> = {
  "web-development": { label: "Web Development", color: "blue" },
  "mobile-development": { label: "Mobile Development", color: "violet" },
  "ui-ux-design": { label: "UI/UX Design", color: "pink" },
  "digital-marketing": { label: "Digital Marketing", color: "orange" },
  "seo": { label: "SEO", color: "green" },
  "content-creation": { label: "Content Creation", color: "yellow" },
  "business": { label: "Business", color: "slate" }
};

// Resource type display info
const resourceTypeInfo: Record<ResourceType, { label: string, icon: React.ReactNode }> = {
  "guide": { label: "Guide", icon: <BookOpen className="h-5 w-5" /> },
  "template": { label: "Template", icon: <FileSpreadsheet className="h-5 w-5" /> },
  "checklist": { label: "Checklist", icon: <FileCheck className="h-5 w-5" /> },
  "tool": { label: "Tool", icon: <FileCode className="h-5 w-5" /> },
  "ebook": { label: "E-Book", icon: <FileText className="h-5 w-5" /> },
  "toolkit": { label: "Toolkit", icon: <FileText className="h-5 w-5" /> }
};

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeType, setActiveType] = useState<string>("all");
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  // Filter resources based on search, category, and type
  const filteredResources = resourcesData.filter(resource => {
    const matchesSearch = 
      searchQuery === "" || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      activeCategory === "all" || 
      resource.category === activeCategory;
    
    const matchesType = 
      activeType === "all" || 
      resource.type === activeType;
    
    return matchesSearch && matchesCategory && matchesType;
  });
  
  // Get search suggestions based on current query
  const searchSuggestions = searchQuery.trim() !== "" 
    ? resourcesData.filter(resource => 
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5) // Limit to 5 suggestions
    : [];
  
  // Handle selection of a suggestion
  const handleSelectSuggestion = (resource: Resource) => {
    setSearchQuery(resource.title);
    setShowSuggestions(false);
    
    // If category or type is set to "all", set them to the resource's values
    if (activeCategory === "all") {
      setActiveCategory(resource.category);
    }
    
    if (activeType === "all") {
      setActiveType(resource.type);
    }
  };
  
  // Determine featured resources
  const featuredResources = resourcesData.filter(resource => resource.featured);
  
  // Determine new resources
  const newResources = resourcesData.filter(resource => resource.new);
  
  // Determine popular resources
  const popularResources = resourcesData
    .filter(resource => resource.popular)
    .sort((a, b) => (b.downloadCount || 0) - (a.downloadCount || 0));
  
  // Handle search submit
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuggestions(false);
    // Just using the current state, no need to update anything
  };
  
  // Handle search input focus
  const handleSearchFocus = () => {
    if (searchQuery.trim() !== "") {
      setShowSuggestions(true);
    }
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
  
  return (
    <Layout>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Digital Resources Hub | RTN Global",
            "description": "Free digital resources, guides, templates, and tools to help you succeed with your digital projects.",
            "url": "https://rtnglobal.sitem/resources",
            "publisher": {
              "@type": "Organization",
              "name": "RTN Global",
              "logo": {
                "@type": "ImageObject",
                "url": "https://rtnglobal.sitem/images/logo.png"
              }
            },
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": resourcesData.slice(0, 10).map((resource, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "DigitalDocument",
                  "name": resource.title,
                  "description": resource.description,
                  "url": `https://rtnglobal.sitem/resources/${resource.id}`,
                  "datePublished": resource.publishedDate,
                  "dateModified": resource.updatedDate || resource.publishedDate,
                  "fileFormat": resource.fileFormat,
                  "contentSize": resource.fileSize,
                  "about": categoryInfo[resource.category].label,
                  "author": {
                    "@type": "Organization",
                    "name": "RTN Global"
                  }
                }
              }))
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://rtnglobal.sitem/resources?search={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      
      {/* Hero Section */}
      <HeroSection
        title="Resources"
        description="Explore our collection of free resources, guides, templates, and tools to help you succeed with your digital projects."
        backgroundClassName="bg-gradient-to-b from-background to-muted/20"
      />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-1.5 text-sm">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="text-foreground font-medium">Resources</span>
        </div>
      </div>
      
      {/* Search and Filter Section */}
      <section className="py-8 border-b border-border" id="search">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <form onSubmit={handleSearchSubmit}>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search for resources..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setShowSuggestions(e.target.value.trim() !== "");
                    }}
                    onFocus={handleSearchFocus}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent click from closing suggestions
                      handleSearchFocus();
                    }}
                    className="pl-10 py-6 text-base"
                  />
                  
                  {/* Search Suggestions Dropdown */}
                  {showSuggestions && searchSuggestions.length > 0 && (
                    <div 
                      className="absolute z-[100] w-full mt-1 bg-background rounded-md border border-border shadow-lg max-h-80 overflow-y-auto backdrop-blur-sm" 
                      onClick={(e) => e.stopPropagation()}
                      style={{ backgroundColor: 'var(--background)', backdropFilter: 'blur(8px)' }}
                    >
                      <div className="p-2">
                        <p className="text-xs font-medium text-muted-foreground mb-2 px-2">
                          Suggestions
                        </p>
                        <ul className="space-y-1">
                          {searchSuggestions.map((resource) => (
                            <li 
                              key={resource.id}
                              className="px-3 py-2 hover:bg-muted rounded-md cursor-pointer transition-colors"
                              onClick={() => handleSelectSuggestion(resource)}
                            >
                              <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 mt-1">
                                  {resourceTypeInfo[resource.type].icon}
                                </div>
                                <div>
                                  <p className="font-medium line-clamp-1">{resource.title}</p>
                                  <p className="text-xs text-muted-foreground line-clamp-1">
                                    {categoryInfo[resource.category].label} • {resourceTypeInfo[resource.type].label}
                                  </p>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="w-full sm:w-1/2">
                <select 
                  className="w-full p-2.5 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  {Object.entries(categoryInfo).map(([value, { label }]) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>
              
              <div className="w-full sm:w-1/2">
                <select 
                  className="w-full p-2.5 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  value={activeType}
                  onChange={(e) => setActiveType(e.target.value)}
                >
                  <option value="all">All Types</option>
                  {Object.entries(resourceTypeInfo).map(([value, { label }]) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Filter indicators */}
          {(searchQuery || activeCategory !== "all" || activeType !== "all") && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-sm text-muted-foreground">Filters:</span>
              
              {searchQuery && (
                <Badge variant="outline" className="flex items-center gap-1 px-2 py-1">
                  <span>Search: {searchQuery}</span>
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="ml-1 rounded-full hover:bg-muted p-0.5"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </Badge>
              )}
              
              {activeCategory !== "all" && (
                <Badge variant="outline" className="flex items-center gap-1 px-2 py-1">
                  <span>Category: {categoryInfo[activeCategory as ResourceCategory].label}</span>
                  <button 
                    onClick={() => setActiveCategory("all")}
                    className="ml-1 rounded-full hover:bg-muted p-0.5"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </Badge>
              )}
              
              {activeType !== "all" && (
                <Badge variant="outline" className="flex items-center gap-1 px-2 py-1">
                  <span>Type: {resourceTypeInfo[activeType as ResourceType].label}</span>
                  <button 
                    onClick={() => setActiveType("all")}
                    className="ml-1 rounded-full hover:bg-muted p-0.5"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </Badge>
              )}
              
              <Button 
                variant="link" 
                size="sm" 
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                  setActiveType("all");
                }}
              >
                Clear All
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Results count */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {filteredResources.length} {filteredResources.length === 1 ? 'Resource' : 'Resources'} {getFilterDescription()}
          </h2>
        </div>
      </div>
      
      {/* Featured Section (Only show when no filters are applied) */}
      {!searchQuery && activeCategory === "all" && activeType === "all" && (
        <section className="container mx-auto px-4 mb-16" id="featured">
          <h2 className="text-2xl font-bold mb-6">Featured Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} featured />
            ))}
          </div>
        </section>
      )}
      
      {/* Resources by Type Tabs */}
      <section className="container mx-auto px-4 py-8" id="resources-by-type">
        {/* Only show tabs when no specific type filter is applied */}
        {activeType === "all" && !searchQuery ? (
          <Tabs defaultValue="all" className="w-full">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Browse Resources by Type</h2>
              <TabsList className="flex flex-wrap gap-2">
                <TabsTrigger value="all">All Types</TabsTrigger>
                {Object.entries(resourceTypeInfo).map(([type, { label, icon }]) => (
                  <TabsTrigger 
                    key={type} 
                    value={type}
                    className="flex items-center gap-2"
                  >
                    {icon}
                    <span>{label}s</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources.map(resource => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </TabsContent>
            
            {Object.keys(resourceTypeInfo).map(type => (
              <TabsContent key={type} value={type}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {resourcesData
                    .filter(resource => resource.type === type)
                    .map(resource => (
                      <ResourceCard key={resource.id} resource={resource} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        ) : (
          // Show filtered results in grid
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.length > 0 ? (
                filteredResources.map(resource => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))
              ) : (
                <div className="col-span-full py-12 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6">
                    <FileText className="h-8 w-8 text-muted-foreground/60" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">No resources found</h3>
                  <p className="text-muted-foreground max-w-md mx-auto mb-8">
                    We couldn&apos;t find any resources matching your search criteria. Try adjusting your filters or search query.
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("all");
                      setActiveType("all");
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </section>
      
      {/* Popular Resources (Only show when no filters) */}
      {!searchQuery && activeCategory === "all" && activeType === "all" && (
        <section className="container mx-auto px-4 py-12 mb-8 bg-muted/30" id="popular">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-4">Most Popular Resources</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our most downloaded resources that have helped thousands of professionals achieve their goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularResources.slice(0, 3).map(resource => (
              <ResourceCard key={resource.id} resource={resource} popular />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button variant="outline" onClick={() => setActiveType("all")} className="px-8">
              View All Resources
            </Button>
          </div>
        </section>
      )}
      
      {/* New Resources (Only show when no filters) */}
      {!searchQuery && activeCategory === "all" && activeType === "all" && (
        <section className="container mx-auto px-4 py-12 mb-16" id="new">
          <h2 className="text-2xl font-bold mb-8">Newly Added Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} isNew />
            ))}
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 mb-16 border-t border-border">
        <div className="bg-muted/30 rounded-xl p-8 md:p-12 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Custom Resources?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Our team can create customized resources tailored to your specific business needs and challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Request Custom Resources</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
  
  // Helper function to generate filter description
  function getFilterDescription() {
    const parts: string[] = [];
    
    if (searchQuery) {
      parts.push(`matching "${searchQuery}"`);
    }
    
    if (activeCategory !== "all") {
      parts.push(`in ${categoryInfo[activeCategory as ResourceCategory].label}`);
    }
    
    if (activeType !== "all") {
      parts.push(`of type ${resourceTypeInfo[activeType as ResourceType].label}`);
    }
    
    return parts.length ? parts.join(" ") : "Available";
  }
}

// Resource Card Component
interface ResourceCardProps {
  resource: Resource;
  featured?: boolean;
  popular?: boolean;
  isNew?: boolean;
}

const ResourceCard = ({ resource, featured, popular, isNew }: ResourceCardProps) => {
  // Get badge color based on category
  const categoryColor = categoryInfo[resource.category].color;
  
  // Get icon based on resource type
  const TypeIcon = () => resourceTypeInfo[resource.type].icon;
  
  // Format date to readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  return (
    <div className={`
      rounded-lg overflow-hidden border border-border bg-card transition-shadow duration-300 hover:shadow-md
      ${featured ? 'ring-2 ring-primary/20' : ''}
    `}>
      {/* Thumbnail */}
      <div className="relative w-full pt-[56.25%]">
        {/* Placeholder for image - in production, use actual thumbnails */}
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <TypeIcon />
        </div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {/* Category Badge */}
          <Badge 
            className={`bg-${categoryColor}-500/10 text-${categoryColor}-600 border-${categoryColor}-200 hover:bg-${categoryColor}-500/20 transition-colors`}
          >
            {categoryInfo[resource.category].label}
          </Badge>
          
          {/* Type Badge */}
          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
            <span className="flex items-center gap-1">
              <TypeIcon />
              <span>{resourceTypeInfo[resource.type].label}</span>
            </span>
          </Badge>
        </div>
        
        {/* Special Indicators */}
        {(featured || popular || isNew || resource.featured || resource.popular || resource.new) && (
          <div className="absolute top-4 right-4">
            {(isNew || resource.new) && (
              <Badge className="bg-green-500 hover:bg-green-600">New</Badge>
            )}
            {(featured || resource.featured) && !resource.new && (
              <Badge className="bg-blue-500 hover:bg-blue-600">Featured</Badge>
            )}
            {(popular || resource.popular) && !resource.new && !resource.featured && (
              <Badge className="bg-orange-500 hover:bg-orange-600">Popular</Badge>
            )}
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {resource.description}
        </p>
        
        {/* Meta info */}
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-1">
            <FileText className="h-4 w-4" />
            <span>{resource.fileFormat} · {resource.fileSize}</span>
          </div>
          {resource.downloadCount && (
            <div className="flex items-center gap-1">
              <Download className="h-4 w-4" />
              <span>{resource.downloadCount.toLocaleString()} downloads</span>
            </div>
          )}
        </div>
        
        {/* Action */}
        <div className="flex justify-between items-center">
          <div className="text-xs text-muted-foreground">
            {resource.updatedDate ? (
              <span>Updated {formatDate(resource.updatedDate)}</span>
            ) : (
              <span>Published {formatDate(resource.publishedDate)}</span>
            )}
          </div>
          <Button asChild>
            <a 
              href={resource.downloadUrl} 
              download
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              <span>Download</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}; 