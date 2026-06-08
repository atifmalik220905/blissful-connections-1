import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WHATSAPP_DISPLAY, whatsappLink } from "@/lib/whatsapp";
import { MapPin, Phone, User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const services = [
  "Osho Meditation Sessions",
  "Breathwork Sessions",
  "Meditation Retreats",
  "Meditation Camps",
  "Private Therapeutic Sessions",
  "Online Meditation Guidance",
];

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: services[0], message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please share your name and phone.");
      return;
    }
    const msg = `Namaste 🙏\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nInterested in: ${form.service}\n\n${form.message}`;
    window.open(whatsappLink(msg), "_blank");
    toast.success("Opening WhatsApp…");
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-saffron">Contact</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight text-balance">
            Begin your inner journey today.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Connect with OSHO Bliss to join a meditation session, retreat, camp, or private
            session in Rishikesh.
          </p>

          <div className="mt-8">
            <WhatsAppButton size="lg">Chat on WhatsApp · {WHATSAPP_DISPLAY}</WhatsAppButton>
          </div>

          <div className="mt-10 space-y-5">
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-saffron shrink-0 mt-1" />
              <div className="text-sm text-muted-foreground leading-relaxed">
                OSHO Bliss<br />
                Bungalow Number 10, Street Number 6<br />
                Nirmal Baugh, Block A, Part 2<br />
                Virbhadra, Rishikesh<br />
                Dehradun, Uttarakhand, India – 249202
              </div>
            </div>
            <div className="flex gap-4">
              <User className="w-5 h-5 text-saffron shrink-0 mt-1" />
              <div className="text-sm text-muted-foreground">
                Jobanputra Alpesh Pratapbhai
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="w-5 h-5 text-saffron shrink-0 mt-1" />
              <a href={`tel:+${91}9058967526`} className="text-sm hover:text-saffron">
                {WHATSAPP_DISPLAY}
              </a>
            </div>
          </div>

          <div className="mt-10 rounded-2xl overflow-hidden border border-border shadow-soft">
            <iframe
              title="OSHO Bliss location"
              src="https://www.google.com/maps?q=Virbhadra,+Rishikesh,+Uttarakhand+249202&output=embed"
              width="100%"
              height="280"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-soft h-fit"
        >
          <h3 className="font-display text-2xl mb-2">Send us a message</h3>
          <p className="text-sm text-muted-foreground mb-8">We'll continue the conversation on WhatsApp.</p>

          <div className="space-y-5">
            {[
              { k: "name", label: "Your name", type: "text", placeholder: "Full name" },
              { k: "phone", label: "Phone", type: "tel", placeholder: "+91…" },
              { k: "email", label: "Email", type: "email", placeholder: "you@example.com" },
            ].map((f) => (
              <div key={f.k}>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">{f.label}</label>
                <input
                  type={f.type}
                  required={f.k !== "email"}
                  value={form[f.k as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                  placeholder={f.placeholder}
                  maxLength={120}
                  className="mt-2 w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition"
                />
              </div>
            ))}

            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Interested in</label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="mt-2 w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition"
              >
                {services.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                maxLength={1000}
                placeholder="Tell us what calls you here…"
                className="mt-2 w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-whatsapp text-whatsapp-foreground font-medium hover:shadow-glow transition-all hover:-translate-y-0.5"
            >
              Send & Continue on WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
