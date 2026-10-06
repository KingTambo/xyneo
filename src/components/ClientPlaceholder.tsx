import type { ReactNode } from "react";

type ClientPlaceholderProps = {
  children: ReactNode;
  className?: string;
  block?: boolean;
};

/** Emplacement client — bordure pointillée, sans inventer de contenu (toujours span pour HTML valide dans p, li, etc.) */
export default function ClientPlaceholder({ children, className = "", block = false }: ClientPlaceholderProps) {
  return (
    <span className={`ph-slot${block ? " ph-slot-block" : ""}${className ? ` ${className}` : ""}`}>{children}</span>
  );
}
