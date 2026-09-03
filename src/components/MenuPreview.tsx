import { useState } from "react";
import { Reveal } from "./Reveal";
import { CrosshairIcon, EyeIcon, GearIcon, RocketIcon, ShieldIcon } from "./Icons";
import { cn } from "../utils/cn";

const navItems = [
  { label: "Dashboard", icon: GearIcon },
  { label: "Visual", icon: EyeIcon },
  { label: "Main", icon: ShieldIcon },
  { label: "Aim", icon: CrosshairIcon },
  { label: "Mapping", icon: RocketIcon },
];

const tabs = ["ESP", "Camera", "Lighting"];

const sliderDefaults = [
  { label: "ESP Fill Transparency", value: 0.55, max: 1, step: 0.01 },
  { label: "ESP Outline Transparency", value: 0.86, max: 1, step: 0.01 },
  { label: "ESP Font Size", value: 12, max: 24, step: 1 },
];

const toggles = ["Box ESP", "Skeleton", "Health Bar", "Distance", "Snaplines", "Name Tags"];

export function MenuPreview() {
  const [active, setActive] = useState(1);
  const [tab, setTab] = useState(0);
  const [sliders, setSliders] = useState(sliderDefaults.map((s) => s.value));
  const [enabled, setEnabled] = useState<boolean[]>([true, true, true, false, true, false]);

  return (
    <section id="menu" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28" aria-labelledby="menu-title">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson/15 blur-[160px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="font-condensed text-sm font-black uppercase tracking-[0.35em] text-neon text-glow-soft">The menu</p>
            <h2 id="menu-title" className="mt-3 font-marker text-4xl leading-tight text-bone sm:text-5xl lg:text-6xl">
              Every setting, <span className="text-neon text-glow">one click</span> away
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-bone/65 sm:text-lg">
              A clean in-game overlay with live previews. Tune ESP transparency, font sizes, aim smoothing and more —
              changes apply instantly, no restart needed.
            </p>
            <ul className="mt-8 space-y-3 font-condensed text-lg font-bold uppercase tracking-wider text-bone/80">
              {["Save & share config profiles", "Hotkey every toggle", "Streamer-safe mode"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="grid size-6 place-items-center rounded-full border border-neon/70 bg-crimson/20 text-neon">
                    <span className="size-2 rounded-full bg-neon shadow-[0_0_8px_#ff2a2a]" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Mock UI */}
          <Reveal delay={120} className="relative">
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-neon/30 via-transparent to-crimson/20 blur-xl" />
            <div className="animate-pulse-glow relative overflow-hidden rounded-xl border border-neon/60 bg-coal font-sans text-bone">
              {/* Title bar */}
              <div className="flex items-center justify-between border-b border-white/5 bg-ash px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="grid size-8 place-items-center rounded-full bg-crimson font-condensed text-sm font-black text-white shadow-[0_0_12px_rgba(255,42,42,0.7)]">
                    K
                  </span>
                  <div className="leading-tight">
                    <p className="font-condensed text-base font-black tracking-wide">
                      KysHub <span className="text-neon">CRA</span>
                    </p>
                    <p className="text-[10px] text-bone/45">Violence District v1.5.7</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-bone/50">
                  <span className="hidden rounded border border-white/10 bg-ink px-2 py-1 text-[10px] font-semibold tracking-wider sm:inline">
                    KYS_VD
                  </span>
                  <span className="size-2.5 rounded-full bg-neon/70" />
                  <span className="size-2.5 rounded-full bg-white/20" />
                </div>
              </div>

              <div className="grid grid-cols-[52px_1fr] sm:grid-cols-[150px_1fr]">
                {/* Sidebar */}
                <nav className="border-r border-white/5 bg-ash/60 py-3" aria-label="Menu sections">
                  {navItems.map((n, i) => (
                    <button
                      key={n.label}
                      type="button"
                      onClick={() => setActive(i)}
                      className={cn(
                        "relative flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm font-medium transition-colors",
                        active === i ? "text-bone" : "text-bone/45 hover:text-bone/80",
                      )}
                    >
                      {active === i && <span className="absolute inset-y-1 left-0 w-0.5 bg-neon shadow-[0_0_10px_#ff2a2a]" />}
                      <span
                        className={cn(
                          "grid size-6 shrink-0 place-items-center rounded-full border",
                          active === i ? "border-neon bg-crimson/30 text-neon" : "border-white/10 text-bone/50",
                        )}
                      >
                        <n.icon className="size-3.5" />
                      </span>
                      <span className="hidden sm:inline">{n.label}</span>
                    </button>
                  ))}
                </nav>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <p className="font-condensed text-sm font-bold uppercase tracking-widest text-neon">Visual Features</p>
                  <div className="mt-3 flex gap-2">
                    {tabs.map((t, i) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTab(i)}
                        className={cn(
                          "rounded-md border px-3 py-1.5 text-xs font-semibold transition-all",
                          tab === i
                            ? "border-neon bg-crimson/30 text-bone shadow-[0_0_12px_rgba(255,42,42,0.4)]"
                            : "border-white/10 bg-ink text-bone/50 hover:border-neon/40 hover:text-bone/80",
                        )}
                      >
                        {t}
                      </button>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2 sm:grid-cols-3">
                    {toggles.map((t, i) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setEnabled((e) => e.map((v, j) => (j === i ? !v : v)))}
                        aria-pressed={enabled[i]}
                        className="flex items-center gap-2 rounded-md border border-white/5 bg-ink/60 px-2.5 py-2 text-left text-xs text-bone/75 transition-colors hover:border-neon/40"
                      >
                        <span
                          className={cn(
                            "relative h-4 w-7 shrink-0 rounded-full transition-colors",
                            enabled[i] ? "bg-crimson shadow-[0_0_10px_rgba(255,42,42,0.6)]" : "bg-white/15",
                          )}
                        >
                          <span
                            className={cn(
                              "absolute top-0.5 size-3 rounded-full bg-white transition-all",
                              enabled[i] ? "left-3.5" : "left-0.5",
                            )}
                          />
                        </span>
                        {t}
                      </button>
                    ))}
                  </div>

                  <p className="mt-5 font-condensed text-xs font-bold uppercase tracking-widest text-bone/45">Highlight ESP Settings</p>
                  <div className="mt-2 space-y-3">
                    {sliderDefaults.map((s, i) => {
                      const pct = (sliders[i] / s.max) * 100;
                      return (
                        <label key={s.label} className="block">
                          <span className="flex items-center justify-between text-xs">
                            <span className="text-bone/75">{s.label}</span>
                            <span className="rounded border border-white/10 bg-ink px-1.5 py-0.5 font-mono text-[11px] text-bone">
                              {s.step < 1 ? sliders[i].toFixed(2) : sliders[i]}
                            </span>
                          </span>
                          <input
                            type="range"
                            min={0}
                            max={s.max}
                            step={s.step}
                            value={sliders[i]}
                            onChange={(e) =>
                              setSliders((arr) => arr.map((v, j) => (j === i ? Number(e.target.value) : v)))
                            }
                            aria-label={s.label}
                            className="mt-1.5 h-1.5 w-full cursor-pointer appearance-none rounded-full accent-neon [&::-webkit-slider-thumb]:size-3.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_0_10px_#ff2a2a]"
                            style={{
                              background: `linear-gradient(90deg, #ff2a2a ${pct}%, rgba(255,255,255,0.12) ${pct}%)`,
                            }}
                          />
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Scanline */}
              <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.025)_0_1px,transparent_1px_3px)]" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
