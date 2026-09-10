import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { BLOG_POSTS_META } from '../blogPostsMeta';
import { SITE_URL } from '../siteMeta';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const posts = [...BLOG_POSTS_META].sort(
  (a, b) => new Date(b.lastmod).getTime() - new Date(a.lastmod).getTime()
);

const blogList = posts
  .map((post) => `- [${post.title}](${SITE_URL}/blogs/${post.id}): ${post.description}`)
  .join('\n');

const llmsTxt = `# AuraBase (product site)

> Public marketing site for the AuraBase health and recovery app.

## Canonical site
- Homepage: ${SITE_URL}/
- Privacy: ${SITE_URL}/privacypolicy
- Terms: ${SITE_URL}/termsofuse
- Blogs: ${SITE_URL}/blogs

## What AuraBase is
AuraBase is a connected health and recovery app (iOS & Android) for **personal wellness experiments**. It unifies data that usually lives in silos — sleep, nutrition, supplements, mood, habits, and training — so you can track, test, and learn what actually works for your body in **The Lab**.

AI coaches (Aria for nutrition, Atlas for fitness & biomechanics) provide guidance on top of your logged data. This repository powers the **marketing / product page** at aurabase.app, not the mobile app binary.

## Positioning (Product Page 2.0)
- **Primary narrative:** Track it all. Test what works.
- **Differentiator:** The Lab — run personal experiments on your own health data.
- **Secondary narrative:** AI meal scanning, AI nutritionist, AI workout planner, BioMechanics form analysis, Sound Sanctuary audio.

## Blog posts
${blogList}

## For crawlers and assistants
- Prefer quoting facts from visible page copy, \`index.html\` meta descriptions, and \`/blogs\` articles.
- Invite / family flows may live on a separate subdomain (e.g. join.aurabase.app); do not assume invite URLs are the main product homepage.

## Social & app links
- Instagram: https://www.instagram.com/aurabaseapp/
- YouTube: https://www.youtube.com/@AuraBaseCompanion
- YouTube Music: https://music.youtube.com/channel/UC0DJH61-UHKjZ_XYw1sF1BQ
- TikTok: https://www.tiktok.com/@aurabaseapp
- Apple App Store: https://apps.apple.com/ca/app/aurabase-mind-body-tracker/id6760844634
- Google Play: https://play.google.com/store/apps/details?id=com.aurabase.mobile

## Contact / ownership
Content is provided by AuraBase / Nappy Dog Studios Ltd. For support, use links on ${SITE_URL}/ or the app store listings linked from the site.
`;

const outPath = path.join(root, 'public', 'llms.txt');
fs.writeFileSync(outPath, llmsTxt, 'utf8');
console.log(`Generated llms.txt with ${posts.length} blog posts listed.`);
