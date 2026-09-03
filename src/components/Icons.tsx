import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const EyeIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3.2" fill="currentColor" stroke="none" />
    <circle cx="12" cy="12" r="1.2" fill="#050505" stroke="none" />
  </svg>
);

export const CrosshairIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="7" />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
  </svg>
);

export const RocketIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M14.5 3.5c3 0 6 3 6 6-.6 3.6-3.1 6.8-6.8 9.5l-3.7-3.7C12.7 11.6 15.9 4.1 14.5 3.5Z" />
    <path d="M10 15.3 7.5 16.5 5 14l1.2-2.5L10 9.7" />
    <path d="M9 18.5c-.4 1.6-1.9 2.5-4.5 2.5.2-2.6.9-4.1 2.5-4.5" />
    <circle cx="15" cy="9" r="1.5" />
  </svg>
);

export const ShieldIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 2.5 4.5 5.5v6c0 5 3.3 8.4 7.5 10 4.2-1.6 7.5-5 7.5-10v-6L12 2.5Z" />
    <path d="M12 2.5v19" />
    <path d="M4.5 5.5 12 8.5l7.5-3" />
  </svg>
);

export const GearIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 2.5l1.6 2.3 2.7-.7.7 2.7 2.7.9-.9 2.7 1.9 2-1.9 2 .9 2.7-2.7.9-.7 2.7-2.7-.7L12 21.5l-1.6-2.3-2.7.7-.7-2.7-2.7-.9.9-2.7-1.9-2 1.9-2-.9-2.7 2.7-.9.7-2.7 2.7.7L12 2.5Z" />
    <circle cx="12" cy="12" r="3.2" />
  </svg>
);

export const DiscordIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M19.6 5.1A17 17 0 0 0 15.4 3.8l-.2.4a15.6 15.6 0 0 0-6.4 0l-.2-.4a17 17 0 0 0-4.2 1.3C1.7 9.1 1 13 1.3 16.9a17 17 0 0 0 5.2 2.6l1.1-1.8a11 11 0 0 1-1.7-.8l.4-.3a12.2 12.2 0 0 0 11.4 0l.4.3-1.7.8 1.1 1.8a17 17 0 0 0 5.2-2.6c.4-4.5-.7-8.4-3.1-11.8ZM8.7 14.6c-1 0-1.9-1-1.9-2.1s.8-2.1 1.9-2.1 1.9 1 1.9 2.1-.8 2.1-1.9 2.1Zm6.6 0c-1 0-1.9-1-1.9-2.1s.8-2.1 1.9-2.1 1.9 1 1.9 2.1-.8 2.1-1.9 2.1Z" />
  </svg>
);

export const TikTokIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M16.6 2h-3.4v13.6a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V9.3a6.3 6.3 0 1 0 5.4 6.3V8.8a7.4 7.4 0 0 0 4.3 1.4V6.8A4.3 4.3 0 0 1 16.6 2Z" />
  </svg>
);

export const CursorIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" {...p}>
    <path
      d="M5 3l14 8.5-6.3 1.4L16 20l-2.8 1.3-3.3-7.1L5 18.5V3Z"
      fill="#fff"
      stroke="#050505"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

export const CrownIcon = (p: IconProps) => (
  <svg viewBox="0 0 64 48" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" {...p}>
    <path d="M6 40h52M8 36 4 12l16 12L32 6l12 18 16-12-4 24H8Z" />
    <circle cx="4" cy="10" r="2.5" fill="currentColor" />
    <circle cx="60" cy="10" r="2.5" fill="currentColor" />
    <circle cx="32" cy="5" r="2.5" fill="currentColor" />
  </svg>
);

export const BoltIcon = (p: IconProps) => (
  <svg viewBox="0 0 40 72" fill="currentColor" {...p}>
    <path d="M24 0 0 40h16L10 72 40 28H22L34 0Z" />
  </svg>
);

export const ShurikenIcon = (p: IconProps) => (
  <svg viewBox="0 0 100 100" {...p}>
    <path
      d="M50 2 60 38l38 12-38 10-10 38-10-38L2 50l38-12Z"
      fill="#141416"
      stroke="#ff2a2a"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <circle cx="50" cy="50" r="8" fill="#050505" stroke="#ff2a2a" strokeWidth="3" />
  </svg>
);

export const BulletIcon = (p: IconProps) => (
  <svg viewBox="0 0 40 110" {...p}>
    <path d="M20 2C8 18 4 30 4 44v6h32v-6C36 30 32 18 20 2Z" fill="#c0c0c0" stroke="#050505" strokeWidth="2" />
    <path d="M20 2C14 18 12 30 12 44v6h8V2Z" fill="#f3f3f3" opacity=".55" />
    <rect x="4" y="50" width="32" height="10" fill="#ff2a2a" stroke="#050505" strokeWidth="2" />
    <rect x="4" y="60" width="32" height="46" rx="3" fill="#e3141c" stroke="#050505" strokeWidth="2" />
    <rect x="8" y="64" width="6" height="38" rx="2" fill="#ff6b6b" opacity=".6" />
  </svg>
);

export const CopyIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="9" y="9" width="12" height="12" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 12.5 9.5 18 20 6.5" />
  </svg>
);

export const ArrowIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
