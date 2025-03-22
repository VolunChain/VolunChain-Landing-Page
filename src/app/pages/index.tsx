import React, { useEffect } from 'react';
import NavBar from '@/app/components/Navbar';
import Hero from '@/app/sections/Hero';
import Features from '@/app/sections/Features';
import Statistics from '@/app/sections/Statistics';
import SocialMedia from '@/app/sections/SocialMedia';
import Footer from '@/app/sections/Footer';

const Index = () => {
  // Smooth scroll implementation
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Adjust for header height
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return (
    <div className="min-h-screen bg-volun-navy text-white overflow-hidden">
      <NavBar />
      <Hero />
      <Features />
      <Statistics />
      <SocialMedia />
      <Footer />
    </div>
  );
};

export default Index;
