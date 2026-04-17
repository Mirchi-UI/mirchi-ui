import React from "react";

interface SweepRevealButtonProps {
  text?: string;
}

export default function SweepRevealButton({
  text = "Explore",
}: SweepRevealButtonProps) {
  return (
    <button
      type="button"
      className="
        group relative flex items-center gap-2
        px-5 py-2 rounded-full
        border-2 border-gray-200
        bg-gray-50 text-gray-800
        font-medium text-sm
        overflow-hidden
        transition-all duration-300
        hover:text-white
      "
    >
      {/* sweep background */}
      <span
        className="
          absolute inset-0
          -translate-x-full
          bg-emerald-500
          transition-transform duration-500 ease-out
          group-hover:translate-x-0
          rounded-full
          z-0
        "
      />

      {/* content */}
      <span className="relative z-10">{text}</span>

      {/* icon */}
      <span
        className="
          relative z-10
          w-7 h-7 flex items-center justify-center
          rounded-full border border-gray-400
          transition-all duration-300
          group-hover:bg-white group-hover:border-none
          group-hover:rotate-45
          group-hover:text-black
        "
      >
        <svg
          className="w-4 h-4 rotate-45"
          viewBox="0 0 16 19"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
            fill="currentColor"
          />
        </svg>
      </span>
    </button>
  );
}
