export default function Card({
  title,
  description,
  as: As = "article",
  ...props
}) {
  return (
    <As
      className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white/60 dark:bg-black/40 backdrop-blur-md hover:shadow transition"
      {...props}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      {description && (
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      )}
    </As>
  );
}
