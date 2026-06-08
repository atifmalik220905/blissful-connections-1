import { Calendar, Clock, MapPin, Users, Heart, CheckCircle2 } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const packages = [
  { name: "Couple Private", price: "₹34,000", suffix: "each" },
  { name: "Single Private", price: "₹52,000", suffix: "each" },
  { name: "3 Sharing", price: "₹25,000", suffix: "each" },
  { name: "4 Sharing", price: "₹16,000", suffix: "each" },
];

const inclusions = [
  "Osho Meditations",
  "Nature Walks & Silence",
  "Healthy Vegetarian Meals",
  "Comfortable Stay in Nature",
  "Transport Assistance",
  "Extended Itinerary Help",
];

export function Retreat() {
  const whatsappMsg = "Namaste 🙏 I'd like to book a spot at the Osho Retreat 'Breathe in Kumaon' (18 - 21 June 2026).";

  return (
    <section id="retreat" className="py-24 md:py-36 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-warm opacity-10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-saffron">Upcoming Retreat</span>
          <p className="text-sm uppercase tracking-widest text-muted-foreground mt-2 font-medium">OSHO Bliss Presents</p>
          <h2 className="font-display text-4xl md:text-6xl mt-4 leading-tight text-balance">
            Breathe in Kumaon
          </h2>
          <p className="text-xl md:text-2xl text-saffron font-light mt-3">A Journey Within · In the lap of Himalayas</p>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Step away from the noise. Come home to silence, awareness, and a deeper you.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Details Card */}
          <div className="lg:col-span-7 bg-card border border-border/60 rounded-3xl p-8 md:p-10 shadow-soft space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-saffron/10 flex items-center justify-center shrink-0">
                  <Calendar className="w-6 h-6 text-saffron" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Dates</h4>
                  <p className="font-semibold mt-1">18 June – 21 June 2026</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Arrive Thursday afternoon, finish Sunday midday</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-saffron/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-saffron" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Duration</h4>
                  <p className="font-semibold mt-1">3 Nights / 4 Days</p>
                </div>
              </div>

              <div className="flex gap-4 sm:col-span-2">
                <div className="w-12 h-12 rounded-xl bg-saffron/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-saffron" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Location</h4>
                  <p className="font-semibold mt-1">Imperial Heights</p>
                  <p className="text-sm text-muted-foreground mt-0.5">Kasar Devi, Almora – Bageshwar Rd, Almora, Balt Bari, Uttarakhand</p>
                </div>
              </div>

              <div className="flex gap-4 sm:col-span-2">
                <div className="w-12 h-12 rounded-xl bg-saffron/10 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-saffron" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Facilitated by</h4>
                  <p className="font-semibold mt-1">Christine & Sarju</p>
                  <p className="text-sm text-muted-foreground mt-0.5">From Rishikesh Meditation Camps</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border/60 pt-8">
              <h4 className="font-display text-lg mb-4 text-foreground">What’s Included</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {inclusions.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-saffron shrink-0" />
                    <span className="text-muted-foreground text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-secondary/40 border border-saffron/20 rounded-2xl p-6 relative overflow-hidden">
              <Heart className="absolute right-4 bottom-4 w-24 h-24 text-saffron/5 pointer-events-none" />
              <blockquote className="relative text-base italic leading-relaxed text-foreground/90">
                “Just breathe… and life becomes a celebration. Breathe in… be here… be blessed.”
              </blockquote>
            </div>
          </div>

          {/* Packages and Booking */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-card border border-border/60 rounded-3xl p-8 shadow-soft">
              <h3 className="font-display text-2xl mb-6">Retreat Packages</h3>
              
              <div className="space-y-4 mb-8">
                {packages.map((pkg) => (
                  <div key={pkg.name} className="flex justify-between items-center py-3 border-b border-border/40 last:border-0">
                    <div>
                      <span className="font-semibold text-foreground">{pkg.name}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-display text-2xl text-saffron block font-semibold">{pkg.price}</span>
                      <span className="text-xs text-muted-foreground">{pkg.suffix}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-xs text-muted-foreground text-center mb-6">
                All packages are inclusive of stay, meals, and retreat sessions.
              </div>

              <WhatsAppButton message={whatsappMsg} className="w-full justify-center py-4 text-base shadow-glow">
                Book Retreat Spot
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
