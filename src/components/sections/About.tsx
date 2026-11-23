import incense from "@/assets/incense.jpg";
import nature from "@/assets/nature-path.jpg";

export function About() {
  return (
    <section id="about" className="py-24 md:py-36 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-4">
          <img src={incense} alt="Incense being lit in a meditation space" width={1024} height={1024} loading="lazy" className="rounded-2xl shadow-soft aspect-[4/5] object-cover" />
          <img src={nature} alt="Forest path in Rishikesh" width={1024} height={1280} loading="lazy" className="rounded-2xl shadow-soft aspect-[4/5] object-cover mt-12" />
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-saffron">About</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight text-balance">
            A sanctuary for the seeker within.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            OSHO Bliss is a meditation and retreat space in Rishikesh created for people who wish
            to reconnect with their true self through Osho meditations, breathwork, silence,
            awareness, and conscious living.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            The space is designed for seekers, beginners, travelers, spiritual explorers, and
            anyone looking for peace, release, clarity, and inner transformation.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            While rooted in the sacred energy of Rishikesh, our vision is global: to create 16 conscious communes worldwide, offering spaces for celebration, meditation, and inner connection.
          </p>
        </div>
      </div>
    </section>
  );
}
