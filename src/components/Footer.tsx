import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [cpu, setCpu] = useState(98);

  useEffect(() => {
    const interval = setInterval(() => {
      const newCpu = Math.floor(Math.random() * 54) + 45;
      setCpu(newCpu);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
<footer className="site-footer text-y2k-bg dark:text-y2k-yellow p-4 text-center z-20">
  <div className="flex justify-center gap-8 mb-4">
        <span className="text-[10px] font-mono opacity-50">CPU: {cpu}%</span>
        <span className="text-[10px] font-mono opacity-50">RAM: 512MB</span>
        <span className="text-[10px] font-mono opacity-50">
          OS: LUDOKINO_OS v1.2
        </span>
      </div>

      <p className="font-mono text-xs opacity-70 flex items-center justify-center gap-2 flex-wrap">
        <span>&copy; 2026 LUDOKINO - TOUS DROITS RÉSERVÉS</span>
        <span className="opacity-40">|</span>
        <Link
          to="/mentions-legales"
          className="underline decoration-dotted underline-offset-4 hover:text-y2k-cyan transition-colors"
        >
          Mentions légales
        </Link>
      </p>
    </footer>
  );
};