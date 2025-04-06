"use client"

import { useState, useEffect } from "react";
import { Menu, ChevronDown } from "lucide-react";

// Table of contents section data structure
export type TOCSection = {
  id: string;
  title: string;
  icon: React.ReactNode;
};

// Client component for table of contents
export function TableOfContents({ sections }: { sections: TOCSection[] }) {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sections]);

  // Desktop horizontal navigation
  return (
    <div className="w-full sticky top-[60px] z-20 bg-background/90 backdrop-blur-md border-b border-border py-3 mb-8 hidden md:block">
      <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-thin">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm whitespace-nowrap transition-colors duration-200 ${
              activeSection === section.id
                ? "bg-primary/10 text-primary font-medium"
                : "hover:bg-muted/60 text-muted-foreground"
            }`}
          >
            {section.icon}
            <span>{section.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

// Mobile dropdown TOC component
export function MobileTOC({ sections }: { sections: TOCSection[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sections]);

  const activeTitle = sections.find(section => section.id === activeSection)?.title || &quot;Navigate&quot;;

  return (
    <div className="sticky top-[60px] z-20 bg-background/90 backdrop-blur-md border-b border-border py-3 mb-8 md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className=&quot;flex items-center justify-between w-full px-4 py-2 bg-muted rounded-md&quot;
      >
        <div className="flex items-center gap-2">
          <Menu className="h-4 w-4" />
          <span className="font-medium">{activeTitle}</span>
        </div>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute left-0 right-0 mt-2 bg-background border border-border rounded-md shadow-lg p-2 z-30">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                activeSection === section.id
                  ? "bg-primary/10 text-primary font-medium"
                  : &quot;hover:bg-muted/60 text-muted-foreground&quot;
              }`}
            >
              {section.icon}
              <span>{section.title}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
} 