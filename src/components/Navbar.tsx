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
  siBluesky, siTiktok, siX
}
  from "simple-icons";

  import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeContext";

const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      aria-label="Changer de thème"
      title="Changer de thème"
      className={cn("navbar-icon-button w-9 h-9 lg:w-11 lg:h-11", className)}
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

const NavItem = ({ to, icon: Icon, children }: { to: string; icon: any; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        "flex flex-1 px-4 py-3 border-r transition-all navbar-label",
        "border-black/15 dark:border-white/10",
        "text-y2k-bg dark:text-y2k-green",
        isActive
          ? "bg-white/30 text-y2k-bg dark:bg-gray-800 dark:text-y2k-yellow"
          : "navbar-item"
      )}
    >
      <span className="flex w-full items-center justify-center md:gap-2">
        <Icon size={20} aria-hidden="true" />
        <span className="sr-only md:not-sr-only">{children}</span>
      </span>
    </Link>
  );
};

export const Navbar = () => {
  return (
    <nav className={cn(
      "navbar-shell sticky top-0 z-50 w-full border-b backdrop-blur-sm",
      "border-[#d6ac1f] text-y2k-bg",
      "dark:border-y2k-border dark:text-white"
    )}>
      <div className="flex flex-col lg:flex-row lg:items-stretch">

        {/* ── Rangée logo : mobile + tablette (< lg) ── */}
        {/* Logo centré, switch à droite, pas de socials */}
        <div className="navbar-row flex lg:hidden items-center px-3 py-2 border-b border-black/15 dark:border-white/10">
          {/* Spacer gauche = même largeur que le bouton switch pour centrer le logo */}
          <div className="w-9 shrink-0" />
          <div className="flex-1 flex justify-center">
            <img
              src={`${import.meta.env.BASE_URL}img/LDKN.svg`}
              alt="LUDOKINO Logo"
              className="h-10 dark:invert"
            />
          </div>
          <ThemeToggle />
        </div>

        {/* ── Bloc logo : desktop uniquement (lg+) ── */}
        <div className="navbar-row hidden lg:flex items-center border-r border-black/15 dark:border-white/10 px-4 py-1 shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}img/LDKN.svg`}
            alt="LUDOKINO Logo"
            className="h-10 dark:invert"
          />
        </div>

        {/* ── Rangée nav items + socials (toutes tailles) ── */}
        <div className="navbar-row flex items-center min-w-0 flex-1">
          <div className="flex flex-1 min-w-0 overflow-x-auto no-scrollbar lg:overflow-visible">
            <NavItem to="/" icon={Home}>Accueil</NavItem>
            <NavItem to="/shows" icon={Tv}>Emissions</NavItem>
            <NavItem to="/blog" icon={Newspaper}>Blog</NavItem>
            <NavItem to="/downloads" icon={Download}>Goodies</NavItem>
            <NavItem to="/about" icon={Info}>{"À\u00A0propos"}</NavItem>
          </div>

          {/* Socials + switch : desktop uniquement (lg+) */}
          <div className="hidden lg:flex items-center gap-1 px-2 shrink-0">
            <a href="https://bsky.app/profile/ludokino.net" title="Bluesky" target="_blank" rel="noreferrer" className="navbar-icon-button">
              <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
                <path d={siBluesky.path} />
              </svg>
            </a>
            <a href="https://twitch.tv/ludokino" title="Twitch" target="_blank" rel="noreferrer" className="navbar-icon-button">
              <Twitch size={20} />
            </a>
            <a href="https://www.youtube.com/@LDKino" title="YouTube" target="_blank" rel="noreferrer" className="navbar-icon-button">
              <Youtube size={20} />
            </a>
            <ThemeToggle />
          </div>
        </div>

      </div>
    </nav>
  );
};