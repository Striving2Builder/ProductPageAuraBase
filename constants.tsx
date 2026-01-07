import { Coach, WellnessTab, PricingPlan, Feature, SpecializedFeature, CommunityProgram } from './types';

// PRODUCT INFO VAULT - DO NOT UPDATE WITHOUT EXPLICIT INSTRUCTION
export const PRODUCT_NAME = "AuraBase";
export const HERO_TAGLINE = "AI Fitness, Nutrition, & Holistic Health Tracker";
export const HERO_DESCRIPTION = "The world's first AI-powered council featuring an International AI Chef and Nutritionist. One interface for your entire evolution.";

export const COACHES: Coach[] = [
  {
    id: 'chef',
    name: 'Aria',
    role: 'International AI Chef & Nutritionist',
    description: 'Specializing in global cuisine support, Aria builds personalized nutrition protocols based on your heritage and biological needs.',
    capabilities: ['Global Cuisine Support', 'Macro Analysis', 'Smart Grocery Integration'],
    icon: '🍳',
    color: 'orange'
  },
  {
    id: 'trainer',
    name: 'Atlas',
    role: 'AI Personal Trainer',
    description: 'Adaptive AI workout planning that evolves in real-time based on your strength, recovery, and biometric data.',
    capabilities: ['Adaptive Workout Planning', 'Form Correction AI', 'Strength Benchmarking'],
    icon: '🏋️‍♂️',
    color: 'red'
  },
  {
    id: 'lifestyle',
    name: 'Luna',
    role: 'Wellness Coach',
    description: 'A holistic approach to lifestyle management, focusing on the synergy between habits, environment, and vitality.',
    capabilities: ['Habit Integration', 'Environment Optimization', 'Daily Flow Planning'],
    icon: '🌱',
    color: 'cyan'
  },
  {
    id: 'mind',
    name: 'Zenith',
    role: 'Mindfulness Coach',
    description: 'Master your internal state through guided silence, targeted breathwork, and neuro-adaptive meditation.',
    capabilities: ['Breathing & Meditation', 'Focus Training'],
    icon: '🧘‍♀️',
    color: 'purple'
  },
  {
    id: 'lab',
    name: 'The Lab',
    role: 'Biomarker Analyst',
    description: 'Deep-dive synthesis of your blood and DNA data to provide actionable longevity and performance protocols.',
    capabilities: ['Biomarker Analysis', 'Enhance your AI Chef and Nutritionist', 'Longevity Tracking'],
    icon: '🔬',
    color: 'blue'
  }
];

export const WELLNESS_FEATURES: Record<WellnessTab, Feature[]> = {
  [WellnessTab.MIND]: [
    {
      id: 'm1',
      title: 'Mood & Emotion Logging',
      description: 'Track your emotional journey with our comprehensive mood and emotion logging system. Monitor your mental state with daily check-ins to build deep self-awareness.',
      icon: '🧠'
    },
    {
      id: 'm2',
      title: 'Meditation & Sound',
      description: 'Our Meditation library and Sound Sanctuary provide the perfect escape for stress relief and mental clarity through immersive guided sessions and 3D audio.',
      icon: '🧘'
    },
    {
      id: 'm3',
      title: 'Digital Wellbeing',
      description: 'Gain insights into your digital habits through Screen Time and Social Media Awareness tracking. Reclaim your focus and find true digital balance in a connected world.',
      icon: '📱'
    },
    {
      id: 'm4',
      title: 'Guided Breathing',
      description: 'Practice guided breathing exercises with our AI Mindfulness Coach. Targeted techniques designed to help you master your stress response and ground your energy instantly.',
      icon: '💨'
    }
  ],
  [WellnessTab.BODY]: [
    {
      id: 'b1',
      title: 'AuraForge (Strength Training)',
      description: '• AI-powered workout planning & real-time form correction.\n• Cinematic social sharing—export your gains straight to Stories.\n• Precision logging to farm Aura and track every rep.',
      icon: '⚔️'
    },
    {
      id: 'b2',
      title: 'AuraFlex (Yoga & Flexibility)',
      description: '• Support for 8+ yoga styles & 50+ pose tracking.\n• Advanced Flow Builder with integrated breathwork protocols.\n• Pre/Post-session mood mapping to visualize your peace.',
      icon: '🧘‍♀️'
    },
    {
      id: 'b3',
      title: 'AuraEndure (Cardio & Endurance)',
      description: '• Zero-friction auto-sync with all major fitness devices.\n• Gamified performance tracking—watch your XP surge as you move.\n• Stunning visual stats to inspire your circle on social.',
      icon: '🏃'
    },
    {
      id: 'b4',
      title: 'AI Nutrition Scanner',
      description: '• Snap & Analyze: Instant AI recognition for global cuisines.\n• Deep macro insights & calorie tracking in seconds.\n• Precision fuel mapping to optimize your evolution.',
      icon: '📸'
    }
  ],
  [WellnessTab.SPIRIT]: [
    { id: 's1', title: 'Inspiration', description: 'Daily sparks of wisdom and creative ignition.', icon: '✨' },
    { id: 's2', title: 'Sound Sanctuary', description: 'Immersive 3D audio environments for transcendence.', icon: '🎧' },
    { id: 's3', title: 'Affirmations', description: 'Voice-driven positive reinforcement for subconscious rewiring.', icon: '🗣️' }
  ]
};

export const SPECIALIZED_FEATURES: SpecializedFeature[] = [
  {
    id: 'womens-health',
    title: "Women's Health",
    description: "Elegant, respectful imagery combined with intelligent hormonal cycle tracking and performance syncing.",
    icon: 'Heart',
    imageSeed: 'womenshealth',
    accentColor: 'pink'
  },
  {
    id: 'vice-management',
    title: "Vice Management",
    description: "Supportive, non-judgmental messaging designed to help you regain control over your habits through behavioral science.",
    icon: 'ShieldCheck',
    imageSeed: 'vicemanage',
    accentColor: 'blue'
  },
  {
    id: 'app-customization',
    title: "App Customization",
    description: "Tailor the interface to your specific goals. Toggle features on/off to create a workspace that fits your unique aura.",
    icon: 'Settings',
    imageSeed: 'customization',
    accentColor: 'slate'
  }
];

export const AURAQUEST_INFO = {
  tagline: "Your Wellness Journey, Gamified",
  description: "Transform your daily discipline into an epic RPG. Gain XP through real-life activities—workouts, sleep, and meditation translate directly to ECHO evolution. Level up, unlock new gear, and engage in community battles.",
  features: [
    { title: "XP SYSTEM", desc: "Real-life habits = In-game progress" },
    { title: "BATTLES", desc: "Compete in global wellness challenges" },
    { title: "EVOLUTION", desc: "Watch your ECHO grow with you" }
  ]
};

export const COMMUNITY_INFO: CommunityProgram[] = [
  {
    id: 'friends-family',
    title: "Friends & Family Program",
    description: "Invite your inner circle and share the gift of healthy living practices.",
    icon: 'Users',
    accentColor: 'cyan'
  },
  {
    id: 'partners',
    title: "Partner Program",
    description: "Influencers and social media fitness personalities can join the revolution and become partners with AuraBase. Promote healthy living and earn with us.",
    icon: 'ShieldCheck',
    accentColor: 'purple'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Monthly',
    price: '$12.99',
    billing: 'Billed monthly',
    cta: 'Coming Soon'
  },
  {
    name: 'Quarterly',
    price: '$29.99',
    billing: 'Billed every 3 months',
    savings: 'save 23%',
    cta: 'Coming Soon'
  },
  {
    name: 'Yearly',
    price: '$99.99',
    billing: 'Billed annually',
    savings: 'save 36%',
    isPopular: true,
    cta: 'Coming Soon'
  }
];