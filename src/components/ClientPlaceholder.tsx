import type { ReactNode } from "react";

type ClientPlaceholderProps = {
  children: ReactNode;
  className?: string;
  block?: boolean;
};

/** Emplacement client — bordure pointillée, sans inventer de contenu */
export default function ClientPlaceholder({ children, className = "", block = false }: ClientPlaceholderProps) {
  const Tag = block ? "div" : "span";
  return (
    <Tag className={`ph-slot${block ? " ph-slot-block" : ""}${className ? ` ${className}` : ""}`}>{children}</Tag>
  );
}
