import breathwork from "@/assets/breathwork.jpg";

const items = [
  "Guided Osho meditations",
  "Breathwork and pranayama",
  "Emotional release practices",
  "Silence and awareness",
  "Sharing and reflection",
  "Retreat atmosphere in Rishikesh",
  "Personal inner journey",
];

const audience = [
  "Beginners who want to learn meditation",
  "Spiritual seekers",
  "People feeling stress, anxiety, or emotional heaviness",
  "Travelers visiting Rishikesh",
  "People interested in Osho meditations",
  "Wellness groups and retreat participants",
  "Anyone looking for inner peace and clarity",
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-36 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <img
              src={breathwork}
              alt="Person practicing breathwork in warm light"
              width={1024}
              height={1280}
              loading="lazy"
              className="rounded-2xl shadow-soft object-cover w-full"
            />
          </div>
          <div className="space-y-16">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-saffron">The Experience</span>
              <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight text-balance">
                Slow down. Breathe deeply. Reconnect.
              </h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Every session at OSHO Bliss is designed to help you release emotional weight
                and return to your natural state of silence and joy.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {items.map((it, i) => (
                  <div key={it} className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                    <span className="font-display text-saffron text-lg">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-sm">{it}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-saffron">Who Can Join</span>
              <h3 className="font-display text-3xl md:text-4xl mt-4 leading-tight">
                This space is for you, if you are…
              </h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {audience.map((a) => (
                  <li key={a} className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm border border-border">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
