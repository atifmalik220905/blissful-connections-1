import oshoPortrait from "@/assets/osho-portrait.png";

export function Inspiration() {
  return (
    <section id="inspiration" className="py-24 md:py-36 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-warm opacity-30 blur-3xl rounded-full" />
            <div className="relative rounded-2xl overflow-hidden shadow-soft aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <img
                src={oshoPortrait}
                alt="Portrait of Osho, Indian spiritual teacher"
                width={800}
                height={1000}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                <p className="font-display text-lg italic">"Silence is the soil, meditation is the seed."</p>
                <p className="text-xs uppercase tracking-widest text-saffron mt-2">— Osho</p>
              </div>
            </div>
          </div>

          {/* Text/Quote Column */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-saffron">Inspiration</span>
              <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight text-balance">
                The Vision of Osho
              </h2>
            </div>
            
            <blockquote className="border-l-4 border-saffron pl-6 py-2">
              <p className="text-xl md:text-2xl font-light italic leading-relaxed text-foreground/90">
                "Meditation is not something that you do in the morning and you are finished with it. Meditation is something that you have to live, in every moment of your life. While walking, sleeping, sitting, loving, eating — it should become a constant undercurrent."
              </p>
              <cite className="block mt-4 text-sm uppercase tracking-wider text-muted-foreground not-italic">
                — Osho
              </cite>
            </blockquote>

            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                At OSHO Bliss, our offerings are rooted in Osho's revolutionary approach to modern consciousness. 
                Rather than forcing a restless mind to sit in silence, Osho's Active Meditations begin with movement, 
                breathing, and emotional release to clear the clutter, making silent witnessing arise naturally.
              </p>
              <p>
                This synthesis of celebration and silence—defined as "Zorba the Buddha"—is the core of our retreats. 
                We guide you to live fully in the outer world while remaining centered in your inner silence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
