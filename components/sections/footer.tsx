import { Logo } from "../../components/logo";
import { Twitter, Send, Github } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#0A0B1A] text-white py-20 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <Logo />
            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              VolunChain is a blockchain-powered platform connecting volunteers with
              organizations. It ensures transparency, security, and rewards participation
              through incentives like NFT collectibles, fostering collaboration in a Web3-
              driven ecosystem.
            </p>
            <div className="flex gap-6 mt-8">
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition" />
              <Send className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition" />
              <Github className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition" />
            </div>
          </div>

          <div className="md:ml-20">
            <h3 className="text-xl font-semibold mb-6">Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition text-lg">Explore Volunteering</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-lg">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-lg">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-lg">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <a href="mailto:contact@volunchain.com" className="text-gray-400 hover:text-white transition text-lg">
              contact@volunchain.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};