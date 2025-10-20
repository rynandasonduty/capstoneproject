import { toast } from "sonner";

export type NotificationType = "success" | "error" | "warning" | "info";

interface NotificationOptions {
  duration?: number;
}

export const useNotification = () => {
  const notify = (
    message: string,
    type: NotificationType = "info",
    options?: NotificationOptions,
  ) => {
    const defaultDuration = options?.duration || 4000;

    switch (type) {
      case "success":
        return toast.success(message, { duration: defaultDuration });
      case "error":
        return toast.error(message, { duration: defaultDuration });
      case "warning":
        return toast.warning(message, { duration: defaultDuration });
      case "info":
        return toast.info(message, { duration: defaultDuration });
      default:
        return toast.message(message, { duration: defaultDuration });
    }
  };

  return {
    success: (message: string, options?: NotificationOptions) =>
      notify(message, "success", options),
    error: (message: string, options?: NotificationOptions) =>
      notify(message, "error", options),
    warning: (message: string, options?: NotificationOptions) =>
      notify(message, "warning", options),
    info: (message: string, options?: NotificationOptions) =>
      notify(message, "info", options),
    notify,
  };
};
