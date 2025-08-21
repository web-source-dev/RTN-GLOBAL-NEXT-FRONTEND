import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

// Premium Heading Components
export function H1({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 
      className={cn(
        "font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 
      className={cn(
        "font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 
      className={cn(
        "font-display text-2xl md:text-3xl font-semibold tracking-tight leading-tight",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function H4({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4 
      className={cn(
        "font-display text-xl md:text-2xl font-semibold tracking-tight leading-tight",
        className
      )}
      {...props}
    >
      {children}
    </h4>
  );
}

export function H5({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h5 
      className={cn(
        "font-display text-lg md:text-xl font-semibold tracking-tight leading-tight",
        className
      )}
      {...props}
    >
      {children}
    </h5>
  );
}

export function H6({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h6 
      className={cn(
        "font-display text-base md:text-lg font-semibold tracking-tight leading-tight",
        className
      )}
      {...props}
    >
      {children}
    </h6>
  );
}

// Premium Text Components
export function P({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p 
      className={cn(
        "font-sans text-base leading-relaxed text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function Lead({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p 
      className={cn(
        "font-sans text-lg md:text-xl leading-relaxed text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function Large({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={cn(
        "font-sans text-lg font-semibold",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function Small({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLElement>) {
  return (
    <small 
      className={cn(
        "font-sans text-sm font-medium leading-none",
        className
      )}
      {...props}
    >
      {children}
    </small>
  );
}

export function Muted({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p 
      className={cn(
        "font-sans text-sm text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

// Premium Code Components
export function Code({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLElement>) {
  return (
    <code 
      className={cn(
        "font-mono relative rounded bg-muted px-[0.3rem] py-[0.2rem] text-sm font-semibold",
        className
      )}
      {...props}
    >
      {children}
    </code>
  );
}

export function Pre({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLPreElement>) {
  return (
    <pre 
      className={cn(
        "font-mono overflow-x-auto rounded-lg border bg-muted p-4 text-sm",
        className
      )}
      {...props}
    >
      {children}
    </pre>
  );
}

// Premium Quote Component
export function Blockquote({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote 
      className={cn(
        "font-display mt-6 border-l-2 border-primary pl-6 italic text-lg text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </blockquote>
  );
}

// Premium List Components
export function Ul({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul 
      className={cn(
        "font-sans my-6 ml-6 list-disc [&>li]:mt-2",
        className
      )}
      {...props}
    >
      {children}
    </ul>
  );
}

export function Ol({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLOListElement>) {
  return (
    <ol 
      className={cn(
        "font-sans my-6 ml-6 list-decimal [&>li]:mt-2",
        className
      )}
      {...props}
    >
      {children}
    </ol>
  );
}

export function Li({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLLIElement>) {
  return (
    <li 
      className={cn(
        "font-sans text-base leading-relaxed",
        className
      )}
      {...props}
    >
      {children}
    </li>
  );
}

// Premium Link Component
export function A({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a 
      className={cn(
        "font-sans font-medium underline underline-offset-4 hover:text-primary transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
