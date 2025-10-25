import { useState } from "react";
import { cx } from "../../utils/classNames";
import Skeleton from "./Skeleton";

export default function ImageLoader({
  src,
  alt,
  className,
  skeletonClassName,
  onLoad,
  onError,
  ...props
}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = (e) => {
    setLoading(false);
    onLoad?.(e);
  };

  const handleError = (e) => {
    setLoading(false);
    setError(true);
    onError?.(e);
  };

  return (
    <div className="relative w-full h-full">
      {loading && !error && (
        <Skeleton className={cx("absolute inset-0", skeletonClassName)} />
      )}
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 rounded">
          <div className="text-center text-neutral-400 dark:text-neutral-600">
            <svg
              className="w-12 h-12 mx-auto mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-sm">Failed to load image</p>
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={cx(
            "transition-opacity duration-300",
            loading ? "opacity-0" : "opacity-100",
            className
          )}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}
    </div>
  );
}
