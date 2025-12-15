"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, EffectFade, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/parallax";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    title: "Design That Feels Premium",
    subtitle: "Visual Excellence",
    description:
      "A refined interface built with clarity, balance, and intention—designed to feel effortless from the first interaction.",
    gradient: "from-[#0F0F10] via-[#1a1a1b] to-[#0F0F10]",
  },
  {
    id: 2,
    title: "Motion With Purpose",
    subtitle: "Smooth Transitions",
    description:
      "Thoughtful animations guide attention, reinforce hierarchy, and elevate the overall user experience.",
    gradient: "from-[#0F0F10] via-[#252526] to-[#0F0F10]",
  },
  {
    id: 3,
    title: "Depth Through Parallax",
    subtitle: "Immersive Layers",
    description:
      "Subtle depth and layered movement create a modern, cinematic feel without overwhelming the content.",
    gradient: "from-[#0F0F10] via-[#1f1f20] to-[#0F0F10]",
  },
  {
    id: 4,
    title: "Built for Impact",
    subtitle: "Performance First",
    description:
      "Optimized for speed, responsiveness, and scalability—where aesthetics never compromise usability.",
    gradient: "from-[#0F0F10] via-[#2a2a2b] to-[#0F0F10]",
  },
];

export default function ParallaxSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef<SwiperType>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
    setProgress(0);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Parallax, Pagination, EffectFade, Autoplay]}
        parallax
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={1200}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}
              data-swiper-parallax="-300"
            />

            <div
              className="absolute inset-0 opacity-10"
              data-swiper-parallax="-200"
            >
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="relative z-10 flex items-center justify-center h-full px-8">
              <div className="text-center max-w-4xl">
                <div className="mb-4 opacity-70" data-swiper-parallax="-100">
                  <span className="text-white/60 text-sm md:text-lg font-light tracking-widest uppercase">
                    {slide.subtitle}
                  </span>
                </div>

                <h1
                  className="text-5xl md:text-7xl xl:text-8xl font-light text-white mb-6 leading-tight"
                  data-swiper-parallax="-200"
                >
                  {slide.title}
                </h1>

                <p
                  className="text-lg md:text-2xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto"
                  data-swiper-parallax="-300"
                >
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                swiperRef.current?.slideTo(index);
                setProgress(0);
              }}
              className={`relative transition-transform duration-300 ${
                index === activeIndex ? "scale-110" : "hover:scale-105"
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full border transition-all ${
                  index === activeIndex
                    ? "bg-white border-white"
                    : "border-white/40"
                }`}
              />

              {index === activeIndex && (
                <div className="absolute inset-0 -m-2">
                  <svg className="w-7 h-7 -rotate-90" viewBox="0 0 24 24">
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="1"
                      fill="none"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="white"
                      strokeWidth="1"
                      fill="none"
                      strokeDasharray={2 * Math.PI * 10}
                      strokeDashoffset={2 * Math.PI * 10 * (1 - progress / 100)}
                      className="transition-all duration-75 linear"
                    />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="text-center mt-4">
          <span className="text-white/60 text-xs tracking-widest">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
