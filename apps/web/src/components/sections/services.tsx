import { services } from "@/data/services";

export function Services() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-500">
            Services
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            What We Build
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-600 dark:text-zinc-400">
            We help startups and businesses transform ideas into scalable
            digital products.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
  const Icon = service.icon;

  return (
    <div
      key={service.title}
      className="rounded-3xl border border-zinc-200/50 bg-white/60 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/50"
    >
      <div className="mb-6 inline-flex rounded-2xl bg-violet-500/10 p-4 text-violet-500">
        <Icon size={30} />
      </div>

      <h3 className="mb-4 text-xl font-semibold">
        {service.title}
      </h3>

      <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
        {service.description}
      </p>
    </div>
  );
})}
        </div>
      </div>
    </section>
  );
}
