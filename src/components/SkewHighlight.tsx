// src/components/SkewHighlight.tsx
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const SkewHighlight = ({ children, className = "" }: Props) => {
  return (
    <span className={`relative inline-block ${className}`}>
      {/* Skewed white plate behind the text */}
      <span
        aria-hidden="true"
        className="absolute -inset-[6px] md:-inset-2 -skew-x-12 bg-white rounded-[6px] shadow-[0_6px_0_rgba(0,0,0,0.2)]"
      />
      {/* Foreground text */}
      <span className="relative text-slate-900 font-extrabold italic px-8 md:px-12">
        {children}
      </span>
    </span>
  );
};
