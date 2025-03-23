import { Logo } from "./logo";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0B1A]/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Logo />
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-gray-300">Home</a>
            <a href="#" className="text-white hover:text-gray-300">Our Mission</a>
            <a href="#" className="text-white hover:text-gray-300">Users</a>
            <a href="#" className="text-white hover:text-gray-300">Social Media</a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="outline" className="text-[#7CB9E8] border-[#7CB9E8] hover:bg-[#7CB9E8] hover:text-white">
              Contact us
            </Button>
            <Button variant="coral">
              Log in
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};