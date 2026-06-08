import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={cn("w-9 h-9", className)}
    >
      <defs>
        <linearGradient id="bm-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.78 0.16 60)" />
          <stop offset="100%" stopColor="oklch(0.55 0.18 35)" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="22" fill="url(#bm-g)" />
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        className="text-background"
      >
        {/* lotus petals */}
        <path d="M24 32 C16 28 14 22 16 16 C20 18 23 22 24 28 Z" fill="currentColor" opacity="0.95" />
        <path d="M24 32 C32 28 34 22 32 16 C28 18 25 22 24 28 Z" fill="currentColor" opacity="0.95" />
        <path d="M24 32 C20 30 18 26 18 22 C21 23 23 26 24 30 Z" fill="currentColor" opacity="0.75" />
        <path d="M24 32 C28 30 30 26 30 22 C27 23 25 26 24 30 Z" fill="currentColor" opacity="0.75" />
        <path d="M24 32 C23 28 23.5 24 24 20 C24.5 24 25 28 24 32 Z" fill="currentColor" />
        {/* base line */}
        <path d="M14 33 Q24 36 34 33" strokeWidth="1.2" />
      </g>
    </svg>
  );
}
