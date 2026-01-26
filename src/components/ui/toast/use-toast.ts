import * as React from "react"
import { ToastActionElement, type ToastProps } from "./toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function generateId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

export const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

export const toastQueue: ToasterToast[] = []

const toastReducer = (state: ToasterToast[], action: Action): ToasterToast[] => {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      return [...state, action.toast]

    case actionTypes.UPDATE_TOAST:
      return state.map(t =>
        t.id === action.toast.id ? { ...t, ...action.toast } : t
      )

    case actionTypes.DISMISS_TOAST:
      return state.map(t =>
        t.id === action.toastId
          ? { ...t, open: false }
          : t
      )

    case actionTypes.REMOVE_TOAST:
      return state.filter(t => t.id !== action.toastId)

    default:
      return state
  }
}

const listeners: ((state: ToasterToast[]) => void)[] = []

let memoryState: ToasterToast[] = []

function dispatch(action: Action) {
  memoryState = toastReducer(memoryState, action)
  listeners.forEach(listener => listener(memoryState))
}

export function toast({ ...props }: ToastProps) {
  const id = generateId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: actionTypes.UPDATE_TOAST,
      toast: { ...props, id },
    })

  const dismiss = () => dispatch({ type: actionTypes.DISMISS_TOAST, toastId: id })

  dispatch({
    type: actionTypes.ADD_TOAST,
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: open => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id,
    dismiss,
    update,
  }
}

export function useToast() {
  const [toasts, setToasts] = React.useState<ToasterToast[]>(memoryState)

  React.useEffect(() => {
    listeners.push(setToasts)
    return () => {
      const index = listeners.indexOf(setToasts)
      if (index > -1) listeners.splice(index, 1)
    }
  }, [])

  return {
    toast,
    toasts,
  }
}
