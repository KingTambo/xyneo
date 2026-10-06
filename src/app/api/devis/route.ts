import { site } from "@/data/site";
import { NextResponse } from "next/server";

type DevisPayload = {
  _honey?: string;
  nom?: string;
  tel?: string;
  email?: string;
  ville?: string;
  service?: string;
  client_type?: string;
  surface?: string;
  urgence?: string;
  message?: string;
  date_reception?: string;
  pieces_diogene?: string;
  etage_ascenseur?: string;
  page_source?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  gclid?: string;
};

function formatAdminEmail(data: DevisPayload) {
  const lines = [
    "Nouvelle demande de devis — Xyneo",
    "",
    `Nom : ${data.nom || "—"}`,
    `Téléphone : ${data.tel || "—"}`,
    `Email : ${data.email || "—"}`,
    `Ville : ${data.ville || "—"}`,
    `Profil : ${data.client_type || "—"}`,
    `Prestation : ${data.service || "—"}`,
    `Surface : ${data.surface || "—"}`,
    `Quand : ${data.urgence || "—"}`,
    `Date réception prévue : ${data.date_reception || "—"}`,
    `Pièces Diogène : ${data.pieces_diogene || "—"}`,
    `Étage / ascenseur : ${data.etage_ascenseur || "—"}`,
    `Message : ${data.message || "—"}`,
    "",
    `Page : ${data.page_source || "—"}`,
    `UTM : ${[data.utm_source, data.utm_medium, data.utm_campaign].filter(Boolean).join(" / ") || "—"}`,
    `gclid : ${data.gclid || "—"}`,
  ];
  return lines.join("\n");
}

function formatProspectEmail(data: DevisPayload) {
  return [
    `Bonjour ${data.nom || ""},`.trim(),
    "",
    "Nous avons bien reçu votre demande de devis.",
    `${site.ownerFormal} ou son équipe vous rappelle sous 24 h au numéro indiqué.`,
    "",
    "Pour nous envoyer des photos de votre logement ou chantier, répondez à cet email ou écrivez-nous par SMS/WhatsApp.",
    "",
    `${site.name} — ${site.phone}`,
    site.email,
  ].join("\n");
}

async function sendViaResend(payload: {
  to: string[];
  subject: string;
  text: string;
  replyTo?: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const from = process.env.DEVIS_FROM_EMAIL || `${site.name} <onboarding@resend.dev>`;
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: payload.to,
      reply_to: payload.replyTo,
      subject: payload.subject,
      text: payload.text,
    }),
  });

  return response.ok;
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as DevisPayload;

    if (data._honey) {
      return NextResponse.json({ ok: true });
    }

    if (!data.nom?.trim() || !data.tel?.trim() || !data.ville?.trim() || !data.service?.trim()) {
      return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
    }

    const toEmail = process.env.DEVIS_TO_EMAIL || site.email;
    const adminSent = await sendViaResend({
      to: [toEmail],
      subject: `[Devis Xyneo] ${data.service} — ${data.ville} — ${data.nom}`,
      text: formatAdminEmail(data),
      replyTo: data.email?.trim() || undefined,
    });

    if (!adminSent) {
      return NextResponse.json(
        {
          error:
            "Envoi email non configuré. Ajoutez RESEND_API_KEY et DEVIS_TO_EMAIL sur Vercel, ou appelez le " +
            site.phone,
        },
        { status: 503 },
      );
    }

    if (data.email?.trim()) {
      await sendViaResend({
        to: [data.email.trim()],
        subject: `Demande reçue — ${site.name} vous rappelle sous 24 h`,
        text: formatProspectEmail(data),
        replyTo: site.email,
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur lors de l'envoi." }, { status: 500 });
  }
}
