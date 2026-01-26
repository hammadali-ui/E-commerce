import * as React from "react"
import { cn } from "../../lib/utils"

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode
  description?: React.ReactNode
}

export type ToastActionElement = React.ReactElement

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ title, description, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-md border bg-white p-4 shadow-md",
        className
      )}
      {...props}
    >
      {title && <div className="font-bold">{title}</div>}
      {description && <div className="text-sm opacity-90">{description}</div>}
    </div>
  )
)

Toast.displayName = "Toast"
