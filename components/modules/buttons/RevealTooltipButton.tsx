import React from "react";

interface RevealTooltipButtonProps {
  text?: string;
  tooltip?: string;
}

export default function RevealTooltipButton({
  text = "Check Website",
  tooltip = "example.com",
}: RevealTooltipButtonProps) {
  return (
    <div className="relative flex items-center justify-center group">
      {/* Tooltip */}
      <div
        className="
          absolute bottom-full mb-3
          opacity-0 translate-y-4 scale-95  
          group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:blur-0
          transition-all duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          delay-150
          pointer-events-none
        "
      >
        <div className="bg-lime-200 text-zinc-700 text-xs font-medium px-3 py-1.5 rounded-md shadow-md flex items-center gap-1   font-mono">
          🌐 {tooltip}
        </div>

        {/* Arrow */}
        <div className="w-2 h-2 bg-lime-200 rotate-45 mx-auto -mt-1" />
      </div>

      {/* Button */}
      <button
        className="
          flex items-center gap-2
          px-4 py-2 rounded-full
          bg-gradient-to-br from-lime-200 to-yellow-200
          text-zinc-700 text-sm font-medium
          shadow-md
          overflow-hidden
          transition-all duration-300
          ease-[cubic-bezier(0.22,1,0.36,1)]
          hover:gap-3 hover:shadow-lg
          active:scale-95
        "
      >
        {/* icon */}
        <svg
          className="
            w-4 h-4
            transition-transform duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:rotate-12 group-hover:scale-110
          "
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M15.4306 7.70172C7.55045 7.99826 3.43929 15.232 2.17021 19.3956C2.07701 19.7014 2.31139 20 2.63107 20C2.82491 20 3.0008 19.8828 3.08334 19.7074C6.04179 13.4211 12.7066 12.3152 15.514 12.5639C15.7583 12.5856 15.9333 12.7956 15.9333 13.0409V15.1247C15.9333 15.5667 16.4648 15.7913 16.7818 15.4833L20.6976 11.6784C20.8723 11.5087 20.8993 11.2378 20.7615 11.037L16.8456 5.32965C16.5677 4.92457 15.9333 5.12126 15.9333 5.61253V7.19231C15.9333 7.46845 15.7065 7.69133 15.4306 7.70172Z"
            fill="currentColor"
          />
        </svg>

        {/* text */}
        <span
          className="
            max-w-0 overflow-hidden whitespace-nowrap
            group-hover:max-w-[200px]
            transition-all duration-400
            ease-[cubic-bezier(0.22,1,0.36,1)]
            delay-75
            font-bold
          
          "
        >
          {text}
        </span>
      </button>
    </div>
  );
}
