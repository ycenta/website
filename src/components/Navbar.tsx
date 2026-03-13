import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { 
  Home, 
  Tv, 
  Info, 
  Download, 
  Newspaper, 
  Youtube, 
  Twitter, 
  Instagram, 
  Twitch,
  ExternalLink
} from 'lucide-react';

const NavItem = ({ to, icon: Icon, children }: { to: string, icon: any, children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      className={cn(
        "flex items-center gap-2 px-4 py-2 border-r-2 border-y2k-border hover:bg-y2k-border transition-all font-pixel text-xl uppercase",
        isActive ? "bg-y2k-border text-y2k-green" : "text-white"
      )}
    >
      <Icon size={20} />
      <span>{children}</span>
    </Link>
  );
};

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-y2k-window border-b-2 border-y2k-border flex items-center overflow-x-auto no-scrollbar">
      <div className="flex items-center border-r-2 border-y2k-border px-4 py-2 bg-y2k-border">
        <span className="font-pixel text-2xl text-y2k-green font-bold">LUDOKINO</span>
      </div>
      <div className="flex flex-1">
        <NavItem to="/" icon={Home}>Home</NavItem>
        <NavItem to="/shows" icon={Tv}>Shows</NavItem>
        <NavItem to="/blog" icon={Newspaper}>Blog</NavItem>
        <NavItem to="/downloads" icon={Download}>Goodies</NavItem>
        <NavItem to="/about" icon={Info}>About</NavItem>
      </div>
      <div className="hidden md:flex items-center gap-4 px-4">
        <a href="https://twitch.tv/ludokino" target="_blank" rel="noreferrer" className="text-y2k-magenta hover:scale-110 transition-transform">
          <Twitch size={20} />
        </a>
        <a href="https://youtube.com/@ludokino" target="_blank" rel="noreferrer" className="text-y2k-cyan hover:scale-110 transition-transform">
          <Youtube size={20} />
        </a>
      </div>
    </nav>
  );
};
