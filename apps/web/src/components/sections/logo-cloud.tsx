const companies = [
  "OpenAI",
  "Google",
  "Microsoft",
  "AWS",
  "Vercel",
  "GitHub",
];

export function LogoCloud() {
  return (
    <section className="border-y border-zinc-200/50 py-12 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-8 text-center text-sm uppercase tracking-[0.3em] text-zinc-500">
          Technologies We Work With
        </p>

        <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-3 lg:grid-cols-6">
          {companies.map((company) => (
            <div
              key={company}
              className="text-lg font-semibold text-zinc-500 transition hover:text-violet-500"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
