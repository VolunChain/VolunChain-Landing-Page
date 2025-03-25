"use client";

import HeroSection from "@/landing-page-components/HeroSection";
import StatsSection from "@/landing-page-components/StatsSection";
import OurMission from "@/landing-page-components/OurMission";
import SocialMediaSection from '@/landing-page-components/SocialSection';
import PoweredBy from "@/landing-page-components/powered-by";
import { MarqueeDemo } from "@/landing-page-components/Opinions-Section";
import MadeByOppia from "@/landing-page-components/Made-by-Oppia";
import "./globals.css"

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <PoweredBy />
      <OurMission />
      <StatsSection />
      <MarqueeDemo  />
      <MadeByOppia />
      <SocialMediaSection />
    </div>
  );
}