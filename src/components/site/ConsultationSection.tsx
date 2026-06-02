"use client";

import { useState } from "react";
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
import { kc } from "@/lib/kc-data";
import { motionViewport } from "@/lib/motion";

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

// ─── Motion ───────────────────────────────────────────────────────────────────

const luxuryEase = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: luxuryEase },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const staggerSlow: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

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
    <section
      id="consultation"
      className="relative overflow-hidden bg-[#FAF8F4] py-24 text-[#081321] md:py-36"
    >
      {/* ── Layered Architectural Atmosphere ──────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,169,107,0.06),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(8,19,33,0.03),transparent_40%)]"
      />
      {/* Grain texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='consult-grain'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/></filter><rect width='160' height='160' filter='url(%23consult-grain)'/></svg>")`,
        }}
      />
      {/* Top hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,169,107,0.15)] to-transparent"
      />
      {/* Bottom hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,169,107,0.1)] to-transparent"
      />

      <div className="site-container relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
          {/* ── LEFT COLUMN: Premium Showroom Storytelling ──────────────── */}
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={motionViewport}
            variants={reduceMotion ? undefined : staggerContainer}
            className="flex flex-col justify-between"
          >
            {/* Showroom image with overlay */}
            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="relative overflow-hidden rounded-[24px] mb-10 shadow-[0_20px_50px_-24px_rgba(8,19,33,0.15)]"
            >
              <img
                src={kc.showroomImg}
                alt="Keuken-Centrum Utrecht showroom"
                className="h-[320px] w-full object-cover md:h-[380px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081321] via-[#081321]/45 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <span
                  className="text-[0.6rem] font-light uppercase tracking-[0.3em] text-[#C8A96B]"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  Step 05 of 05
                </span>
                <h2 className="mt-2 font-serif text-[clamp(1.8rem,3vw,2.4rem)] font-light leading-[1.1] tracking-[-0.025em] text-white">
                  Boek uw{" "}
                  <em className="italic text-[#C8A96B] font-light">ontwerpconsult</em>
                </h2>
              </div>
            </motion.div>

            {/* Body text */}
            <motion.p
              variants={reduceMotion ? undefined : fadeUp}
              className="mb-8 max-w-[440px] text-[0.95rem] font-light leading-[1.8] text-[#081321]/70"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Neem uw eerste keuzes mee naar de showroom in Utrecht en bespreek ze met een
              adviseur die materiaal, routing, apparatuur en budget zorgvuldig met u doorneemt.
            </motion.p>

            {/* Benefits checklist */}
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : staggerSlow}
              className="mb-10 space-y-3"
            >
              <motion.p
                variants={reduceMotion ? undefined : fadeUp}
                className="text-[0.6rem] font-light uppercase tracking-[0.28em] text-[#081321]/50 mb-4"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                What you will receive
              </motion.p>
              {benefits.map((item) => (
                <motion.div
                  key={item}
                  variants={reduceMotion ? undefined : fadeUp}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#C8A96B]/30 bg-[#C8A96B]/8 text-[#C8A96B]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span
                    className="text-[0.88rem] font-light text-[#081321]/80"
                    style={{ fontFamily: "'Jost', sans-serif" }}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact links */}
            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="space-y-3 border-t border-[#081321]/10 pt-6"
            >
              <a
                href="#showroom"
                className="flex items-center gap-3 rounded-[14px] border border-[#081321]/8 bg-white px-5 py-4 transition-all duration-300 hover:border-[#C8A96B]/40 hover:shadow-[0_12px_28px_-12px_rgba(8,19,33,0.12)]"
              >
                <House className="h-4 w-4 text-[#C8A96B]" />
                <div>
                  <p
                    className="text-[0.6rem] uppercase tracking-[0.18em] text-[#081321]/40"
                    style={{ fontFamily: "'Jost', sans-serif" }}
                  >
                    Showroom
                  </p>
                  <p className="mt-0.5 text-[0.88rem] font-light text-[#081321]">
                    {kc.contact.address}, Utrecht
                  </p>
                </div>
              </a>
              <a
                href={kc.contact.phoneHref}
                className="flex items-center gap-3 rounded-[14px] border border-[#081321]/8 bg-white px-5 py-4 transition-all duration-300 hover:border-[#C8A96B]/40 hover:shadow-[0_12px_28px_-12px_rgba(8,19,33,0.12)]"
              >
                <Phone className="h-4 w-4 text-[#C8A96B]" />
                <div>
                  <p
                    className="text-[0.6rem] uppercase tracking-[0.18em] text-[#081321]/40"
                    style={{ fontFamily: "'Jost', sans-serif" }}
                  >
                    Telefoon
                  </p>
                  <p className="mt-0.5 text-[0.88rem] font-light text-[#081321]">
                    {kc.contact.phone}
                  </p>
                </div>
              </a>
              <a
                href={`mailto:${kc.contact.email}`}
                className="flex items-center gap-3 rounded-[14px] border border-[#081321]/8 bg-white px-5 py-4 transition-all duration-300 hover:border-[#C8A96B]/40 hover:shadow-[0_12px_28px_-12px_rgba(8,19,33,0.12)]"
              >
                <Mail className="h-4 w-4 text-[#C8A96B]" />
                <div>
                  <p
                    className="text-[0.6rem] uppercase tracking-[0.18em] text-[#081321]/40"
                    style={{ fontFamily: "'Jost', sans-serif" }}
                  >
                    E-mail
                  </p>
                  <p className="mt-0.5 text-[0.88rem] font-light text-[#081321]">
                    {kc.contact.email}
                  </p>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN: Luxury Consultation Card ──────────────── */}
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={motionViewport}
            variants={reduceMotion ? undefined : staggerContainer}
          >
            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="rounded-[32px] border border-[rgba(200,169,107,0.22)] bg-white p-8 shadow-[0_24px_68px_-28px_rgba(8,21,36,0.08)] md:p-10 transition-shadow duration-500 hover:shadow-[0_32px_80px_-24px_rgba(200,169,107,0.14)]"
            >
              {!submitted ? (
                <>
                  {/* Card header */}
                  <div className="mb-8">
                    <span
                      className="text-[0.6rem] font-light uppercase tracking-[0.28em] text-[#C8A96B]"
                      style={{ fontFamily: "'Jost', sans-serif" }}
                    >
                      Consultation Request
                    </span>
                    <h3 className="mt-3 font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] font-light leading-[1.1] tracking-[-0.03em] text-[#081321]">
                      Vertel ons kort wat u wilt bespreken.
                    </h3>
                  </div>

                  {/* Premium form */}
                  <form
                    className="space-y-5"
                    onSubmit={(event) => {
                      event.preventDefault();
                      if (!isValid) return;
                      setSubmitted(true);
                    }}
                  >
                    <div className="grid gap-5 md:grid-cols-2">
                      <Input
                        value={form.name}
                        onChange={updateField("name")}
                        placeholder="Volledige naam"
                        className="h-[56px] rounded-[18px] border-[#081321]/10 bg-white px-5 text-[0.92rem] text-[#081321] placeholder:text-[#081321]/35 focus-visible:border-[#C8A96B] focus-visible:ring-[#C8A96B]/15"
                      />
                      <Input
                        type="email"
                        value={form.email}
                        onChange={updateField("email")}
                        placeholder="E-mailadres"
                        className="h-[56px] rounded-[18px] border-[#081321]/10 bg-white px-5 text-[0.92rem] text-[#081321] placeholder:text-[#081321]/35 focus-visible:border-[#C8A96B] focus-visible:ring-[#C8A96B]/15"
                      />
                    </div>
                    <Input
                      type="tel"
                      value={form.phone}
                      onChange={updateField("phone")}
                      placeholder="Telefoonnummer"
                      className="h-[56px] rounded-[18px] border-[#081321]/10 bg-white px-5 text-[0.92rem] text-[#081321] placeholder:text-[#081321]/35 focus-visible:border-[#C8A96B] focus-visible:ring-[#C8A96B]/15"
                    />
                    <div className="grid gap-5 md:grid-cols-2">
                      <div className="grid gap-2">
                        <label
                          className="text-[0.62rem] font-light uppercase tracking-[0.2em] text-[#081321]/55"
                          style={{ fontFamily: "'Jost', sans-serif" }}
                        >
                          Voorkeur showroom
                        </label>
                        <Select
                          value={form.showroom}
                          onValueChange={(value) =>
                            setForm((current) => ({ ...current, showroom: value }))
                          }
                        >
                          <SelectTrigger className="h-[56px] rounded-[18px] border-[#081321]/10 bg-white px-5 text-[0.92rem] text-[#081321]">
                            <SelectValue placeholder="Selecteer showroom" />
                          </SelectTrigger>
                          <SelectContent className="rounded-[14px] border-[#081321]/10 bg-white">
                            <SelectItem value="Utrecht, Zonnebaan 8">Utrecht, Zonnebaan 8</SelectItem>
                            <SelectItem value="Video consultation">Video consultation</SelectItem>
                            <SelectItem value="Telefonisch intakegesprek">Telefonisch intakegesprek</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <label
                          className="text-[0.62rem] font-light uppercase tracking-[0.2em] text-[#081321]/55"
                          style={{ fontFamily: "'Jost', sans-serif" }}
                        >
                          Projectbudget
                        </label>
                        <Select
                          value={form.budget}
                          onValueChange={(value) =>
                            setForm((current) => ({ ...current, budget: value }))
                          }
                        >
                          <SelectTrigger className="h-[56px] rounded-[18px] border-[#081321]/10 bg-white px-5 text-[0.92rem] text-[#081321]">
                            <SelectValue placeholder="Selecteer budget" />
                          </SelectTrigger>
                          <SelectContent className="rounded-[14px] border-[#081321]/10 bg-white">
                            {kc.config.budgets.map((budget) => (
                              <SelectItem key={budget.id} value={budget.label}>
                                {budget.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <label
                        className="text-[0.62rem] font-light uppercase tracking-[0.2em] text-[#081321]/55"
                        style={{ fontFamily: "'Jost', sans-serif" }}
                      >
                        Gewenste datum
                      </label>
                      <Input
                        type="date"
                        value={form.date}
                        onChange={updateField("date")}
                        className="h-[56px] rounded-[18px] border-[#081321]/10 bg-white px-5 text-[0.92rem] text-[#081321] focus-visible:border-[#C8A96B] focus-visible:ring-[#C8A96B]/15"
                      />
                    </div>
                    <Textarea
                      value={form.notes}
                      onChange={updateField("notes")}
                      placeholder="Vertel iets over uw woning, stijlvoorkeur, planning of budgetrichting."
                      className="min-h-[110px] rounded-[18px] border-[#081321]/10 bg-white px-5 py-4 text-[0.92rem] text-[#081321] placeholder:text-[#081321]/35 focus-visible:border-[#C8A96B] focus-visible:ring-[#C8A96B]/15"
                    />

                    {/* Trust metrics above submit */}
                    <div className="grid grid-cols-2 gap-4 border-t border-[#081321]/8 pt-6 md:grid-cols-4">
                      {trustMetrics.map((metric) => (
                        <div key={metric.label} className="text-center">
                          <span className="block font-serif text-[1.1rem] font-light tracking-tight text-[#081321]">
                            {metric.value}
                          </span>
                          <span
                            className="mt-0.5 block text-[0.56rem] font-light uppercase tracking-[0.18em] text-[#081321]/45"
                            style={{ fontFamily: "'Jost', sans-serif" }}
                          >
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Submit area */}
                    <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                      <p
                        className="max-w-[240px] text-[0.78rem] font-light leading-[1.65] text-[#081321]/50"
                        style={{ fontFamily: "'Jost', sans-serif" }}
                      >
                        We reageren doorgaans binnen 24 uur met een passend voorstel.
                      </p>
                      <Button
                        type="submit"
                        className="h-[54px] min-w-[200px] rounded-full px-10"
                        disabled={!isValid}
                      >
                        Plan Consultation
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </>
              ) : (
                /* ── Success state ──────────────────────── */
                <div className="flex min-h-[500px] flex-col items-start justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C8A96B]/30 bg-[#C8A96B]/8 text-[#C8A96B]">
                    <Check className="h-6 w-6" />
                  </div>
                  <span
                    className="mt-6 text-[0.6rem] font-light uppercase tracking-[0.28em] text-[#C8A96B]"
                    style={{ fontFamily: "'Jost', sans-serif" }}
                  >
                    Aanvraag ontvangen
                  </span>
                  <h3 className="mt-3 font-serif text-[clamp(1.8rem,2.8vw,2.4rem)] font-light leading-[1.1] tracking-[-0.03em] text-[#081321]">
                    Dank u, {form.name.split(" ")[0] || "u"}.
                  </h3>
                  <p
                    className="mt-5 max-w-[400px] text-[0.95rem] font-light leading-[1.8] text-[#081321]/65"
                    style={{ fontFamily: "'Jost', sans-serif" }}
                  >
                    Uw aanvraag is opgeslagen. Een adviseur van Keuken-Centrum Utrecht neemt contact
                    op via {form.email} om een geschikt moment in de showroom af te stemmen.
                  </p>
                  <div className="mt-6 w-full space-y-3 border-t border-[#081321]/8 pt-5">
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
                          style={{ fontFamily: "'Jost', sans-serif" }}
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
                    <Button asChild variant="outline" className="h-[54px] rounded-full px-10 border-[#081321]/15 text-[#081321] hover:border-[#C8A96B] hover:text-[#C8A96B]">
                      <a href={kc.contact.phoneHref}>Bel Direct</a>
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>

            {/* ── What Happens Next Timeline ──────────────── */}
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : staggerSlow}
              className="mt-10"
            >
              <motion.p
                variants={reduceMotion ? undefined : fadeUp}
                className="mb-6 text-[0.6rem] font-light uppercase tracking-[0.28em] text-[#081321]/50"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                What Happens Next
              </motion.p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {whatHappensNext.map((step) => (
                  <motion.div
                    key={step.n}
                    variants={reduceMotion ? undefined : fadeUp}
                    className="rounded-[18px] border border-[#081321]/8 bg-white px-5 py-5 transition-all duration-300 hover:border-[#C8A96B]/30 hover:shadow-[0_14px_32px_-16px_rgba(8,19,33,0.15)]"
                  >
                    <span className="font-serif text-[1.3rem] font-light tracking-tight text-[#C8A96B]">
                      {step.n}
                    </span>
                    <p className="mt-2 font-serif text-[0.92rem] font-light leading-[1.3] text-[#081321]">
                      {step.title}
                    </p>
                    <p
                      className="mt-1.5 text-[0.72rem] font-light leading-[1.55] text-[#081321]/60"
                      style={{ fontFamily: "'Jost', sans-serif" }}
                    >
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
