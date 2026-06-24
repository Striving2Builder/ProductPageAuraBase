import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { BLOG_INDEX_META, BLOG_POSTS_META } from '../blogPostsMeta';
import { SITE_URL, SITE_TITLE } from '../siteMeta';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const items = BLOG_POSTS_META.map((post) => {
  const url = `${SITE_URL}/blogs/${post.id}`;
  return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(post.lastmod).toUTCString()}</pubDate>
    </item>`;
}).join('\n');

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(BLOG_INDEX_META.title)}</title>
    <link>${SITE_URL}/blogs</link>
    <description>${escapeXml(BLOG_INDEX_META.description)}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date(BLOG_INDEX_META.lastmod).toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

const outPath = path.join(root, 'public', 'feed.xml');
fs.writeFileSync(outPath, rss, 'utf8');
console.log(`Generated feed.xml with ${BLOG_POSTS_META.length} items`);
