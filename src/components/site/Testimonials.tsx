"use client";

import { motion, useReducedMotion } from "framer-motion";
import { motionViewport } from "@/lib/motion";
import collectionMinimal from "@/assets/collection-minimal.jpg";
import collectionModern from "@/assets/collection-modern.jpg";
import collectionWarm from "@/assets/collection-warm.jpg";
import showroomImage from "@/assets/showroom.jpg";
import heroKitchen from "@/assets/hero-kitchen.jpg";

const luxuryEase = [0.22, 1, 0.36, 1] as const;

const testimonialsData = [
  {
    image: collectionMinimal,
    quote: "We wilden geen standaard keuken, maar een ruimte die rust, precisie en luxe uitstraalt. Het ontwerp voelde vanaf de eerste presentatie architectonisch doordacht, en de uitvoering was even zorgvuldig.",
    client: "Familie Van Deurzen",
    project: "LEICHT Residence Project",
    location: "Utrecht",
    year: "2025",
    brand: "LEICHT",
    tags: ["LEICHT", "Maatwerk", "Modern"],
  },
  {
    image: collectionWarm,
    quote: "Vanaf het eerste moodboard tot de plaatsing was alles coherent. Materialen, belijning en apparatuur sloten precies aan op de architectuur van onze woning.",
    client: "Mevr. de Jong",
    project: "Nobilia Family Loft",
    location: "Bilthoven",
    year: "2024",
    brand: "NOBILIA",
    tags: ["NOBILIA", "Warm Minimal", "Greeploos"],
  },
  {
    image: collectionModern,
    quote: "De begeleiding voelde internationaal en volwassen. Geen verkoopdruk, maar een ontwerpgesprek op niveau met veel aandacht voor verhoudingen en afwerking.",
    client: "Bouwbedrijf Vreeburg",
    project: "Zampieri Loft Line",
    location: "Nieuwegein",
    year: "2025",
    brand: "ZAMPIERI",
    tags: ["ZAMPIERI", "Loft", "Stone Finish"],
  },
  {
    image: heroKitchen,
    quote: "De keuken voelt alsof hij altijd onderdeel van het huis is geweest. Juist die vanzelfsprekende luxe en het dagelijkse gebruiksgemak maken dit project bijzonder.",
    client: "Dhr. & Mevr. Jaspers",
    project: "Cucinesse Courtyard Kitchen",
    location: "Houten",
    year: "2024",
    brand: "CUCINESSE",
    tags: ["CUCINESSE", "Courtyard", "Soft Oak"],
  },
  {
    image: collectionMinimal,
    quote: "Er is slim meegedacht over licht, routing en werkruimte. Het eindresultaat oogt stil en luxe, maar werkt dagelijks ook gewoon perfect.",
    client: "Familie Keizer",
    project: "Leicht Garden Villa",
    location: "Zeist",
    year: "2025",
    brand: "LEICHT",
    tags: ["LEICHT", "Villa", "Natural Stone"],
  },
  {
    image: showroomImage,
    quote: "De verfijning zit in de details: voeglijnen, materiaalovergangen en de rust van het totaalbeeld. Dat zie je niet vaak zo consequent uitgevoerd.",
    client: "Familie Hesselink",
    project: "Premium Atelier Kitchen",
    location: "Amersfoort",
    year: "2025",
    brand: "NOBILIA",
    tags: ["NOBILIA", "Atelier", "Monolith"],
  },
] as const;

const sectionReveal = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: luxuryEase } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.82, ease: luxuryEase },
  },
};

function StarRating() {
  return (
    <div className="flex gap-1.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="h-3.5 w-3.5 text-[#C8A96B]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function QuoteIcon() {
  return (
    <svg
      className="h-9 w-9 text-[#C8A96B]/15"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

function TestimonialCard({
  story,
}: {
  story: typeof testimonialsData[number];
}) {
  return (
    <article className="group relative flex w-[380px] sm:w-[440px] flex-shrink-0 flex-col justify-between rounded-[24px] border border-[rgba(200,169,107,0.14)] bg-[#1D2023]/60 p-6 shadow-[0_24px_56px_-36px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#C8A96B]/40 hover:bg-[#1D2023]/80 hover:shadow-[0_36px_72px_-40px_rgba(200,169,107,0.22)] sm:p-7">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A96B]/20 to-transparent transition-opacity duration-500 group-hover:via-[#C8A96B]/40" />
      
      <div>
        {/* Card Image */}
        <div className="relative mb-5 h-[140px] w-full overflow-hidden rounded-[16px] border border-white/[0.06]">
          <img
            src={story.image}
            alt={story.project}
            className="h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111315]/80 via-transparent to-transparent" />
          <span
            className="absolute right-4 top-4 rounded-full border border-white/[0.08] bg-black/40 px-2.5 py-0.5 text-[0.58rem] uppercase tracking-[0.2em] text-[#F5F2EC] backdrop-blur-sm"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            {story.brand}
          </span>
        </div>

        {/* Rating and Icon */}
        <div className="flex items-center justify-between">
          <StarRating />
          <QuoteIcon />
        </div>

        {/* Quote */}
        <blockquote className="mt-4 font-serif text-[1rem] font-light leading-[1.65] text-[#F5F2EC]/90 transition-colors duration-300 group-hover:text-white sm:text-[1.08rem]">
          “{story.quote}”
        </blockquote>
      </div>

      {/* Footer Info */}
      <div className="mt-6 border-t border-white/10 pt-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <cite className="block font-serif text-[1.05rem] font-light not-italic text-[#F5F2EC]">
              {story.client}
            </cite>
            <p
              className="mt-0.5 text-[0.68rem] uppercase tracking-[0.16em] text-[rgba(245,242,236,0.5)]"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              {story.project}
            </p>
          </div>
          <div className="text-right">
            <span className="text-[0.78rem] font-medium text-[#C8A96B]">{story.location}</span>
            <p
              className="mt-0.5 text-[0.62rem] uppercase tracking-[0.12em] text-[rgba(245,242,236,0.38)]"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              {story.year}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Testimonials() {
  const reduceMotion = useReducedMotion();

  // Create two rotated lists to staggered layouts
  const row1Data = [...testimonialsData, ...testimonialsData];
  const row2Data = [
    testimonialsData[3],
    testimonialsData[4],
    testimonialsData[5],
    testimonialsData[0],
    testimonialsData[1],
    testimonialsData[2],
    testimonialsData[3],
    testimonialsData[4],
    testimonialsData[5],
    testimonialsData[0],
    testimonialsData[1],
    testimonialsData[2],
  ];

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#17191C_0%,#111315_100%)] py-24 text-[#F5F2EC] md:py-36 border-t border-white/[0.08]"
    >
      {/* CSS Styles for perfect hardware accelerated marquee */}
      <style>{`
        @keyframes marquee-ltr {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        @keyframes marquee-rtl {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee-ltr {
          animation: marquee-ltr 45s linear infinite;
        }
        .animate-marquee-rtl {
          animation: marquee-rtl 50s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Decorative lighting overlays */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(200,169,107,0.08), transparent 34%), radial-gradient(circle at 78% 18%, rgba(255,255,255,0.03), transparent 24%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,169,107,0.25)] to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.08)] to-transparent"
      />

      <div className="site-container relative z-10 mb-16">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : sectionReveal}
          className="border-b border-white/[0.08] pb-12"
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(22rem,0.8fr)] lg:items-end">
            <div className="max-w-[45rem]">
              <motion.div
                variants={reduceMotion ? undefined : fadeUp}
                className="mb-5 flex items-center gap-4"
              >
                <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#C8A96B]/70" />
                <span
                  className="text-[0.64rem] uppercase tracking-[0.34em] text-[#C8A96B]"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  Luxury Client Stories
                </span>
              </motion.div>

              <motion.h2
                variants={reduceMotion ? undefined : fadeUp}
                className="font-serif text-[clamp(2.2rem,4vw,3.6rem)] font-light leading-[1.02] tracking-[-0.035em] text-[#F5F2EC]"
              >
                Vertrouwen dat u
                <br />
                <em className="font-serif italic text-[#C8A96B]">direct voelt.</em>
              </motion.h2>
            </div>

            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="grid gap-6 lg:justify-self-end"
            >
              <p
                className="max-w-[28rem] text-[0.97rem] leading-[1.85] text-[rgba(245,242,236,0.65)]"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                Google reviews gepresenteerd als premium projectverhalen: rustig opgebouwd, gekoppeld
                aan echte keukenrealisaties en ontworpen met dezelfde verfijnde showroomlogica als
                de premium configurator experience.
              </p>
              
              <div className="flex w-fit items-start gap-5 rounded-[24px] border border-white/[0.08] bg-white/[0.02] px-5 py-4 backdrop-blur-sm">
                <div>
                  <div className="flex gap-1 text-[0.9rem] text-[#C8A96B] leading-none">★★★★★</div>
                  <p className="mt-1 font-serif text-[1.6rem] leading-none text-[#F5F2EC]">4.9 / 5.0</p>
                </div>
                <div className="border-l border-white/[0.08] pl-5">
                  <p
                    className="text-[0.62rem] uppercase tracking-[0.22em] text-[rgba(245,242,236,0.5)]"
                    style={{ fontFamily: "'Jost', sans-serif" }}
                  >
                    Google Rating Summary
                  </p>
                  <p
                    className="mt-2 text-[0.88rem] leading-[1.7] text-[rgba(245,242,236,0.68)]"
                    style={{ fontFamily: "'Jost', sans-serif" }}
                  >
                    127+ geverifieerde reviews van premium keukenprojecten in Utrecht en omstreken.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* CONTINUOUS MARQUEE WORKSPACE */}
      <div className="relative flex flex-col gap-6 sm:gap-8 overflow-hidden py-4">
        {/* Soft edge blur masks to fade cards out beautifully */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-[#111315] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-[#111315] to-transparent z-10" />

        {/* Row 1: Left to Right scrolling */}
        <div className="relative w-full overflow-hidden">
          <div
            className={`marquee-track flex gap-6 sm:gap-8 w-max px-3 ${
              reduceMotion ? "overflow-x-auto" : "animate-marquee-ltr"
            }`}
          >
            {row1Data.map((story, idx) => (
              <TestimonialCard key={`row1-${story.client}-${idx}`} story={story} />
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left scrolling */}
        <div className="relative w-full overflow-hidden">
          <div
            className={`marquee-track flex gap-6 sm:gap-8 w-max px-3 ${
              reduceMotion ? "overflow-x-auto" : "animate-marquee-rtl"
            }`}
          >
            {row2Data.map((story, idx) => (
              <TestimonialCard key={`row2-${story.client}-${idx}`} story={story} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
