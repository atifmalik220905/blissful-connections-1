export const WHATSAPP_NUMBER = "919058967526";
export const WHATSAPP_DISPLAY = "+91 90589 67526";

export function whatsappLink(message = "Namaste 🙏 I'd like to know more about OSHO Bliss meditation sessions.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
