"use client";

import { useCallback, useId, useRef, useState } from "react";

type BeforeAfterSliderProps = {
  alt: string;
  afterSrc?: string;
  beforeSrc?: string;
  pending?: boolean;
};

export default function BeforeAfterSlider({
  alt,
  afterSrc,
  beforeSrc,
  pending = false,
}: BeforeAfterSliderProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const labelId = useId();

  const updateFromClientX = useCallback((clientX: number) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    const ratio = (clientX - rect.left) / rect.width;
    const clamped = Math.min(Math.max(ratio, 0.04), 0.96);
    setPosition(clamped * 100);
  }, []);

  const onPointerDown = (event: React.PointerEvent) => {
    event.preventDefault();
    draggingRef.current = true;
    setDragging(true);
    wrapRef.current?.setPointerCapture(event.pointerId);
    updateFromClientX(event.clientX);
  };

  const onPointerMove = (event: React.PointerEvent) => {
    if (!draggingRef.current) return;
    updateFromClientX(event.clientX);
  };

  const onPointerUp = (event: React.PointerEvent) => {
    draggingRef.current = false;
    setDragging(false);
    wrapRef.current?.releasePointerCapture(event.pointerId);
  };

  if (pending) {
    return (
      <div
        className="ba-wrap ba-wrap-pending"
        ref={wrapRef}
        role="group"
        aria-labelledby={labelId}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <span id={labelId} className="visually-hidden">
          {alt} — glisser pour comparer avant et après
        </span>
        <div className="ba-layer ba-pending-before">
          <span className="ba-pending-text">Poussière · résidus</span>
        </div>
        <div className="ba-layer ba-pending-after" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
          <span className="ba-pending-text">Prêt pour la réception</span>
        </div>
        <BaHandle position={position} dragging={dragging} />
        <BaRangeInput position={position} onChange={setPosition} label={alt} />
      </div>
    );
  }

  if (!afterSrc) return null;

  const beforeImage = beforeSrc ?? afterSrc;

  return (
    <div
      className={`ba-wrap${dragging ? " ba-wrap-dragging" : ""}`}
      ref={wrapRef}
      role="group"
      aria-labelledby={labelId}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <span id={labelId} className="visually-hidden">
        {alt} — glisser pour comparer avant et après
      </span>
      <div className="ba-layer ba-before">
        <img
          src={beforeImage}
          alt=""
          aria-hidden="true"
          className={beforeSrc ? undefined : "ba-simulated-before"}
          loading="lazy"
          decoding="async"
          draggable={false}
        />
        <span className="ba-tag ba-tag-before">Avant</span>
      </div>
      <div className="ba-layer ba-after" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
        <img src={afterSrc} alt={alt} loading="lazy" decoding="async" draggable={false} />
        <span className="ba-tag ba-tag-after">Après</span>
      </div>
      <BaHandle position={position} dragging={dragging} />
      <BaRangeInput position={position} onChange={setPosition} label={alt} />
    </div>
  );
}

function BaHandle({ position, dragging }: { position: number; dragging: boolean }) {
  return (
    <div
      className={`ba-handle${dragging ? " ba-handle-active" : ""}`}
      style={{ left: `${position}%` }}
      aria-hidden="true"
    >
      <span className="ba-handle-line" />
      <span className="ba-handle-knob">
        <span className="ba-handle-arrows" aria-hidden="true">
          ◀ ▶
        </span>
      </span>
    </div>
  );
}

function BaRangeInput({
  position,
  onChange,
  label,
}: {
  position: number;
  onChange: (value: number) => void;
  label: string;
}) {
  return (
    <input
      type="range"
      className="ba-range"
      min={4}
      max={96}
      step={1}
      value={Math.round(position)}
      aria-label={`Position du comparateur avant/après — ${label}`}
      onChange={(event) => onChange(Number(event.target.value))}
    />
  );
}
