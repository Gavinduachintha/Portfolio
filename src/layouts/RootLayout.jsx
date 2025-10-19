export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-[#0a0a0a] dark:text-neutral-100 antialiased">
      {children}
    </div>
  );
}
