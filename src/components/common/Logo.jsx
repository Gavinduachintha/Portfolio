export default function Logo({ text = "Logo" }) {
  return (
    <a
      href="/"
      className="font-semibold tracking-tight text-neutral-900 dark:text-white"
      aria-label={text}
      title={text}
    >
      {text}
    </a>
  );
}
