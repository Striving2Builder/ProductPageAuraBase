import React, { useState, useEffect } from 'react';
import { WellnessTab } from './types';
import PrivacyPolicyView from './PrivacyPolicy';
import { WaitlistModal } from './WaitlistModal';
import {
  COACHES,
  WELLNESS_FEATURES,
  PRICING_PLANS,
  SPECIALIZED_FEATURES,
  AURAQUEST_INFO,
  COMMUNITY_INFO,
  PRODUCT_NAME,
  HERO_TAGLINE,
  HERO_DESCRIPTION
} from './constants';
import {
  ChevronRight,
  Moon,
  Sun,
  Menu,
  X,
  Instagram,
  Music2,
  Users,
  Settings,
  Heart,
  ShieldCheck,
  Share2,
  Video,
  Zap,
  Shield,
  Sparkles,
  Sword,
  Apple,
  Play,
  Lock,
  Target,
  Trophy,
  Activity,
  ArrowLeft
} from 'lucide-react';

const IconMap: Record<string, any> = {
  Heart,
  ShieldCheck,
  Settings,
  Users,
  Target,
  Trophy,
  Activity
};

/**
 * Premium Smartphone Mockup for Aria AI Chef.
 * Using high-quality Unsplash placeholders.
 */
const AriaSmartphoneMockup: React.FC = () => {
  const [index, setIndex] = useState(0);
  const placeholderImages = [
    'assets/2/1.jpg',
    'assets/2/2.jpg',
    'assets/2/3.jpg',
    'assets/2/4.jpg',
    'assets/2/5.jpg',
    'assets/2/6.jpg',
    'assets/2/7.jpg',
    'assets/2/8.jpg',
    'assets/2/9.jpg',
    'assets/2/10.jpg',
    'assets/2/11.jpg',
    'assets/2/12.jpg',
    'assets/2/13.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % placeholderImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative group">
      <div className="absolute inset-[-60px] bg-brand-500/10 blur-[120px] rounded-full group-hover:bg-brand-500/20 transition-all duration-1000 opacity-60 pointer-events-none"></div>
      <div className="relative w-[320px] h-[650px] rounded-[3.8rem] border-[14px] border-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden z-10 bg-[#0a0f16] ring-1 ring-white/10">
        <div className="relative w-full h-full bg-[#0a111a] overflow-hidden">
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10">
            <Zap size={80} className="text-brand-500 animate-pulse" />
          </div>
          <div className="absolute inset-0 z-10 w-full h-full">
            {placeholderImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`AuraBase Wellness UI ${i}`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${index === i ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
              />
            ))}
          </div>
          <div className="absolute inset-0 pointer-events-none z-20 bg-gradient-to-tr from-white/5 via-transparent to-white/10 opacity-40"></div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-8 bg-slate-950 rounded-b-[1.8rem] z-30 shadow-md border-x border-b border-white/5 flex items-center justify-center">
          <div className="w-12 h-1.5 bg-white/10 rounded-full"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500/20 ml-3"></div>
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-white/20 rounded-full z-30 backdrop-blur-md"></div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState<WellnessTab>(WellnessTab.MIND);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [view, setView] = useState<'landing' | 'privacy'>('landing');
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDarkMode]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const scrollToSection = (id: string) => {
    if (view !== 'landing') {
      setView('landing');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  const LandingContent = () => (
    <>
      {/* Hero Section */}
      <section className="relative pt-44 pb-24 md:pt-60 md:pb-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-12">
            <Sparkles size={14} /> The Evolution of Holistic Health
          </div>
          <h1 className="text-6xl md:text-[9rem] font-bold mb-10 tracking-tighter leading-[0.85] font-display">
            {HERO_TAGLINE.split('&').map((part, i) => (
              <React.Fragment key={i}>
                {i === 0 ? part : <><br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-brand-600 font-black">& {part}</span></>}
              </React.Fragment>
            ))}
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
            {HERO_DESCRIPTION}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button onClick={() => setIsWaitlistOpen(true)} className="w-full sm:w-auto px-12 py-5 rounded-2xl bg-brand-500 text-white font-bold text-xl shadow-2xl shadow-brand-500/30 hover:bg-brand-600 hover:scale-105 transition-all">
              Join the Waitlist
            </button>
            <button onClick={() => scrollToSection('features')} className="w-full sm:w-auto px-12 py-5 rounded-2xl border-2 border-slate-200 dark:border-slate-800 font-bold text-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">
              Explore The Pillars
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-brand-500/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      </section>

      {/* Features - The Three Pillars */}
      <section id="features" className="py-32 bg-slate-50 dark:bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-10 font-display tracking-tight">The Three Pillars</h2>
            <div className="flex justify-center mb-16">
              <div className="inline-flex p-1.5 bg-white dark:bg-slate-950 rounded-[1.5rem] border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/20 dark:shadow-none">
                {[WellnessTab.MIND, WellnessTab.BODY, WellnessTab.SPIRIT].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-10 py-4 rounded-[1.1rem] font-bold transition-all text-xs uppercase tracking-[0.2em] ${activeTab === tab
                      ? `bg-brand-500 text-white shadow-lg shadow-brand-500/20`
                      : 'text-slate-500 hover:text-brand-500 dark:text-slate-400'
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {WELLNESS_FEATURES[activeTab].map((feature) => (
              <div key={feature.id} className="glass-card p-10 rounded-[3rem] border-slate-100 dark:border-slate-800/50 hover:border-brand-500 transition-all group hover:translate-y-[-8px]">
                <div className="text-5xl mb-8 group-hover:scale-125 transition-transform duration-500 block">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 font-display leading-tight">{feature.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm font-medium whitespace-pre-line">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Social Ecosystem Integration */}
          <div className="glass-card rounded-[4rem] p-10 md:p-24 bg-slate-950 text-white overflow-hidden relative border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 via-transparent to-purple-600/10 pointer-events-none"></div>
            <div className="grid md:grid-cols-2 gap-20 items-center relative z-10">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 mb-8 text-brand-400 font-bold uppercase text-[10px] tracking-[0.3em]">
                  <Share2 size={16} /> Social Ecosystem
                </div>
                <h3 className="text-5xl md:text-7xl font-bold mb-10 font-display uppercase leading-[0.9] tracking-tighter">Inspire</h3>
                <p className="text-slate-400 mb-12 text-lg leading-relaxed font-medium max-w-lg">
                  Export cinematic snapshots of your discipline directly to Instagram and TikTok. Your biomarkers, your gains, your Aura—verified and ready for the world to see.
                  <span className="text-brand-400"> Farm that Aura and inspire your circle.</span>
                </p>
                <div className="flex justify-center md:justify-start gap-6">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-500 transition-all cursor-pointer group">
                      <Instagram size={24} />
                    </div>
                    <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Stories</span>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-500 transition-all cursor-pointer group">
                      <Video size={24} />
                    </div>
                    <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">TikTok</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-[300px] h-[640px] rounded-[3.8rem] border-[12px] border-slate-900 overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] relative rotate-3 group bg-black">
                  <img src="assets/share.png" alt="Inspire Preview" className="absolute inset-0 w-full h-full object-cover z-10" />
                  <img src="assets/AuraFarm.jpg" alt="Aura Farm Preview" className="absolute inset-0 w-full h-full object-cover z-30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Council of Coaches */}
      <section id="coaches" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 font-display tracking-tight">The Council</h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">Specialized AI intelligences working in synergy for your absolute performance and longevity.</p>
          </div>
          <div className="flex flex-col items-center mb-40">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-6xl font-bold font-display mb-4">
                Aria <span className="text-slate-300 dark:text-slate-700 mx-2">/</span> <span className="text-brand-500">Global AI Chef</span>
              </h3>
              <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-[11px]">Precision Nutrition Support</p>
            </div>
            <AriaSmartphoneMockup />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COACHES.map((coach) => (
              <div key={coach.id} className="glass-card p-12 rounded-[4rem] border-slate-100 dark:border-slate-800/50 hover:border-brand-500 transition-all group">
                <div className="text-6xl mb-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 inline-block">{coach.icon}</div>
                <h3 className="text-2xl font-bold mb-2 font-display">{coach.name}</h3>
                <p className="text-brand-600 dark:text-brand-400 font-black text-[10px] tracking-[0.2em] uppercase mb-8">{coach.role}</p>
                <p className="text-slate-500 dark:text-slate-400 mb-10 leading-relaxed font-medium h-24 overflow-hidden">{coach.description}</p>
                <div className="space-y-4">
                  {coach.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-4 text-sm font-bold text-slate-700 dark:text-slate-200">
                      <div className="w-2 h-2 rounded-full bg-brand-500 shadow-sm shadow-brand-500/50"></div> {cap}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AuraQuest - Gamified RPG Section */}
      <section id="auraquest" className="py-32 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-brand-500/5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="inline-block px-5 py-2 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-400 font-bold text-[11px] uppercase tracking-[0.2em] mb-10">
                <Sword size={16} className="inline mr-2 align-middle" /> Gamified Evolution
              </div>
              <h2 className="text-5xl md:text-[5.5rem] font-bold mb-10 tracking-tight font-display leading-[0.9]">{AURAQUEST_INFO.tagline}</h2>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium">
                {AURAQUEST_INFO.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
                {AURAQUEST_INFO.features.map((f, i) => (
                  <div key={i} className="p-7 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-500/50 transition-colors group">
                    <h4 className="text-brand-400 font-black text-[10px] uppercase tracking-[0.2em] mb-3">{f.title}</h4>
                    <p className="text-sm text-slate-300 font-bold group-hover:text-white transition-colors">{f.desc}</p>
                  </div>
                ))}
              </div>
              <button className="px-12 py-5 rounded-2xl bg-brand-500 text-white font-bold text-xl hover:bg-brand-400 hover:translate-x-2 transition-all flex items-center gap-4 shadow-2xl shadow-brand-500/20">
                Start Your Quest <ChevronRight size={22} />
              </button>
            </div>
            <div className="relative flex justify-center">
              <div className="w-full max-w-[500px] aspect-square rounded-[5rem] bg-gradient-to-tr from-brand-600/30 via-slate-900 to-purple-600/20 border border-white/10 flex items-center justify-center relative overflow-hidden group shadow-[0_0_100px_-20px_rgba(20,184,166,0.2)]">
                <img
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000"
                  className="absolute inset-0 w-full h-full object-cover opacity-25 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2000ms]"
                  alt="RPG ECHO"
                />
                <div className="relative z-10 text-center p-12 w-full">
                  <div className="w-32 h-32 rounded-[2.5rem] bg-brand-500/20 border border-brand-500/40 flex items-center justify-center mx-auto mb-8 backdrop-blur-md shadow-2xl">
                    <Shield size={64} className="text-brand-400" />
                  </div>
                  <h3 className="text-4xl font-bold mb-4 font-display">LVL 42 ECHO</h3>
                  <div className="max-w-[280px] h-3.5 bg-white/10 rounded-full mx-auto overflow-hidden border border-white/5 mb-6">
                    <div className="w-[74.2%] h-full bg-brand-500 shadow-[0_0_15px_rgba(20,184,166,0.6)] animate-pulse-slow"></div>
                  </div>
                  <div className="flex justify-center items-center gap-8">
                    <div className="text-center">
                      <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">XP POOL</p>
                      <p className="text-2xl font-black text-white">7,420</p>
                    </div>
                    <div className="h-10 w-px bg-white/10"></div>
                    <div className="text-center">
                      <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">STREAK</p>
                      <p className="text-2xl font-black text-brand-400">12D</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Privacy Architecture */}
      <section id="security" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 mb-8 text-brand-600 dark:text-brand-400 font-bold uppercase text-[10px] tracking-[0.3em]">
              <ShieldCheck size={18} /> Sovereignty Over Data
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 font-display tracking-tight">Privacy by Architecture</h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">Your biological data is your ultimate asset. Our architecture ensures it remains zero-knowledge encrypted and under your total sovereign control.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="glass-card p-12 rounded-[3.5rem] border-slate-100 dark:border-slate-800/50 hover:shadow-2xl hover:shadow-brand-500/5 transition-all group">
              <div className="w-20 h-20 rounded-[1.8rem] bg-brand-500/10 flex items-center justify-center text-brand-500 mb-10 group-hover:bg-brand-500 group-hover:text-white transition-all">
                <Lock size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">PrivateVault Encryption</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium text-sm">Uses AES-256-GCM Encryption, the global gold standard. Your biometric and personal health logs are encrypted locally before they ever reach the cloud.</p>
            </div>
            <div className="glass-card p-12 rounded-[3.5rem] border-slate-100 dark:border-slate-800/50 hover:shadow-2xl hover:shadow-brand-500/5 transition-all group">
              <div className="w-20 h-20 rounded-[1.8rem] bg-brand-500/10 flex items-center justify-center text-brand-500 mb-10 group-hover:bg-brand-500 group-hover:text-white transition-all">
                <ShieldCheck size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">Zero-Knowledge Protocol</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium text-sm">We do not hold your keys. Only you can decrypt your DNA, bloodwork, and mood history. Not even AuraBase engineers can view your sensitive data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing" className="py-32 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-24 font-display tracking-tight">Ready to Evolve?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {PRICING_PLANS.map((plan, i) => (
              <div key={i} className={`glass-card p-14 rounded-[4.5rem] flex flex-col items-center transition-all duration-500 ${plan.isPopular ? 'border-brand-500 shadow-2xl scale-105 z-10' : 'border-slate-200 dark:border-slate-800'}`}>
                {plan.isPopular && <div className="bg-brand-500 text-white px-8 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.2em] mb-8 shadow-xl shadow-brand-500/30">Most Evolution</div>}
                <h3 className="text-xl font-bold mb-4 uppercase tracking-[0.2em] text-slate-500">{plan.name}</h3>
                <div className="text-6xl font-bold mb-4 font-display tracking-tighter">{plan.price}</div>
                <p className="text-slate-400 text-sm mb-10 font-bold uppercase tracking-widest">{plan.billing}</p>
                {plan.savings && <div className="bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 px-6 py-2 rounded-xl font-black uppercase text-[11px] tracking-[0.2em] mb-12">{plan.savings}</div>}
                <div className="flex-grow"></div>
                <button className={`w-full py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] transition-all ${plan.isPopular ? 'bg-brand-500 text-white hover:bg-brand-600' : 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 hover:opacity-90'}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
          <div className="mt-28 flex flex-wrap justify-center gap-8 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <div className="px-10 py-5 rounded-[1.5rem] bg-black text-white flex items-center gap-4 cursor-not-allowed">
              <Apple size={28} fill="white" />
              <div className="text-left"><p className="text-[10px] uppercase font-black tracking-widest opacity-60">Download on</p><p className="text-xl font-bold leading-none">App Store</p></div>
            </div>
            <div className="px-10 py-5 rounded-[1.5rem] bg-black text-white flex items-center gap-4 cursor-not-allowed">
              <Play size={28} fill="white" />
              <div className="text-left"><p className="text-[10px] uppercase font-black tracking-widest opacity-60">Get it on</p><p className="text-xl font-bold leading-none">Google Play</p></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <div className="min-h-screen font-sans selection:bg-brand-100 selection:text-brand-700 transition-colors duration-500 bg-white dark:bg-slate-950">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDarkMode ? 'bg-slate-950/90 border-slate-800' : 'bg-white/90 border-slate-100'} backdrop-blur-md border-b`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => { setView('landing'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <div className="w-10 h-10 group-hover:scale-110 transition-transform flex items-center justify-center bg-white rounded-md p-1 dark:bg-slate-800">
              <img src="assets/logo.svg" alt={PRODUCT_NAME} className="w-full h-full object-contain" />
            </div>
            <span className="text-2xl font-bold font-display tracking-tighter uppercase">{PRODUCT_NAME}</span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {['features', 'coaches', 'auraquest', 'security', 'pricing'].map(sec => (
              <button key={sec} onClick={() => scrollToSection(sec)} className="text-[11px] font-black hover:text-brand-500 transition-colors uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{sec}</button>
            ))}
            <a href="https://aurabase.app/privicypolicy" className="text-[11px] font-black hover:text-brand-500 transition-colors uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Privacy Policy</a>
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800"></div>
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors">
              {isDarkMode ? <Sun size={18} className="text-brand-400" /> : <Moon size={18} className="text-brand-600" />}
            </button>
            <button onClick={() => setIsWaitlistOpen(true)} className="px-7 py-3 rounded-xl bg-brand-500 text-white font-bold text-sm shadow-xl shadow-brand-500/20 hover:bg-brand-600 hover:translate-y-[-2px] transition-all">Join Waitlist</button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-slate-600 dark:text-slate-400">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {view === 'landing' ? <LandingContent /> : <PrivacyPolicyView onBack={() => setView('landing')} />}

      {/* Footer */}
      <footer className="py-32 text-center bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center items-center gap-4 mb-16">
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full p-2 dark:bg-slate-800 shadow-sm">
              <img src="assets/logo.svg" alt={PRODUCT_NAME} className="w-full h-full object-contain" />
            </div>
            <span className="text-3xl font-bold font-display tracking-tighter uppercase tracking-[0.1em]">{PRODUCT_NAME}</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-14 gap-y-6 mb-16 text-slate-400 font-black uppercase text-[11px] tracking-[0.3em]">
            <a href="#" className="hover:text-brand-500 transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-500 transition-colors">TikTok</a>
            <a href="https://aurabase.app/privicypolicy" className="hover:text-brand-500 transition-colors">Privacy Policy</a>
            <button onClick={() => setView('privacy')} className="hover:text-brand-500 transition-colors">Terms of Security</button>
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] leading-relaxed">
            © 2024 {PRODUCT_NAME} Holistic Technologies Inc.<br />
            All biometric data is zero-knowledge encrypted and remains your sovereign property.
          </p>
        </div>
      </footer>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white dark:bg-slate-950 p-8 flex flex-col animate-fade-in">
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-white rounded-md p-1 dark:bg-slate-800">
                <img src="assets/logo.svg" alt={PRODUCT_NAME} className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-bold font-display uppercase">{PRODUCT_NAME}</span>
            </div>
            <button onClick={() => setIsMenuOpen(false)} className="p-2"><X size={36} className="text-slate-600 dark:text-slate-400" /></button>
          </div>
          <div className="flex flex-col gap-10 text-4xl font-bold font-display uppercase tracking-tight">
            <button onClick={() => scrollToSection('features')} className="text-left hover:text-brand-500">Features</button>
            <button onClick={() => scrollToSection('coaches')} className="text-left hover:text-brand-500">Coaches</button>
            <button onClick={() => scrollToSection('auraquest')} className="text-left hover:text-brand-500">AuraQuest</button>
            <button onClick={() => scrollToSection('security')} className="text-left hover:text-brand-500">Security</button>
            <button onClick={() => { setIsMenuOpen(false); setIsWaitlistOpen(true); }} className="text-left text-brand-500">Waitlist</button>
          </div>
        </div>
      )}
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </div>
  );
}

export default App;