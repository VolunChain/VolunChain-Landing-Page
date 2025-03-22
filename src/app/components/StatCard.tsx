import React from 'react';
import { cn } from "../lib/utils";

interface StatCardProps {
  
  number: string;
  label: string;
  icon?: React.ReactNode;  // New prop for icons
  className?: string;
}

const StatCard = ({ number, label, icon, className }: StatCardProps) => {
  return (
    <div className={cn(
      "glass-card p-8 rounded-lg flex flex-col items-center justify-center hover-scale animate-fade-in", 
      className
    )}>
      {icon && <div className="icon mb-4">{icon}</div>}  {/* Display the icon if available */}
      <p className="text-5xl font-bold mb-2">
        <span className="text-white">{number.split('+')[0]}</span>
        <span className="text-volun-blue">+</span>
      </p>
      <p className="text-gray-300">{label}</p>
    </div>
  );
};

export default StatCard;
