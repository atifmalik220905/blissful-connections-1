import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Flame, Wind, Mountain, Users, Heart, Globe } from "lucide-react";

const services = [
  { icon: Flame, title: "Osho Meditation Sessions", desc: "Active and silent meditation practices inspired by Osho to help release stress, emotions, and mental noise." },
  { icon: Wind, title: "Breathwork Sessions", desc: "Guided breathing practices for relaxation, energy activation, emotional release, and deeper awareness." },
  { icon: Mountain, title: "Meditation Retreats", desc: "Immersive retreat experiences in Rishikesh for inner silence, self-discovery, and conscious living." },
  { icon: Users, title: "Meditation Camps", desc: "Group meditation camps with structured practices, sharing circles, and deep inner work." },
  { icon: Heart, title: "Private Therapeutic Sessions", desc: "One-to-one sessions for personal guidance, emotional release, and deeper healing." },
  { icon: Globe, title: "Online Meditation Guidance", desc: "Online sessions for people who want to experience meditation and breathwork from anywhere." },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-saffron">Offerings</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight text-balance">
            Pathways into stillness, breath & awareness.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Choose the journey that calls you — from active meditation and breathwork to
            immersive retreats and intimate one-to-one sessions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-saffron/50 hover:shadow-soft transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center mb-6 group-hover:bg-saffron group-hover:text-background transition-colors">
                <Icon className="w-5 h-5 text-saffron group-hover:text-background" />
              </div>
              <h3 className="font-display text-2xl mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{desc}</p>
              <WhatsAppButton
                variant="ghost"
                size="sm"
                className="px-0"
                message={`Namaste 🙏 I'd like to enquire about: ${title}`}
              >
                Enquire on WhatsApp →
              </WhatsAppButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
