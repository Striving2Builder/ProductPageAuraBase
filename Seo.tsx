import React, { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogImage?: string;
  ogImageAlt?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

function upsertMeta(selector: string, attr: string, value: string, create?: { name?: string; property?: string }) {
  let el = document.querySelector(selector);
  if (el) {
    el.setAttribute(attr, value);
    return;
  }
  el = document.createElement('meta');
  if (create?.name) el.setAttribute('name', create.name);
  if (create?.property) el.setAttribute('property', create.property);
  el.setAttribute(attr, value);
  document.head.appendChild(el);
}

export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  canonical,
  keywords,
  ogImage,
  ogImageAlt,
  jsonLd,
}) => {
  useEffect(() => {
    document.title = title;
    upsertMeta('meta[name="description"]', 'content', description, { name: 'description' });

    if (keywords) {
      upsertMeta('meta[name="keywords"]', 'content', keywords, { name: 'keywords' });
    }

    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', canonical);
      } else {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        canonicalLink.setAttribute('href', canonical);
        document.head.appendChild(canonicalLink);
      }
    }

    upsertMeta('meta[property="og:title"]', 'content', title, { property: 'og:title' });
    upsertMeta('meta[property="og:description"]', 'content', description, { property: 'og:description' });
    upsertMeta('meta[name="twitter:title"]', 'content', title, { name: 'twitter:title' });
    upsertMeta('meta[name="twitter:description"]', 'content', description, { name: 'twitter:description' });

    if (ogImage) {
      upsertMeta('meta[property="og:image"]', 'content', ogImage, { property: 'og:image' });
      upsertMeta('meta[name="twitter:image"]', 'content', ogImage, { name: 'twitter:image' });
    }

    if (ogImageAlt) {
      upsertMeta('meta[property="og:image:alt"]', 'content', ogImageAlt, { property: 'og:image:alt' });
    }

    let script: HTMLScriptElement | null = null;
    if (jsonLd) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      if (script && document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [title, description, canonical, keywords, ogImage, ogImageAlt, jsonLd]);

  return null;
};
