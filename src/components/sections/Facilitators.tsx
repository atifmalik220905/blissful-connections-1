import christineAsset from "@/assets/facilitator-christine.jpg.asset.json";
import sarjuAsset from "@/assets/facilitator-sarju.jpg.asset.json";
const christine = christineAsset.url;
const sarju = sarjuAsset.url;
import { WhatsAppButton } from "@/components/WhatsAppButton";

const facilitators = [
  {
    name: "Christine",
    img: christine,
    origin: "Born in Australia",
    bio: [
      "Christine began her path of inner exploration in 2008, learning meditation at the London Buddhist Centre. Previously a humanities teacher and Head of Faculty, she realised the deepest change in the world begins within — and moved into more conscious work in 2021.",
      "She is trained in pranayama, Soma Breath, and Osho Meditations. Over the last 5 years, she has guided sessions in London, Australia, India, and at the Osho International Meditation Resort in Pune, as well as online.",
      "Her work has reached psychiatric hospitals, children facing removal from mainstream education, corporate wellness programs, meditation camps in Rishikesh, Ayurvedic colleges in Kerala, and private therapeutic sessions in India and the UK.",
    ],
  },
  {
    name: "Sarju",
    img: sarju,
    origin: "Born in Gujarat, India",
    bio: [
      "Sarju has been a Sanyassin of Osho since 2008. Previously an entrepreneur involved in an oil mill and tyre plant, he also worked in construction management in London.",
      "While running his businesses, he stayed for long periods at Osho ashrams in Madhavpur, Mehsana, and Pune, diving deeply within. On his journey to find Zorba the Buddha, he discovered the value of Zen discipline — a principle he carries into his work today.",
      "In 2022, he expanded into facilitating Osho meditations and has since held intimate sessions in London, at the Osho International Meditation Resort in Pune, and across India. He also facilitates Meditation Camps in Rishikesh.",
    ],
  },
];

export function Facilitators() {
  return (
    <section id="facilitators" className="py-24 md:py-36 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-saffron">Guides</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight text-balance">
            Meet your facilitators.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Held with warmth, depth, and presence.
          </p>
        </div>

        <div className="space-y-24">
          {facilitators.map((f, i) => (
            <div key={f.name} className={`grid lg:grid-cols-5 gap-10 lg:gap-16 items-center ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div className="lg:col-span-2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-warm opacity-20 blur-2xl rounded-full" />
                  <img
                    src={f.img}
                    alt={`Portrait of ${f.name}, facilitator at OSHO Bliss`}
                    width={896}
                    height={1152}
                    loading="lazy"
                    className="relative rounded-2xl shadow-soft aspect-[4/5] object-cover w-full"
                  />
                </div>
              </div>
              <div className="lg:col-span-3">
                <span className="text-xs uppercase tracking-[0.25em] text-saffron">{f.origin}</span>
                <h3 className="font-display text-4xl md:text-5xl mt-3">{f.name}</h3>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  {f.bio.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
                <div className="mt-8">
                  <WhatsAppButton message={`Namaste 🙏 I'd like to book a session with ${f.name}.`}>
                    Book a session with {f.name}
                  </WhatsAppButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
