import React from 'react';
import StatCard from '../components/StatCard';
import { Button } from "@/app/components/ui/button";

const Statistics = () => {
  return (
    <section id="statistics" className="py-24 bg-volun-navy relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-volun-coral opacity-5 rounded-full blur-3xl animate-pulse-subtle"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our app connects foundations with volunteers, creating impactful opportunities for both.
            </h2>
            <p className="text-gray-300 mb-8">
              We will help you to achieve the same as a company or volunteer!
            </p>
            <Button className="bg-volun-coral hover:bg-opacity-90 transition-all duration-300 text-lg py-6 px-8">
              Let's get started
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6 animate-fade-in-right">
            <StatCard 
              number="260+" 
              label="Foundations"
              className="md:transform md:translate-y-0"
            />
            <StatCard 
              number="960+" 
              label="Users"
              className="md:transform md:translate-y-6"
            />
            <StatCard 
              number="231+" 
              label="Successful Volunteers"
              className="md:transform md:translate-y-6"
            />
            <StatCard 
              number="10,000+" 
              label="People Helped"
              className="md:transform md:translate-y-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
