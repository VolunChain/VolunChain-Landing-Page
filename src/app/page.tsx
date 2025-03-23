import { HeroSection } from "../../components/sections/hero";
import { StatisticsSection } from "../../components/sections/statistics";
import { MissionSection } from "../../components/sections/mission";
import { SocialSection } from "../../components/sections/social";
import { Footer } from "../../components/sections/footer";
import { Header } from "../../components/header";

export default function Home() {
  return (
    <main className="bg-[#0A0B1A]">
      <Header />
      <HeroSection />
      <StatisticsSection />
      <MissionSection />
      <SocialSection />
      <Footer />
    </main>
  );
}