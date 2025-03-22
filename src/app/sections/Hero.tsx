import React from 'react';
import { Button } from "@/app/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center bg-volun-navy pt-20 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-volun-blue opacity-10 rounded-full blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-volun-coral opacity-5 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
      
      {/* New banner */}
      <div className="container mx-auto px-6 mb-12">
        <div className="w-fit mx-auto animate-scale-in">
          <div className="bg-volun-navy border border-gray-700 rounded-full px-5 py-2 flex items-center">
            <span className="text-xs font-semibold bg-volun-blue text-white px-2 py-1 rounded-full mr-3">New</span>
            <span className="text-sm mr-3">Take a Look to the Latest</span>
            <span className="text-volun-blue text-sm font-medium">Volunteers Opportunities</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in max-w-5xl mx-auto">
          VolunChain: Transforming Volunteering, One Block at a Time
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto animate-fade-in animation-delay-200">
          Organizations post volunteer opportunities, and users join projects they love. Earn unique NFTs as proof of your impact!
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-fade-in animation-delay-300">
          <Button className="bg-volun-coral hover:bg-opacity-90 transition-all duration-300 text-lg py-6 px-8">
            I'm a Foundation
          </Button>
          <Button variant="outline" className="border-volun-blue text-volun-blue hover:bg-volun-blue hover:text-white transition-all duration-300 text-lg py-6 px-8">
            Start as Volunteer
          </Button>
        </div>
        
        <div className="max-w-5xl mx-auto animate-fade-in animation-delay-400">
          <img 
            src="/lovable-uploads/78acff2e-f994-4cc5-b285-77122ef32133.png" 
            alt="VolunChain community illustration" 
            className="w-full h-auto animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
