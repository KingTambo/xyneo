import { profilePresets, services } from "@/data/site";

export type FormPreset = {
  clientType?: string;
  service?: string;
};

/** Slugs acceptés pour ?service= */
export const serviceParamPresets: Record<string, FormPreset> = Object.fromEntries(
  services.map((s) => {
    const slug = s.href.replace(/^\/|\/$/g, "");
    return [slug, { service: s.title }];
  }),
);

serviceParamPresets["nettoyage-matelas"] = { service: "Nettoyage canapé / tapis / matelas" };
serviceParamPresets["nettoyage-tapis"] = { service: "Nettoyage canapé / tapis / matelas" };
serviceParamPresets["fin-chantier"] = profilePresets.btp;
serviceParamPresets["remise-en-etat"] = profilePresets.agence;

export const discreetServiceSlugs = new Set(["nettoyage-diogene", "nettoyage-apres-deces"]);

export const FORM_PRESET_EVENT = "xyneo:form-preset";

export function dispatchFormPreset(preset: FormPreset) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(FORM_PRESET_EVENT, { detail: preset }));
}

export function readFormPresetFromUrl(search = ""): FormPreset {
  if (typeof window === "undefined" && !search) return {};
  const params = new URLSearchParams(search || (typeof window !== "undefined" ? window.location.search : ""));
  const serviceKey = params.get("service");
  const profilKey = params.get("profil");

  if (serviceKey && serviceParamPresets[serviceKey]) {
    return serviceParamPresets[serviceKey];
  }
  if (profilKey && profilePresets[profilKey]) {
    return profilePresets[profilKey];
  }
  return {};
}

export function scrollToFormAnchor(anchorId: string) {
  document.getElementById(anchorId.replace(/^#/, ""))?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function slugToServiceTitle(slug: string): string {
  const preset = serviceParamPresets[slug];
  if (preset?.service) return preset.service;
  const match = services.find((s) => s.href.replace(/^\/|\/$/g, "") === slug);
  return match?.title ?? "";
}
