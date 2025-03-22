import React from 'react';
import { cn } from "../lib/utils";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <div className="text-volun-coral">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 10C17.5 10 12.1 15.6 12.1 22.3C12.1 28.4 16.3 33.6 22 34.8V38H18V42H22V46H26V42H30V38H26V34.8C31.7 33.6 35.9 28.4 35.9 22.3C35.9 15.6 30.5 10 24 10ZM18.9 22.3C18.9 19.5 21.2 17.2 24 17.2C26.8 17.2 29.1 19.5 29.1 22.3C29.1 25.1 26.8 27.4 24 27.4C21.2 27.4 18.9 25.1 18.9 22.3Z" fill="currentColor"/>
        </svg>
      </div>
      <div className="text-2xl font-bold tracking-tight">VolunChain</div>
    </div>
  );
};

export default Logo;
