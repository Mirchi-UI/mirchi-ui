"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const Error404 = () => {
  const router = useRouter();

  return (
    <div
      className="
        min-h-screen flex items-center justify-center px-6
        bg-[var(--bg)] transition-colors duration-300
      "
    >
      <div className="w-full max-w-xl text-center">
        {/* 404 */}
        <h1
          className="
            font-bold tracking-tight
            text-[64px] sm:text-[80px] md:text-[96px] lg:text-[120px]
            text-[var(--text-primary)]
          "
        >
          404
        </h1>

        {/* Title */}
        <h2
          className="
            mt-3 font-semibold
            text-lg sm:text-xl md:text-2xl
            text-[var(--text-primary)]
          "
        >
          Page not found
        </h2>

        {/* Description */}
        <p
          className="
            mt-2
            text-sm sm:text-base
            text-[var(--text-secondary)]
          "
        >
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Actions */}
        <div
          className="
            mt-8 flex flex-col sm:flex-row items-center justify-center gap-3
          "
        >
          {/* Primary */}
          <button
            onClick={() => router.push("/")}
            className="
              w-full sm:w-auto
              px-6 py-3 rounded-xl
              text-sm font-medium
              bg-[var(--btn-primary)] text-white
              hover:bg-[var(--btn-primary-hover)]
              transition-all duration-200
            "
          >
            Back home
          </button>

          {/* Secondary */}
          <button
            onClick={() => router.back()}
            className="
              w-full sm:w-auto
              flex items-center justify-center gap-2
              px-6 py-3 rounded-xl
              text-sm font-medium
              border border-[var(--border)]
              text-[var(--text-primary)]
              bg-[var(--btn-secondary-bg)]
              hover:bg-[var(--btn-secondary-hover)]
              transition-all duration-200
            "
          >
            <ArrowLeft size={16} />
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error404;
