import { cx } from "../../utils/classNames";

export default function LoadingSpinner({ size = "md", className }) {
  const sizes = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-2",
    lg: "h-12 w-12 border-3",
    xl: "h-16 w-16 border-4",
  };

  return (
    <div
      className={cx(
        "inline-block animate-spin rounded-full border-solid border-[#6C757D] border-r-transparent",
        sizes[size],
        className
      )}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

// Full page loading overlay
export function LoadingOverlay({ message = "Loading..." }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
      <div className="text-center">
        <LoadingSpinner size="xl" />
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 font-medium">
          {message}
        </p>
      </div>
    </div>
  );
}

// Inline loading state for buttons
export function ButtonSpinner() {
  return <LoadingSpinner size="sm" className="mr-2" />;
}
