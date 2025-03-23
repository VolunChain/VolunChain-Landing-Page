import { Twitter, Send, Github } from 'lucide-react';

export const SocialSection = () => {
  const socialLinks = [
    {
      icon: <Twitter className="w-16 h-16 text-[#7CB9E8]" />,
      title: "Twitter",
      description: "News and Updates",
      href: "#"
    },
    {
      icon: <Send className="w-16 h-16 text-[#E97777]" />,
      title: "Telegram",
      description: "Discussions",
      href: "#"
    },
    {
      icon: <Github className="w-16 h-16 text-[#7CB9E8]" />,
      title: "GitHub",
      description: "Resources",
      href: "#"
    }
  ];

  return (
    <section className="bg-[#0A0B1A] text-white py-32">
      <div className="container mx-auto px-4 text-center">
        <span className="text-[#7CB9E8] text-lg mb-4 block">Social Media</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Join The Chain</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-16">
          Connect with us on social media and contribute to building a better ecosystem for
          volunteering. Stay updated, share your thoughts, and collaborate with our growing
          community!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="bg-[#1A1B2E] p-12 rounded-2xl hover:bg-[#1A1B2E]/80 transition group"
            >
              <div className="flex flex-col items-center gap-6">
                {social.icon}
                <h3 className="text-2xl font-semibold">{social.title}</h3>
                <p className="text-gray-400 text-lg">{social.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};