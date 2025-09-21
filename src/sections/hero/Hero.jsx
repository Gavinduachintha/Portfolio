export default function Hero() {
  return (
    <section className="pt-24 pb-12 relative">
      <div className="mx-auto max-w-[72rem] px-4">
        <div className="backdrop-blur-sm bg-white/5 dark:bg-black/5 rounded-2xl p-8 border border-white/10 dark:border-white/5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Hello, I'm Gavindu
          </h1>
          <p className="mt-2 text-base md:text-lg text-neutral-600 dark:text-neutral-400">
            Backend developer and a student
          </p>
        </div>
      </div>
    </section>
  );
}
