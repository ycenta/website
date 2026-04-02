import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
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

function RedirectHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirect = params.get("redirect");

    if (redirect) {
      navigate(redirect, { replace: true });
    }
  }, [location.search, navigate]);

  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <RedirectHandler />

        <div className="min-h-screen flex flex-col relative">
          <div className="scanline" aria-hidden="true"></div>

          <Navbar />

          <main className="flex-1 container mx-auto px-4 py-8 relative z-20">
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

          <ScrollToTopButton />

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}