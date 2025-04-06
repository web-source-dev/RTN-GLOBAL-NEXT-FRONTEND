import * as React from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

export interface ChipProps {
  label: string
  onDelete?: () => void
  className?: string
  variant?: "default" | "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
}

export function Chip({
  label,
  onDelete,
  className,
  variant = "default",
  size = "md",
  ...props
}: ChipProps & React.HTMLAttributes<HTMLDivElement>) {
  const variantStyles = {
    default: "bg-muted text-muted-foreground border-muted-foreground/20",
    primary: "bg-primary/10 text-primary border-primary/20",
    secondary: "bg-secondary text-secondary-foreground border-secondary-foreground/20",
    outline: "bg-background border-border text-foreground"
  }

  const sizeStyles = {  
    sm: "text-xs py-1 px-2 gap-1",
    md: "text-sm py-1.5 px-3 gap-1.5",
    lg: "text-base py-2 px-4 gap-2"
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      <span>{label}</span>
      {onDelete && (
        <button
          type="button"
          onClick={onDelete}
          className="rounded-full hover:bg-background/20 p-0.5 focus:outline-none focus:ring-1 focus:ring-ring"
        >
          <X className={cn(
            "h-3 w-3",
            size === "lg" && "h-4 w-4"
          )} />
          <span className="sr-only">Remove</span>
        </button>
      )}
    </div>
  )
} 