# Internal Reference Document | For Use in Product Page Copy, Marketing, and AI-Assisted Sessions
**IMPORTANT**

This brief is written from the AI to itself. It is a permanent reference document to be loaded at the start of any session involving AuraBase's product page, marketing copy, investor materials, or feature descriptions. Read this fully before generating any content about the AI coaches.

## What is the AI Council?
The AI Council is AuraBase's core differentiator. It is a team of five specialized AI agents, each with a distinct domain, personality, and set of in-app functions. Together they cover the full Mind, Body, and Spirit health ecosystem.

No competitor offers this model. Where MyFitnessPal has one focus (nutrition), or Headspace has one focus (mindfulness), AuraBase gives the user five expert coaches in one subscription — each one deeply functional, not decorative.

The five members are:
- **Atlas** — AI Fitness Trainer
- **Aria** — AI Nutritionist & Chef
- **Luna** — AI Wellness & Biohacker
- **Zenith** — AI Mindfulness Guide
- **Solace** — Sound Sanctuary Guide

Each agent has a distinct name, personality, AI model, and tab inside the app. The tab is called "AI Team" in the navigation.

---

## Council Member 1: ATLAS 🏋️
**Role:** AI Fitness Trainer  
**AI Model:** Gemini 2.5 Lite  
**Tab Component:** `TrainerCoach.tsx`  
**Brand Voice:** Data-driven, performance-focused, motivating but precise. "Driven by data."

### What Atlas Does (Functions Inside the App):
| Function | Description |
| :--- | :--- |
| **AI Workout Planner** | Generates personalized workout plans based on the user's goals, fitness level, and available equipment. Plans are importable directly into the user's log. Includes standard and beta rehab/recovery plans. |
| **Consistency Calendar** | A visual month-view calendar showing workout adherence and streaks. The centerpiece of Atlas's tab — displayed as the main swipe card. Drives habit formation through visual accountability. |
| **Weekly Activity Chart** | A 7-day bar chart summarizing workout volume, type, and frequency over the past week. Shows trends over time. |
| **Strength Benchmarking** | Compares the user's logged strength metrics (squat, bench, deadlift, etc.) against population benchmarks by age and gender. Shows where they stand relative to their cohort. |
| **BioMechanics Analysis (Live Feature)** | AI-powered exercise form analysis using MediaPipe (computer vision). The user performs exercises on camera; Atlas analyzes their movement patterns and biomechanics in real time. Live badge shown in UI. |
| **Mobility Assessment** | AI range-of-motion and joint health analysis. Users complete guided mobility flows; Atlas captures and evaluates their range of motion. Unlocked after first mobility log session. |

### What Atlas Understands About the User:
- User's profile (age, weight, height, goals, fitness level)
- All historical logs across 90 days
- Connected wearable data via Health Connect

### Key Marketing Lines for Atlas:
- "Your AI trainer who knows your schedule, your limits, and your goals."
- "Atlas builds your workout. You execute it."
- "Real-time form analysis. No gym needed."

---

## Council Member 2: ARIA 🍽️
**Role:** AI Nutritionist & AI Chef  
**AI Model:** Gemini 2.5 Lite  
**Tab Component:** `NutritionistCoach.tsx`  
**Brand Voice:** Warm, knowledgeable, food-positive. "Decipher complex macro-nutrition, gut-health tips, and meal planning."

### What Aria Does (Functions Inside the App):
| Function | Description |
| :--- | :--- |
| **Diet Assessment Report** | Aria synthesizes the user's 90-day nutritional logs and generates a personalized assessment covering: caloric balance, macro distribution, nutritional gaps, hydration, and weight trend. Powered by Gemini AI. (1 free per freemium tier, unlimited on Pro.) |
| **AI Chef Meal Recommendations** | Aria generates personalized meal ideas styled to the user's cuisine preference (Any, Italian, Asian, Mexican, etc.) and meal type (Balanced, High Protein, Low Carb, etc.). Each meal card shows name, calories, macros, and a "Save" button. |
| **Recipe Generator** | Aria generates a full step-by-step recipe for any saved meal — including ingredients list and instructions. One click from the saved meal library. |
| **Saved Meals Library** | A personal recipe library where users store Aria-generated meals. Each saved meal can be expanded to show its recipe, logged to today's diary, or added to the grocery list. |
| **Grocery List Generator** | Aria converts ingredients from saved recipes into an organized, categorized grocery list (produce, proteins, pantry, etc.) with checkboxes. Persistent across sessions. |
| **Nutrition Goal Heatmap** | A calendar heatmap visualization showing daily calorie/macro goal adherence over the past 90 days. Green = on target, red = over/under. |
| **Diet Summary Card** | A 7-day rolling summary card showing average calories, protein, carbs, fats, and water intake. |
| **Daily Calorie Balance Chart** | A bar chart showing daily caloric intake vs. the user's target — shows deficit or surplus clearly. |

### What Aria Understands About the User:
- Full meal log history (90 days via `useHistoricalData`)
- Macro and calorie targets from user profile
- Saved recipes library
- Cuisine and meal type preferences (set in-session)

### Key Marketing Lines for Aria:
- "An AI chef who knows your macros and your taste."
- "Aria doesn't just count calories. She plans your week."
- "From meal idea to full grocery list in one tap."

---

## Council Member 3: LUNA 🌙
**Role:** AI Wellness Coach & Biohacker  
**AI Model:** Gemini 2.5 Lite  
**Tab Component:** `WellnessCoach.tsx`  
**Brand Voice:** Scientific, calm, biohacking-forward. "Dives deep into longevity, sleep optimization, and lifestyle habits."

### What Luna Does (Functions Inside the App):
| Function | Description |
| :--- | :--- |
| **Sleep Optimization Protocol** | Luna generates personalized sleep protocols based on: the user's current average sleep hours, bedtime, and caffeine intake. Outputs a step-by-step circadian rhythm and sleep hygiene plan. Wearable sleep data (duration, efficiency, HRV, SpO2) is pulled from Google Health Connect if connected. |
| **Morning Ritual Designer** | Luna designs a personalized morning routine based on the user's goal (High Energy / Deep Focus / Calm & Grounded) and available time (15 / 30 / 60 min). |
| **Energy & Metabolism Protocol** | Luna generates personalized metabolic and energy protocols based on the user's selected focus area: Intermittent Fasting (16:8), Circadian Eating, Keto/Low Carb, or Gut Health. |
| **Recovery & Stress Plan** | Luna generates a tailored recovery protocol based on the user's current stress level (Low / Medium / High). Focus areas include breathwork, HRV down-regulation, and active recovery. |
| **Environment & Hormesis Cycle** | Luna creates a hormetic stress protocol (beneficial stressor plan) based on available tools: Cold Shower, Sauna, Red Light therapy, or Sunlight exposure. Hormesis = strategic use of short-term stressors to build resilience. |
| **Wearable Biometrics Display** | Luna's sleep section integrates real wearable data: sleep duration, sleep efficiency %, HRV (ms), and SpO2 (%). Requires Google Fit / Health Connect integration. Native Android only (web shows preview). |

### What Luna Understands About the User:
- User's profile and stated preferences
- Google Health Connect / Google Fit data (sleep, HRV, SpO2, steps) — native Android only
- Current stress and energy state (user-inputted per session)

### Key Marketing Lines for Luna:
- "Luna goes where your wearable can't."
- "Biohacking, without the noise."
- "Your sleep. Your metabolism. Your recovery. Optimized."
- "No Oura Ring required."

---

## Council Member 4: ZENITH 🧘
**Role:** AI Mindfulness & Mental Fitness Guide  
**AI Model:** Gemini 2.5 Lite  
**Tab Component:** `MindfulnessCoach.tsx`  
**Brand Voice:** Grounding, emotionally intelligent, non-judgmental. "Focuses on mental fitness, daily meditations, and evaluating the 'Spirit' benchmark."

### What Zenith Does (Functions Inside the App):
Zenith's tab is branded **"AuraRelief"** in the UI and is divided into two sections: Quick Relief Activities and Habit Builder.

#### Quick Relief Activities (AuraRelief):
These are immediate, in-the-moment tools for mental state regulation. Each completed activity awards 50 XP to the user's AuraQuest ECHO (mindfulness stat).

| Activity | Description |
| :--- | :--- |
| **Take a Breath** | Launches a library of guided breathing exercises. User selects a technique (e.g., box breathing, 4-7-8, etc.) and completes an animated, timed session. Completion logs it to the mental health diary. |
| **Ground Yourself** | Launches a library of grounding exercises for anxiety, dissociation, or overwhelm. Includes sensory grounding (5-4-3-2-1 technique), body scan, and others. |
| **Pick Me Up** | A collection of quick mood-boosting activities for low energy or sadness. Light, accessible, 5-minute exercises. |
| **Schedule Fun** | A library of activities to help users intentionally schedule joy and enjoyment into their week. Behavioral activation tool. |
| **Small Goals** | A micro-goal-setting tool. Zenith generates or the user selects a small, achievable goal to build momentum and confidence. |
| **Connect** | Prompts and activities to help users socially connect — texting a friend, planning a catch-up, community involvement. Addresses loneliness and isolation as a health factor. |
| **Meditation** | Launches a library of guided meditation sessions — from body scan to loving-kindness to visualization. Completion awards 80 XP (slightly higher than other activities). |
| **Digital Detox** | A pledge-based screen time reduction tool. Users commit to a detox period. Completion awards XP linked to the AuraQuest digital wellness stat. |

#### Habit Builder:
| Feature | Description |
| :--- | :--- |
| **AI Micro-Habit Generator** | Zenith generates a small, stackable habit tailored directly to the user's declared `primaryGoal`. Uses Gemini AI. Designed around habit-stacking science and tiny habits methodology (B.J. Fogg). |

#### Supplementary Feature:
| Feature | Description |
| :--- | :--- |
| **Mood Insights Card** | A persistent card in Zenith's tab showing mood trends over time from the user's daily mood logs. Tracks emotional patterns and highlights peaks/dips. |

### What Zenith Understands About the User:
- User's profile and `primaryGoal`
- Historical logs including `mentalHealth.mood`, `mentalHealth.emotions`, and `mentalHealth.mindfulnessActivities` (all completed exercises/activities are logged)
- AuraQuest ECHO stat (mindfulness XP tracker)

### Key Marketing Lines for Zenith:
- "Zenith doesn't just meditate — Zenith gets you through the day."
- "From breathwork to habit building. Mental fitness, unlocked."
- "Eight tools for your mind. All in one session."

---

## Council Member 5: SOLACE 🎵
**Role:** Sound Sanctuary Guide  
**AI Model:** Gemini 2.5 Lite  
**Tab Component:** No dedicated coach file — Solace powers the Sound Sanctuary module  
**Brand Voice:** Ambient, healing, restful. "Shares therapeutic soundscapes, ambient noise, and binaural beat research for focus and relaxation."

### What Solace Does:
Solace is the audio guide for AuraBase. The Sound Sanctuary is a dedicated section of the app providing:

| Function | Description |
| :--- | :--- |
| **Therapeutic Soundscapes** | Curated ambient audio environments (forest, rain, ocean, etc.) for focus, sleep, or stress relief. |
| **Binaural Beats** | Science-backed binaural beat tracks for specific mental states: focus (40Hz gamma), sleep (delta), creativity (alpha), meditation (theta). |
| **Ambient Noise** | Brown noise, white noise, pink noise — for concentration and environmental masking. |
| **Extended Sound Sanctuary (YouTube Integration)** | Hosted via the [AuraBase Companion YouTube Channel](https://www.youtube.com/@AuraBaseCompanion), providing long-form meditation videos (e.g., visual rain, fireplace ambiances, extended meditation music). These serve as visual and auditory anchors integrated with the AuraBase app experience. |

### Solace's Role in Retention Strategy:
Solace is AuraBase's most passive engagement hook. When workout motivation drops (summer seasonality, lapse periods), users can still open AuraBase just to listen. This makes Solace a churn prevention tool — it keeps the app part of the user's daily life even when they're not actively tracking.

### Key Marketing Lines for Solace:
- "Let Solace set the tone. Focus. Sleep. Breathe."
- "The Sound Sanctuary. Your auditory escape."
- "Binaural beats, not basic playlists."

---

## The AI Council — At a Glance
| Coach | Domain | AI Model | Freemium Limit | Pro Benefit |
| :--- | :--- | :--- | :--- | :--- |
| **Atlas** | Fitness & Biomechanics | Gemini 2.5 Lite | Limited workout plans | Unlimited plans + BioMechanics |
| **Aria** | Nutrition & Meal Planning | Gemini 2.5 Lite | 1 diet assessment | Unlimited assessments + full chef features |
| **Luna** | Wellness & Biohacking | Gemini 2.5 Lite | Limited AI generations | Unlimited protocols; wearable sync |
| **Zenith**| Mindfulness & Mental Fitness | Gemini 2.5 Lite | Limited AI generations | Unlimited sessions + all activities |
| **Solace**| Audio & Sound Therapy | Gemini 2.5 Lite | TBD | Full Sound Sanctuary library |

## What the AI Council Replaces (Competitive Displacement Framing)
| AuraBase Council Member | Replaces |
| :--- | :--- |
| **Atlas** | Whoop Recovery (partial), Strava (partial), Fitbod (full) |
| **Aria** | MyFitnessPal, Cronometer, Noom (nutritional component) |
| **Luna** | Oura Ring app (full), Zero Fasting app, WHOOP (sleep) |
| **Zenith** | Headspace, Calm, Finch (full) |
| **Solace** | Brain.fm, Spotify ambient playlists |

**All 5 Together:** WHOOP ($239) + MyFitnessPal ($50) + Headspace ($96) + Flo ($30) = $415/year → **AuraBase:** $50–$100/year

---

## Shared Infrastructure: How the Council Works Together
The AI Council is not five separate apps bolted together. They share:
- **Unified User Profile** — every coach reads from the same `UserProfile` object (goals, weight, activity level, dietary preferences, health conditions)
- **Shared Daily Log** — every coach writes to and reads from the same `DailyLog` — meaning Atlas knows what Aria logged for lunch, and Luna knows what Zenith helped the user process emotionally
- **AuraQuest XP System** — every coach interaction awards XP to a specific stat (Body, Mind, Spirit, Nutrition, Spirit) via the ECHO character progression system. This gamification layer is shared across all five coaches
- **PrivateVault Architecture** — all data from all five coaches is stored under zero-knowledge encryption protocols. No data is sold to third parties

---

## Important Terminology (Use Consistently in All Copy)
| Term | Definition |
| :--- | :--- |
| **AI Council** | The team of five AI coaches collectively |
| **AI Team tab** | The navigation tab inside the app housing all five coaches |
| **The Lab** | AuraBase's biometric and data analytics dashboard (related to Luna's influence) |
| **AuraQuest** | The gamification system — XP, levels, ECHO character |
| **ECHO** | The user's AuraQuest companion/avatar that levels up with health activity |
| **PrivateVault** | AuraBase's end-to-end encrypted health data architecture |
| **Sound Sanctuary** | Solace's audio module |
| **AuraRelief** | Zenith's quick-relief mindfulness activity suite (the branded name shown in UI) |
| **Health Connect** | Google's health data API, used to pull wearable data into Luna's module |
| **AuraEndure** | Low-impact activity tracking module (referenced in marketing personas) |
| **AuraForge** | Branded fitness identity/progression concept (referenced in competitive review) |

*Brief compiled March 2026. Source files: `TrainerCoach.tsx`, `NutritionistCoach.tsx`, `WellnessCoach.tsx`, `MindfulnessCoach.tsx`, `register_moltbook_agents.js`, `competitive_market_review.md`, `canada_market_report.md`, `index.html`, YouTube: `@AuraBaseCompanion`.*
