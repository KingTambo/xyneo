"use client";

import Script from "next/script";

export default function ClientScripts() {
  return (
    <>
      <Script src="/js/nav.js" strategy="afterInteractive" />
      <Script src="/js/testi-carousel.js" strategy="afterInteractive" />
      <Script src="/js/forms.js" strategy="afterInteractive" />
      <Script src="/js/utm.js" strategy="afterInteractive" />
      <Script src="/js/zones-search.js" strategy="afterInteractive" />
    </>
  );
}
