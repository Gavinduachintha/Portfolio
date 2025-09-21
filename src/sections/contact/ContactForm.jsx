export default function ContactForm() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-[72rem] px-4">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <form className="mt-4 grid gap-4 max-w-xl">
          <label className="grid gap-1 text-sm">
            <span>Name</span>
            <input
              type="text"
              name="name"
              required
              className="h-10 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-black/40 px-3 outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-200"
            />
          </label>
          <label className="grid gap-1 text-sm">
            <span>Email</span>
            <input
              type="email"
              name="email"
              required
              className="h-10 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-black/40 px-3 outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-200"
            />
          </label>
          <label className="grid gap-1 text-sm">
            <span>Message</span>
            <textarea
              name="message"
              rows="4"
              required
              className="rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-black/40 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-200"
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center justify-center h-10 rounded-md border border-neutral-900 dark:border-white px-4 text-sm font-medium bg-neutral-900 text-white dark:bg-white dark:text-black hover:opacity-90"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
