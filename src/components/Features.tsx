import { Reveal } from "./Reveal";
import { CrosshairIcon, EyeIcon, GearIcon, RocketIcon, ShieldIcon } from "./Icons";

const features = [
  { icon: EyeIcon, title: "Advanced", accent: "ESP", desc: "See through walls with boxes, skeletons, health and distance.", iconClass: "animate-eye origin-center" },
  { icon: CrosshairIcon, title: "Perfect", accent: "Aim", desc: "Smooth, humanized aim assist with custom FOV and bone targeting." },
  { icon: RocketIcon, title: "High", accent: "Performance", desc: "Zero FPS impact. Optimized native code built for competitive play." },
  { icon: ShieldIcon, title: "Stability &", accent: "Protection", desc: "Kernel-level protection with instant updates after every patch." },
  { icon: GearIcon, title: "Easy", accent: "Interface", desc: "Clean in-game menu. Configs, hotkeys and profiles in one click." },
];

export function Features() {
  return (
    <section id="features" className="relative scroll-mt-24 py-20 sm:py-28" aria-labelledby="features-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="mb-14 text-center">
          <p className="font-condensed text-sm font-black uppercase tracking-[0.35em] text-neon text-glow-soft">Why IRY HUB</p>
          <h2 id="features-title" className="mt-3 font-marker text-4xl leading-tight text-bone sm:text-5xl lg:text-6xl">
            Built to <span className="text-neon text-glow">dominate</span>
          </h2>
        </Reveal>

        <ul className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {features.map((f, i) => (
            <Reveal as="li" key={f.accent} delay={i * 90} className="group flex flex-col items-center text-center">
              <div className="relative">
                <span className="absolute inset-0 rounded-full bg-neon/30 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                <span className="box-glow relative grid size-24 place-items-center rounded-full border-[3px] border-neon bg-gradient-to-b from-smoke to-ink text-neon transition-all duration-500 group-hover:-translate-y-1.5 group-hover:box-glow-strong group-hover:scale-105 sm:size-28">
                  <f.icon className={`size-11 drop-shadow-[0_0_10px_rgba(255,42,42,0.8)] transition-transform duration-500 group-hover:scale-110 sm:size-12 ${f.iconClass ?? ""}`} />
                </span>
              </div>
              <h3 className="mt-5 font-condensed text-lg font-black uppercase leading-tight tracking-wider text-bone sm:text-xl">
                {f.title}
                <br />
                <span className="text-neon text-glow-soft">{f.accent}</span>
              </h3>
              <p className="mt-2 max-w-[13rem] text-sm leading-relaxed text-bone/55">{f.desc}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
