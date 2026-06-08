import { Check } from "lucide-react";
import retreat from "@/assets/retreat-space.jpg";

const points = [
  "Experienced international facilitators",
  "Safe, nurturing, and non-judgmental space",
  "Located in the spiritual city of Rishikesh",
  "Suitable for beginners and experienced meditators",
  "Osho meditations, breathwork, and inner work",
  "Group retreats and private sessions available",
  "Focus on release, awareness, relaxation, and self-discovery",
];

export function WhyChoose() {
  return (
    <section className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-saffron">Why OSHO Bliss</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight text-balance">
            A space held with care, rooted in the silence of Rishikesh.
          </h2>
          <ul className="mt-10 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex gap-4 items-start">
                <span className="mt-1 w-6 h-6 rounded-full bg-saffron/15 text-saffron flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span className="text-foreground/90">{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <img
            src={retreat}
            alt="Warm meditation space with cushions and candles"
            width={1280}
            height={960}
            loading="lazy"
            className="rounded-2xl shadow-soft object-cover"
          />
        </div>
      </div>
    </section>
  );
}
