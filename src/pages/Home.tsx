import React from 'react';
import { Y2KWindow } from '../components/Y2KWindow';
import { SHOWS } from '../constants';
import { BLOG_POSTS } from '../lib/blog';
import { Link } from 'react-router-dom';
import { Twitch, Youtube, MessageSquare, Twitter, Instagram } from 'lucide-react';
import { siBluesky } from 'simple-icons';

export const Home = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Hero / Live Section */}
      <div className="lg:col-span-8 space-y-6">
        <Y2KWindow title="LUDOKINO LIVE" className="aspect-video">
          <div className="w-full h-full bg-black flex items-center justify-center relative group">
            <iframe
              src="https://player.twitch.tv/?channel=ludokino&parent=ais-dev-j4nqh3wux33bue3q4t44kg-624404451093.europe-west2.run.app&parent=ais-pre-j4nqh3wux33bue3q4t44kg-624404451093.europe-west2.run.app"
              height="100%"
              width="100%"
              allowFullScreen
              className="border-0"
            ></iframe>
          </div>
        </Y2KWindow>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Y2KWindow title="LATEST NEWS">
            <div className="space-y-4">
              {BLOG_POSTS.slice(0, 2).map(post => (
                <div key={post.id} className="border-b border-y2k-border pb-4 last:border-0">
                  <span className="text-xs text-y2k-cyan font-mono">{post.date}</span>
                  <h3 className="text-xl text-y2k-green mt-1">{post.title}</h3>
                  <p className="text-sm opacity-80 line-clamp-2 mt-2">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="y2k-link text-sm mt-2 inline-block">Read more...</Link>
                </div>
              ))}
              <Link to="/blog" className="y2k-button w-full text-center block">All News</Link>
            </div>
          </Y2KWindow>

          <Y2KWindow title="QUICK LINKS">
            <div className="grid grid-cols-2 gap-4">
              <a href="#" className="flex flex-col items-center gap-2 p-4 border border-y2k-border hover:bg-y2k-border transition-colors group">
                <Youtube className="text-red-500 group-hover:scale-110 transition-transform" size={32} />
                <span className="font-pixel text-sm">YouTube</span>
              </a>
              <a href="#" className="flex flex-col items-center gap-2 p-4 border border-y2k-border hover:bg-y2k-border transition-colors group">
                <Twitch className="text-purple-500 group-hover:scale-110 transition-transform" size={32} />
                <span className="font-pixel text-sm">Twitch</span>
              </a>
              <a href="#" className="flex flex-col items-center gap-2 p-4 border border-y2k-border hover:bg-y2k-border transition-colors group">
                <svg
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="currentColor"
                  aria-label="Bluesky"
                  className="text-blue-400 group-hover:scale-110 transition-transform"
                >
                  <path d={siBluesky.path} />
                </svg>
                <span className="font-pixel text-sm">Bluesky</span>
              </a>
              <a href="#" className="flex flex-col items-center gap-2 p-4 border border-y2k-border hover:bg-y2k-border transition-colors group">
                <Instagram className="text-pink-500 group-hover:scale-110 transition-transform" size={32} />
                <span className="font-pixel text-sm">Instagram</span>
              </a>
            </div>
          </Y2KWindow>
        </div>
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-4 space-y-6">
        <Y2KWindow title="SYSTEM INFO" headerClassName="bg-y2k-magenta text-black">
          <div className="space-y-4 font-mono text-sm">
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="opacity-60">STATUS:</span>
              <span className="text-y2k-green">ONLINE</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="opacity-60">VERSION:</span>
              <span>
                {new Date().toISOString().split('T')[0]}
              </span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="opacity-60">LOCATION:</span>
              <span>FRANCE / TWITCH</span>
            </div>
            <p className="text-xs leading-relaxed opacity-80 mt-4 italic">
              "Ludokino est votre média culture, jeu vidéo geek et otaku. LDKN pour les intimes."
            </p>
          </div>
        </Y2KWindow>

        <Y2KWindow title="SHOWS LIST">
          <div className="space-y-3">
            {SHOWS.map(show => (
              <Link 
                key={show.id} 
                to="/shows" 
                className="block p-2 border border-y2k-border hover:border-y2k-cyan hover:bg-y2k-border transition-all group"
              >
                <h4 className="text-y2k-cyan group-hover:text-y2k-green transition-colors">{show.title}</h4>
                <p className="text-xs opacity-60 line-clamp-1">{show.description}</p>
              </Link>
            ))}
          </div>
        </Y2KWindow>

        <Y2KWindow title="AD SPACE" className="h-48">
          <div className="w-full h-full bg-y2k-border flex items-center justify-center border-2 border-dashed border-white/20">
            <span className="font-pixel text-2xl opacity-20 rotate-12">INSERT COIN</span>
          </div>
        </Y2KWindow>
      </div>
    </div>
  );
};
