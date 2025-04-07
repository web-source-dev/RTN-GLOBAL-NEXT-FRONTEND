"use client"

import * as React from "react"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  activeStep: number
  orientation?: "horizontal" | "vertical"
  children: React.ReactNode
}

interface StepProps extends React.HTMLAttributes<HTMLDivElement> {
  completed?: boolean
  children: React.ReactNode
}

const StepContext = React.createContext<{
  isCompleted: boolean
  isActive: boolean
  isLastStep: boolean
  orientation: "horizontal" | "vertical"
}>({
  isCompleted: false,
  isActive: false,
  isLastStep: false,
  orientation: "horizontal",
})

const StepProvider = StepContext.Provider

export function useStepContext() {
  const context = React.useContext(StepContext)
  
  if (!context) {
    throw new Error("useStepContext must be used within a Step")
  }
  
  return context
}

export function Stepper({
  activeStep,
  orientation = "horizontal",
  children,
  className,
  ...props
}: StepperProps) {
  const steps = React.Children.toArray(children)
  const totalSteps = steps.length
  
  return (
    <div
      className={cn(
        "flex",
        orientation === "horizontal" ? "flex-row space-x-2" : "flex-col space-y-4",
        className
      )}
      {...props}
    >
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return null
        
        const isCompleted = index < activeStep
        const isActive = index === activeStep
        const isLastStep = index === totalSteps - 1
        
        return (
          <StepProvider
            value={{
              isCompleted,
              isActive,
              isLastStep,
              orientation,
            }}
          >
            <div className="flex items-start flex-1">
              {React.cloneElement(child as React.ReactElement<StepProps>, {
                completed: isCompleted,
              })}
              
              {!isLastStep && orientation === "horizontal" && (
                <div className={cn(
                  "flex-1 h-0.5 mt-4 mx-2",
                  isCompleted ? "bg-primary" : "bg-border"
                )} />
              )}
            </div>
          </StepProvider>
        )
      })}
    </div>
  )
}

export function Step({
  completed: propCompleted,
  children,
  className,
  ...props
}: StepProps) {
  const { isCompleted, isActive, orientation } = useStepContext()
  
  // Use the prop if provided, otherwise use the context value
  const isStepCompleted = propCompleted !== undefined ? propCompleted : isCompleted
  
  return (
    <div
      className={cn(
        "flex",
        orientation === "horizontal" ? "flex-col" : "flex-row space-x-4",
        className
      )}
      {...props}
    >
      <div className="flex items-center">
        <div
          className={cn(
            "flex items-center justify-center w-8 h-8 rounded-full border-2 border-border",
            isActive && "border-primary text-primary",
            isStepCompleted && "bg-primary border-primary text-primary-foreground"
          )}
        >
          {isStepCompleted ? (
            <Check className="w-4 h-4" />
          ) : (
            <span className="text-sm font-medium">{isActive ? "✓" : ""}</span>
          )}
        </div>
      </div>
      <div
        className={cn(
          "mt-2",
          orientation === "vertical" && "mt-0"
        )}
      >
        {children}
      </div>
    </div>
  )
}

export function StepTitle({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  const { isActive, isCompleted } = useStepContext()
  
  return (
    <h3
      className={cn(
        "text-sm font-medium",
        (isActive || isCompleted) ? "text-foreground" : "text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  )
}

export function StepDescription({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-xs text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
} 