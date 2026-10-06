type PhotoPlaceholderProps = {
  /** frame = cadre avec étiquette ; portrait = rond silhouette seule */
  variant?: "frame" | "portrait";
};

function SilhouetteIcon() {
  return (
    <svg className="ph-photo-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="8" r="4" fill="currentColor" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="currentColor" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg className="ph-photo-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M9.5 7h5L15.5 5h-7L9.5 7zm-3 2a2.5 2.5 0 0 0-2.5 2.5v6A2.5 2.5 0 0 0 6.5 20h11a2.5 2.5 0 0 0 2.5-2.5v-6A2.5 2.5 0 0 0 17.5 9h-11zm5.5 2.5A3.5 3.5 0 1 1 9 17a3.5 3.5 0 0 1 3.5-3.5z"
      />
    </svg>
  );
}

/** Emplacement photo client — icône grise, sans inventer de visuel */
export default function PhotoPlaceholder({ variant = "frame" }: PhotoPlaceholderProps) {
  if (variant === "portrait") {
    return (
      <span className="ph-photo ph-photo-portrait" aria-label="Photo à fournir">
        <SilhouetteIcon />
      </span>
    );
  }

  return (
    <span className="ph-photo ph-photo-frame" aria-label="Photo à fournir">
      <span className="ph-photo-tag">À fournir</span>
      <CameraIcon />
    </span>
  );
}
