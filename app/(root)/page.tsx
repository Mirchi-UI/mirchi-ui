"use client";

import { HeroSection } from "@/components/web/Home/HeroSection";
import { FeaturesSection } from "@/components/web/Home/FeaturesSection";
import { ComponentShowcase } from "@/components/web/Home/ComponentShowcase";
import { HowItWorks } from "@/components/web/Home/HowItWorks";
import { CTASection } from "@/components/web/Home/CTASection";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <FeaturesSection />
      <ComponentShowcase />
      <HowItWorks />
      <CTASection />
    </main>
  );
}
