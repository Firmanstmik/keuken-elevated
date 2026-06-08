"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Check, House, Mail, Phone } from "@/components/ui/icons";
import { Calendar, Clock, MagicStar, Shield } from "iconsax-react";
import { kc } from "@/lib/kc-data";
import { motionViewport } from "@/lib/motion";

import collectionModern from "@/assets/collection-modern.jpg";
import collectionMinimal from "@/assets/collection-minimal.jpg";
import collectionScandi from "@/assets/collection-scandi.jpg";
import collectionWarm from "@/assets/collection-warm.jpg";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import craftsmanship from "@/assets/craftsmanship.jpg";
import showroomAsset from "@/assets/showroom.jpg";
import matMarble from "@/assets/mat-marble.jpg";

// ─── Types ────────────────────────────────────────────────────────────────────

type FormState = {
  name: string;
  email: string;
  phone: string;
  showroom: string;
  budget: string;
  date: string;
  notes: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const benefits = [
  "Personal Design Session",
  "Material Selection Review",
  "Technical Planning",
  "Budget Consultation",
  "Showroom Walkthrough",
] as const;

const trustMetrics = [
  { value: "45+", label: "Years Experience" },
  { value: "4", label: "Premium European Brands" },
  { value: "1000+", label: "Material Combinations" },
  { value: "< 24h", label: "Response Time" },
] as const;

const whatHappensNext = [
  { n: "01", title: "Request Received", description: "Uw aanvraag wordt persoonlijk beoordeeld" },
  { n: "02", title: "Personal Contact", description: "Een adviseur belt u binnen 24 uur" },
  { n: "03", title: "Showroom Appointment", description: "Bezoek op een moment dat u uitkomt" },
  { n: "04", title: "Design Proposal", description: "Ontvang uw persoonlijk ontwerpvoorstel" },
] as const;

const gallerySlides = [
  { src: collectionModern,  label: "Modern Lijn",      tag: "Greeploos" },
  { src: collectionMinimal, label: "Minimaal Design",  tag: "Mat Wit"   },
  { src: collectionScandi,  label: "Scandinavisch",    tag: "Eiken"     },
  { src: collectionWarm,    label: "Warm Atelier",     tag: "Hout"      },
  { src: heroKitchen,       label: "Signature Keuken", tag: "Premium"   },
  { src: craftsmanship,     label: "Vakmanschap",      tag: "Handwerk"  },
  { src: showroomAsset,     label: "Showroom Floor",   tag: "Utrecht"   },
  { src: matMarble,         label: "Italiaans Marmer", tag: "Calacatta" },
];

// ─── Motion ───────────────────────────────────────────────────────────────────

const luxuryEase = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: luxuryEase } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const staggerSlow: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

// ─── HorizontalSlider ─────────────────────────────────────────────────────────

function HorizontalSlider() {
  const doubled = [...gallerySlides, ...gallerySlides];
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const drag = useRef({ startX: 0, startScroll: 0, moved: false });
  const pausedUntil = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let raf = 0;
    let last = performance.now();
    const speed = 30;

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      const half = (trackRef.current?.scrollWidth ?? 0) / 2;
      if (!dragging && now > pausedUntil.current && half > 0) {
        let next = el.scrollLeft + speed * dt;
        if (next >= half) next -= half;
        el.scrollLeft = next;
      } else if (half > 0) {
        if (el.scrollLeft >= half) el.scrollLeft -= half;
        else if (el.scrollLeft < 0) el.scrollLeft += half;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [dragging]);

  const onPointerDown = (e: React.PointerEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setDragging(true);
    drag.current = { startX: e.clientX, startScroll: el.scrollLeft, moved: false };
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    const el = scrollRef.current;
    if (!el) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 3) drag.current.moved = true;
    el.scrollLeft = drag.current.startScroll - dx;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    setDragging(false);
    pausedUntil.current = performance.now() + 1500;
    scrollRef.current?.releasePointerCapture(e.pointerId);
  };

  return (
    <div className="relative">
      {/* Left fade mask */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 md:w-40"
        style={{
          background:
            "linear-gradient(to right, #FAF7F1 0%, rgba(250,247,241,0.85) 35%, rgba(250,247,241,0) 100%)",
        }}
      />
      {/* Right fade mask */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 md:w-40"
        style={{
          background:
            "linear-gradient(to left, #FAF7F1 0%, rgba(250,247,241,0.85) 35%, rgba(250,247,241,0) 100%)",
        }}
      />

      {/* Showroom Selectie floating badge */}
      <div className="absolute left-4 top-[3.75rem] z-20 inline-flex items-center gap-2 rounded-full border border-[#E2D9C7] bg-white/90 px-3 py-1.5 backdrop-blur-sm">
        <MagicStar size={12} variant="Bold" color="#8a6a2a" />
        <span
          className="text-[10px] font-semibold uppercase tracking-[0.22em]"
          style={{ color: "#5a4418", fontFamily: "var(--font-body)" }}
        >
          Showroom Selectie
        </span>
      </div>

      <div
        ref={scrollRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className={`select-none overflow-x-auto pb-4 pt-14 ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", touchAction: "pan-y" }}
      >
        <div ref={trackRef} className="flex w-max gap-5 px-6">
          {doubled.map((slide, i) => (
            <figure
              key={i}
              className="group relative h-64 w-[280px] shrink-0 overflow-hidden rounded-[24px] md:h-72 md:w-[310px]"
              style={{ boxShadow: "0 30px 60px -30px rgba(60,45,20,0.30)" }}
              onClickCapture={(e) => {
                if (drag.current.moved) {
                  e.preventDefault();
                  e.stopPropagation();
                }
              }}
            >
              <img
                src={slide.src as unknown as string}
                alt={slide.label}
                draggable={false}
                loading="lazy"
                className="pointer-events-none h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-black/35 px-2 py-0.5 backdrop-blur-sm">
                  <span className="h-1 w-1 rounded-full" style={{ background: "#D9BE7C" }} />
                  <span
                    className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/90"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {slide.tag}
                  </span>
                </div>
                <div className="mt-1.5 font-serif text-[17px] font-light text-white">
                  {slide.label}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ConsultationSection() {
  const reduceMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    showroom: "Utrecht, Zonnebaan 8",
    budget: kc.config.budgets[2]?.label ?? "",
    date: "",
    notes: "",
  });

  const isValid = form.name.trim() && form.email.trim() && form.showroom.trim();

  const updateField =
    (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
    };

  return (
    <section id="consultation" className="relative overflow-hidden">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F6F3EE 50%, #EEF7F8 100%)" }}
      />
      {/* Top gold radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(35,185,196,0.12), transparent 60%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-28">

        {/* ── Centered Editorial Header ─────────────────────────── */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : staggerContainer}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div variants={reduceMotion ? undefined : fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E6DFD2] bg-white px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#23B9C4" }} />
              <span
                className="text-[10px] font-semibold uppercase tracking-[0.24em]"
                style={{ color: "#5a4418", fontFamily: "var(--font-body)" }}
              >
                Persoonlijk Ontwerpgesprek
              </span>
            </div>
          </motion.div>

          <motion.h2
            variants={reduceMotion ? undefined : fadeUp}
            className="mt-6 font-serif text-4xl font-light leading-[1.1] tracking-tight md:text-5xl"
            style={{ color: "#163847" }}
          >
            Boek uw persoonlijk
            <br />
            <em className="italic" style={{ color: "#23B9C4" }}>ontwerpconsult.</em>
          </motion.h2>

          <motion.p
            variants={reduceMotion ? undefined : fadeUp}
            className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed"
            style={{ color: "#6a5e48", fontFamily: "var(--font-body)" }}
          >
            Neem uw eerste keuzes mee naar de showroom in Utrecht en bespreek ze met een
            adviseur die materiaal, routing, apparatuur en budget zorgvuldig met u doorneemt.
          </motion.p>
        </motion.div>

        {/* ── Horizontal Gallery Strip ───────────────────────────── */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={motionViewport}
          transition={{ duration: 0.8, ease: luxuryEase, delay: 0.2 }}
          className="mt-14"
        >
          <HorizontalSlider />
        </motion.div>

        {/* ── Form Card ─────────────────────────────────────────── */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : fadeUp}
          className="mt-10"
        >
          <div
            className="relative overflow-hidden rounded-[20px] border border-[#E4DCCB]"
            style={{
              boxShadow:
                "0 40px 90px -50px rgba(26,20,16,0.25), 0 1px 0 rgba(255,255,255,0.6) inset",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-[300px_1fr]">

              {/* ── Atelier Panel (dark left) ──────────────────────── */}
              <aside
                className="relative hidden flex-col justify-between p-8 md:flex"
                style={{ background: "linear-gradient(180deg, #0F2730 0%, #163847 100%)" }}
              >
                {/* TOP: Badge + heading */}
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1">
                    <span className="h-1 w-1 rounded-full" style={{ background: "#C9A961" }} />
                    <span
                      className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/75"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Atelier
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-2xl font-light leading-tight text-white">
                    Persoonlijk
                    <br />
                    <em className="italic" style={{ color: "#C9A961" }}>ontwerpgesprek</em>
                  </h3>
                  <p
                    className="mt-3 text-[12px] leading-relaxed text-white/55"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Een vertrouwelijk gesprek met een senior ontwerper. Zonder verkoopdruk.
                  </p>
                </div>

                {/* MIDDLE: Promises + Benefits */}
                <div className="mt-8">
                  <ul className="space-y-3 text-[12px] text-white/70">
                    <li className="flex items-center gap-2.5">
                      <Clock size={14} variant="Linear" color="#23B9C4" />
                      <span style={{ fontFamily: "var(--font-body)" }}>Reactie binnen 24 uur</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Shield size={14} variant="Linear" color="#23B9C4" />
                      <span style={{ fontFamily: "var(--font-body)" }}>Vrijblijvend &amp; vertrouwelijk</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Calendar size={14} variant="Linear" color="#23B9C4" />
                      <span style={{ fontFamily: "var(--font-body)" }}>Op locatie of in showroom</span>
                    </li>
                  </ul>

                  <div className="my-5 h-px bg-white/[0.08]" />

                  <ul className="space-y-2.5 text-[12px] text-white/55">
                    {benefits.map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <Check className="h-3 w-3 shrink-0 text-[#23B9C4]" />
                        <span style={{ fontFamily: "var(--font-body)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* BOTTOM: Contact */}
                <div className="mt-8 space-y-2.5 border-t border-white/[0.08] pt-5">
                  <a
                    href="#showroom"
                    className="flex items-center gap-2.5 text-[12px] text-white/50 transition-colors duration-200 hover:text-white/80"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <House className="h-3.5 w-3.5 shrink-0 text-[#23B9C4]" />
                    <span>{kc.contact.address}, Utrecht</span>
                  </a>
                  <a
                    href={kc.contact.phoneHref}
                    className="flex items-center gap-2.5 text-[12px] text-white/50 transition-colors duration-200 hover:text-white/80"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <Phone className="h-3.5 w-3.5 shrink-0 text-[#23B9C4]" />
                    <span>{kc.contact.phone}</span>
                  </a>
                  <a
                    href={`mailto:${kc.contact.email}`}
                    className="flex items-center gap-2.5 text-[12px] text-white/50 transition-colors duration-200 hover:text-white/80"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0 text-[#23B9C4]" />
                    <span>{kc.contact.email}</span>
                  </a>
                </div>
              </aside>

              {/* ── Form Area (light right) ────────────────────────── */}
              <div className="bg-white p-7 md:p-9">
                {!submitted ? (
                  <>
                    {/* Form header */}
                    <div className="mb-7">
                      <span
                        className="text-[0.6rem] font-semibold uppercase tracking-[0.28em]"
                        style={{ color: "#163847", fontFamily: "var(--font-body)" }}
                      >
                        Consultation Request
                      </span>
                      <h3
                        className="mt-3 font-serif text-[clamp(1.5rem,2.4vw,2rem)] font-light leading-[1.1] tracking-[-0.025em]"
                        style={{ color: "#1a1410" }}
                      >
                        Vertel ons kort wat u wilt bespreken.
                      </h3>
                    </div>

                    {/* Form */}
                    <form
                      className="space-y-4"
                      onSubmit={(event) => {
                        event.preventDefault();
                        if (!isValid) return;
                        setSubmitted(true);
                      }}
                    >
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <label
                            className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.2em]"
                            style={{ color: "#163847", fontFamily: "var(--font-body)" }}
                          >
                            Volledige naam
                          </label>
                          <Input
                            value={form.name}
                            onChange={updateField("name")}
                            placeholder="Uw volledige naam"
                            className="h-[50px] rounded-lg border-[#D9D2C3] bg-white px-4 text-[0.9rem] text-[#1f1a12] placeholder:text-[#9c9180] focus-visible:border-[#23B9C4] focus-visible:ring-[rgba(35,185,196,0.12)]"
                          />
                        </div>
                        <div>
                          <label
                            className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.2em]"
                            style={{ color: "#163847", fontFamily: "var(--font-body)" }}
                          >
                            E-mailadres
                          </label>
                          <Input
                            type="email"
                            value={form.email}
                            onChange={updateField("email")}
                            placeholder="naam@voorbeeld.nl"
                            className="h-[50px] rounded-lg border-[#D9D2C3] bg-white px-4 text-[0.9rem] text-[#1f1a12] placeholder:text-[#9c9180] focus-visible:border-[#23B9C4] focus-visible:ring-[rgba(35,185,196,0.12)]"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.2em]"
                          style={{ color: "#163847", fontFamily: "var(--font-body)" }}
                        >
                          Telefoonnummer
                        </label>
                        <Input
                          type="tel"
                          value={form.phone}
                          onChange={updateField("phone")}
                          placeholder="+31 …"
                          className="h-[50px] rounded-lg border-[#D9D2C3] bg-white px-4 text-[0.9rem] text-[#1f1a12] placeholder:text-[#9c9180] focus-visible:border-[#23B9C4] focus-visible:ring-[rgba(35,185,196,0.12)]"
                        />
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="grid gap-2">
                          <label
                            className="text-[10px] font-semibold uppercase tracking-[0.2em]"
                            style={{ color: "#163847", fontFamily: "var(--font-body)" }}
                          >
                            Voorkeur showroom
                          </label>
                          <Select
                            value={form.showroom}
                            onValueChange={(value) =>
                              setForm((current) => ({ ...current, showroom: value }))
                            }
                          >
                            <SelectTrigger className="h-[50px] rounded-lg border-[#D9D2C3] bg-white px-4 text-[0.9rem] text-[#1f1a12]">
                              <SelectValue placeholder="Selecteer showroom" />
                            </SelectTrigger>
                            <SelectContent className="rounded-lg border-[#D9D2C3] bg-white">
                              <SelectItem value="Utrecht, Zonnebaan 8">Utrecht, Zonnebaan 8</SelectItem>
                              <SelectItem value="Video consultation">Video consultation</SelectItem>
                              <SelectItem value="Telefonisch intakegesprek">Telefonisch intakegesprek</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid gap-2">
                          <label
                            className="text-[10px] font-semibold uppercase tracking-[0.2em]"
                            style={{ color: "#163847", fontFamily: "var(--font-body)" }}
                          >
                            Projectbudget
                          </label>
                          <Select
                            value={form.budget}
                            onValueChange={(value) =>
                              setForm((current) => ({ ...current, budget: value }))
                            }
                          >
                            <SelectTrigger className="h-[50px] rounded-lg border-[#D9D2C3] bg-white px-4 text-[0.9rem] text-[#1f1a12]">
                              <SelectValue placeholder="Selecteer budget" />
                            </SelectTrigger>
                            <SelectContent className="rounded-lg border-[#D9D2C3] bg-white">
                              {kc.config.budgets.map((budget) => (
                                <SelectItem key={budget.id} value={budget.label}>
                                  {budget.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label
                          className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.2em]"
                          style={{ color: "#163847", fontFamily: "var(--font-body)" }}
                        >
                          Gewenste datum
                        </label>
                        <Input
                          type="date"
                          value={form.date}
                          onChange={updateField("date")}
                          className="h-[50px] rounded-lg border-[#D9D2C3] bg-white px-4 text-[0.9rem] text-[#1f1a12] focus-visible:border-[#23B9C4] focus-visible:ring-[rgba(35,185,196,0.12)]"
                        />
                      </div>

                      <div>
                        <label
                          className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.2em]"
                          style={{ color: "#163847", fontFamily: "var(--font-body)" }}
                        >
                          Uw bericht
                        </label>
                        <Textarea
                          value={form.notes}
                          onChange={updateField("notes")}
                          placeholder="Vertel iets over uw woning, stijlvoorkeur, planning of budgetrichting."
                          className="min-h-[100px] resize-none rounded-lg border-[#D9D2C3] bg-white px-4 py-3 text-[0.9rem] text-[#1f1a12] placeholder:text-[#9c9180] focus-visible:border-[#23B9C4] focus-visible:ring-[rgba(35,185,196,0.12)]"
                        />
                      </div>

                      {/* Trust metrics */}
                      <div className="grid grid-cols-2 gap-3 border-t border-[#EFE8D9] pt-5 md:grid-cols-4">
                        {trustMetrics.map((metric) => (
                          <div key={metric.label} className="text-center">
                            <span
                              className="block font-serif text-[1.05rem] font-light tracking-tight"
                              style={{ color: "#1a1410" }}
                            >
                              {metric.value}
                            </span>
                            <span
                              className="mt-0.5 block text-[0.55rem] font-semibold uppercase tracking-[0.18em]"
                              style={{ color: "#7a6a4a", fontFamily: "var(--font-body)" }}
                            >
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Submit row */}
                      <div className="flex flex-col items-stretch gap-3 border-t border-[#EFE8D9] pt-5 sm:flex-row sm:items-center sm:justify-between">
                        <p
                          className="text-[11px] leading-relaxed"
                          style={{ color: "#7a6a4a", fontFamily: "var(--font-body)" }}
                        >
                          Door te verzenden gaat u akkoord met ons vertrouwelijkheidsbeleid.
                        </p>
                        <button
                          type="submit"
                          disabled={!isValid}
                          className="group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium tracking-wide text-white transition-all duration-[250ms] hover:bg-[#1A9AA4] disabled:cursor-not-allowed disabled:opacity-50"
                          style={{
                            background: "#23B9C4",
                            boxShadow: "0 12px 28px -14px rgba(35,185,196,0.45)",
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          Plan Consultation
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  /* ── Success state ────────────────────────────────── */
                  <div className="flex min-h-[500px] flex-col items-start justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#23B9C4]/30 bg-[rgba(35,185,196,0.06)] text-[#23B9C4]">
                      <Check className="h-6 w-6" />
                    </div>
                    <span
                      className="mt-6 text-[0.6rem] font-light uppercase tracking-[0.28em] text-[#23B9C4]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Aanvraag ontvangen
                    </span>
                    <h3 className="mt-3 font-serif text-[clamp(1.8rem,2.8vw,2.4rem)] font-light leading-[1.1] tracking-[-0.03em] text-[#081321]">
                      Dank u, {form.name.split(" ")[0] || "u"}.
                    </h3>
                    <p
                      className="mt-5 max-w-[400px] text-[0.95rem] font-light leading-[1.8] text-[#081321]/65"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Uw aanvraag is opgeslagen. Een adviseur van Keuken-Centrum Utrecht neemt contact
                      op via {form.email} om een geschikt moment in de showroom af te stemmen.
                    </p>
                    <div className="mt-6 w-full space-y-3 border-t border-[#EFE8D9] pt-5">
                      {[
                        { label: "Showroom", value: form.showroom },
                        { label: "Budget", value: form.budget || "-" },
                        { label: "Gewenste datum", value: form.date || "-" },
                      ].map((row) => (
                        <div
                          key={row.label}
                          className="flex items-center justify-between gap-4 text-[0.88rem]"
                        >
                          <span
                            className="text-[0.62rem] uppercase tracking-[0.18em] text-[#081321]/45"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            {row.label}
                          </span>
                          <span className="font-light text-[#081321]/80">{row.value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <Button asChild className="h-[54px] rounded-full px-10">
                        <a href="#showroom">
                          Bekijk Showroom
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="h-[54px] rounded-full border-[#081321]/15 px-10 text-[#081321] hover:border-[#23B9C4] hover:text-[#23B9C4]"
                      >
                        <a href={kc.contact.phoneHref}>Bel Direct</a>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── What Happens Next ─────────────────────────────────── */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : staggerSlow}
          className="mt-10"
        >
          <motion.p
            variants={reduceMotion ? undefined : fadeUp}
            className="mb-6 text-[0.6rem] font-semibold uppercase tracking-[0.28em]"
            style={{ color: "rgba(22,56,71,0.40)", fontFamily: "var(--font-body)" }}
          >
            What Happens Next
          </motion.p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {whatHappensNext.map((step) => (
              <motion.div
                key={step.n}
                variants={reduceMotion ? undefined : fadeUp}
                className="rounded-[18px] border border-[#D4ECF0] bg-white px-5 py-5 transition-all duration-300 hover:border-[rgba(35,185,196,0.5)] hover:shadow-[0_14px_32px_-16px_rgba(35,185,196,0.15)]"
              >
                <span
                  className="font-serif text-[1.3rem] font-light tracking-tight"
                  style={{ color: "#23B9C4" }}
                >
                  {step.n}
                </span>
                <p
                  className="mt-2 font-serif text-[0.92rem] font-light leading-[1.3]"
                  style={{ color: "#1a1410" }}
                >
                  {step.title}
                </p>
                <p
                  className="mt-1.5 text-[0.72rem] font-light leading-[1.55]"
                  style={{ color: "rgba(26,20,16,0.55)", fontFamily: "var(--font-body)" }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
