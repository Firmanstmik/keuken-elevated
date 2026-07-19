"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Export as ArrowUpRight,
  Clock,
  Sms as Mail,
  Location as MapPin,
  Call as Phone,
} from "@zethictech/iconsax-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PremiumPillButton } from "@/components/ui/premium-pill-button";
import { fadeUp, motionEase, motionViewport } from "@/lib/motion";
import { kc } from "@/lib/kc-data";
import showroomImg from "@/assets/showroom.jpg";
import { KitchenEyebrow as Eyebrow } from "@/components/site/KitchenEyebrow";

const luxuryEase = motionEase.premium;

const contactChannels = [
  {
    icon: MapPin,
    label: "Adres",
    value: `${kc.contact.address}, ${kc.contact.postal}`,
    href: kc.contact.maps,
    external: true,
  },
  {
    icon: Phone,
    label: "Telefoonnummer",
    value: kc.contact.phone,
    href: kc.contact.phoneHref,
    external: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: kc.contact.email,
    href: `mailto:${kc.contact.email}`,
    external: false,
  },
];

export function ContactPage() {
  const reduceMotion = useReducedMotion();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const isValid = form.name.trim() !== "" && form.message.trim() !== "" && (form.email.trim() !== "" || form.phone.trim() !== "");

  const handleSubmit = () => {
    const subject = encodeURIComponent(`Contactaanvraag via website: ${form.name}`);
    const body = encodeURIComponent(
      `Naam: ${form.name}\nTelefoonnummer: ${form.phone}\nEmail: ${form.email}\n\nBericht:\n${form.message}`,
    );
    window.location.href = `mailto:${kc.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="brand-page">
      <section className="brand-page-hero relative min-h-[62vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src={showroomImg} alt="Showroom Keuken-Centrum Utrecht" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(10,20,12,0.92)_0%,rgba(10,20,12,0.55)_46%,rgba(10,20,12,0.75)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_85%,rgba(139,197,64,0.16)_0%,transparent_52%)]" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-28 bg-[linear-gradient(180deg,transparent_0%,var(--background)_100%)]" />

        <div className="site-container relative z-[2] flex min-h-[62vh] flex-col justify-end pb-20 pt-40">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={reduceMotion ? undefined : fadeUp}
            className="max-w-[50rem]"
          >
            <Eyebrow light>Contact</Eyebrow>
            <h1 className="mt-6 font-serif text-[clamp(2.8rem,6vw,4.6rem)] leading-[0.98] tracking-[-0.025em] text-white">
              Kom in <em className="italic text-[var(--green-highlight)]">contact</em>
            </h1>
            <p className="mt-6 max-w-[36rem] text-[1.08rem] font-light leading-[1.8] text-[rgba(255,255,255,0.78)]">
              Heb je vragen over een keuken? Laat een bericht achter. Wij staan je graag te woord en nemen vaak
              dezelfde werkdag nog contact op.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-shell">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : fadeUp}
            >
              <Eyebrow>Stuur een bericht</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(1.9rem,3.2vw,2.6rem)] leading-[1.12] text-[var(--secondary)]">
                Laat een bericht achter
              </h2>
              <p className="mt-4 text-[0.98rem] font-light leading-[1.75] text-[var(--text-soft)]">
                Wij nemen vaak dezelfde werkdag nog contact op.
              </p>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  if (isValid) handleSubmit();
                }}
                className="mt-8 flex flex-col gap-3"
              >
                <Input
                  placeholder="Naam"
                  value={form.name}
                  onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                />
                <div className="grid gap-3 sm:grid-cols-2">
                  <Input
                    type="tel"
                    placeholder="Telefoonnummer"
                    value={form.phone}
                    onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                  />
                </div>
                <Textarea
                  placeholder="Bericht"
                  rows={6}
                  value={form.message}
                  onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                />
                <div className="mt-2">
                  <PremiumPillButton
                    size="lg"
                    className={isValid ? "" : "pointer-events-none opacity-50"}
                    type="submit"
                  >
                    Verstuur
                  </PremiumPillButton>
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : fadeUp}
              className="flex flex-col gap-4"
            >
              <div className="rounded-[26px] border border-[rgba(139,197,64,0.16)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(252,251,248,0.86)_100%)] p-7 shadow-[0_22px_60px_-44px_rgba(20,40,18,0.4)]">
                <Eyebrow>Vragen?</Eyebrow>
                <h3 className="mt-4 font-serif text-[1.6rem] leading-[1.15] text-[var(--secondary)]">
                  Wij staan je graag te woord
                </h3>
                <div className="mt-6 flex flex-col gap-3">
                  {contactChannels.map((channel, index) => {
                    const Icon = channel.icon;
                    return (
                      <motion.a
                        key={channel.label}
                        href={channel.href}
                        target={channel.external ? "_blank" : undefined}
                        rel={channel.external ? "noopener noreferrer" : undefined}
                        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                        viewport={motionViewport}
                        transition={{ duration: 0.5, delay: index * 0.08, ease: luxuryEase }}
                        className="group flex items-center gap-4 rounded-[18px] border border-[rgba(139,197,64,0.14)] bg-white/80 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(139,197,64,0.35)] hover:shadow-[0_18px_38px_-28px_rgba(20,40,18,0.45)]"
                      >
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px] border border-[rgba(139,197,64,0.22)] bg-white text-[var(--green)] transition-colors duration-300 group-hover:bg-[var(--green)] group-hover:text-white">
                          <Icon className="h-[1.1rem] w-[1.1rem]" variant="Linear" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[0.6rem] font-medium uppercase tracking-[0.2em] text-[var(--text-soft)]">
                            {channel.label}
                          </span>
                          <span className="mt-0.5 block truncate text-[0.98rem] font-medium text-[var(--secondary)]">
                            {channel.value}
                          </span>
                        </span>
                        <ArrowUpRight
                          className="h-4 w-4 shrink-0 text-[var(--text-soft)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--green)]"
                          variant="Linear"
                        />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[26px] border border-[rgba(168,217,90,0.2)] bg-[linear-gradient(145deg,#142010_0%,#2a4718_100%)] p-7">
                <span
                  className="pointer-events-none absolute -right-3 -bottom-6 font-serif text-[5.5rem] italic leading-none text-[rgba(139,197,64,0.14)]"
                  aria-hidden="true"
                >
                  9 tot 18
                </span>
                <div className="relative z-[1]">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-[12px] border border-[rgba(255,255,255,0.16)] bg-[rgba(255,255,255,0.08)] text-[var(--green-highlight)]">
                      <Clock className="h-[1.05rem] w-[1.05rem]" variant="Linear" />
                    </span>
                    <h3 className="font-serif text-[1.35rem] text-white">Openingstijden</h3>
                  </div>
                  <dl className="mt-5 space-y-2.5">
                    {kc.contact.hours.map((row) => (
                      <div key={row.d} className="flex items-baseline justify-between gap-4 border-b border-[rgba(255,255,255,0.08)] pb-2.5">
                        <dt className="text-[0.9rem] font-light text-[rgba(255,255,255,0.72)]">{row.d}</dt>
                        <dd className="text-[0.9rem] font-medium text-white">{row.h}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-shell !pt-0">
        <div className="site-container">
          <div className="mb-8">
            <Eyebrow>Adres</Eyebrow>
            <h2 className="mt-5 font-serif text-[clamp(1.9rem,3vw,2.5rem)] text-[var(--secondary)]">
              {kc.contact.address}, <em className="italic text-[var(--green)]">{kc.contact.postal}</em>
            </h2>
          </div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={motionViewport}
            transition={{ duration: 0.75, ease: luxuryEase }}
            className="overflow-hidden rounded-[26px] border border-[rgba(139,197,64,0.16)] shadow-[0_28px_70px_-48px_rgba(20,40,18,0.5)]"
          >
            <iframe
              title="Keuken-Centrum Utrecht, Zonnebaan 8, 3542 EC Utrecht"
              src="https://www.google.com/maps?q=Keuken-centrum.nl,+Zonnebaan+8,+3542+EC+Utrecht&output=embed"
              className="h-[26rem] w-full border-0 grayscale-[0.25] transition-[filter] duration-500 hover:grayscale-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      <section className="brand-showroom-cta">
        <div className="site-container">
          <div className="brand-showroom-cta__inner">
            <div className="max-w-[34rem]">
              <Eyebrow light>Showroom Utrecht</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2.1rem,4vw,3.1rem)] text-white">
                Liever <em className="italic text-[var(--green-highlight)]">persoonlijk</em> langskomen?
              </h2>
              <p className="mt-5 text-[1rem] font-light leading-[1.75] text-[rgba(255,255,255,0.75)]">
                Bezoek onze showroom op de Zonnebaan voor persoonlijk advies bij een goede kop koffie.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <PremiumPillButton href="/consultation" size="xl">
                Plan showroombezoek
              </PremiumPillButton>
              <PremiumPillButton href={kc.contact.phoneHref} variant="ghost" size="xl">
                Bel direct
              </PremiumPillButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
