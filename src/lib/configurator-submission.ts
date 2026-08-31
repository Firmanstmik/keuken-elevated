type SubmissionConfig = {
  ajaxUrl: string;
  consultationUrl: string;
};

type ConsultationSubmission = {
  name: string;
  email: string;
  phone: string;
  showroom: string;
  date: string;
  notes: string;
  config: unknown;
};

function getSubmissionConfig(): SubmissionConfig {
  const baseUrl = import.meta.env.VITE_WP_BASE_URL || "";
  const ajaxUrl =
    import.meta.env.VITE_WP_AJAX_URL ||
    new URL("/wp-admin/admin-ajax.php", baseUrl || window.location.origin).toString();
  const consultationUrl =
    import.meta.env.VITE_WP_CONSULTATION_URL ||
    new URL("/consultation/", baseUrl || window.location.origin).toString();

  return { ajaxUrl, consultationUrl };
}

function usesSameOrigin(url: string) {
  return new URL(url, window.location.href).origin === window.location.origin;
}

async function getConsultationNonce(consultationUrl: string) {
  const response = await fetch(consultationUrl, {
    credentials: usesSameOrigin(consultationUrl) ? "same-origin" : "omit",
    headers: { Accept: "text/html" },
  });

  if (!response.ok) {
    throw new Error("De consultatiepagina kon niet worden geladen.");
  }

  const html = await response.text();
  const document = new DOMParser().parseFromString(html, "text/html");
  const nonce =
    document.querySelector<HTMLInputElement>('[name="nonce"]')?.value ||
    document.querySelector<HTMLElement>("[data-consultation-form]")?.dataset.nonce;

  if (!nonce) {
    throw new Error("De beveiligde consultatieverbinding kon niet worden voorbereid.");
  }

  return nonce;
}

export async function submitConfiguratorConsultation(submission: ConsultationSubmission) {
  const { ajaxUrl, consultationUrl } = getSubmissionConfig();
  const nonce =
    import.meta.env.VITE_WP_CONSULTATION_NONCE || (await getConsultationNonce(consultationUrl));
  const payload = new FormData();

  payload.append("action", "kc_consultation_submit");
  payload.append("nonce", nonce);
  payload.append("name", submission.name);
  payload.append("email", submission.email);
  payload.append("phone", submission.phone);
  payload.append("showroom", submission.showroom);
  payload.append("budget", "");
  payload.append("date", submission.date);
  payload.append("notes", submission.notes);
  payload.append("company_website", "");
  payload.append("config_json", JSON.stringify(submission.config));

  const response = await fetch(ajaxUrl, {
    method: "POST",
    body: payload,
    credentials: usesSameOrigin(ajaxUrl) ? "same-origin" : "omit",
    headers: { Accept: "application/json" },
  });
  const result = (await response.json().catch(() => null)) as {
    success?: boolean;
    data?: { delivered?: boolean; message?: string };
  } | null;

  if (!response.ok || !result?.success || !result.data?.delivered) {
    throw new Error(
      result?.data?.message ||
        "Uw aanvraag kon niet worden verzonden. Probeer het later opnieuw of bel de showroom.",
    );
  }
}
