import { cx } from "../../utils/classNames";

export default function Skeleton({ className, variant = "default", ...props }) {
  const variants = {
    default: "rounded-md",
    circle: "rounded-full",
    text: "rounded h-4 w-full",
    title: "rounded h-8 w-3/4",
  };

  return (
    <div
      className={cx(
        "animate-pulse bg-neutral-200 dark:bg-neutral-800",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

// Preset skeleton components for common use cases
export function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-neutral-900/60 rounded-xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-800/50">
      <Skeleton variant="default" className="h-48 w-full mb-4" />
      <Skeleton variant="title" className="mb-3" />
      <Skeleton variant="text" className="mb-2" />
      <Skeleton variant="text" className="w-5/6 mb-4" />
      <div className="flex gap-2">
        <Skeleton variant="default" className="h-6 w-16" />
        <Skeleton variant="default" className="h-6 w-20" />
        <Skeleton variant="default" className="h-6 w-24" />
      </div>
    </div>
  );
}

export function SkeletonAvatar({ size = "md" }) {
  const sizes = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
    xl: "h-24 w-24",
  };

  return <Skeleton variant="circle" className={sizes[size]} />;
}
