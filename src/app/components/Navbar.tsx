"use client";
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Button } from "@/app/components/ui/button";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-volun-navy bg-opacity-90 backdrop-blur-sm py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Logo className="animate-fade-in" />
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="link-hover font-medium animate-fade-in" style={{ animationDelay: '100ms' }}>Home</a>
          <a href="#features" className="link-hover font-medium animate-fade-in" style={{ animationDelay: '200ms' }}>Our Mission</a>
          <a href="#statistics" className="link-hover font-medium animate-fade-in" style={{ animationDelay: '300ms' }}>Users</a>
          <a href="#social-media" className="link-hover font-medium animate-fade-in" style={{ animationDelay: '400ms' }}>Social Media</a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            className="border-volun-blue text-volun-blue hover:bg-volun-blue hover:text-white transition-all duration-300 animate-fade-in"
            style={{ animationDelay: '500ms' }}
          >
            Contact us
          </Button>
          <Button 
            className="bg-volun-coral hover:bg-opacity-90 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: '600ms' }}
          >
            Log in
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
