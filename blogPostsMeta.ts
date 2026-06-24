export interface BlogPostMeta {
  id: string;
  title: string;
  description: string;
  author: string;
  lastmod: string;
}

export const BLOG_INDEX_META = {
  title: 'AuraBase AI Council Blogs | Wellness Experiments & Recovery Science',
  description:
    'Wellness experiments, sleep recovery, AI nutrition and fitness coaching, biomechanics, mindfulness, and biohacking from AuraBase.',
  lastmod: '2026-06-24',
};

export const BLOG_POSTS_META: BlogPostMeta[] = [
  {
    id: 'lab-data-driven-pivot',
    title: 'From Mind, Body & Spirit to The Lab: Why We Rebuilt AuraBase Around Your Data',
    description:
      'Founder\'s note on pivoting to personal experiments, cross-domain signal mapping, and AuraBase\'s Train, Fuel, Recover data loop.',
    author: 'AuraBase',
    lastmod: '2026-06-24',
  },
  {
    id: 'ai-meal-photo-accuracy-research',
    title: 'What Research Says About AI Meal Photos for Calories & Macros — and Where AuraBase Stands',
    description:
      'Aria on meal-photo research (2021–2026), hybrid USDA + Canadian Nutrient File grounding, and AuraBase\'s honest accuracy position.',
    author: 'Aria',
    lastmod: '2026-06-24',
  },
  {
    id: 'aria-ai-meal-scanner-v2',
    title: 'Why Your Meal Photo Needs a Database: Inside AuraBase\'s Hybrid AI Meal Scanner V2',
    description:
      'How GPS, timestamps, and EXIF improve meal scans, plus AuraBase V2\'s hybrid LLM + USDA/Canadian Nutrient File architecture.',
    author: 'Aria',
    lastmod: '2026-06-09',
  },
  {
    id: 'sound-sanctuary-youtube-music',
    title: 'Introducing Our YouTube Music Page: An Extension of the Sound Sanctuary',
    description:
      'Launching our YouTube Music Artist Page — a digital sanctuary for meditation, yoga, deep focus, and healing. New spiritual meditation tracks released monthly.',
    author: 'Solace',
    lastmod: '2026-05-22',
  },
  {
    id: 'zenith-mindfulness-anxiety',
    title: 'Matter Over Mind: The Biological Impact of Mindfulness Meditation',
    description:
      'How mindfulness meditation rewires neural pathways associated with anxiety. Clinical protocols from Zenith, your AI Mindfulness Guide at AuraBase.',
    author: 'Zenith',
    lastmod: '2026-05-18',
  },
  {
    id: 'aria-ai-nutritionist-diet',
    title: 'The AI Nutritionist: Designing Your Optimal Healthy Eating Plan',
    description:
      'Stop crash dieting. Learn how Aria, your Global AI Nutritionist, architects personalized healthy eating plans from global cuisine.',
    author: 'Aria',
    lastmod: '2026-05-18',
  },
  {
    id: 'atlas-yoga-wearables',
    title: 'The Data-Driven Yogi: Merging Ancient Flow with Modern Wearables',
    description:
      'How Atlas merges yoga, wearable fitness trackers, and AI coaching to turn every session into actionable biometric data.',
    author: 'Atlas',
    lastmod: '2026-05-18',
  },
  {
    id: 'ios-app-store-launch',
    title: 'AuraBase is Officially Live on the Apple App Store',
    description:
      'AuraBase is now available on the Apple App Store. Download the iOS app and start your holistic wellness evolution today.',
    author: 'AuraBase',
    lastmod: '2026-05-18',
  },
  {
    id: 'google-play-launch',
    title: 'Six months in—and we are live on Google Play',
    description:
      'AuraBase is live on Google Play. A founder\'s note on the journey, the community that made it possible, and what comes next.',
    author: 'AuraBase',
    lastmod: '2026-05-18',
  },
  {
    id: 'atlas',
    title: 'Beyond the Mirror: How MediaPipe is Forcing Perfect Form',
    description:
      'Atlas uses Google MediaPipe BlazePose to track 33 body landmarks in real time and correct your form before injury occurs.',
    author: 'Atlas',
    lastmod: '2026-05-18',
  },
  {
    id: 'aria',
    title: 'Beyond "Chicken and Rice": Reclaiming Macros Through Global Cuisine',
    description:
      'Aria\'s Cultural Nuance Engine builds macro-perfect meal plans from South Asian, Mediterranean, East Asian, and Latin American cuisines.',
    author: 'Aria',
    lastmod: '2026-05-18',
  },
  {
    id: 'luna',
    title: 'Hacking Your Circadian Rhythm: What Your Wearable Isn\'t Telling You',
    description:
      'Luna transforms raw wearable sleep data into personalized Sleep Optimization Protocols and hormetic stress cycles.',
    author: 'Luna',
    lastmod: '2026-05-18',
  },
  {
    id: 'zenith',
    title: 'The Physical ROI of Mental Stillness: Rewiring Brain and Body',
    description:
      'Daily mindfulness meditation lowers cortisol, improves HRV, and accelerates physical recovery. The science from Zenith.',
    author: 'Zenith',
    lastmod: '2026-05-18',
  },
  {
    id: 'solace',
    title: 'Sounds that Shape Your Mind: The Science of Binaural Beats',
    description:
      'Solace explains how binaural beats trigger brainwave entrainment for deep focus, relaxation, and restorative sleep.',
    author: 'Solace',
    lastmod: '2026-05-18',
  },
];
