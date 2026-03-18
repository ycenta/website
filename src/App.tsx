import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Shows } from "./pages/Shows";
import { Blog } from "./pages/Blog";
import { Downloads } from "./pages/Downloads";
import { About } from "./pages/About";
import { Legal } from "./pages/Legal";

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen flex flex-col relative">
        <div className="scanline"></div>

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
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
