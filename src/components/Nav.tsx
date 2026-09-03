import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { DiscordIcon } from "./Icons";

const links = [
  { href: "#features", label: "Features" },
  { href: "#menu", label: "Menu" },
  { href: "#community", label: "Community" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-ink/80 backdrop-blur-md shadow-[0_1px_0_rgba(255,42,42,0.25)]" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-10" aria-label="Primary">
        <a href="#top" className="group flex items-center gap-3">
          <span className="relative grid size-11 place-items-center overflow-hidden rounded-full border-2 border-bone/90 bg-ink shadow-[0_0_18px_rgba(255,42,42,0.35)] transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-105">
            <img src="/images/logo-badge.png" alt="" className="size-full object-cover" />
          </span>
          <span className="font-marker text-2xl leading-none tracking-wide">
            <span className="text-bone">IRY</span> <span className="text-neon text-glow">HUB</span>
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative font-condensed text-lg font-bold uppercase tracking-[0.18em] text-bone/75 transition-colors hover:text-bone"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-neon shadow-[0_0_10px_#ff2a2a] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="https://discord.gg/YvZaukBdu"
            target="_blank"
            rel="noreferrer"
            className="skew-brand hidden items-center gap-2 rounded-md border border-neon/70 bg-crimson px-5 py-2.5 font-condensed text-base font-extrabold uppercase tracking-widest text-white shadow-[0_0_20px_rgba(255,42,42,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-neon hover:shadow-[0_0_34px_rgba(255,42,42,0.75)] sm:inline-flex"
          >
            <DiscordIcon className="size-5 skew-x-[8deg]" />
            <span className="skew-x-[8deg]">Join Discord</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            className="grid size-11 place-items-center rounded-md border border-neon/40 bg-ink/60 text-bone md:hidden"
          >
            <span className="relative block h-4 w-6">
              <span className={cn("absolute left-0 top-0 h-0.5 w-6 bg-current transition-all duration-300", open && "top-2 rotate-45")} />
              <span className={cn("absolute left-0 top-2 h-0.5 w-6 bg-current transition-all duration-300", open && "opacity-0")} />
              <span className={cn("absolute left-0 top-4 h-0.5 w-6 bg-current transition-all duration-300", open && "top-2 -rotate-45")} />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "grid overflow-hidden border-t border-neon/20 bg-ink/95 backdrop-blur-md transition-all duration-500 md:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0">
          <ul className="flex flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 font-condensed text-xl font-bold uppercase tracking-[0.18em] text-bone/85 transition-colors hover:bg-crimson/15 hover:text-bone"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="https://discord.gg/YvZaukBdu"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-md bg-crimson px-5 py-3 font-condensed text-lg font-extrabold uppercase tracking-widest text-white"
              >
                <DiscordIcon className="size-5" /> Join Discord
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
