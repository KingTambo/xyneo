declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** GA4-ready — pousse un événement sans installer de compte */
export function pushDataLayer(payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

export function trackTelClick(href: string) {
  pushDataLayer({
    event: "clic_tel",
    tel_href: href,
  });
}
