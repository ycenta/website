import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Shows } from './pages/Shows';
import { Blog } from './pages/Blog';
import { Downloads } from './pages/Downloads';
import { About } from './pages/About';

export default function App() {
  return (
    <Router>
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
          </Routes>
        </main>

        <footer className="bg-y2k-window border-t-2 border-y2k-border p-4 text-center z-20">
          <div className="flex justify-center gap-8 mb-4">
            <span className="text-[10px] font-mono opacity-40">CPU: 98%</span>
            <span className="text-[10px] font-mono opacity-40">RAM: 512MB</span>
            <span className="text-[10px] font-mono opacity-40">OS: LUDOKINO_OS v1.0</span>
          </div>
          <p className="font-pixel text-sm opacity-60">
            &copy; 2026 LUDOKINO ASSOCIATION - TOUS DROITS RÉSERVÉS
          </p>
        </footer>
      </div>
    </Router>
  );
}
