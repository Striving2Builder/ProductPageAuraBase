
export interface Coach {
  id: string;
  name: string;
  role: string;
  description: string;
  capabilities: string[];
  icon: string;
  color: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export enum WellnessTab {
  MIND = 'mind',
  BODY = 'body',
  SPIRIT = 'spirit'
}

export interface PricingPlan {
  name: string;
  price: string;
  billing: string;
  savings?: string;
  isPopular?: boolean;
  cta: string;
}

export interface SpecializedFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageSeed: string;
  accentColor: string;
}

export interface CommunityProgram {
  id: string;
  title: string;
  description: string;
  icon: string;
  accentColor: string;
}
