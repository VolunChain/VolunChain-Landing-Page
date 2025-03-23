import { Heart } from 'lucide-react';

export const Logo = () => {
  return (
    <div className="flex items-center gap-1 text-2xl font-bold text-white">
      <Heart className="h-8 w-8 fill-[#E97777] stroke-[#E97777]" />
      <span>VolunChain</span>
    </div>
  );
};