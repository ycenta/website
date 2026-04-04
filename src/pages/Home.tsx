import React from "react";
import { Y2KWindow } from "../components/Y2KWindow";
import { SHOWS } from "../constants";
import { BLOG_POSTS } from "../lib/blog";
import { Link } from "react-router-dom";
import { Twitch, Youtube, Twitter, Instagram, ArrowRight, Monitor, PlayCircle, FileText, Zap, Megaphone, Tv, Radio, MessageCircle, Circle, Star } from "lucide-react";
import { siBluesky, siTiktok, siX, siPatreon } from "simple-icons";
import { formatDate } from '../lib/utils';
import { CATEGORY_ICONS } from '../lib/categoryIcons';
import { Helmet } from "react-helmet-async";
const FEATURED_POST = BLOG_POSTS[0];
const SECONDARY_POSTS = BLOG_POSTS.slice(1, 3);
const isLive = false; // ← true pendant le live, false sinon
const TWITCH_CHANNEL = "wendohldkn";
const YOUTUBE_PLAYLIST = "PL13-SWMvlfiwijmK3dQ_rHY67bJj6rJ3P";
const parent = window.location.hostname; typeof window !== 'undefined' ? window.location.hostname : 'ludokino.net';
export const Home = () => {
  const isFirefox = navigator.userAgent.toLowerCase().includes("firefox");



  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <Helmet>
        <title>LUDOKINO — Jeux vidéo, anime et culture geek</title>
        <meta
          name="description"
          content="Jeux vidéo, anime, tokusatsu, musique et tech. LUDOKINO c'est le média des passionnés de culture geek et otaku — émissions, articles et goodies."
        />
        <link rel="canonical" href="https://ludokino.net" />
        <meta property="og:url" content="https://ludokino.net" />
        <meta name="twitter:url" content="https://ludokino.net" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ludokino.net" />
        <meta property="og:title" content="LUDOKINO — Jeux vidéo, anime et culture geek" />
        <meta property="og:description" content="Jeux vidéo, anime, tokusatsu, musique et tech. LUDOKINO c'est le média des passionnés de culture geek et otaku — émissions, articles et goodies." />
        <meta property="og:image" content="https://ludokino.net/img/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="LUDOKINO" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://ludokino.net" />
        <meta name="twitter:title" content="LUDOKINO — Jeux vidéo, anime et culture geek" />
        <meta name="twitter:description" content="Jeux vidéo, anime, tokusatsu, musique et tech. LUDOKINO c'est le média des passionnés de culture geek et otaku — émissions, articles et goodies." />
        <meta name="twitter:image" content="https://ludokino.net/img/og-image.jpg" />
      </Helmet>
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
                  : `https://www.youtube-nocookie.com/embed/videoseries?list=${YOUTUBE_PLAYLIST}&autoplay=0&mute=1`
              }
              className="w-full h-full border-0"
              allowFullScreen
              title={isLive ? "Dernier Omnibus" : "Playlist Omnibus"}
            />
          </div>
        </Y2KWindow>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="latest-posts-wrapper">
    <Y2KWindow
      title={
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <FileText size={14} /> DERNIERS ARTICLES
        </span>
      }
    >
      <div className="space-y-4">
        {BLOG_POSTS.slice(0, 2).map((post) => {
          const PostIcon = CATEGORY_ICONS[post.category] || Star;
          return (
            <div key={post.id} className="border-b border-y2k-border pb-4 last:border-0">
              <div className="home-article-meta-row">
                <span className="home-article-meta">{formatDate(post.date)}</span>
                <span className="home-article-meta-separator"> — </span>
                <span className="home-article-meta">{post.category}</span>
              </div>
              <h3 className="home-article-title">
                <span
                  style={{
                    display: 'inline-block',
                    marginRight: '6px',
                    verticalAlign: 'top',
                    marginTop: '7px',
                  }}
                >
                  <PostIcon size={14} />
                </span>
                {post.title}
              </h3>
              <p className="home-article-excerpt">{post.excerpt}</p>
              <div className="home-article-cta-row">
                <Link to={`/blog/${post.id}`} className="y2k-button-mini home-article-cta">
                  Lire l'article <ArrowRight size={14} className="inline-block ml-1" />
                </Link>
              </div>
            </div>
          );
        })}
        <Link to="/blog" className="y2k-button w-full text-center block">
          Tous les articles <ArrowRight size={16} className="inline-block ml-1" />
        </Link>
      </div>
    </Y2KWindow>
  </div>

          <Y2KWindow title={<span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Zap size={14} /> LIENS RAPIDES</span>}>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://www.youtube.com/@ldkino"
                target="_blank"
                className="flex flex-col items-center gap-2 y2k-quick-link p-4 border border-y2k-border hover:bg-y2k-border transition-colors group"
              >
                <Youtube
                  className="text-red-500 group-hover:scale-110 transition-transform"
                  size={32}
                />
                <span className="font-mono text-sm">YouTube</span>
              </a>
              <a
                href="https://www.twitch.tv/ludokino"
                target="_blank"
                className="flex flex-col items-center gap-2 y2k-quick-link p-4 border border-y2k-border hover:bg-y2k-border transition-colors group"
              >
                <Twitch
                  className="text-purple-500 group-hover:scale-110 transition-transform"
                  size={32}
                />
                <span className="font-mono text-sm">Twitch</span>
              </a>
              <a
                href="https://bsky.app/profile/ludokino.net"
                target="_blank"
                className="flex flex-col items-center gap-2 y2k-quick-link p-4 border border-y2k-border hover:bg-y2k-border transition-colors group"
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
                <span className="font-mono text-sm">Bluesky</span>
              </a>
              <a
                href="https://www.instagram.com/ludokino_/"
                target="_blank"
                className="flex flex-col items-center gap-2 y2k-quick-link p-4 border border-y2k-border hover:bg-y2k-border transition-colors group"
              >
                <Instagram
                  className="text-pink-500 group-hover:scale-110 transition-transform"
                  size={32}
                />
                <span className="font-mono text-sm">Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@ludokino"
                target="_blank"
                className="flex flex-col items-center gap-2 y2k-quick-link p-4 border border-y2k-border hover:bg-y2k-border transition-colors group"
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
                <span className="font-mono text-sm">TikTok</span>
              </a>
              <a
                href="https://x.com/ludokino"
                target="_blank"
                className="flex flex-col items-center gap-2 y2k-quick-link p-4 border border-y2k-border hover:bg-y2k-border transition-colors group"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="currentColor"
                  aria-label="X"
                  className="text-white group-hover:scale-110 transition-transform invert dark:invert-0"
                >
                  <path d={siX.path} />
                </svg>
                <span className="font-mono text-sm">X</span>
              </a>
              <div
                className="y2k-quick-link y2k-disabled-card col-span-2 min-h-[120px] flex items-center justify-center gap-3 p-4 border" aria-disabled="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  fill="currentColor"
                  aria-label="Patreon"
                  className="text-current relative z-10"
                >
                  <path d={siPatreon.path} />
                </svg>

                <div className="flex flex-col items-center text-center relative z-10">
                  <span className="font-mono text-sm">Patreon</span>
                  <span className="text-[10px] font-mono uppercase tracking-wide mt-1">
                    À venir
                  </span>
                </div>
              </div>
            </div>
          </Y2KWindow>
        </div>
        {isLive && (
          <Y2KWindow
            title={
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Megaphone size={14} /> ESPACE PUBLICITAIRE
              </span>
            }
            className="h-48"
          >
            <div className="w-full h-full bg-y2k-yellow/40 dark:bg-y2k-border flex items-center justify-center border-2 border-dashed border-y2k-bg/30 dark:border-white/20">
              <span className="font-mono text-xs leading-relaxed opacity-40 dark:opacity-60 text-y2k-bg dark:text-y2k-yellow max-w-[300ch] -rotate-2">
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
          headerClassName="bg-y2k-window dark:bg-y2k-yellow" className="hidden lg:block bg-y2k-bg text-y2k-yellow dark:bg-y2k-window dark:text-white"
        >
          <div className="space-y-4 font-mono text-sm">

            <div className="flex justify-between border-b border-y2k-yellow/30 pb-2 dark:border-white/10">              <span className="opacity-60">STATUS:</span>
              <span className={`flex items-center gap-1.5 ${isLive ? "text-green-400" : "text-red-400"}`}>
                {isLive && (
                  <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                )}
                {isLive ? "ONLINE" : "OFFLINE"}
              </span>
            </div>
            <div className="flex justify-between border-b border-y2k-yellow/30 pb-2 dark:border-white/10">              <span className="opacity-60">VERSION:</span>
              <span>{formatDate(new Date().toISOString().split("T")[0])}</span>
            </div>
            <div className="flex justify-between border-b border-y2k-yellow/30 pb-2 dark:border-white/10">              <span className="opacity-60">LOCATION:</span>
              <span>FRANCE / TWITCH</span>
            </div>
            <p className="text-xs leading-relaxed opacity-80 mt-4 italic">
              "LUDOKINO est votre média culture, jeu vidéo geek et otaku. LDKN
              pour les intimes."
            </p>
          </div>
        </Y2KWindow>


        <Y2KWindow
          title={
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <PlayCircle size={14} /> NOS ÉMISSIONS
            </span>
          }
        >
          <div className="y2k-shows-fade-wrap">
            <div
              className={`space-y-3 max-h-[475px] overflow-y-auto -mr-2 pr-2 y2k-scrollbar ${isFirefox ? "-mr-4 pr-3" : ""
                }`}
            >
              {SHOWS.map((show) => {
                const Icon = CATEGORY_ICONS[show.title] || Circle;
                return (
                  <Link
                    key={show.title}
                    to={show.path}
                    className="y2k-show-link p-3 group"
                  >
                    <h4 className="y2k-show-title flex items-center gap-1 transition-colors">
                      <Icon size={14} />
                      <span className="y2k-show-title-marquee">
                        <span className="y2k-show-title-inner">{show.title}</span>
                      </span>
                    </h4>
                    <div className="y2k-marquee mt-1">
                      <p className="y2k-marquee-text text-xs opacity-60">
                        {show.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </Y2KWindow>
        {!isLive && (
          <Y2KWindow
            title={
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Megaphone size={14} /> ESPACE PUBLICITAIRE
              </span>
            }
            className="h-48"
          >
            <div className="w-full h-full bg-y2k-yellow/40 dark:bg-y2k-border flex items-center justify-center border-2 border-dashed border-y2k-bg/30 dark:border-white/20 px-6 text-center">
              <span className="font-mono text-xs leading-relaxed opacity-40 dark:opacity-60 text-y2k-bg dark:text-y2k-yellow max-w-[28ch] -rotate-2">    On a pas encore trouvé de sponsor, mais ça pourrait être vous !
              </span>
            </div>
          </Y2KWindow>
        )}

      </div>
    </div>
  );
};
