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
        "flex flex-1 items-center justify-center gap-3 px-4 py-3 border-r-2 border-gray-700 hover:bg-gray-800 transition-all font-pixel text-xl uppercase",
        isActive ? "bg-gray-800 text-y2k-green" : "text-white"
      )}
    >
      <Icon size={20} aria-hidden="true" />
      <span className="sr-only md:not-sr-only">{children}</span>
    </Link>
  );
};
export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-900 border-b-2 border-gray-700 flex flex-col lg:flex-row lg:items-center">
      
      {/* Logo en haut sur mobile + tablette */}
      <div className="flex lg:hidden items-center justify-center py-3 border-b-2 border-gray-700 bg-gray-900">
        <img
          src={`${import.meta.env.BASE_URL}img/LDKN.svg`}
          alt="LUDOKINO Logo"
          className="h-10 invert md:h-12"
        />
      </div>

      {/* Logo à gauche sur desktop */}
      <div className="hidden lg:flex items-center border-r-2 border-gray-700 px-4 py-1 bg-gray-900">
        <img
          src={`${import.meta.env.BASE_URL}img/LDKN.svg`}
          alt="LUDOKINO Logo"
          className="h-10 invert"
        />
      </div>

      {/* Ligne nav */}
      <div className="flex items-center min-w-0 w-full">
        <div className="flex flex-1 min-w-0 overflow-x-auto no-scrollbar md:overflow-visible">
          <NavItem to="/" icon={Home}>Accueil</NavItem>
          <NavItem to="/shows" icon={Tv}>Emissions</NavItem>
          <NavItem to="/blog" icon={Newspaper}>Blog</NavItem>
          <NavItem to="/downloads" icon={Download}>Goodies</NavItem>
          <NavItem to="/about" icon={Info}>{"À\u00A0propos"}</NavItem>
        </div>

        {/* Réseaux visibles sur tablette + desktop */}
        <div className="hidden md:flex items-center gap-6 px-6 shrink-0">
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
      </div>
    </nav>
  );
};