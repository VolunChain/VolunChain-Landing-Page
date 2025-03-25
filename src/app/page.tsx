"use client";

import HeroSection from "@/landing-page-components/HeroSection";
import StatsSection from "@/landing-page-components/StatsSection";
import OurMission from "@/landing-page-components/OurMission";
import SocialMediaSection from '@/landing-page-components/SocialSection';
import "./globals.css"

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <OurMission />
      <StatsSection />
      <SocialMediaSection />
    </div>
  );
}