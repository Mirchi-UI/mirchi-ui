import React from "react";

interface UnderlineFillButtonProps {
  text?: string;
}

export default function UnderlineFillButton({
  text = "Hover me",
}: UnderlineFillButtonProps) {
  return (
    <button
      className="
        relative px-5 py-2
        text-sm font-medium tracking-wide uppercase
        text-neutral-300
        overflow-hidden
        transition-colors duration-300
        hover:text-neutral-900
        group
      "
    >
      {/* 1️⃣ underline (FIRST) */}
      <span
        className="
          absolute left-0 bottom-0 h-[2px] w-0
          bg-amber-400
          transition-all duration-500 ease-out
          group-hover:w-full
        "
      />

      {/* 2️⃣ fill (AFTER underline) */}
      <span
        className="
          absolute left-0 bottom-0 w-full h-0
          bg-amber-400
          transition-all duration-500 ease-out
          delay-500   /* 👈 KEY FIX */
          group-hover:h-full
          z-0
        "
      />

      {/* text */}
      <span className="relative z-10">{text}</span>
    </button>
  );
}
