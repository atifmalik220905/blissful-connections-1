import { whatsappLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export function StickyWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-breathe" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp text-whatsapp-foreground shadow-glow hover:scale-110 transition-transform">
        <MessageCircle className="w-7 h-7" />
      </span>
    </a>
  );
}
