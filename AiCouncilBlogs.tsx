import React from 'react';

const BLOG_POSTS = [
  {
    id: 'google-play-launch',
    authorBadge: '✨ Founder’s note • AuraBase',
    accentColor: 'text-emerald-400 border-emerald-500/30',
    glowColor: 'from-emerald-500',
    title: 'Six months in—and we are live on Google Play',
    content: (
      <>
        <p className="mb-6 text-lg text-slate-300 font-light">
          I’m writing this myself because today matters: <strong>AuraBase is live on Google Play</strong>. If you’re on Android, you can install it here—{' '}
          <a
            href="https://play.google.com/store/apps/details?id=com.aurabase.mobile&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 font-semibold underline decoration-emerald-500/50 hover:decoration-emerald-400"
          >
            AuraBase on Google Play
          </a>
          .
        </p>
        <p className="mb-6 text-lg text-slate-300 font-light">
          <strong>Thank you</strong>—truly—to everyone who supported this product along the way. Early testers who lived with broken builds, friends who listened to me talk about “one more week,” people who shared feedback when it would have been easier to stay quiet, and anyone who simply believed AuraBase should exist: you carried this across the finish line. I don’t take that for granted.
        </p>
        <p className="mb-6 text-lg text-slate-300 font-light">
          Getting here meant more than <strong>eighty numbered ship cycles</strong> on iOS alone (we’re on <strong>85</strong> now), <strong>86</strong> on Android, and a public release tagged <strong>2.0.86</strong>—each one a late night, a regression pass, and a choice to keep going. I built AuraBase as a real companion for mind, body, and spirit: nutrition with an <strong>AI Nutritionist</strong> and <strong>International AI Chef</strong>, training, mindfulness, AuraQuest, family flows, wearables, and the rest—always with the idea that <strong>what you log should sharpen what we give back</strong>, not generic fluff.
        </p>
        <p className="mb-6 text-lg text-slate-300 font-light">
          I’ll stay brief on one hard lesson: we <strong>invested in AI-assisted blood-work</strong>, then <strong>stepped it back from the app</strong> until I’m confident we can meet the <strong>trust and accuracy bar you deserve</strong>. The work isn’t forgotten—it’s waiting for the right moment. I’d rather disappoint the roadmap than disappoint you.
        </p>
        <p className="mb-6 text-lg text-slate-300 font-light">
          <strong>Looking ahead</strong>, I’m excited—not anxious—about what’s next: deeper integrations, faster performance, richer AuraQuest, tighter family experiences, and privacy work that never really ends. AuraBase remains a <strong>wellness companion</strong>, not a medical device and not a replacement for your clinician—but I want it to feel indispensable in the best way. Google Play is one door; iOS walks beside it. Wherever you find us, I’m grateful you’re here—and I can’t wait to show you what comes next.
        </p>
      </>
    ),
    ctaText: 'Get AuraBase on Google Play—and thank you for being here.',
    referencesType: 'Links',
    references: [
      'Google Play — AuraBase: Mind & Body Tracker (Nappy Dog Studios Ltd.).',
      'Release context: iOS build 85, Android version 86, app 2.0.86 at time of posting.'
    ]
  },
  {
    id: 'atlas',
    authorBadge: '🏋️ Atlas • AI Fitness Trainer',
    accentColor: 'text-brand-500 border-brand-500/20',
    glowColor: 'from-brand-500',
    title: 'Beyond the Mirror: How MediaPipe is Forcing Perfect Form',
    content: (
      <>
        <p className="mb-6 text-lg text-slate-300 font-light">For decades, checking your form meant staring into a gym mirror or hiring an expensive personal trainer. But the human eye is flawed, and mirrors can't calculate joint angles in a three-dimensional plane. Welcome to the era of computational biomechanics.</p>
        <p className="mb-6 text-lg text-slate-300 font-light">As your AI Fitness Trainer, I don't just build your workout plans. I actively watch you execute them. Using Google's advanced MediaPipe BlazePose model, my native <strong>BioMechanics Analysis</strong> feature tracks 33 3D body landmarks in real-time through your device's camera. By analyzing this data frame-by-frame, I can detect movement flaws—like knee caving during a squat or a rounded back during a deadlift—providing instant feedback to correct your technique before an injury occurs.</p>
        <p className="mb-6 text-lg text-slate-300 font-light">We are no longer guessing. Recent clinical studies pairing MediaPipe with machine learning algorithms boast over 90% accuracy in detecting proper vs. improper functional movements, with classification accuracies reaching nearly 99% for squats and 95% for deadlifts. By enforcing strict form constraints, this real-time visual and auditory feedback drastically accelerates motor learning and muscle hypertrophy. Turn your living room into a high-tech performance lab—let the data drive your results.</p>
      </>
    ),
    ctaText: 'Stop guessing if your squat is deep enough.',
    referencesType: 'Backed by Science',
    references: [
      'Research validating MediaPipe pose estimation confirms it tracks exercise biomechanics with a ±2% error margin compared to gold-standard, professional laboratory tools like Kinovea.',
      'Recent studies demonstrate MediaPipe-based classification models achieve up to 98.9% accuracy in real-time form correction for foundational resistance movements, significantly lowering injury risk.'
    ]
  },
  {
    id: 'aria',
    authorBadge: '🌍 Aria • Global AI Nutritionist & Chef',
    accentColor: 'text-green-500 border-green-500/20',
    glowColor: 'from-green-500',
    title: 'Beyond "Chicken and Rice": Reclaiming Macros Through Global Cuisine',
    content: (
      <>
        <p className="mb-6 text-lg text-slate-300 font-light">The biggest failure of the modern diet industry is its staggering lack of cultural diversity. Open almost any meal planner app today, and you're funneled into a strictly Western, Euro-centric view of "eating clean"—dominated by grilled chicken breasts, steamed broccoli, and oat bowls. But what happens when you want to hit 150 grams of protein on a plant-based Indian diet, or maintain keto macros while eating authentic Latin American dishes?</p>
        <p className="mb-6 text-lg text-slate-300 font-light">Traditional calorie trackers frequently fail because they rely on generic databases that chronically mislabel the macronutrients in ethnic foods. As your Global AI Nutritionist, I bridge that gap. My native <strong>Cultural Nuance Engine</strong> is trained on verified, international food databases spanning South Asian, Middle Eastern, Mediterranean, East Asian, and Latin American cuisines. Whether you need a low-carb approach to traditional Mexican cuisine or a high-protein vegetarian strategy using authentic regional spices and legumes, I understand the math and the culture behind it.</p>
        <p className="mb-6 text-lg text-slate-300 font-light">You shouldn't have to abandon your heritage to reach your peak physique. When you log your meals, I leverage my native <strong>Diet Assessment</strong> function to continuously analyze your multi-dimensional micronutrient and macronutrient intake. Rather than just alerting you that you missed your protein goal by 30 grams, this assessment triggers my culinary engine—generating a macro-perfect, culturally authentic recipe to close the gap, dynamically scaling ingredients to your targets before instantly converting it into a grocery list.</p>
      </>
    ),
    ctaText: 'Eat for your goals. Cook for your soul.',
    referencesType: 'Backed by Data',
    references: [
      'Clinical nutrition research shows that diet adherence drops by over 60% when individuals are forced to adopt restrictive diets outside of their cultural taste preferences.',
      'Studies confirm that dietary systems utilizing localized, culturally-tailored food databases significantly improve long-term adherence to specialized protocols (like high-protein, low-carb, or strict vegetarian/vegan) compared to standard Western-centric trackers.'
    ]
  },
  {
    id: 'luna',
    authorBadge: '🌙 Luna • AI Wellness & Biohacker',
    accentColor: 'text-purple-500 border-purple-500/20',
    glowColor: 'from-purple-500',
    title: 'Hacking Your Circadian Rhythm: What Your Wearable Isn\'t Telling You',
    content: (
      <>
        <p className="mb-6 text-lg text-slate-300 font-light">You wake up, look at your smartwatch, and it says you slept for 7 hours and your HRV is 45ms. Now what? Raw data without a protocol is just noise. The future of biohacking isn't just in the hardware you wear; it's in the intelligence that interprets it.</p>
        <p className="mb-6 text-lg text-slate-300 font-light">Through the AuraBase Lab, I seamlessly ingest data from Google Health Connect—your sleep efficiency, SpO2, and heart rate variability—and transform it into actionable science. I engineer personalized <strong>Sleep Optimization Protocols</strong> and <strong>Hormetic Stress Cycles</strong> (like exact sauna or cold exposure timings) to forcibly align your circadian rhythm.</p>
        <p className="mb-6 text-lg text-slate-300 font-light">Contemporary chronobiology studies heavily leverage machine learning to make sense of consumer wearable data, mapping subtle temperature and heart rate fluctuations to pinpoint circadian phase shifts. By analyzing this continuous data, AI can predict your optimal metabolic windows and deepest recovery periods. I don't just track your exhaustion; I design the routine to eliminate it.</p>
      </>
    ),
    ctaText: 'Your sleep, metabolism, and recovery—optimized.',
    referencesType: 'Backed by Science',
    references: [
      'Research demonstrates AI algorithms applied to wearable sensor data accurately identify individual sleep patterns, capturing vital circadian signals necessary for personalized health interventions (NIH/Oxford Academic, 2021-2023).',
      'Mathematical models using continuous wearable data successfully predict internal circadian states, outperforming traditional static sleep-hygiene advice.'
    ]
  },
  {
    id: 'zenith',
    authorBadge: '🧘 Zenith • AI Mindfulness Guide',
    accentColor: 'text-teal-500 border-teal-500/20',
    glowColor: 'from-teal-500',
    title: 'The Physical ROI of Mental Stillness: Rewiring Brain and Body',
    content: (
      <>
        <p className="mb-6 text-lg text-slate-300 font-light">We often treat mental fitness and physical health as two separate silos. But the truth is, an unregulated nervous system will actively sabotage your physical performance. When you are overwhelmed or anxious, your body floods with cortisol—throttling your recovery, disrupting your sleep, and increasing your risk of injury.</p>
        <p className="mb-6 text-lg text-slate-300 font-light">Inside the AuraRelief sanctuary, I deliver daily <strong>Guided Mindfulness Modules</strong> designed to act as a physiological reset button. In just five to ten minutes, these evidence-based routines force your body to shift from sympathetic "fight or flight" into parasympathetic "rest and digest." We aren't just clearing your head; we are directly manipulating your biology to optimize heart rate variability (HRV) and lower foundational stress markers.</p>
        <p className="mb-6 text-lg text-slate-300 font-light">The clinical data reveals that consistent, daily guided meditation does far more than just "calm you down." It is a potent performance enhancer. Athletes who engage in brief daily mindfulness protocols show blunted cortisol spikes during training, improved muscular recovery, and enhanced focus critical for entering the athletic "flow state." It's not just a mental break—it's active armor for your body.</p>
      </>
    ),
    ctaText: 'Lower your cortisol. Enhance your physical recovery.',
    referencesType: 'Backed by Data',
    references: [
      'Recent clinical reviews confirm that daily guided meditation significantly lowers both systolic and diastolic blood pressure (reductions of 5-10 mmHg) by optimizing the parasympathetic nervous system.',
      'Sports science studies demonstrate that consistent mindfulness interventions heavily mitigate cortisol concentration spikes in athletes, leading to better sleep quality, faster physical recovery times, and higher overall athletic performance.'
    ]
  },
  {
    id: 'solace',
    authorBadge: '🎵 Solace • Sound Sanctuary Guide',
    accentColor: 'text-blue-500 border-blue-500/20',
    glowColor: 'from-blue-500',
    title: 'Sounds that Shape Your Mind: The Science of Binaural Beats',
    content: (
      <>
        <p className="mb-6 text-lg text-slate-300 font-light">Our days are filled with jarring auditory noise—notifications, traffic, chatter. But what if you could weaponize sound to force your brain into states of deep focus or profound relaxation? Welcome to the Sound Sanctuary.</p>
        <p className="mb-6 text-lg text-slate-300 font-light">It's not just a playlist. By sending slightly different frequencies into each ear, the brain creates a distinct third frequency. This auditory illusion triggers a phenomenon known as <strong>brainwave entrainment</strong>. Whether you need 40Hz Gamma waves to lock into a creative flow state, or 4Hz Delta waves to transition into restorative sleep, my acoustic environment forces your brain's electrical activity to synchronize.</p>
        <p className="mb-6 text-lg text-slate-300 font-light">Neuroscience research verifies this effect. Regular exposure to specific binaural beat frequencies influences mood, significantly reduces pre-operative and general anxiety, and biases attentional processing for sustained task focus. So put your headphones on. Let the frequency cut through the noise, and step into the Sanctuary.</p>
      </>
    ),
    ctaText: 'Let Solace set the tone. Focus. Sleep. Breathe.',
    referencesType: 'Backed by Science',
    references: [
      'A comprehensive 2019 review of 22 clinical studies confirmed a significant link between prolonged exposure to theta/alpha binaural beats and reduced anxiety and cortisol levels.',
      'Research published by the NIH indicates that gamma-frequency binaural beats enhance attention spans and behavioral task performance by synchronizing cortical activity (2020).'
    ]
  }
];

export const AiCouncilBlogs: React.FC = () => {
  return (
    <section id="blogs" className="py-32 bg-[#09090b] relative overflow-hidden text-white border-y border-white/5">
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-brand-500/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <header className="text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 font-display tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">Voices of the AI Council</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">AuraBase isn't just an app. It's five specialized AI experts dedicated to optimizing your mind, body, and spirit. Read their latest insights below.</p>
        </header>
      </div>

      {/* Horizontal Scroll Carousel */}
      <div className="w-full relative z-10 px-6 sm:px-10 pb-12">
        <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-10 pt-4 custom-scrollbar">
          {/* Inject style for an elegant, subtle webkit scrollbar for PC users */}
          <style>{`
            .custom-scrollbar::-webkit-scrollbar { height: 6px; }
            .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.02); border-radius: 10px; }
            .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
          `}</style>
          
          <div className="snap-center shrink-0 w-[5vw] sm:w-[10vw]"></div> {/* Spacer for offset centering */}
          
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id} 
              className="snap-center shrink-0 w-[85vw] sm:w-[500px] lg:w-[600px] bg-white/5 border border-white/10 rounded-[2rem] p-8 sm:p-12 relative overflow-hidden backdrop-blur-3xl hover:border-white/20 hover:-translate-y-2 transition-all duration-300 shadow-2xl group"
            >
              {/* Top Accent Glow */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-70 ${post.accentColor.split(' ')[0]}`}></div>
              
              <div className={`inline-flex items-center px-4 py-2 rounded-full border bg-white/5 mb-8 text-sm font-bold uppercase tracking-widest ${post.accentColor}`}>
                {post.authorBadge}
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-bold mb-8 font-display leading-[1.1]">{post.title}</h3>
              
              <div className="relative z-10 leading-relaxed">
                {post.content}
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:bg-white/10 transition-colors">
                <span className={`font-bold font-display text-lg ${post.accentColor.split(' ')[0]}`}>{post.ctaText}</span>
                <button className="whitespace-nowrap px-6 py-3 rounded-full bg-white text-black font-bold text-sm tracking-wide hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all">
                  Train With AuraBase
                </button>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <h3 className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-4">{post.referencesType}</h3>
                <ul className="space-y-3 pl-5 list-disc text-sm text-slate-500">
                  {post.references.map((ref, i) => (
                    <li key={i}>{ref}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
          <div className="snap-center shrink-0 w-[5vw] sm:w-[10vw]"></div> {/* End Spacer */}
        </div>
      </div>
    </section>
  );
};
