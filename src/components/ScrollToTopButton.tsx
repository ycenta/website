import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const SCROLL_THRESHOLD = 220;

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Retour en haut de page"
      onClick={handleScrollToTop}
      className={`scroll-to-top y2k-button ${
        isVisible ? "scroll-to-top-visible" : "scroll-to-top-hidden"
      }`}
    >
      <ArrowUp size={18} strokeWidth={2.75} />
    </button>
  );
}
