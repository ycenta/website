import React from 'react';
import { Y2KWindow } from '../components/Y2KWindow';
import { BLOG_POSTS } from '../lib/blog';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export const Blog = () => {
  const { id } = useParams();
  const post = id ? BLOG_POSTS.find(p => p.id === id) : null;

  if (id && !post) {
    return (
      <div className="text-center p-20">
        <h1 className="text-6xl text-red-500">404: POST_NOT_FOUND</h1>
        <Link to="/blog" className="y2k-link mt-4 inline-block">Retour à l'accueil</Link>
      </div>
    );
  }

  if (post) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <Link to="/blog" className="y2k-link mb-4 inline-block">← Retour à l'accueil</Link>
        <Y2KWindow title={post.title}>
          <div className="p-4 md:p-8">
            <div className="mb-8 border-b border-y2k-border pb-6">
              <span className="text-y2k-cyan font-mono">{post.date} | {post.category}</span>
              <h1 className="text-5xl text-y2k-green mt-2">{post.title}</h1>
              <span className="text-sm opacity-60">By {post.author}</span>
            </div>
            <div className="markdown-body">
              <ReactMarkdown>{post.content}</ReactMarkdown>
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
        {BLOG_POSTS.map(post => (
          <Y2KWindow key={post.id} title={post.category}>
            <div className="space-y-4">
              <span className="text-xs text-y2k-cyan font-mono">{post.date}</span>
              <h2 className="text-2xl text-y2k-green">{post.title}</h2>
              <p className="opacity-80 line-clamp-3">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="y2k-button block text-center">Lire l'article</Link>
            </div>
          </Y2KWindow>
        ))}
      </div>
    </div>
  );
};
