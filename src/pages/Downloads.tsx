import React from "react";
import { UnderConstructionPage } from "../components/UnderConstructionPage";
import { Y2KWindow } from "../components/Y2KWindow";
import { DOWNLOADS } from "../constants";
import {
  Image as ImageIcon,
  User,
  Music,
  MousePointer2,
  Bell,
  Smile,
  Scissors,
} from "lucide-react";
import { cn } from "../lib/utils";

const CategoryIcon: Record<string, any> = {
  wallpaper: ImageIcon,
  avatar: User,
  skin: Music,
  cursor: MousePointer2,
  ringtone: Bell,
  smiley: Smile,
  papertoy: Scissors,
};

const CategoryColor: Record<string, string> = {
  wallpaper: "text-y2k-cyan",
  avatar: "text-y2k-green",
  skin: "text-y2k-magenta",
  cursor: "text-y2k-yellow",
  ringtone: "text-orange-400",
  smiley: "text-pink-400",
  papertoy: "text-blue-400",
};

export const Downloads = () => {
  const showUnderConstruction = true;

  if (showUnderConstruction) {
    return (
      <UnderConstructionPage
        title="GOODIES & DOWNLOADS"
        subtitle="Les goodies sont bien en préparation, mais la vitrine reste verrouillée tant qu'on n'est pas prêts à tout montrer."
        windowTitle="GOODIES_LOCKED.SYS"
      />
    );
  }

  return (
    <div className="space-y-8">
      <div className="page-header">
        <h1 className="text-5xl text-y2k-magenta">GOODIES & DOWNLOADS</h1>
        <p className="text-xl opacity-80">
          Customisez votre bureau et votre vie avec nos packs exclusifs. 100%
          gratuit, 100% Y2K.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {DOWNLOADS.map((item) => {
          const Icon = CategoryIcon[item.category] || ImageIcon;
          return (
            <Y2KWindow key={item.id} title={`${item.category.toUpperCase()}`}>
              <div className="flex flex-col items-center text-center space-y-4 p-2">
                <div
                  className={cn(
                    "p-4 bg-y2k-border rounded-full",
                    CategoryColor[item.category],
                  )}
                >
                  <Icon size={40} />
                </div>
                <div>
                  <h3 className="text-xl text-white">{item.title}</h3>
                  <p className="text-sm opacity-60 mt-1">{item.description}</p>
                </div>
                <a href={item.url} className="y2k-button w-full">
                  Download
                </a>
              </div>
            </Y2KWindow>
          );
        })}

        {/* Placeholder for more categories */}
        <Y2KWindow title="COMING SOON" className="opacity-50 grayscale">
          <div className="flex flex-col items-center text-center space-y-4 p-2">
            <div className="p-4 bg-y2k-border rounded-full text-white/20">
              <Smile size={40} />
            </div>
            <div>
              <h3 className="text-xl text-white/40">Pack de Smileys</h3>
              <p className="text-sm opacity-40 mt-1">
                En cours de compression...
              </p>
            </div>
            <button
              disabled
              className="y2k-button w-full opacity-50 cursor-not-allowed"
            >
              Locked
            </button>
          </div>
        </Y2KWindow>
      </div>

      <Y2KWindow title="WINAMP PLAYER" className="max-w-md mx-auto">
        <div className="bg-[#1a1a1e] p-4 border-2 border-[#333338] space-y-4">
          <div className="bg-black p-2 border border-y2k-green/30 font-mono text-xs text-y2k-green flex justify-between items-center">
            <span>02:45</span>
            <span className="animate-pulse">PLAYING: MONTHLY WAVE #04</span>
          </div>
          <div className="flex gap-2 justify-center">
            <button className="w-8 h-8 bg-y2k-border border border-white/20 text-[10px]">
              PREV
            </button>
            <button className="w-8 h-8 bg-y2k-border border border-white/20 text-[10px]">
              PLAY
            </button>
            <button className="w-8 h-8 bg-y2k-border border border-white/20 text-[10px]">
              STOP
            </button>
            <button className="w-8 h-8 bg-y2k-border border border-white/20 text-[10px]">
              NEXT
            </button>
          </div>
          <div className="h-2 bg-y2k-border relative">
            <div className="absolute top-0 left-0 h-full w-1/3 bg-y2k-cyan"></div>
          </div>
        </div>
      </Y2KWindow>
    </div>
  );
};
