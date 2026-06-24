import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distIndex = path.join(root, 'dist', 'index.html');
const landingBody = path.join(root, 'src', 'landing', 'landing-body.html');

if (!fs.existsSync(distIndex)) {
  console.error('dist/index.html not found — run vite build first.');
  process.exit(1);
}

if (!fs.existsSync(landingBody)) {
  console.error('src/landing/landing-body.html not found — run prepare:landing first.');
  process.exit(1);
}

const body = fs.readFileSync(landingBody, 'utf8');
const prerendered = `<div class="landing-page" data-prerender="true">${body}</div>`;

let html = fs.readFileSync(distIndex, 'utf8');

if (html.includes('data-prerender="true"')) {
  console.log('Homepage already prerendered in dist/index.html');
  process.exit(0);
}

const rootPattern = /<div id="root"><\/div>/;
if (!rootPattern.test(html)) {
  console.error('Could not find empty #root in dist/index.html');
  process.exit(1);
}

html = html.replace(rootPattern, `<div id="root">${prerendered}</div>`);
fs.writeFileSync(distIndex, html, 'utf8');
console.log(`Prerendered landing HTML into dist/index.html (${body.length} bytes)`);
