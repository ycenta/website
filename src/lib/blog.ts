import { BlogPost } from '../types';

type Frontmatter = {
  title: string;
  date: string;
  author: string;
  authorSlug: string;
  category: string;
  excerpt: string;
  thumbnail?: string;
};

const postFiles = import.meta.glob('../content/blog/*.md', {
  eager: true,
  import: 'default',
  query: '?raw',
}) as Record<string, string>;

const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;

function parseFrontmatter(raw: string): { meta: Partial<Frontmatter>; content: string } {
  const match = raw.match(FRONTMATTER_RE);
  if (!match) {
    return { meta: {}, content: raw.trim() };
  }

  const [, frontmatter, content] = match;
  const meta: Partial<Frontmatter> = {};

  for (const line of frontmatter.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) {
      continue;
    }

    const separatorIndex = trimmed.indexOf(':');
    if (separatorIndex < 0) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim() as keyof Frontmatter;
    const value = trimmed.slice(separatorIndex + 1).trim();

    if (value) {
      meta[key] = value;
    }
  }

  return { meta, content: content.trim() };
}

function filePathToId(filePath: string): string {
  const fileName = filePath.split('/').pop() ?? '';
  return fileName.replace(/\.md$/, '');
}

function parsePost(filePath: string, raw: string): BlogPost {
  const id = filePathToId(filePath);
  const { meta, content } = parseFrontmatter(raw);

  return {
    id,
    title: meta.title ?? id,
    date: meta.date ?? '1970-01-01',
    author: meta.author ?? 'Ludokino',
    authorSlug: meta.authorSlug ?? 'ludokino',
    category: meta.category ?? 'News',
    excerpt: meta.excerpt ?? '',
    thumbnail: meta.thumbnail,
    content,
  };
}

export const BLOG_POSTS: BlogPost[] = Object.entries(postFiles)
  .map(([filePath, raw]) => parsePost(filePath, raw))
  .sort((a, b) => b.date.localeCompare(a.date));
