import { BLOG_POSTS_META, type BlogPostMeta } from '../blogPostsMeta';
import { OG_IMAGE, SITE_URL } from '../siteMeta';

export const APPLE_APP_ID = '6760844634';
export const GOOGLE_PLAY_PACKAGE = 'com.aurabase.mobile';

export const APPLE_APP_STORE_URL =
  'https://apps.apple.com/ca/app/aurabase-mind-body-tracker/id6760844634';
export const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.aurabase.mobile&pcampaignid=web_share';

export function buildBlogPostingJsonLd(post: BlogPostMeta) {
  const url = `${SITE_URL}/blogs/${post.id}`;
  return {
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url,
    datePublished: post.lastmod,
    dateModified: post.lastmod,
    image: OG_IMAGE,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'AuraBase',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/assets/logo.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

export function buildBlogPostPageJsonLd(post: BlogPostMeta) {
  const url = `${SITE_URL}/blogs/${post.id}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildBlogPostingJsonLd(post),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Blogs', item: `${SITE_URL}/blogs` },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
    ],
  };
}

export function buildBlogIndexJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'AuraBase AI Council Blogs',
    description:
      'Insights on personal wellness experiments, sleep recovery, AI nutrition and fitness coaching, biomechanics, mindfulness, and biohacking.',
    url: `${SITE_URL}/blogs`,
    blogPost: BLOG_POSTS_META.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `${SITE_URL}/blogs/${post.id}`,
      dateModified: post.lastmod,
      author: { '@type': 'Person', name: post.author },
      publisher: { '@type': 'Organization', name: 'AuraBase' },
    })),
  };
}
