import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BrandMark } from "@/components/BrandMark";
import { WHATSAPP_DISPLAY } from "@/lib/whatsapp";
import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2.5">
              <BrandMark className="w-9 h-9" />
              <span className="font-display text-2xl">OSHO <span className="text-saffron">Bliss</span></span>
            </div>
            <p className="mt-5 text-sm opacity-70 leading-relaxed max-w-sm">
              A meditation and retreat space in Rishikesh — for silence, breath,
              awareness, and the inner journey home.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <WhatsAppButton>Chat: {WHATSAPP_DISPLAY}</WhatsAppButton>
              <a
                href="https://www.instagram.com/oshobliss_experiences"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-75 hover:opacity-100 transition-opacity p-2.5 bg-background/10 hover:bg-background/25 rounded-full"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-background" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4">Visit</h4>
            <address className="not-italic text-sm opacity-70 leading-relaxed">
              Bungalow Number 10, Street Number 6<br />
              Nirmal Baugh, Block A, Part 2<br />
              Virbhadra, Rishikesh<br />
              Dehradun, Uttarakhand, India – 249202
            </address>
            <p className="mt-3 text-sm opacity-70">Contact: Jobanputra Alpesh Pratapbhai</p>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4">Explore</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {[
                ["About", "#about"],
                ["Services", "#services"],
                ["Founders", "#founders"],
                ["Experience", "#experience"],
                ["Gallery", "#gallery"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={l}>
                  <a href={h} className="hover:text-saffron transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/10 flex flex-wrap justify-between gap-4 text-xs opacity-60">
          <p>© {new Date().getFullYear()} OSHO Bliss. All rights reserved.</p>
          <p>Osho meditation · Breathwork · Retreats in Rishikesh</p>
        </div>
      </div>
    </footer>
  );
}
