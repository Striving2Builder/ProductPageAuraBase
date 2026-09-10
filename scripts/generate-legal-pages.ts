import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { renderToStaticMarkup } from 'react-dom/server';
import PrivacyPolicyView from '../PrivacyPolicy';
import TermsOfUseView from '../TermsOfUse';
import { OG_IMAGE } from '../siteMeta';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

function writePage(entry: string, headHtml: string, bodyContent: string): void {
  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
${headHtml}
    <link rel="stylesheet" href="/index.css" />
  </head>
  <body class="bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
    <div id="root" data-prerender="true">${bodyContent}</div>
    <script type="module" src="/src/${entry}-index.tsx"></script>
  </body>
</html>
`;
  fs.writeFileSync(path.join(root, `${entry}.html`), html, 'utf8');
}

const privacyHead = `    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Privacy Policy | AuraBase</title>
    <meta name="description" content="AuraBase privacy policy: how we handle data, encryption, and your rights when you use the AuraBase wellness app and website." />
    <meta name="robots" content="index,follow" />
    <meta name="theme-color" content="#0d9488" media="(prefers-color-scheme: light)" />
    <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />
    <link rel="canonical" href="https://aurabase.app/privacypolicy" />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://aurabase.app/privacypolicy" />
    <meta property="og:site_name" content="AuraBase" />
    <meta property="og:title" content="Privacy Policy | AuraBase" />
    <meta property="og:description" content="How AuraBase collects, uses, and protects your information." />
    <meta property="og:image" content="${OG_IMAGE}" />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Privacy Policy | AuraBase" />
    <meta name="twitter:description" content="How AuraBase collects, uses, and protects your information." />

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://aurabase.app/#website",
          "url": "https://aurabase.app/",
          "name": "AuraBase"
        },
        {
          "@type": "WebPage",
          "@id": "https://aurabase.app/privacypolicy#webpage",
          "url": "https://aurabase.app/privacypolicy",
          "name": "Privacy Policy | AuraBase",
          "description": "AuraBase privacy policy and data practices.",
          "isPartOf": { "@id": "https://aurabase.app/#website" },
          "inLanguage": "en-US"
        }
      ]
    }
    </script>`;

const termsHead = `    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Terms of Use | AuraBase</title>
    <meta name="description" content="AuraBase Terms of Use, including subscription, billing, and license terms for the AuraBase app." />
    <meta name="robots" content="index,follow" />
    <meta name="theme-color" content="#0d9488" media="(prefers-color-scheme: light)" />
    <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />
    <link rel="canonical" href="https://aurabase.app/termsofuse" />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://aurabase.app/termsofuse" />
    <meta property="og:site_name" content="AuraBase" />
    <meta property="og:title" content="Terms of Use | AuraBase" />
    <meta property="og:description" content="Terms that govern your use of AuraBase subscriptions and services." />
    <meta property="og:image" content="${OG_IMAGE}" />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Terms of Use | AuraBase" />
    <meta name="twitter:description" content="Terms that govern your use of AuraBase subscriptions and services." />

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://aurabase.app/#website",
          "url": "https://aurabase.app/",
          "name": "AuraBase"
        },
        {
          "@type": "WebPage",
          "@id": "https://aurabase.app/termsofuse#webpage",
          "url": "https://aurabase.app/termsofuse",
          "name": "Terms of Use | AuraBase",
          "description": "AuraBase Terms of Use.",
          "isPartOf": { "@id": "https://aurabase.app/#website" },
          "inLanguage": "en-US"
        }
      ]
    }
    </script>`;

const noop = () => {};

writePage('privacypolicy', privacyHead, renderToStaticMarkup(PrivacyPolicyView({ onBack: noop })));
writePage('termsofuse', termsHead, renderToStaticMarkup(TermsOfUseView({ onBack: noop })));

console.log('Generated privacypolicy.html and termsofuse.html with full prerendered content.');
