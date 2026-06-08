import group from "@/assets/meditation-group.jpg";
import retreat from "@/assets/retreat-space.jpg";
import breath from "@/assets/breathwork.jpg";
import nature from "@/assets/nature-path.jpg";
import incense from "@/assets/incense.jpg";
import hero from "@/assets/hero-rishikesh.jpg";

const items = [
  { src: group, alt: "Group meditation by the river", span: "md:col-span-2 md:row-span-2" },
  { src: retreat, alt: "Retreat space", span: "" },
  { src: nature, alt: "Forest path Rishikesh", span: "" },
  { src: breath, alt: "Breathwork session", span: "md:row-span-2" },
  { src: incense, alt: "Incense being lit", span: "" },
  { src: hero, alt: "Sunrise over the Ganges", span: "md:col-span-2" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between gap-8 mb-12 flex-wrap">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-saffron">Gallery</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
              Moments from the space.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Meditation sessions, retreat spaces, and the quiet beauty of Rishikesh.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
          {items.map((it) => (
            <div key={it.alt} className={`relative overflow-hidden rounded-2xl group ${it.span}`}>
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
