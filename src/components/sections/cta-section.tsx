import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTAButtonProps {
  text: string
  href: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
}

interface CTASectionProps {
  title: string
  description?: string
  primaryButton?: CTAButtonProps
  secondaryButton?: CTAButtonProps
  className?: string
  backgroundClassName?: string
  textColorClassName?: string
}

export function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
  className = "",
  backgroundClassName = "bg-muted/30",
  textColorClassName = ""
}: CTASectionProps) {
  return (
    <section className={`py-16 ${backgroundClassName}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-3xl mx-auto text-center ${className} ${textColorClassName}`}>
          <h2 className="text-3xl font-bold">{title}</h2>
          {description && (
            <p className={`mt-4 text-lg ${!textColorClassName ? 'text-muted-foreground' : ''}`}>
              {description}
            </p>
          )}
          {(primaryButton || secondaryButton) && (
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {primaryButton && (
                <Link href={primaryButton.href}>
                  <Button size="lg" variant={primaryButton.variant || "default"}>
                    {primaryButton.text}
                  </Button>
                </Link>
              )}
              {secondaryButton && (
                <Link href={secondaryButton.href}>
                  <Button size="lg" variant={secondaryButton.variant || "outline"}>
                    {secondaryButton.text}
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 