"use client";

import { useState } from "react";

type LazyMapProps = {
  query: string;
  title: string;
};

export default function LazyMap({ query, title }: LazyMapProps) {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <div className="zones-map-lazy">
        <button type="button" className="btn-or zones-map-btn" onClick={() => setLoaded(true)}>
          Voir la carte
        </button>
      </div>
    );
  }

  return (
    <div className="zones-map-full">
      <iframe
        src={`https://maps.google.com/maps?q=${query}&z=11&output=embed&hl=fr`}
        loading="lazy"
        title={title}
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
