import { Reveal } from "./Reveal";
import { ArrowIcon, BoltIcon, BulletIcon, CrownIcon, DiscordIcon, ShurikenIcon } from "./Icons";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-36" aria-labelledby="hero-title">
      {/* Character figure */}
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-full max-w-[1100px] lg:w-[62%]">
        <img
          src="/images/character.png"
          alt=""
          className="hero-figure h-full w-full object-cover object-[65%_15%] opacity-40 sm:opacity-60 lg:opacity-90"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent lg:via-transparent" />
      </div>

      {/* Ambient red glow */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 size-[520px] rounded-full bg-crimson/25 blur-[140px]" />
      <div className="pointer-events-none absolute right-1/4 top-1/3 -z-10 size-[420px] rounded-full bg-blood/30 blur-[140px]" />
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" />

      {/* Floating props */}
      <ShurikenIcon
        className="animate-spin-slow pointer-events-none absolute -left-8 top-[34%] size-28 drop-shadow-[0_0_14px_rgba(255,42,42,0.5)] sm:left-[-1.5rem] sm:size-36 lg:left-4 lg:top-[38%]"
        aria-hidden
      />
      <BulletIcon
        className="animate-float pointer-events-none absolute left-[2%] top-[62%] hidden h-28 drop-shadow-[0_0_10px_rgba(255,42,42,0.45)] sm:block lg:left-[4%] lg:top-[68%]"
        style={{ ["--rot" as string]: "-32deg" }}
        aria-hidden
      />
      <BulletIcon
        className="animate-float-slow pointer-events-none absolute right-[3%] top-[30%] hidden h-32 drop-shadow-[0_0_10px_rgba(255,42,42,0.45)] lg:block"
        style={{ ["--rot" as string]: "24deg" }}
        aria-hidden
      />
      <BoltIcon
        className="animate-flicker pointer-events-none absolute right-[6%] top-[58%] hidden h-24 text-neon drop-shadow-[0_0_18px_#ff2a2a] md:block"
        aria-hidden
      />
      <CrownIcon
        className="animate-float pointer-events-none absolute right-[14%] top-[22%] hidden w-16 text-neon drop-shadow-[0_0_14px_#ff2a2a] md:block"
        style={{ ["--rot" as string]: "12deg" }}
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
          <div className="relative z-10">
            {/* Badge */}
            <Reveal className="mb-8 inline-flex">
              <a href="#top" className="group relative block" aria-label="IRY HUB logo">
                <span className="absolute inset-0 rounded-full bg-neon/40 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative grid size-32 place-items-center overflow-hidden rounded-full border-[5px] border-bone bg-ink shadow-[0_0_0_4px_#050505,0_0_0_6px_rgba(255,42,42,0.6),0_0_40px_rgba(255,42,42,0.45)] transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-105 sm:size-40 lg:size-44">
                  <img src="/images/logo-badge.png" alt="IRY HUB" className="size-full object-cover" />
                </span>
              </a>
            </Reveal>

            {/* Title */}
            <Reveal delay={80}>
              <h1
                id="hero-title"
                className="font-marker text-outline -rotate-2 text-[clamp(4.5rem,15vw,10.5rem)] leading-[0.85] tracking-tight"
              >
                <span className="text-glow-white block text-bone">IRY</span>
                <span className="text-glow block text-neon">HUB</span>
              </h1>
            </Reveal>

            {/* Tagline banner */}
            <Reveal delay={160} className="mt-6 inline-block">
              <p className="sticker skew-brand rounded-sm px-5 py-2 font-condensed text-lg font-black uppercase italic tracking-wider text-bone sm:px-7 sm:text-2xl lg:text-3xl">
                <span className="inline-block skew-x-[8deg]">
                  The best solution for <span className="text-glow text-neon">your game</span>
                </span>
              </p>
            </Reveal>

            <Reveal delay={240} as="p" className="mt-7 max-w-lg text-base leading-relaxed text-bone/70 sm:text-lg">
              Advanced ESP, pinpoint aim assistance, buttery performance and rock-solid protection — wrapped in an
              interface anyone can master in minutes.
            </Reveal>

            {/* CTAs */}
            <Reveal delay={320} className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="https://discord.gg/YvZaukBdu"
                target="_blank"
                rel="noreferrer"
                className="group skew-brand relative inline-flex items-center gap-3 overflow-hidden rounded-md bg-crimson px-7 py-4 font-condensed text-xl font-black uppercase tracking-widest text-white shadow-[0_0_28px_rgba(255,42,42,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_44px_rgba(255,42,42,0.8)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <DiscordIcon className="relative size-6 skew-x-[8deg]" />
                <span className="relative skew-x-[8deg]">Join our Discord</span>
              </a>
              <a
                href="#features"
                className="group skew-brand inline-flex items-center gap-2 rounded-md border-2 border-bone/30 bg-ink/50 px-7 py-[14px] font-condensed text-xl font-black uppercase tracking-widest text-bone backdrop-blur transition-all duration-300 hover:border-neon hover:text-neon hover:shadow-[0_0_24px_rgba(255,42,42,0.35)]"
              >
                <span className="skew-x-[8deg]">See features</span>
                <ArrowIcon className="size-5 skew-x-[8deg] transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>

            {/* Trust line */}
            <Reveal delay={400} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 font-condensed text-sm font-bold uppercase tracking-[0.22em] text-bone/55">
              <span className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-neon shadow-[0_0_10px_#ff2a2a]" /> Undetected
              </span>
              <span className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-neon shadow-[0_0_10px_#ff2a2a]" /> Instant updates
              </span>
              <span className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-neon shadow-[0_0_10px_#ff2a2a]" /> 24/7 Support
              </span>
            </Reveal>
          </div>

          {/* Spacer keeps figure visible on desktop */}
          <div className="hidden min-h-[560px] lg:block" aria-hidden />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
    </section>
  );
}
