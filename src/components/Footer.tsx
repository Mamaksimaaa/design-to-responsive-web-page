import { Reveal } from "./Reveal";
import { CrownIcon, DiscordIcon, TikTokIcon } from "./Icons";

const marqueeItems = ["Advanced ESP", "Perfect Aim", "High Performance", "Stability & Protection", "Easy Interface"];

export function Footer() {
  return (
    <footer className="relative overflow-hidden pt-16">
      {/* Marquee */}
      <div className="border-y border-neon/30 bg-crimson/10 py-3 backdrop-blur-sm" aria-hidden>
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-condensed text-lg font-black uppercase italic tracking-[0.25em] text-bone/80">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((t, i) => (
            <span key={i} className="flex items-center gap-10">
              {t}
              <span className="size-2 rotate-45 bg-neon shadow-[0_0_10px_#ff2a2a]" />
            </span>
          ))}
        </div>
      </div>

      {/* Big closing line */}
      <div className="relative mx-auto max-w-7xl px-5 py-24 text-center sm:px-8 sm:py-32 lg:px-10">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson/20 blur-[150px]" />
        <Reveal className="relative inline-block">
          <CrownIcon
            className="animate-float pointer-events-none absolute -right-8 -top-10 w-14 text-neon drop-shadow-[0_0_14px_#ff2a2a] sm:-right-20 sm:w-20"
            style={{ ["--rot" as string]: "18deg" }}
            aria-hidden
          />
          <p className="sticker skew-brand inline-block rounded-md px-6 py-3 font-marker text-3xl leading-none text-bone sm:px-10 sm:py-4 sm:text-5xl lg:text-6xl">
            <span className="inline-block skew-x-[8deg]">
              Let's win <span className="text-neon text-glow">together!</span>
            </span>
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://discord.gg/YvZaukBdu"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-neon/70 bg-ink px-6 py-3 font-condensed text-lg font-bold uppercase tracking-widest text-bone transition-all duration-300 hover:border-neon hover:bg-crimson hover:shadow-[0_0_24px_rgba(255,42,42,0.6)]"
          >
            <DiscordIcon className="size-5" /> Discord
          </a>
          <a
            href="https://www.tiktok.com/@iryhub_official"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-neon/70 bg-ink px-6 py-3 font-condensed text-lg font-bold uppercase tracking-widest text-bone transition-all duration-300 hover:border-neon hover:bg-crimson hover:shadow-[0_0_24px_rgba(255,42,42,0.6)]"
          >
            <TikTokIcon className="size-5" /> TikTok
          </a>
        </Reveal>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-sm text-bone/40 sm:flex-row sm:px-8 lg:px-10">
          <p className="flex items-center gap-3">
            <span className="grid size-8 place-items-center overflow-hidden rounded-full border border-bone/60 bg-ink">
              <img src="/images/logo-badge.png" alt="" className="size-full object-cover" />
            </span>
            <span className="font-condensed text-base font-bold uppercase tracking-widest">
              IRY <span className="text-neon">HUB</span> © {new Date().getFullYear()}
            </span>
          </p>
          <p className="font-condensed text-sm uppercase tracking-[0.2em]">The best solution for your game</p>
        </div>
      </div>
    </footer>
  );
}
