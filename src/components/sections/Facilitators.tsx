const founders = [
  {
    name: "Swaami Prem Pratap",
    role: "Founder",
    desc: "Dedicated to sharing Osho's vision of meditation and celebration, guiding seekers on their inner journey.",
  },
  {
    name: "Preeti",
    role: "Founder",
    desc: "Facilitating heart-centered active meditations and breathwork to help seekers release tension and find silence.",
  },
  {
    name: "Swami Aatmo Bodh (Alpesh)",
    role: "Founder",
    desc: "Overseeing the space and organization, welcoming spiritual explorers into a safe, nurturing retreat environment.",
  },
];

export function Facilitators() {
  return (
    <section id="founders" className="py-24 md:py-36 bg-secondary/50">
      <span id="facilitators" className="sr-only" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-saffron">
            Founders
          </span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight text-balance">
            Founders of OSHO Bliss
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Held with warmth, depth, presence, and loving support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((f) => (
            <div
              key={f.name}
              className="relative bg-card border border-border/50 rounded-2xl p-8 text-center shadow-soft hover:shadow-medium transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-warm opacity-70" />
              <div className="space-y-4 my-auto">
                <span className="text-[10px] uppercase tracking-[0.25em] text-saffron font-semibold">
                  {f.role}
                </span>
                <h4 className="font-display text-2xl font-medium text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                  {f.name}
                </h4>
                <div className="w-8 h-[1px] bg-border mx-auto my-4" />
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Facilitators as Founders };
