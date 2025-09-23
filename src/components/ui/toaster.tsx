import React, { useContext } from "react";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";

type Toast = {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  [key: string]: any;
};

type ToastContextType = {
  toasts: Toast[];
};

const ToastContext = React.createContext<ToastContextType>({ toasts: [] });

export function useToast() {
  return useContext(ToastContext);
}

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
