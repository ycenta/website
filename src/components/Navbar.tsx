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
import { 
        siBluesky, siTiktok, siX } 
from "simple-icons";

const NavItem = ({ to, icon: Icon, children }: { to: string, icon: any, children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      className={cn(
        "flex items-center gap-2 px-4 py-2 border-r-2 border-gray-700 hover:bg-gray-800 transition-all font-pixel text-xl uppercase",
        isActive ? "bg-gray-800 text-y2k-green" : "text-white"
      )}
    >
      <Icon size={20} />
      <span>{children}</span>
    </Link>
  );
};

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-900 border-b-2 border-gray-700 flex items-center overflow-x-auto no-scrollbar">
      <div className="hidden md:flex items-center border-r-2 border-gray-700 px-4 py-2 bg-gray-800">
<img src={`${import.meta.env.BASE_URL}img/LDKN.svg`} alt="LUDOKINO Logo" width="100%" height="auto" className="h-8 invert" />
      </div>
      <div className="flex flex-1">
        <NavItem to="/" icon={Home}>Accueil</NavItem>
        <NavItem to="/shows" icon={Tv}>Emissions</NavItem>
        <NavItem to="/blog" icon={Newspaper}>Blog</NavItem>
        <NavItem to="/downloads" icon={Download}>Goodies</NavItem>
        <NavItem to="/about" icon={Info}>{"À\u00A0propos"}</NavItem>
      </div>
      <div className="hidden md:flex items-center gap-4 px-4">
        <a href="https://bsky.app/profile/ludokino.net" title="Bluesky" target="_blank" rel="noreferrer" className="text-y2k-yellow hover:scale-110 transition-transform">
          <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
            <path d={siBluesky.path} />
          </svg>
        </a>
        <a href="https://twitch.tv/ludokino" title="Twitch" target="_blank" rel="noreferrer" className="text-y2k-yellow hover:scale-110 transition-transform">
          <Twitch size={20} />
        </a>
        <a href="https://www.youtube.com/@LDKino" title="YouTube" target="_blank" rel="noreferrer" className="text-y2k-yellow hover:scale-110 transition-transform">
          <Youtube size={20} />
        </a>
      </div>
    </nav>
  );
};
