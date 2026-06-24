import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

function enhanceLandingImages(html: string): string {
  return html.replace(
    /<img([^>]*?)src="\/assets\/([^"]+\.(png|jpe?g))"([^>]*?)>/gi,
    (_match, before, file, ext, after) => {
      const webp = file.replace(/\.(png|jpe?g)$/i, '.webp');
      return `<picture><source srcset="/assets/${webp}" type="image/webp" /><img${before}src="/assets/${file}"${after}></picture>`;
    }
  );
}

function scopeLandingCss(css: string): string {
  return css
    .replace(/\bbody\s*\{/g, '.landing-page {')
    .replace(/^\s*a\s*\{/gm, '.landing-page a {')
    .replace(/^\s*img\s*\{/gm, '.landing-page img {')
    .replace(/^\s*button\s*\{/gm, '.landing-page button {')
    .replace(
      /^\s*\*, \*::before, \*::after \{ box-sizing: border-box; margin: 0; padding: 0; \}/m,
      '.landing-page, .landing-page *, .landing-page *::before, .landing-page *::after { box-sizing: border-box; }'
    );
}
const mockup = fs.readFileSync(path.join(root, 'mockup_v2.html'), 'utf8');

const styleMatch = mockup.match(/<style>([\s\S]*?)<\/style>/);
const bodyMatch = mockup.match(/<body>([\s\S]*?)<\/body>/);

if (!styleMatch || !bodyMatch) {
  throw new Error('Could not parse mockup_v2.html');
}

let body = bodyMatch[1];
body = body.replace(/<script>[\s\S]*?<\/script>/, '');
body = body.replace(/public\/assets\//g, '/assets/');
body = body.replace(/https:\/\/aurabase\.app\/blogs/g, '/blogs');
body = body.replace(/https:\/\/aurabase\.app\/privacypolicy/g, '/privacypolicy');
body = body.replace(/https:\/\/aurabase\.app\/termsofuse/g, '/termsofuse');
body = body.replace(
  /<a href="\/blogs" target="_blank" rel="noopener noreferrer"/g,
  '<a href="/blogs"'
);
body = body.replace(
  /https:\/\/play\.google\.com\/store\/apps\/details\?id=com\.aurabase\.mobile/g,
  'https://play.google.com/store/apps/details?id=com.aurabase.mobile&pcampaignid=web_share'
);

const landingDir = path.join(root, 'src', 'landing');
fs.mkdirSync(landingDir, { recursive: true });
fs.writeFileSync(path.join(landingDir, 'landing.css'), scopeLandingCss(styleMatch[1].trim()));
fs.writeFileSync(path.join(landingDir, 'landing-body.html'), enhanceLandingImages(body.trim()));

console.log(`Prepared landing assets in ${landingDir}`);
