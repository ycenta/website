import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

export default function App() {
  const [message, setMessage] = useState(
  () => MASCOT_MESSAGES[Math.floor(Math.random() * MASCOT_MESSAGES.length)]
);
const [bubbleKey, setBubbleKey] = useState(0);

useEffect(() => {
  (window as any).prerenderReady = true;

  const interval = setInterval(() => {
    setMessage(
      MASCOT_MESSAGES[Math.floor(Math.random() * MASCOT_MESSAGES.length)]
    );
    setBubbleKey(k => k + 1);
  }, 15000);
    return () => clearInterval(interval);
}, []);


  return (
    <HelmetProvider>
      <Router>
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

          <div className="site-mascot-wrapper">
            <div className="site-mascot-bubble" key={bubbleKey}>{message}</div>
            <img
              src="/img/KuroLDKN.png"
              alt=""
              className="site-mascot"
              loading="lazy"
              width={320}
              height={420}
            />
            <span className="site-mascot-label">ルドキノ</span>
          </div>

          <ScrollToTopButton />
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}