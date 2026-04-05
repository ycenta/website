import React, { createContext, useContext, useEffect, useState } from "react";

type SoundContextType = {
  muted: boolean;
  toggleMute: () => void;
};

const SoundContext = createContext<SoundContextType | undefined>(undefined);

const STORAGE_KEY = "sound-muted";

export const SoundProvider = ({ children }: { children: React.ReactNode }) => {
  const [muted, setMuted] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === "false";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(muted));
  }, [muted]);

  const toggleMute = () => setMuted(prev => !prev);

  return (
    <SoundContext.Provider value={{ muted, toggleMute }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error("useSound must be used within a SoundProvider");
  return ctx;
};
