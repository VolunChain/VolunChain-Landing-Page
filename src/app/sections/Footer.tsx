import React from 'react';
import Logo from '../components/Logo';
import { Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-volun-navy py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="animate-fade-in">
            <Logo />
            <p className="text-gray-400 mt-4 max-w-md">
              VolunChain is a blockchain-powered platform connecting volunteers with organizations. It ensures transparency, security, and rewards participation through incentives like NFT collectibles, fostering collaboration in a Web3-driven ecosystem.
            </p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h3 className="text-xl font-medium mb-6">Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-volun-blue transition-colors">Explore Volunteering</a></li>
              <li><a href="#" className="text-gray-400 hover:text-volun-blue transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-volun-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-volun-blue transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl font-medium mb-6">Contact</h3>
            <p className="text-gray-400 mb-6">contact@volunchain.com</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-volun-blue transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-volun-blue transition-colors">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} VolunChain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
