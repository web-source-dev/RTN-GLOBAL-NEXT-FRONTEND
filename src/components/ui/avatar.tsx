import * as React from "react"
import { cn } from "@/lib/utils"
import { OptimizedImage } from "@/components/ui/optimized-image"

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
}

export function Avatar({
  size = "md",
  src,
  alt,
  fallback,
  className,
  ...props
}: AvatarProps) {
  const [imageError, setImageError] = React.useState(false);

  const sizeStyles = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };

  return (
    <div
      className={cn(
        "relative flex shrink-0 overflow-hidden rounded-full bg-muted",
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {!imageError && src ? (
        <OptimizedImage
          src={src}
          alt={alt || "Avatar"}
          fill
          className="h-full w-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-primary/10 text-primary font-medium">
          {fallback || (alt ? alt.charAt(0).toUpperCase() : "U")}
        </div>
      )}
    </div>
  )
} 