import Link from "next/link";

const links = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
        <div>
          <h3 className="text-2xl font-bold">
            ArkAelius Studio
          </h3>

          <p className="mt-3 text-sm text-zinc-500">
            Build the Future with AI.
          </p>
        </div>

        <div className="flex gap-6">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-500 transition hover:text-violet-500"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} ArkAelius Studio. All rights reserved.
      </div>
    </footer>
  );
}