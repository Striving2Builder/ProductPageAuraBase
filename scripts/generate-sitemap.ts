import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { BLOG_INDEX_META, BLOG_POSTS_META } from '../blogPostsMeta';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const SITE = 'https://aurabase.app';
const today = new Date().toISOString().slice(0, 10);

const staticPages = [
  { loc: `${SITE}/`, lastmod: today, changefreq: 'weekly', priority: '1.0' },
  { loc: `${SITE}/privacypolicy`, lastmod: '2026-01-01', changefreq: 'yearly', priority: '0.4' },
  { loc: `${SITE}/termsofuse`, lastmod: '2026-05-01', changefreq: 'yearly', priority: '0.4' },
  { loc: `${SITE}/blogs`, lastmod: BLOG_INDEX_META.lastmod, changefreq: 'weekly', priority: '0.8' },
];

const blogPages = BLOG_POSTS_META.map((post) => ({
  loc: `${SITE}/blogs/${post.id}`,
  lastmod: post.lastmod,
  changefreq: 'monthly',
  priority:
    post.id === 'lab-data-driven-pivot' ||
    post.id === 'ai-meal-photo-accuracy-research' ||
    post.id.includes('meal-scanner') ||
    post.id.includes('nutritionist')
      ? '0.9'
      : '0.7',
}));

const urls = [...staticPages, ...blogPages];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const outPath = path.join(root, 'public', 'sitemap.xml');
fs.writeFileSync(outPath, xml, 'utf8');
console.log(`Generated sitemap.xml with ${urls.length} URLs`);
