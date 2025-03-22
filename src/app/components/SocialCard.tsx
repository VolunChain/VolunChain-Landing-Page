import React from 'react';
import { cn } from "@/app/lib/utils";

interface SocialCardProps {
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  className?: string;
}

const SocialCard = ({ name, description, icon, color, className }: SocialCardProps) => {
  return (
    <div className={cn(
      "glass-card p-8 rounded-lg flex flex-col items-center hover-scale animate-fade-in transition-all duration-300",
      className
    )}>
      <div 
        className={cn(
          "w-20 h-20 rounded-lg flex items-center justify-center mb-6",
          `border-2 border-${color}`
        )}
      >
        {icon}
      </div>
      <h3 className="text-2xl font-medium mb-2">{name}</h3>
      <p className="text-gray-300 text-center">{description}</p>
    </div>
  );
};

export default SocialCard;
