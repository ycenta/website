import { useEffect, useRef, useState, memo } from "react";
import { useLocation } from "react-router-dom";

export const ReadingProgress = memo(() => {
  const { pathname } = useLocation();
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  const isArticle = /^\/blog\/.+/.test(pathname);

  useEffect(() => {
    setProgress(0);
    if (!isArticle) return;

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const el = document.documentElement;
        const scrolled = el.scrollTop || document.body.scrollTop;
        const total = el.scrollHeight - el.clientHeight;
        setProgress(total > 0 ? Math.min(100, (scrolled / total) * 100) : 0);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [pathname, isArticle]);

  if (!isArticle) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        zIndex: 9998,
        pointerEvents: "none",
      }}
    >
      {/* Track — dark: semi-transparent, light: bleu foncé transparent */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.15)",
      }} />
      {/* Barre de progression */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: `${progress}%`,
          transition: "width 80ms linear",
          // dark mode : jaune Y2K / light mode : bleu du site
          background: "var(--progress-bar-color, #f7c92f)",
        }}
      />
    </div>
  );
});

ReadingProgress.displayName = "ReadingProgress";