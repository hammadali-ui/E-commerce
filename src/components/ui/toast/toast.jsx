import * as React from "react"
import * as ToastPrimitive from "@radix-ui/react-toast"

export const ToastProvider = ({ children }) => (
  <ToastPrimitive.Provider swipeDirection="right">{children}</ToastPrimitive.Provider>
)

export const ToastViewport = ToastPrimitive.Viewport

export const Toast = ToastPrimitive.Root
export const ToastTitle = ToastPrimitive.Title
export const ToastDescription = ToastPrimitive.Description
export const ToastClose = ToastPrimitive.Close
