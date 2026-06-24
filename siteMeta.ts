export const SITE_URL = 'https://aurabase.app';

/** Bing/Google recommend 25–160 characters for meta descriptions. */
export const META_DESCRIPTION_MAX = 155;

export function clipMetaDescription(text: string, max = META_DESCRIPTION_MAX): string {
  const normalized = text.replace(/\s+/g, ' ').trim();
  if (normalized.length <= max) return normalized;
  const clipped = normalized.slice(0, max - 1);
  const lastSpace = clipped.lastIndexOf(' ');
  return `${(lastSpace > 80 ? clipped.slice(0, lastSpace) : clipped).trimEnd()}…`;
}

export const SITE_TITLE = 'AuraBase — Health, Recovery & Personal Experiments';

export const SITE_DESCRIPTION =
  'Connect sleep, nutrition, supplements, mood, and habits. Run personal wellness experiments in The Lab. Track. Test. Recover smarter.';

export const SITE_KEYWORDS =
  'health tracker, sleep recovery, meal scanner, AI nutritionist, AI chef, AI fitness trainer, biomechanics, workout planner, supplements, wellness experiments, mood tracker, habit tracker, personal biohacking, recovery radar';

export const OG_IMAGE = `${SITE_URL}/og-default.jpg`;

export const APPLE_APP_STORE_URL =
  'https://apps.apple.com/ca/app/aurabase-mind-body-tracker/id6760844634';
export const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.aurabase.mobile&pcampaignid=web_share';

export const APPLE_APP_ID = '6760844634';
export const OG_IMAGE_ALT =
  'AuraBase — personal wellness experiments, recovery tracking, and AI coaches';

export const HERO_TAGLINE = 'Sync. Track. Test. Optimize & Perform Smarter.';
export const HERO_DESCRIPTION =
  'AuraBase connects the health data other apps leave in silos — so you can see what actually works for your body and test it in The Lab.';

export const FAQ_ITEMS = [
  {
    question: 'What is AuraBase?',
    answer:
      'AuraBase is a connected health and recovery app that unifies sleep, nutrition, supplements, mood, habits, and training — so you can run personal wellness experiments in The Lab and learn what works for your body.',
  },
  {
    question: 'What is The Lab?',
    answer:
      'The Lab is AuraBase\'s personal experiment engine. Pick a change, pick an outcome, check in daily, and see what your own logged data says — like testing whether a walk after dinner improves your sleep score.',
  },
  {
    question: 'Does AuraBase replace medical advice?',
    answer:
      'No. AuraBase is a wellness tool. AI coaches provide informational suggestions only. Consult a healthcare professional for medical decisions.',
  },
  {
    question: 'How accurate is the AI Meal Scanner?',
    answer:
      'AuraBase uses a hybrid approach: AI identifies food and portions, then anchors nutrition values to official USDA and Canadian Nutrient File databases rather than relying on vision-only estimates.',
  },
  {
    question: 'Who are the AI coaches?',
    answer:
      'Aria is your International AI Chef and AI Nutritionist for meal planning and diet assessment. Atlas is your AI Fitness Coach for workout planning and live BioMechanics form analysis.',
  },
  {
    question: 'Is my health data private?',
    answer:
      'Yes. AuraBase uses zero-knowledge encryption for sensitive health logs. You control integrations, and you can delete your account and data from Settings.',
  },
];

export const FAQ_JSON_LD = {
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export const HOME_JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'AuraBase',
      url: SITE_URL,
      logo: `${SITE_URL}/assets/logo.svg`,
      sameAs: [
        'https://www.instagram.com/aurabaseapp/',
        'https://www.youtube.com/@AuraBaseCompanion',
        'https://music.youtube.com/channel/UC0DJH61-UHKjZ_XYw1sF1BQ',
        'https://www.tiktok.com/@aurabaseapp',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'AuraBase',
      inLanguage: 'en-US',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}/#app`,
      name: 'AuraBase',
      url: SITE_URL,
      image: OG_IMAGE,
      applicationCategory: 'HealthApplication',
      operatingSystem: 'iOS, Android',
      description:
        'A connected health and recovery app for personal wellness experiments. Track sleep, nutrition, supplements, mood, and training in one place — then test what works in The Lab. Includes AI coaches for nutrition, fitness biomechanics, and recovery support.',
      publisher: { '@id': `${SITE_URL}/#organization` },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        description: 'Free tier available; Pro plans in app.',
      },
      downloadUrl: [APPLE_APP_STORE_URL, GOOGLE_PLAY_URL],
    },
    FAQ_JSON_LD,
  ],
};

export const NOSCRIPT_SUMMARY = `
  <p><strong>AuraBase — Health, Recovery &amp; Personal Experiments.</strong> ${SITE_DESCRIPTION}</p>
  <p>Connect sleep, nutrition, supplements, mood, and habits. Run personal wellness experiments in The Lab. AI coaches include Aria (nutrition) and Atlas (fitness &amp; biomechanics).</p>
  <ul>
    <li><a href="/blogs/aria-ai-meal-scanner-v2">AI Meal Scanner deep dive</a></li>
    <li><a href="/blogs/atlas">BioMechanics form analysis</a></li>
    <li><a href="/blogs/solace">Sound Sanctuary &amp; binaural beats</a></li>
    <li><a href="/blogs">All AI Council blogs</a></li>
  </ul>
`;
