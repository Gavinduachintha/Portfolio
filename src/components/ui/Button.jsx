export default function Button({
  as: As = "button",
  children,
  className = "",
  ...props
}) {
  const cn = [
    "inline-flex items-center justify-center h-10 rounded-md border px-4 text-sm font-medium",
    "border-neutral-900 bg-neutral-900 text-white",
    "hover:opacity-90 transition",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <As className={cn} {...props}>
      {children}
    </As>
  );
}
