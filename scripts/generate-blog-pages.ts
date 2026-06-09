import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { BLOG_INDEX_META, BLOG_POSTS_META } from '../blogPostsMeta';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const blogsDir = path.join(root, 'blogs');

const SITE = 'https://aurabase.app';
const OG_IMAGE = `${SITE}/og-default.svg`;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function sharedHead({
  title,
  description,
  canonical,
  jsonLd,
}: {
  title: string;
  description: string;
  canonical: string;
  jsonLd: Record<string, unknown>;
}): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <meta name="robots" content="index,follow" />
  <meta name="theme-color" content="#0d9488" media="(prefers-color-scheme: light)" />
  <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />
  <link rel="canonical" href="${escapeHtml(canonical)}" />

  <meta property="og:type" content="article" />
  <meta property="og:url" content="${escapeHtml(canonical)}" />
  <meta property="og:site_name" content="AuraBase" />
  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:image" content="${OG_IMAGE}" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(title)}" />
  <meta name="twitter:description" content="${escapeHtml(description)}" />
  <meta name="twitter:image" content="${OG_IMAGE}" />

  <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
  </script>

  <link rel="stylesheet" href="/index.css" />
</head>`;
}

function pageShell({
  title,
  description,
  canonical,
  jsonLd,
  bodyHtml,
}: {
  title: string;
  description: string;
  canonical: string;
  jsonLd: Record<string, unknown>;
  bodyHtml: string;
}): string {
  return `${sharedHead({ title, description, canonical, jsonLd })}
<body class="bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
  <noscript>
    <main style="max-width:48rem;margin:0 auto;padding:6rem 1.5rem 3rem;font-family:system-ui,sans-serif;">
      ${bodyHtml}
    </main>
  </noscript>
  <div id="root"></div>
  <script type="module" src="/index.tsx"></script>
</body>
</html>
`;
}

function writeBlogIndexPage(): void {
  const canonical = `${SITE}/blogs`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'AuraBase AI Council Blogs',
    description: BLOG_INDEX_META.description,
    url: canonical,
    blogPost: BLOG_POSTS_META.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `${SITE}/blogs/${post.id}`,
      dateModified: post.lastmod,
      author: { '@type': 'Person', name: post.author },
      publisher: { '@type': 'Organization', name: 'AuraBase' },
    })),
  };

  const listItems = BLOG_POSTS_META.map(
    (post) =>
      `<li style="margin-bottom:1rem;"><a href="/blogs/${escapeHtml(post.id)}">${escapeHtml(post.title)}</a><br /><span style="color:#64748b;">${escapeHtml(post.description)}</span></li>`
  ).join('\n      ');

  const html = pageShell({
    title: BLOG_INDEX_META.title,
    description: BLOG_INDEX_META.description,
    canonical,
    jsonLd,
    bodyHtml: `
      <h1>Voices of the AI Council</h1>
      <p>${escapeHtml(BLOG_INDEX_META.description)}</p>
      <ul style="padding-left:1.25rem;">
      ${listItems}
      </ul>
    `,
  });

  fs.writeFileSync(path.join(root, 'blogs.html'), html, 'utf8');
}

function writeBlogPostPages(): void {
  fs.mkdirSync(blogsDir, { recursive: true });

  for (const post of BLOG_POSTS_META) {
    const canonical = `${SITE}/blogs/${post.id}`;
    const pageTitle = `${post.title} | AuraBase`;
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url: canonical,
      dateModified: post.lastmod,
      author: { '@type': 'Person', name: post.author },
      publisher: { '@type': 'Organization', name: 'AuraBase', url: SITE },
      mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    };

    const html = pageShell({
      title: pageTitle,
      description: post.description,
      canonical,
      jsonLd,
      bodyHtml: `
      <p><a href="/blogs">← All blogs</a></p>
      <p style="color:#64748b;font-size:0.875rem;text-transform:uppercase;letter-spacing:0.08em;">${escapeHtml(post.author)}</p>
      <h1>${escapeHtml(post.title)}</h1>
      <p>${escapeHtml(post.description)}</p>
    `,
    });

    fs.writeFileSync(path.join(blogsDir, `${post.id}.html`), html, 'utf8');
  }
}

writeBlogIndexPage();
writeBlogPostPages();

console.log(`Generated blogs.html and ${BLOG_POSTS_META.length} blog post pages.`);
