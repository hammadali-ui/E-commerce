import { useState, useCallback } from "react"

export function useToast() {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback((toast) => {
    setToasts((prev) => [...prev, { id: Date.now(), ...toast }])
    setTimeout(() => {
      setToasts((prev) => prev.slice(1))
    }, 3000)
  }, [])

  return { toasts, addToast }
}
