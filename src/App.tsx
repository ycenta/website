import { useState, useEffect, useRef, useCallback, memo } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Shows } from "./pages/Shows";
import { Blog } from "./pages/Blog";
import { Downloads } from "./pages/Downloads";
import { About } from "./pages/About";
import { Legal } from "./pages/Legal";
import { NotFound } from "./pages/NotFound";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { HelmetProvider } from "react-helmet-async";
import { SoundProvider, useSound } from "./components/SoundContext";
import { ReadingProgress } from "./components/ReadingProgress";

// ── Détection souris précise (desktop only) ───────────────────────────────────
const isDesktop = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: fine)").matches;

// ── Audio ─────────────────────────────────────────────────────────────────────
const BUBBLE_SOUNDS = [
  "/sounds/bubble-01.wav",
  "/sounds/bubble-02.wav",
  "/sounds/bubble-03.wav",
  "/sounds/bubble-04.wav",
];

function usePlaySound() {
  const { muted } = useSound();

  const playSound = useCallback((src: string, volume = 0.5) => {
    if (!isDesktop() || muted) return;
    try {
      const audio = new Audio(src);
      audio.volume = volume;
      audio.play().catch(() => {});
    } catch {}
  }, [muted]);

  const playRandomBubble = useCallback(() => {
    const src = BUBBLE_SOUNDS[Math.floor(Math.random() * BUBBLE_SOUNDS.length)];
    playSound(src, 0.45);
  }, [playSound]);

  return { playSound, playRandomBubble };
}

// ── Son au changement de page ─────────────────────────────────────────────────
const PageSoundEffect = memo(() => {
  const location = useLocation();
  const isFirst = useRef(true);
  const { playSound } = usePlaySound();

  useEffect(() => {
    if (isFirst.current) { isFirst.current = false; return; }
    playSound("/sounds/page-change.wav", 0.4);
  }, [location.pathname]);

  return null;
});
PageSoundEffect.displayName = "PageSoundEffect";

// ── Mascotte ──────────────────────────────────────────────────────────────────
const MASCOT_MESSAGES = [
  "Yo ! 👋",
  "T'as vu le dernier Omnibus ?",
  "LUDOKINO c'est la vie.",
  "新しい動画を見てね！",
  "On est en ligne 24/7 !",
  "Clique sur BLOG 👆",
  "ルドキノ forever~",
  "CPU: 98%... normal.",
  "Nouveau contenu dispo !",
  "On arrive bientôt sur Patreon 🙏",
  "Suivez-nous sur les réseaux sociaux !",
  "On fait ça avec amour.",
  "And... YOU.",
  "Bon les broskis...",
  "C'EST PAS RÉO ?!",
];

const STORAGE_KEY = "mascot-position";
const DEFAULT_POS = { x: 17, y: 2 };

const SiteMascot = memo(() => {
  const [message, setMessage] = useState(
    () => MASCOT_MESSAGES[Math.floor(Math.random() * MASCOT_MESSAGES.length)]
  );
  const [bubbleKey, setBubbleKey] = useState(0);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { playSound, playRandomBubble } = usePlaySound();

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setPos(JSON.parse(saved));
      } else {
        setPos({
          x: window.innerWidth * (DEFAULT_POS.x / 100),
          y: window.innerHeight * (DEFAULT_POS.y / 100),
        });
      }
    } catch {
      setPos({
        x: window.innerWidth * (DEFAULT_POS.x / 100),
        y: window.innerHeight * (DEFAULT_POS.y / 100),
      });
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage(MASCOT_MESSAGES[Math.floor(Math.random() * MASCOT_MESSAGES.length)]);
      setBubbleKey(k => k + 1);
      playRandomBubble();
    }, 15000);
    return () => clearInterval(interval);
  }, [playRandomBubble]);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (!wrapperRef.current) return;
    e.preventDefault();
    const rect = wrapperRef.current.getBoundingClientRect();
    dragOffset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.bottom,
    };
    setIsDragging(true);
    playSound("/sounds/mascot-grab.wav", 0.55);
  }, [playSound]);

  useEffect(() => {
    if (!isDragging) return;

    const onMouseMove = (e: MouseEvent) => {
      const wh = window.innerHeight;
      const newX = e.clientX - dragOffset.current.x;
      const newY = wh - (e.clientY - dragOffset.current.y);
      const mascotW = wrapperRef.current?.offsetWidth ?? 160;
      const mascotH = wrapperRef.current?.offsetHeight ?? 220;
      setPos({
        x: Math.max(0, Math.min(window.innerWidth - mascotW, newX)),
        y: Math.max(0, Math.min(wh - mascotH, newY)),
      });
    };

    const onMouseUp = () => {
      setIsDragging(false);
      setPos(prev => {
        if (prev) localStorage.setItem(STORAGE_KEY, JSON.stringify(prev));
        return prev;
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging]);

  if (!pos) return null;

  const mascotStyle: React.CSSProperties = {
    filter: isHovered || isDragging
      ? "drop-shadow(0 16px 32px rgba(0,0,0,0.55))"
      : "drop-shadow(0 8px 20px rgba(0,0,0,0.35))",
    transform: isHovered && !isDragging ? "translateY(-6px)" : "translateY(0)",
    transition: isDragging ? "none" : "transform 0.2s ease, filter 0.2s ease",
  };

  return (
    <div
      ref={wrapperRef}
      className="site-mascot-wrapper"
      style={{
        left: `${pos.x}px`,
        bottom: `${pos.y}px`,
        cursor: isDragging ? "grabbing" : "grab",
        pointerEvents: "auto",
        userSelect: "none",
        transition: isDragging ? "none" : undefined,
      }}
      onMouseDown={onMouseDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="site-mascot-bubble" key={bubbleKey}>{message}</div>
      <img
        src="/img/KuroLDKN.png"
        alt=""
        className="site-mascot"
        loading="lazy"
        width={320}
        height={420}
        draggable={false}
        style={mascotStyle}
      />
      <span className="site-mascot-label">ルドキノ</span>
    </div>
  );
});
SiteMascot.displayName = "SiteMascot";

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <HelmetProvider>
      <SoundProvider>
        <Router>
          <PageSoundEffect />
          <ReadingProgress />
          <div className="min-h-screen flex flex-col relative">
            <div className="scanline" aria-hidden="true"></div>

            <Navbar />

            <main className="flex-1 w-full px-2 md:container md:mx-auto md:px-4 py-8 relative z-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shows" element={<Shows />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<Blog />} />
                <Route path="/downloads" element={<Downloads />} />
                <Route path="/about" element={<About />} />
                <Route path="/mentions-legales" element={<Legal />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <SiteMascot />

            <ScrollToTopButton />
            <Footer />
          </div>
        </Router>
      </SoundProvider>
    </HelmetProvider>
  );
}