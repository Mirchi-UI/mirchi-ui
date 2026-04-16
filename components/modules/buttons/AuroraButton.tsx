import React from "react";

interface AuroraStarButtonProps {
  name?: string;
  stars?: number;
}

export default function AuroraStarButton({
  name = "Mirchi UI",
  stars = 11,
}: AuroraStarButtonProps) {
  return (
    <button
      className="
        group relative inline-flex items-center justify-center
        h-10 px-4 py-2 rounded-md text-sm font-medium
        cursor-pointer overflow-hidden border-0
        transition-transform duration-200
        hover:scale-105 active:scale-95
        bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))]
        bg-[length:200%]
        [background-clip:padding-box,border-box,border-box]
        [background-origin:border-box]
        [border:2px_solid_transparent]
        dark:bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))]
      "
    >
      {/* LEFT SIDE */}
      <div className="flex items-center">
        <svg className="w-4 h-4" viewBox="0 0 438.549 438.549" fill="white">
          <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562v-40l-6.567 1.136c-12 2-25 1-35-2-10-3-18-10-22-18z" />
        </svg>

        <span className="ml-2 text-white">Star {name}</span>
      </div>

      {/* RIGHT SIDE */}
      <div className="ml-3 flex items-center gap-1">
        <svg
          className="w-4 h-4 text-gray-300 group-hover:text-yellow-300 transition-colors"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" />
        </svg>

        <span className="text-white tabular-nums font-medium">{stars}</span>
      </div>
    </button>
  );
}
