import { Quote } from "lucide-react";

const items = [
  {
    quote: "OSHO Bliss gave me a safe space to release, relax, and reconnect with myself. The meditation experience was deeply powerful.",
    name: "Maya R.",
    role: "Retreat participant",
  },
  {
    quote: "Christine and Sarju hold the space with warmth, depth, and presence. A beautiful experience in Rishikesh.",
    name: "Daniel K.",
    role: "Visitor from London",
  },
  {
    quote: "The breathwork session opened something I didn't know was closed. I left feeling lighter, clearer, and more myself.",
    name: "Priya S.",
    role: "Meditation camp guest",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-36 bg-maroon text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-saffron">Voices</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight text-balance">
            What seekers share with us.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <figure
              key={t.name}
              className="p-8 rounded-2xl bg-background/5 border border-background/10 backdrop-blur"
            >
              <Quote className="w-7 h-7 text-saffron mb-5" />
              <blockquote className="font-display text-xl leading-snug text-balance">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-background/10">
                <div className="font-medium">{t.name}</div>
                <div className="text-sm opacity-70">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
