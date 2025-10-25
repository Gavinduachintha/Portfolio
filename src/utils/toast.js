import toast from "react-hot-toast";

// Toast configuration
const toastConfig = {
  duration: 4000,
  position: "bottom-right",
  style: {
    borderRadius: "12px",
    background: "#333",
    color: "#fff",
    padding: "16px",
    fontSize: "14px",
    fontWeight: "500",
  },
  success: {
    iconTheme: {
      primary: "#3ECF8E",
      secondary: "#fff",
    },
  },
  error: {
    iconTheme: {
      primary: "#ef4444",
      secondary: "#fff",
    },
  },
};

// Success toast
export const showSuccess = (message) => {
  toast.success(message, {
    ...toastConfig,
    ...toastConfig.success,
  });
};

// Error toast
export const showError = (message) => {
  toast.error(message, {
    ...toastConfig,
    ...toastConfig.error,
  });
};

// Info toast
export const showInfo = (message) => {
  toast(message, {
    ...toastConfig,
    icon: "ℹ️",
  });
};

// Loading toast
export const showLoading = (message) => {
  return toast.loading(message, toastConfig);
};

// Custom toast (simple version without JSX)
export const showCustom = (message, options = {}) => {
  return toast(message, {
    ...toastConfig,
    ...options,
  });
};

// Promise toast (for async operations)
export const showPromise = (promise, messages) => {
  return toast.promise(
    promise,
    {
      loading: messages.loading || "Loading...",
      success: messages.success || "Success!",
      error: messages.error || "Error occurred",
    },
    toastConfig
  );
};

// Dismiss toast
export const dismissToast = (toastId) => {
  if (toastId) {
    toast.dismiss(toastId);
  } else {
    toast.dismiss();
  }
};

// Remove all toasts
export const removeAllToasts = () => {
  toast.remove();
};
