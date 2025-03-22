import React from 'react';
import SocialCard from '../components/StatCard';
import { Twitter, Github, Send } from 'lucide-react';

const SocialMedia = () => {
  return (
    <section id="social-media" className="py-24 bg-volun-dark relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute top-1/2 right-1/4 w-1/3 h-1/3 bg-volun-blue opacity-5 rounded-full blur-3xl animate-pulse-subtle"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-volun-blue text-sm font-medium uppercase tracking-wider mb-3 animate-fade-in">Social Media</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Join The Chain
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg animate-fade-in">
            Connect with us on social media and contribute to building a better ecosystem for volunteering. Stay updated, share your thoughts, and collaborate with our growing community!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <SocialCard 
            title="Twitter" 
            description="News and Updates" 
            icon={<Twitter className="h-8 w-8 text-volun-blue" />}
            color="volun-blue"
            className="animate-fade-in"
            style={{ animationDelay: '100ms' }}
          />
          
          <SocialCard 
            title="Telegram" 
            description="Discussions" 
            icon={<Send className="h-8 w-8 text-volun-coral" />}
            color="volun-coral"
            className="animate-fade-in"
            style={{ animationDelay: '200ms' }}
          />
          
          <SocialCard 
            title="GitHub" 
            description="Resources" 
            icon={<Github className="h-8 w-8 text-volun-blue" />}
            color="volun-blue"
            className="animate-fade-in" 
            style={{ animationDelay: '300ms' }}
          />
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
