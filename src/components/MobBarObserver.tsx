"use client";

import { useEffect } from "react";

/** Masque la barre fixe Appeler / Devis quand un formulaire devis est visible */
export default function MobBarObserver() {
  useEffect(() => {
    const mobBar = document.getElementById("mob-bar");
    if (!mobBar || typeof IntersectionObserver === "undefined") return;

    const forms = document.querySelectorAll('[data-devis-form="true"]');
    if (forms.length === 0) return;

    const visibility = new Map<Element, boolean>();

    const syncBar = () => {
      const anyVisible = [...visibility.values()].some(Boolean);
      mobBar.classList.toggle("mob-bar-hidden", anyVisible);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(entry.target, entry.isIntersecting);
        });
        syncBar();
      },
      { root: null, rootMargin: "0px", threshold: 0.08 },
    );

    forms.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
