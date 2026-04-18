export default function ShimmerText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative px-6 py-3 overflow-hidden group">
        {/* Glow Background */}
        <div className="absolute inset-0 blur-2xl opacity-30 group-hover:opacity-60 transition duration-500 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500" />

        {/* Main Text */}
        <h1
          className={`relative z-10 text-4xl sm:text-5xl font-semibold tracking-tight shimmer-text ${className}`}
        >
          {text}
        </h1>

        {/* Subtle top light */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/30 opacity-20 pointer-events-none" />
      </div>

      <style>{`
        .shimmer-text {
          --base: #94a3b8;
          --highlight: #ffffff;

          background: linear-gradient(
            110deg,
            var(--base) 25%,
            var(--highlight) 37%,
            var(--base) 63%
          );
          background-size: 200% 100%;

          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;

          animation: shimmer 2.8s ease-in-out infinite;
          filter: drop-shadow(0 0 6px rgba(255,255,255,0.15));
        }

        @media (prefers-color-scheme: dark) {
          .shimmer-text {
            --base: #64748b;
            --highlight: #a855f7;
            filter: drop-shadow(0 0 12px rgba(168,85,247,0.35));
          }
        }

        @keyframes shimmer {
          0% {
            background-position: 120% 0;
          }
          100% {
            background-position: -120% 0;
          }
        }
      `}</style>
    </div>
  );
}
