import * as React from "react"
import { Toast } from "./toast"
import { useToast } from "./use-toast"

export const Toaster = () => {
  const { toasts } = useToast()

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-3">
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          title={toast.title}
          description={toast.description}
        />
      ))}
    </div>
  )
}
