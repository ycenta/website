import React, { useState, useEffect } from 'react';

export const Footer = () => {
  const [cpu, setCpu] = useState(98);

  useEffect(() => {
    const interval = setInterval(() => {
      // Varie entre 45% et 98%
      const newCpu = Math.floor(Math.random() * 54) + 45;
      setCpu(newCpu);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-y2k-window border-t-2 border-y2k-border p-4 text-center z-20">
      <div className="flex justify-center gap-8 mb-4">
        <span className="text-[10px] font-mono opacity-40">CPU: {cpu}%</span>
        <span className="text-[10px] font-mono opacity-40">RAM: 512MB</span>
        <span className="text-[10px] font-mono opacity-40">OS: LUDOKINO_OS v1.0</span>
      </div>
      <p className="font-pixel text-sm opacity-60">
        &copy; 2026 LUDOKINO ASSOCIATION - TOUS DROITS RÉSERVÉS
      </p>
    </footer>
  );
};
