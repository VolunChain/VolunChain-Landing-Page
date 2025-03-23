"use client";

import { Button } from "../../components/ui/button";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[#0A0B1A] text-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A1B2E] rounded-full mb-8">
            <span className="text-sm bg-[#7CB9E8] px-2 py-0.5 rounded-full">New</span>
            <span className="text-sm">Take a Look to the Latest</span>
            <span className="text-[#7CB9E8]">Volunteers Opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            VolunChain: Transforming<br />
            Volunteering, One Block at a Time
          </h1>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            Organizations post volunteer opportunities, and users join projects they love. Earn
            unique NFTs as proof of your impact!
          </p>
          
          <div className="flex gap-4">
            <Button variant="coral" size="lg" className="px-8 py-6 text-lg">I&apos;m a Foundation</Button>
            <Button variant="blue" size="lg" className="px-8 py-6 text-lg">Start as Volunteer</Button>
          </div>

          <div className="relative w-full h-[500px] mt-16">
            <Image
              src="/hero-illustration.svg"
              alt="Volunteers illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};