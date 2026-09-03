import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { BoltIcon, CheckIcon, CopyIcon, CrownIcon, CursorIcon, DiscordIcon, TikTokIcon } from "./Icons";
import { cn } from "../utils/cn";

type SocialCardProps = {
  icon: typeof DiscordIcon;
  lead: string;
  brand: string;
  handle: string;
  href: string;
  copyValue: string;
  delay?: number;
};

function SocialCard({ icon: Icon, lead, brand, handle, href, copyValue, delay }: SocialCardProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(copyValue);
      setCopied(true);
    } catch {
      window.open(href, "_blank", "noopener");
    }
  };

  return (
    <Reveal delay={delay} className="group relative">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-neon/40 to-crimson/10 opacity-60 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
      <article className="relative flex flex-col gap-5 rounded-2xl border-2 border-neon/80 bg-gradient-to-br from-[#1a0507] via-coal to-ink p-5 shadow-[0_0_0_3px_#050505,0_0_0_4px_rgba(255,42,42,0.35)] transition-transform duration-500 group-hover:-translate-y-1 sm:flex-row sm:items-center sm:gap-7 sm:p-7">
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${brand}`}
          className="grid size-20 shrink-0 place-items-center rounded-2xl bg-bone text-ink shadow-[0_0_24px_rgba(255,255,255,0.25)] transition-all duration-500 group-hover:rotate-[-6deg] group-hover:scale-105 group-hover:shadow-[0_0_34px_rgba(255,42,42,0.6)] sm:size-24"
        >
          <Icon className="size-12 sm:size-14" />
        </a>

        <div className="min-w-0 flex-1">
          <h3 className="flex flex-wrap items-baseline gap-x-3 font-condensed text-3xl font-black uppercase italic leading-none tracking-wide text-bone sm:text-4xl">
            {lead}
            <span className="font-marker not-italic text-neon text-glow">{brand}</span>
          </h3>

          <div className="mt-4 flex items-stretch gap-2">
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="relative flex min-w-0 flex-1 items-center rounded-full border-2 border-neon/70 bg-ink px-5 py-3 font-condensed text-xl font-bold tracking-wide text-bone shadow-[inset_0_0_18px_rgba(227,20,28,0.15)] transition-all duration-300 hover:border-neon hover:shadow-[inset_0_0_18px_rgba(227,20,28,0.25),0_0_20px_rgba(255,42,42,0.45)] sm:text-2xl"
            >
              <span className="truncate">{handle}</span>
              <CursorIcon className="pointer-events-none absolute -bottom-3 -right-1 size-9 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
            </a>
            <button
              type="button"
              onClick={copy}
              aria-live="polite"
              aria-label={copied ? "Copied" : `Copy ${copyValue}`}
              className={cn(
                "grid size-[52px] shrink-0 place-items-center rounded-full border-2 transition-all duration-300 sm:size-[56px]",
                copied
                  ? "border-neon bg-crimson text-white shadow-[0_0_20px_rgba(255,42,42,0.7)]"
                  : "border-bone/30 bg-ink text-bone/70 hover:border-neon hover:text-neon",
              )}
            >
              {copied ? <CheckIcon className="size-5" /> : <CopyIcon className="size-5" />}
            </button>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Socials() {
  return (
    <section id="community" className="relative scroll-mt-24 py-20 sm:py-28" aria-labelledby="community-title">
      <div className="pointer-events-none absolute -right-32 top-10 -z-10 size-[460px] rounded-full bg-crimson/20 blur-[140px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 -z-10 size-[420px] rounded-full bg-blood/25 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal className="mb-10">
              <p className="font-condensed text-sm font-black uppercase tracking-[0.35em] text-neon text-glow-soft">Community</p>
              <h2 id="community-title" className="mt-3 font-marker text-4xl leading-tight text-bone sm:text-5xl lg:text-6xl">
                Get in the <span className="text-neon text-glow">squad</span>
              </h2>
            </Reveal>

            <div className="relative space-y-8">
              <CrownIcon
                className="animate-float pointer-events-none absolute -left-6 -top-10 hidden w-16 text-neon drop-shadow-[0_0_14px_#ff2a2a] lg:-left-24 lg:block"
                style={{ ["--rot" as string]: "-12deg" }}
                aria-hidden
              />
              <SocialCard
                icon={DiscordIcon}
                lead="Join our"
                brand="Discord"
                handle="discord.gg/YvZaukBdu"
                href="https://discord.gg/YvZaukBdu"
                copyValue="https://discord.gg/YvZaukBdu"
              />
              <SocialCard
                icon={TikTokIcon}
                lead="Follow us on"
                brand="TikTok"
                handle="iryhub_official"
                href="https://www.tiktok.com/@iryhub_official"
                copyValue="@iryhub_official"
                delay={120}
              />
            </div>
          </div>

          {/* Statement */}
          <Reveal delay={200} className="relative flex flex-col items-center lg:items-start">
            <BoltIcon
              className="animate-flicker pointer-events-none absolute -top-16 right-6 h-28 text-neon drop-shadow-[0_0_18px_#ff2a2a] lg:-right-4"
              aria-hidden
            />
            <CrownIcon
              className="pointer-events-none absolute -top-8 left-4 w-12 text-neon drop-shadow-[0_0_12px_#ff2a2a] lg:hidden"
              aria-hidden
            />
            <ul className="font-marker -rotate-3 space-y-1 text-center text-5xl leading-[1.1] text-bone sm:text-6xl lg:text-left lg:text-7xl">
              {["Fast.", "Powerful.", "Reliable."].map((w, i) => (
                <li
                  key={w}
                  className="text-glow-white transition-all duration-300 hover:translate-x-2 hover:text-neon hover:text-glow"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <span className="relative inline-block">
                    {w}
                    <span
                      className="absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-neon shadow-[0_0_14px_#ff2a2a]"
                      style={{ transform: `rotate(${i % 2 ? 1.2 : -1}deg)` }}
                    />
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-sm text-center text-base leading-relaxed text-bone/60 lg:text-left">
              Thousands of players trust IRY HUB every day. Join the community, grab the latest build and start winning
              tonight.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
