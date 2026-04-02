import React from "react";
import { Y2KWindow } from "../components/Y2KWindow";
import { SHOWS } from "../constants";
import { BLOG_POSTS } from "../lib/blog";
import { Link } from "react-router-dom";
import { Twitch, Youtube, Twitter, Instagram, ArrowRight, Monitor, PlayCircle, FileText, Zap, Megaphone, Tv, Radio, MessageCircle, Circle, Star } from "lucide-react";
import { siBluesky, siTiktok, siX } from "simple-icons";
import { formatDate } from '../lib/utils';
import { CATEGORY_ICONS } from '../lib/categoryIcons';
const isLive = false; // ← true pendant le live, false sinon
const TWITCH_CHANNEL = "wendohldkn";
const YOUTUBE_PLAYLIST = "PL13-SWMvlfiwijmK3dQ_rHY67bJj6rJ3P";
const parent = window.location.hostname; typeof window !== 'undefined' ? window.location.hostname : 'ludokino.net';
export const Home = () => {
  const isFirefox = navigator.userAgent.toLowerCase().includes("firefox");


  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Hero / Live Section */}
      <div className="lg:col-span-8 space-y-6">
     <Y2KWindow title={
  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
    {isLive ? <Radio size={14} /> : <Tv size={14} />}
    {isLive ? 'DIFFUSION EN DIRECT' : 'LES OMNIBUS'}
  </span>
}>
  <div className="aspect-video w-full">
    <iframe
      src={
  isLive
    ? `https://player.twitch.tv/?channel=${TWITCH_CHANNEL}&parent=${parent}&muted=true&autoplay=true`
    : `https://www.youtube-nocookie.com/embed/videoseries?list=${YOUTUBE_PLAYLIST}&autoplay=1&mute=1`
}
      className="w-full h-full border-0"
      allowFullScreen
      title={isLive ? "Dernier Omnibus" : "Playlist Omnibus"}
    />
  </div>
</Y2KWindow>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Y2KWindow title={<span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><FileText size={14} /> DERNIERS ARTICLES</span>}>
            <div className="space-y-4">
              {BLOG_POSTS.slice(0, 2).map((post) => {
  const PostIcon = CATEGORY_ICONS[post.category] || Star;
  return (
    <div key={post.id} className="border-b border-y2k-border pb-4 last:border-0">
      <span className="text-xs text-y2k-cyan font-mono">
        {formatDate(post.date)} — {post.category}
      </span>
      <h3 className="text-xl text-y2k-green mt-1">
        <span style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'top', marginTop: '7px' }}>
          <PostIcon size={14} />
        </span>
        {post.title}
      </h3>
      <p className="text-sm opacity-80 line-clamp-2 mt-2">{post.excerpt}</p>
      <Link to={`/blog/${post.id}`} className="y2k-link text-sm mt-2 inline-block">
        Lire l'article <ArrowRight size={16} className="inline-block ml-1" />
      </Link>
    </div>
  );
})}
              <Link to="/blog" className="y2k-button w-full text-center block">
                Tous les articles <ArrowRight size={16} className="inline-block ml-1" />
              </Link>
            </div>
          </Y2KWindow>

          <Y2KWindow title={<span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Zap size={14} /> LIENS RAPIDES</span>}>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://www.youtube.com/@ldkino"
                target="_blank"
                className="flex flex-col items-center gap-2 p-4 border border-y2k-border hover:bg-y2k-border transition-colors group"
              >
                <Youtube
                  className="text-red-500 group-hover:scale-110 transition-transform"
                  size={32}
                />
                <span className="font-pixel text-sm">YouTube</span>
              </a>
              <a
                href="https://www.twitch.tv/ludokino"
                target="_blank"
                className="flex flex-col items-center gap-2 p-4 border border-y2k-border hover:bg-y2k-border transition-colors group"
              >
                <Twitch
                  className="text-purple-500 group-hover:scale-110 transition-transform"
                  size={32}
                />
                <span className="font-pixel text-sm">Twitch</span>
              </a>
              <a
                href="https://bsky.app/profile/ludokino.net"
                target="_blank"
                className="flex flex-col items-center gap-2 p-4 border border-y2k-border hover:bg-y2k-border transition-colors group"
              >
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
              <a
                href="https://www.instagram.com/ludokino_/"
                target="_blank"
                className="flex flex-col items-center gap-2 p-4 border border-y2k-border hover:bg-y2k-border transition-colors group"
              >
                <Instagram
                  className="text-pink-500 group-hover:scale-110 transition-transform"
                  size={32}
                />
                <span className="font-pixel text-sm">Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@ludokino"
                target="_blank"
                className="flex flex-col items-center gap-2 p-4 border border-y2k-border hover:bg-y2k-border transition-colors group"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="currentColor"
                  aria-label="TikTok"
                  className="text-[#00f2ea] group-hover:scale-110 transition-transform"
                >
                  <path d={siTiktok.path} />
                </svg>
                <span className="font-pixel text-sm">TikTok</span>
              </a>
              <a
                href="https://x.com/ludokino"
                target="_blank"
                className="flex flex-col items-center gap-2 p-4 border border-y2k-border hover:bg-y2k-border transition-colors group"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="currentColor"
                  aria-label="X"
                  className="text-white group-hover:scale-110 transition-transform"
                >
                  <path d={siX.path} />
                </svg>
                <span className="font-pixel text-sm">X</span>
              </a>
            </div>
          </Y2KWindow>
        </div>
         {isLive && (
        <Y2KWindow title={<span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Megaphone size={14} /> ESPACE PUBLICITAIRE</span>} className="h-48">
          <div className="w-full h-full bg-y2k-border flex items-center justify-center border-2 border-dashed border-white/20">
            <span className="font-pixel text-1xl opacity-20 rotate-12">
              On a pas encore trouvé de sponsor, mais ça pourrait être vous !
            </span>
          </div>
        </Y2KWindow>
          )}
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-4 space-y-6">
        
        {isLive && (
      <Y2KWindow title={<span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MessageCircle size={14} /> CHAT LIVE</span>} className="hidden lg:block">
        <div className="aspect-[8/9] w-full">
      <iframe
        src={`https://www.twitch.tv/embed/wendohldkn/chat?parent=${parent}&darkpopout`}
        id="chat_embed"
         className="w-full h-full border-0"
      /></div>
    </Y2KWindow>
          )}
       <Y2KWindow
  title={<span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Monitor size={14} /> INFO.SYS</span>}
  headerClassName="bg-y2k-yellow text-black"
  className="hidden lg:block"
>
  <div className="space-y-4 font-mono text-sm">

    <div className="flex justify-between border-b border-white/10 pb-2">
      <span className="opacity-60">STATUS:</span>
      <span className={`flex items-center gap-1.5 ${isLive ? "text-green-400" : "text-red-400"}`}>
        {isLive && (
          <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        )}
        {isLive ? "ONLINE" : "OFFLINE"}
      </span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="opacity-60">VERSION:</span>
              <span>{formatDate(new Date().toISOString().split("T")[0])}</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="opacity-60">LOCATION:</span>
              <span>FRANCE / TWITCH</span>
            </div>
            <p className="text-xs leading-relaxed opacity-80 mt-4 italic">
              "LUDOKINO est votre média culture, jeu vidéo geek et otaku. LDKN
              pour les intimes."
            </p>
          </div>
        </Y2KWindow>

        
        <Y2KWindow title={<span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><PlayCircle size={14} /> NOS ÉMISSIONS</span>}>
          <div
            className={`space-y-3 max-h-[475px] overflow-y-auto -mr-2 pr-2 y2k-scrollbar ${
              isFirefox ? "-mr-4 pr-3" : ""
            }`}
          >
          {SHOWS.map((show) => {
  const Icon = CATEGORY_ICONS[show.title] || Circle;
  return (
    <Link
      key={show.id}
      to="/shows"
      className="block p-2 border border-y2k-border hover:border-y2k-cyan hover:bg-y2k-border transition-all group"
    >
      <h4 className="text-y2k-cyan group-hover:text-y2k-green transition-colors flex items-center gap-1">
        <Icon size={14} />
        {show.title}
      </h4>
      <p className="text-xs opacity-60 line-clamp-1">{show.description}</p>
    </Link>
  );
})}
          </div>
        </Y2KWindow>
 {!isLive && (
        <Y2KWindow title={<span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Megaphone size={14} /> ESPACE PUBLICITAIRE</span>} className="h-48">
          <div className="w-full h-full bg-y2k-border flex items-center justify-center border-2 border-dashed border-white/20">
            <span className="font-pixel text-1xl opacity-20 rotate-12">
              On a pas encore trouvé de sponsor, mais ça pourrait être vous !
            </span>
          </div>
        </Y2KWindow>
          )}
        
      </div>
    </div>
  );
};
