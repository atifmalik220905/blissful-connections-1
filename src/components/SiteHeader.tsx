import { WhatsAppButton } from "./WhatsAppButton";
import { BrandMark } from "./BrandMark";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Instagram } from "lucide-react";

const nav = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#facilitators", label: "Facilitators" },
  { href: "#experience", label: "Experience" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-500",
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border/60" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2.5">
          <BrandMark className="w-9 h-9 shadow-soft rounded-full" />
          <span className="font-display text-xl md:text-2xl tracking-tight">
            OSHO <span className="text-saffron">Bliss</span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8 text-sm text-muted-foreground">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/oshobliss_experiences"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <WhatsAppButton size="sm" className="hidden sm:inline-flex">Enquire</WhatsAppButton>
        </div>
      </div>
    </header>
  );
}
