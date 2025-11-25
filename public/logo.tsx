import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative w-10 h-10 rounded-xl bg-linear-to-br from-orange-500 via-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/25 group-hover:shadow-red-500/40 transition-shadow duration-300">
        {/* Stylized Chili Pepper Icon */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          className="drop-shadow-sm"
        >
          {/* Chili body */}
          <path
            d="M12 3C10.5 3 9 4 8.5 5.5C8 7 8.5 9 9.5 11C10.5 13 11.5 15.5 11.5 18C11.5 19.5 11 20.5 10 21C10 21 12 21.5 14 21C16 20.5 17 19 16.5 17C16 15 15 12.5 14.5 10C14 7.5 14.5 5 15 4C14 3 13 3 12 3Z"
            fill="white"
            fillOpacity="0.95"
          />
          {/* Stem */}
          <path
            d="M11.5 3C11.5 3 11 1.5 12.5 1C14 0.5 15 1.5 15 3C15 3.5 14.5 4 14 4C13 4 12 3.5 11.5 3Z"
            fill="white"
            fillOpacity="0.7"
          />
          {/* Highlight */}
          <path
            d="M10 6C10 6 10.5 8 10.5 10C10.5 10 9.5 8 10 6Z"
            fill="white"
            fillOpacity="0.4"
          />
        </svg>

        {/* Subtle shine effect */}
        <div className="absolute inset-0 rounded-xl bg-linear-to-tr from-white/20 to-transparent pointer-events-none" />
      </div>

      <div className="hidden flex-col  md:flex">
        <span className="font-bold text-foreground tracking-tight text-lg leading-tight">
          Mirchi UI
        </span>
        <span className="text-xs text-muted-foreground leading-tight">
          Spicy Components
        </span>
      </div>
    </Link>
  );
}
