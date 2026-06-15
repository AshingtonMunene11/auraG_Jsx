"use client";

import React, { useState, useEffect } from "react";
import { cn } from "../../utils/cn";

function PageLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Example: hide loader after 2s
    const timer = setTimeout(() => setHidden(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="page-loader"
      className={cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6 bg-[var(--ivory)] transition-opacity duration-500",
        hidden && "opacity-0 invisible"
      )}
    >
      {/* Logo */}
      <div className="font-[var(--ff-display)] italic font-light tracking-[0.2em] text-[clamp(2rem,6vw,4rem)] text-[var(--green-deep)]">
        Aura Gardens
      </div>

      {/* Loader bar */}
      <div className="relative w-[200px] h-px bg-[var(--ivory-deep)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent animate-[loader-sweep_1.4s_ease_infinite]" />
      </div>

      {/* Loader text */}
      <div className="font-[var(--ff-mono)] text-[0.65rem] tracking-[0.25em] uppercase text-[var(--charcoal-soft)]">
        loading
      </div>
    </div>
  );
}

export { PageLoader };
