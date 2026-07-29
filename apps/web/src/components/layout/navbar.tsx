"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { navigation } from "@/data/navigation";
import { useScroll } from "@/hooks/use-scroll";

export function Navbar() {
  const scrolled = useScroll(20);
  const [open, setOpen] = useState(false);
    return (
    <header
      className={`fixed inset-x-0 top-0 z-[var(--z-header)] transition-all duration-300 ${
        scrolled
          ? "border-b border-border/50 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-primary"
        >
          ArkAelius Studio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button>Let's Talk</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
            {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col p-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-6 flex items-center justify-between">
              <ThemeToggle />
              <Button>Let's Talk</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}