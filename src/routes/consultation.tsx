import { useEffect, useMemo, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown2, Calendar, Call, TickCircle, User } from "@zethictech/iconsax-react";
import { SelectionPreview } from "@/components/configurator/SelectionPreview";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FlowNav } from "@/components/configurator/FlowNav";
import { useConfigurator } from "@/context/configurator-context";
import {
  masterBrands,
  masterCategories,
  masterGoogleReviewMeta,
  masterShowrooms,
  masterStyles,
} from "@/lib/master-config-data";
import { submitConfiguratorConsultation } from "@/lib/configurator-submission";

export const Route = createFileRoute("/consultation")({
  component: ConsultationPage,
});

type FormData = {
  name: string;
  email: string;
  phone: string;
  showroom: string;
  date: string;
  notes: string;
};

function ConsultationPage() {
  const { config } = useConfigurator();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [attempted, setAttempted] = useState(false);
  const [submissionPending, setSubmissionPending] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [proposalOpen, setProposalOpen] = useState(false);
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    showroom: "",
    date: "",
    notes: "",
  });
  const selectedBrand = useMemo(
    () => masterBrands.find((brand) => brand.id === config.brand) ?? null,
    [config.brand],
  );
  const selectedStyle = useMemo(
    () => masterStyles.find((style) => style.id === config.style) ?? null,
    [config.style],
  );
  const configuredCount = useMemo(
    () => masterCategories.filter((category) => config.selections[category.id]).length,
    [config.selections],
  );
  const selectedMaterials = useMemo(
    () =>
      masterCategories
        .map((category) => {
          const selection = config.selections[category.id];
          if (!selection) return null;

          return {
            label: category.label,
            value: selection.name,
            color: selection.color,
          };
        })
        .filter((item): item is { label: string; value: string; color: string } => item !== null),
    [config.selections],
  );
  const heroImage = selectedStyle?.image ?? selectedBrand?.image ?? "/consultation-showroom.webp";

  useEffect(() => {
    if (!config.brand) {
      navigate({ to: "/brands" });
      return;
    }
    if (!config.style) {
      navigate({ to: "/style" });
      return;
    }
  }, [config.brand, config.style, navigate]);

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const isValid = Boolean(form.name.trim() && emailIsValid && form.showroom);

  return (
    <main className="min-h-screen bg-[#F7F5F2]">
      <FlowNav />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative min-h-screen md:h-screen md:overflow-hidden"
      >
        <div className="grid min-h-screen md:h-screen md:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className={`consultation-hero relative min-h-[340px] ${submitted ? "hidden md:block" : "block"}`}
          >
            <div className="relative h-[300px] overflow-hidden md:sticky md:top-0 md:h-screen">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImage})` }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,27,0.28)_0%,rgba(7,17,27,0.14)_18%,rgba(7,17,27,0.44)_100%)]" />
              <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(7,17,27,0.52)_0%,rgba(7,17,27,0.22)_42%,rgba(7,17,27,0)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(180deg,rgba(7,17,27,0)_0%,rgba(7,17,27,0.18)_26%,rgba(7,17,27,0.62)_100%)]" />

              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-10">
                <div className="max-w-[36rem]">
                  <p className="mb-3 block text-[0.7rem] uppercase tracking-[0.28em] text-[#D1AF78]">
                    Ontwerpconsultatie
                  </p>
                  <h1
                    className="max-w-[26rem] text-[2rem] leading-[0.98] tracking-[-0.03em] text-[#F7F5F2] md:text-[3rem]"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    {config.brandName ?? "Uw"}{" "}
                    {config.styleName ? `${config.styleName.toLowerCase()} ` : ""}
                    keukenvoorstel
                  </h1>

                  <p className="mt-4 hidden max-w-[31rem] text-[0.98rem] leading-[1.8] text-[rgba(247,245,242,0.76)] sm:block">
                    Uw configuratie is klaar voor de laatste bespreking. Plan uw afspraak en ontvang
                    een verfijnd ontwerpvoorstel dat aansluit op uw gekozen materialen en stijl.
                  </p>

                  <div className="mt-6 hidden max-w-[34rem] gap-x-8 gap-y-3 sm:grid sm:grid-cols-2">
                    {[
                      { icon: <PersonMark />, text: "Persoonlijk ontwerpadvies" },
                      { icon: <CalendarMark />, text: "Flexibele afspraakplanning" },
                      { icon: <PhoneMark />, text: "Showroom of online consultatie" },
                      {
                        icon: <CheckCircleMark />,
                        text: `${configuredCount} details samengesteld`,
                      },
                    ].map((item) => (
                      <div
                        key={item.text}
                        className="flex items-center gap-2.5 border-b border-[rgba(247,245,242,0.12)] pb-3"
                      >
                        <span className="text-[#D1AF78]">{item.icon}</span>
                        <span className="text-[0.88rem] text-[rgba(247,245,242,0.82)]">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
            className="bg-[#F7F5F2] md:h-screen md:overflow-y-auto"
          >
            <div className="mx-auto w-full max-w-[760px] px-4 pb-28 pt-8 md:px-8 md:pb-16 md:pt-32 lg:px-10">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.5 }}
                  >
                    <button
                      type="button"
                      onClick={() => setProposalOpen((open) => !open)}
                      aria-expanded={proposalOpen}
                      className="mb-4 flex min-h-14 w-full items-center justify-between rounded-[18px] border border-black/[0.08] bg-white/75 px-4 text-left md:hidden"
                    >
                      <span>
                        <span className="block text-xs font-medium text-[#789d48]">
                          Uw voorstel
                        </span>
                        <span className="mt-0.5 block text-sm font-semibold text-[#171917]">
                          {configuredCount} keuzes controleren
                        </span>
                      </span>
                      <ArrowDown2
                        size={19}
                        variant="Linear"
                        className={`transition-transform ${proposalOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div className={proposalOpen ? "block" : "hidden md:block"}>
                      <SelectionPreview
                        overline="Stap 05 laatste controle"
                        title={`${config.brandName ?? "Uw"} keukenconsultatie`}
                        description="Controleer uw merk, stijl en geselecteerde materialen. Alles hieronder vormt de basis voor uw persoonlijke ontwerpgesprek."
                        image={selectedStyle?.image ?? selectedBrand?.image}
                        imageAlt="Laatste projectvoorvertoning"
                        accentColor={selectedBrand?.accentColor ?? "#B08D57"}
                        details={[
                          { label: "Merk", value: config.brandName ?? "Niet gekozen" },
                          { label: "Stijl", value: config.styleName ?? "Niet gekozen" },
                          {
                            label: "Samengestelde onderdelen",
                            value: `${configuredCount} gekozen details`,
                          },
                          {
                            label: "Google beoordeling",
                            value: `${masterGoogleReviewMeta.score} · ${masterGoogleReviewMeta.count} ervaringen`,
                          },
                        ]}
                        selections={selectedMaterials}
                        footerNote="Met het formulier hieronder verstuurt u uw keukenvoorstel naar ons consultatieteam."
                      />
                    </div>

                    <div className="mb-6 mt-8 md:mb-8 md:mt-10">
                      <p className="mb-2 block text-[0.6875rem] uppercase tracking-[0.25em] text-[#B08D57]">
                        Stap 05 van 05
                      </p>
                      <h1
                        className="mb-2 text-[2rem] text-[#111111] md:text-[2.35rem]"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 400,
                          lineHeight: 1.2,
                        }}
                      >
                        Plan een consultatie
                      </h1>
                      <p className="max-w-[42rem] text-[1rem] leading-[1.7] text-[#666666]">
                        Vul het formulier in en uw persoonlijke ontwerpadviseur neemt binnen 24 uur
                        contact met u op om uw project verder uit te werken.
                      </p>
                    </div>

                    <div className="rounded-[24px] border border-[rgba(17,17,17,0.08)] bg-[rgba(255,255,255,0.72)] p-4 shadow-[0_26px_70px_-52px_rgba(17,17,17,0.18)] backdrop-blur-[14px] md:p-6">
                      <form
                        onSubmit={(event) => {
                          event.preventDefault();
                          setAttempted(true);
                          setSubmissionError("");
                          if (!isValid || submissionPending) return;
                          setSubmissionPending(true);
                          void submitConfiguratorConsultation({
                            ...form,
                            config,
                          })
                            .then(() => setSubmitted(true))
                            .catch((error: unknown) => {
                              setSubmissionError(
                                error instanceof Error
                                  ? error.message
                                  : "Uw aanvraag kon niet worden verzonden. Probeer het later opnieuw.",
                              );
                            })
                            .finally(() => setSubmissionPending(false));
                        }}
                        noValidate
                        className="flex flex-col gap-4"
                      >
                        <div>
                          <label
                            htmlFor="consultation-name"
                            className="mb-1.5 block text-sm font-medium text-[#30342d]"
                          >
                            Volledige naam <span className="text-[#789d48]">*</span>
                          </label>
                          <Input
                            id="consultation-name"
                            autoComplete="name"
                            placeholder="Voor- en achternaam"
                            value={form.name}
                            required
                            aria-invalid={attempted && !form.name.trim()}
                            onChange={(event) =>
                              setForm((current) => ({ ...current, name: event.target.value }))
                            }
                          />
                          {attempted && !form.name.trim() ? (
                            <p className="mt-1.5 text-xs text-red-700">Vul uw naam in.</p>
                          ) : null}
                        </div>

                        <div>
                          <label
                            htmlFor="consultation-email"
                            className="mb-1.5 block text-sm font-medium text-[#30342d]"
                          >
                            E-mailadres <span className="text-[#789d48]">*</span>
                          </label>
                          <Input
                            id="consultation-email"
                            type="email"
                            inputMode="email"
                            autoComplete="email"
                            placeholder="naam@voorbeeld.nl"
                            value={form.email}
                            required
                            aria-invalid={attempted && !emailIsValid}
                            onChange={(event) =>
                              setForm((current) => ({ ...current, email: event.target.value }))
                            }
                          />
                          {attempted && !emailIsValid ? (
                            <p className="mt-1.5 text-xs text-red-700">
                              Vul een geldig e-mailadres in.
                            </p>
                          ) : null}
                        </div>

                        <div>
                          <label
                            htmlFor="consultation-phone"
                            className="mb-1.5 block text-sm font-medium text-[#30342d]"
                          >
                            Telefoonnummer{" "}
                            <span className="font-normal text-[#73786e]">(optioneel)</span>
                          </label>
                          <Input
                            id="consultation-phone"
                            type="tel"
                            inputMode="tel"
                            autoComplete="tel"
                            placeholder="06 12345678"
                            value={form.phone}
                            onChange={(event) =>
                              setForm((current) => ({ ...current, phone: event.target.value }))
                            }
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="consultation-showroom"
                            className="mb-1.5 block text-sm font-medium text-[#30342d]"
                          >
                            Gewenste showroom <span className="text-[#789d48]">*</span>
                          </label>
                          <select
                            id="consultation-showroom"
                            value={form.showroom}
                            required
                            aria-invalid={attempted && !form.showroom}
                            onChange={(event) =>
                              setForm((current) => ({ ...current, showroom: event.target.value }))
                            }
                            className="flex h-12 w-full rounded-[16px] border border-input bg-white/82 px-4 py-2 text-[1rem] font-light leading-[1.7] text-[#111111] outline-none"
                          >
                            <option value="">Selecteer een showroom</option>
                            {masterShowrooms.map((showroom) => (
                              <option key={showroom} value={showroom}>
                                {showroom}
                              </option>
                            ))}
                          </select>
                          {attempted && !form.showroom ? (
                            <p className="mt-1.5 text-xs text-red-700">Selecteer een showroom.</p>
                          ) : null}
                        </div>

                        <div>
                          <label
                            htmlFor="consultation-date"
                            className="mb-1.5 block text-sm font-medium text-[#30342d]"
                          >
                            Gewenste datum
                          </label>
                          <Input
                            id="consultation-date"
                            type="date"
                            value={form.date}
                            onChange={(event) =>
                              setForm((current) => ({ ...current, date: event.target.value }))
                            }
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="consultation-notes"
                            className="mb-1.5 block text-sm font-medium text-[#30342d]"
                          >
                            Uw wensen
                          </label>
                          <Textarea
                            id="consultation-notes"
                            placeholder="Vertel ons meer over uw project, planning of specifieke wensen..."
                            value={form.notes}
                            onChange={(event) =>
                              setForm((current) => ({ ...current, notes: event.target.value }))
                            }
                          />
                        </div>

                        <div className="mt-2">
                          {submissionError ? (
                            <p
                              className="mb-3 text-center text-[0.75rem] leading-[1.6] text-red-700"
                              role="alert"
                            >
                              {submissionError}
                            </p>
                          ) : null}
                          <button
                            type="submit"
                            disabled={!isValid || submissionPending}
                            className="inline-flex min-h-14 w-full items-center justify-center rounded-[16px] border px-4 text-[0.8125rem] uppercase tracking-[0.15em] transition-colors duration-300 disabled:cursor-not-allowed"
                            style={{
                              backgroundColor:
                                isValid && !submissionPending ? "#B08D57" : "rgba(0,0,0,0.1)",
                              borderColor:
                                isValid && !submissionPending ? "#B08D57" : "rgba(0,0,0,0.1)",
                              color: isValid && !submissionPending ? "#F7F5F2" : "rgba(0,0,0,0.3)",
                            }}
                          >
                            {submissionPending ? "Aanvraag verzenden..." : "Consultatie plannen"}
                          </button>
                        </div>

                        <p className="mt-1 text-center text-[0.75rem] leading-[1.6] text-[#AAAAAA]">
                          Uw gegevens worden volledig discreet behandeld. Wij delen uw informatie
                          nooit met derden.
                        </p>
                      </form>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex min-h-[70vh] flex-col items-center justify-center py-8 text-center md:min-h-[calc(100vh-9rem)]"
                  >
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
                      className="mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-[20px] border-[1.5px] border-[#B08D57] bg-white/70"
                    >
                      <CheckCircleMark />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <p className="mb-3 block text-[0.6875rem] uppercase tracking-[0.25em] text-[#B08D57]">
                        Consultatie aangevraagd
                      </p>
                      <h1
                        className="mx-auto mb-3 max-w-[420px] text-[2.1rem] text-[#111111] md:text-[2.35rem]"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 400,
                          lineHeight: 1.2,
                        }}
                      >
                        Wij kijken ernaar uit uw droomkeuken te ontwerpen
                      </h1>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <p className="mx-auto mb-2 max-w-[380px] text-[1rem] leading-[1.8] text-[#666666]">
                        Dank u, {form.name.split(" ")[0]}. Uw persoonlijke ontwerpadviseur neemt
                        binnen 24 uur contact met u op om de afspraak te bevestigen.
                      </p>

                      <div className="mx-auto my-5 h-px w-[120px] bg-[#B08D57]" />

                      <p className="mb-1 text-[0.875rem] text-[#999999]">
                        Showroom: <span className="text-[#555555]">{form.showroom}</span>
                      </p>
                      {form.date ? (
                        <p className="mb-5 text-[0.875rem] text-[#999999]">
                          Gewenste datum: <span className="text-[#555555]">{form.date}</span>
                        </p>
                      ) : null}

                      <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-[#B08D57]">
                        Keuken Centrum Utrecht
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}

function PersonMark() {
  return <User size={16} variant="Linear" aria-hidden="true" />;
}

function CalendarMark() {
  return <Calendar size={16} variant="Linear" aria-hidden="true" />;
}

function PhoneMark() {
  return <Call size={16} variant="Linear" aria-hidden="true" />;
}

function CheckCircleMark() {
  return <TickCircle size={32} color="#B08D57" variant="Linear" aria-hidden="true" />;
}
