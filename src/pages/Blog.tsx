import React from 'react';
import { Y2KWindow } from '../components/Y2KWindow';
import { BLOG_POSTS } from '../lib/blog';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { ArrowRight, Star } from 'lucide-react';
import { NotFound } from './NotFound';
import { formatDate } from '../lib/utils';
import { CATEGORY_ICONS } from '../lib/categoryIcons';
import { Helmet } from 'react-helmet-async'

export const Blog = () => {
  const { id } = useParams();
  const post = id ? BLOG_POSTS.find(p => p.id === id) : null;

  if (id && !post) {
       return <NotFound />;
  }

  if (post) {
    const PostIcon = CATEGORY_ICONS[post.category] || Star;
    const description =
    post.excerpt ||
    "Article sur LUDOKINO.net, portant sans doute sur les jeux vidéo, les animes, le tokusatsu, la musique ou culture geek.";
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <Helmet>
          {/* Base */}
          <title>{post.title} — LUDOKINO</title>
          <meta name="description" content={post.excerpt} />
          <meta name="author" content={post.author} />
          <link rel="canonical" href={`https://ludokino.net/blog/${post.id}`} />

          {/* Open Graph (Facebook, Discord, LinkedIn) */}
          <meta property="og:type" content="article" />
          <meta property="og:site_name" content="LUDOKINO" />
          <meta property="og:locale" content="fr_FR" />
          <meta property="og:title" content={`${post.title} — LUDOKINO`} />
          <meta property="og:description" content={post.excerpt} />
          <meta property="og:url" content={`https://ludokino.net/blog/${post.id}`} />
          {post.thumbnail && <meta property="og:image" content={post.thumbnail} />}

          {/* Article */}
          <meta property="article:author" content={post.author} />
          <meta property="article:published_time" content={post.date} />

          {/* Twitter / X */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@ludokino" />
          <meta name="twitter:title" content={post.title} />
          <meta name="twitter:description" content={post.excerpt} />
          {post.thumbnail && <meta name="twitter:image" content={post.thumbnail} />}

          {/* JSON-LD pour Google */}
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.excerpt,
            "author": { "@type": "Person", "name": post.author },
            "datePublished": post.date,
            "image": post.thumbnail,
            "publisher": {
              "@type": "Organization",
              "name": "LUDOKINO",
              "url": "https://ludokino.net"
            }
          })}</script>
        </Helmet>
        <Link to="/blog" className="y2k-link mb-4 inline-block page-header text-left">← Retour aux articles</Link>
        <Y2KWindow title={
          <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <PostIcon size={14} /> {post.title}
          </span>
        }>
          <div className="p-4 md:p-8">
            <div className="mb-8 border-b border-y2k-border pb-6">
              <span className="text-y2k-cyan font-mono">{formatDate(post.date)} | {post.category}</span>
              <h1 className="text-5xl text-y2k-green mt-2">{post.title}</h1>
              <span className="text-sm opacity-60">par {post.author}</span>
            </div>
            <div className="markdown-body">
              <ReactMarkdown
                components={{
                  img({ src, alt }) {
                    return (
                      <span className="block rounded overflow-hidden mb-4">
                        <img src={src} alt={alt} style={{ width: '100%', objectFit: 'cover' }} />
                      </span>
                    );
                  },
                  a({ href, children }) {
                    const match = href?.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
                    const childText = Array.isArray(children) ? children.join('') : String(children);
                    const wantsEmbed = childText.startsWith('▶');
                    if (match && wantsEmbed) {
                      return (
                        <span className="block rounded overflow-hidden mb-4" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                          <iframe
                            src={`https://www.youtube-nocookie.com/embed/${match[1]}`}
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="YouTube video"
                          />
                        </span>
                      );
                    }
                    return <a href={href}>{children}</a>;
                  },
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>
        </Y2KWindow>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="page-header">
        <h1 className="text-5xl text-y2k-cyan">BLOG</h1>
        <p className="text-xl opacity-80">
          Retrouvez nos articles, quelques informations et des coulisses sur la prod.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {BLOG_POSTS.map(post => {
          const PostIcon = CATEGORY_ICONS[post.category] || Star;
          return (
            <Y2KWindow key={post.id} title={
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <PostIcon size={14} /> {post.category}
              </span>
            }>
              <div className="space-y-4">
                <Link to={`/blog/${post.id}`} className="block mb-4 rounded overflow-hidden">
                  {post.thumbnail && (
                    <img src={post.thumbnail} alt={post.title} style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
                  )}
                </Link>
                <span className="text-y2k-cyan font-mono">{formatDate(post.date)} — par {post.author}</span>
                <Link to={`/blog/${post.id}`} className="block">
                  <h2 className="text-2xl text-y2k-green">{post.title}</h2>
                </Link>
                <p className="opacity-80 line-clamp-3">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="y2k-button block text-center">
                  Lire l'article <ArrowRight size={16} className="inline-block ml-1" />
                </Link>
              </div>
            </Y2KWindow>
          );
        })}
      </div>
    </div>
  );
};