import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Facilitators } from "@/components/sections/Facilitators";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Experience } from "@/components/sections/Experience";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OSHO Bliss — Osho Meditation, Breathwork & Retreats in Rishikesh" },
      { name: "description", content: "Join Osho meditations, breathwork sessions, meditation camps and spiritual retreats in Rishikesh. Safe, nurturing space guided by experienced facilitators. Enquire on WhatsApp." },
      { property: "og:title", content: "OSHO Bliss — Meditation & Retreats in Rishikesh" },
      { property: "og:description", content: "Osho meditations, breathwork and retreats in the spiritual heart of Rishikesh." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "OSHO Bliss",
          description: "Osho meditation, breathwork and retreats in Rishikesh.",
          telephone: "+91 90589 67526",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Bungalow 10, Street 6, Nirmal Baugh, Block A, Part 2, Virbhadra",
            addressLocality: "Rishikesh",
            addressRegion: "Uttarakhand",
            postalCode: "249202",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Facilitators />
        <WhyChoose />
        <Experience />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <StickyWhatsApp />
      <Toaster position="top-center" />
    </div>
  );
}
