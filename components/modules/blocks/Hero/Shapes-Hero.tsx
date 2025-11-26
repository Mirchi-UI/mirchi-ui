"use client";

import { motion, cubicBezier } from "motion/react";
import { Pacifico } from "next/font/google";
import { cn } from "@/lib/utils";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: cubicBezier(0.23, 0.86, 0.39, 0.96),
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-linear-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/15",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

function FloatingOrb({
  className,
  delay = 0,
  size = 8,
  color = "bg-white/20",
}: {
  className?: string;
  delay?: number;
  size?: number;
  color?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay, ease: "easeOut" }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 8 + Math.random() * 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ width: size, height: size }}
        className={cn("rounded-full blur-[1px]", color)}
      />
    </motion.div>
  );
}

function GridPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />
    </div>
  );
}

export const HeroGeometric = ({
  badge = "Mirchi UI",
  title1 = "Elevate Your",
  title2 = "Digital Vision",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: cubicBezier(0.23, 0.86, 0.39, 0.96),
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 via-transparent to-rose-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,100,150,0.1),transparent_50%)]" />

      <GridPattern />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />

        <FloatingOrb
          delay={0.8}
          size={6}
          className="left-[15%] top-[30%]"
          color="bg-indigo-400/40"
        />
        <FloatingOrb
          delay={1.0}
          size={4}
          className="right-[25%] top-[25%]"
          color="bg-rose-400/40"
        />
        <FloatingOrb
          delay={1.2}
          size={8}
          className="left-[40%] bottom-[20%]"
          color="bg-cyan-400/30"
        />
        <FloatingOrb
          delay={0.9}
          size={5}
          className="right-[10%] top-[50%]"
          color="bg-amber-400/40"
        />
        <FloatingOrb
          delay={1.1}
          size={3}
          className="left-[30%] top-[15%]"
          color="bg-violet-400/40"
        />
        <FloatingOrb
          delay={1.3}
          size={6}
          className="right-[35%] bottom-[30%]"
          color="bg-white/30"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-8 md:mb-12 backdrop-blur-sm shadow-[0_0_20px_rgba(120,119,198,0.15)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-sm text-white/70 tracking-wide font-medium">
              {badge}
            </span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-linear-to-b from-white to-white/80">
                {title1}
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-linear-to-r from-indigo-300 via-rose-300 to-amber-200",
                  pacifico.className
                )}
              >
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/50 mb-10 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              Crafting exceptional digital experiences through innovative design
              and cutting-edge technology.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-3.5 bg-white text-[#030303] font-medium rounded-full overflow-hidden transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-linear-to-r from-indigo-200 to-rose-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 bg-white/[0.05] text-white/80 font-medium rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.15),transparent_70%)] pointer-events-none" />
    </div>
  );
};
