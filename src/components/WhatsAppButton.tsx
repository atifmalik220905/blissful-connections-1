import { whatsappLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "ghost" | "pill";

interface Props {
  message?: string;
  children?: React.ReactNode;
  variant?: Variant;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function WhatsAppButton({ message, children = "WhatsApp Us", variant = "solid", className, size = "md" }: Props) {
  const base = "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 group";
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };
  const variants: Record<Variant, string> = {
    solid: "bg-whatsapp text-whatsapp-foreground hover:shadow-glow hover:-translate-y-0.5",
    outline: "border border-whatsapp text-whatsapp hover:bg-whatsapp hover:text-whatsapp-foreground",
    ghost: "text-whatsapp hover:bg-whatsapp/10",
    pill: "bg-foreground text-background hover:bg-maroon",
  };
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, sizes[size], variants[variant], className)}
    >
      <MessageCircle className="w-4 h-4 transition-transform group-hover:rotate-12" />
      {children}
    </a>
  );
}
