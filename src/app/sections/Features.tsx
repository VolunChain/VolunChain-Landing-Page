import React from 'react';
import { Check } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-24 bg-volun-dark relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute top-1/2 left-1/4 w-1/3 h-1/3 bg-volun-blue opacity-5 rounded-full blur-3xl animate-pulse-subtle"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-volun-blue text-sm font-medium uppercase tracking-wider mb-3 animate-fade-in">Our Mission</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Revolutionizing Volunteerism <br/>with Blockchain
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg animate-fade-in">
            By using blockchain's transparency and efficiency, we connect volunteers with organizations, fostering collaboration and impactful experiences in a secure and scalable ecosystem.
          </p>
        </div>
        
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <img 
              src="/lovable-uploads/25965eeb-64a6-434c-ae14-911996a32d49.png" 
              alt="Volunteer illustration" 
              className="w-full h-auto animate-float"
            />
          </div>
          
          <div className="space-y-8 animate-fade-in-right">
            <div className="flex gap-4">
              <div className="bg-volun-blue bg-opacity-20 rounded-full p-2 h-fit">
                <Check className="text-volun-blue h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">We bridge the gap between individuals and organizations.</h3>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-volun-blue bg-opacity-20 rounded-full p-2 h-fit">
                <Check className="text-volun-blue h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Motivating engagement rewarding volunteers with innovative incentives like NFT collectibles to recognize and inspire their contributions.</h3>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-volun-blue bg-opacity-20 rounded-full p-2 h-fit">
                <Check className="text-volun-blue h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Create an impact developing a scalable, community-driven platform where volunteering is accessible and rewarding for everyone.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
