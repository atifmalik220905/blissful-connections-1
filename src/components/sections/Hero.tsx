import hero from "@/assets/hero-rishikesh.jpg";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Sparkles, Mountain, Flower2, Shield } from "lucide-react";

const trust = [
  { icon: Flower2, label: "Osho Meditation & Breathwork" },
  { icon: Mountain, label: "Retreats in Rishikesh" },
  { icon: Sparkles, label: "Experienced Facilitators" },
  { icon: Shield, label: "Safe & Nurturing Space" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={hero}
        alt="Sunrise over the Ganges in Rishikesh"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24 w-full">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-saffron mb-6">
            <span className="w-8 h-px bg-saffron" /> Rishikesh · Himalayas
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-balance text-foreground">
            Discover Inner Silence with{" "}
            <em className="text-saffron not-italic font-normal">OSHO Bliss</em>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Experience Osho meditations, breathwork, retreats, and conscious inner exploration
            in the spiritual atmosphere of Rishikesh.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-foreground text-background hover:bg-maroon transition-all duration-300 hover:-translate-y-0.5 shadow-soft font-medium"
            >
              Join a Meditation Session
            </a>
            <WhatsAppButton size="lg" message="Namaste 🙏 I'd like to join a meditation session at OSHO Bliss.">
              WhatsApp Us
            </WhatsAppButton>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            {trust.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon className="w-5 h-5 text-saffron shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/80 leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
