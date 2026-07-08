import React, { Suspense, useEffect, useState } from 'react';
import PrivacyPolicyView from './PrivacyPolicy';
import TermsOfUseView from './TermsOfUse';
import { AiCouncilBlogs } from './AiCouncilBlogs';
import BlogPostView from './BlogPostView';
import { Seo } from './Seo';
import {
  HOME_JSON_LD,
  OG_IMAGE,
  OG_IMAGE_ALT,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_TITLE,
  SITE_URL,
} from './siteMeta';

const LandingPage = React.lazy(() => import('./src/landing/LandingPage'));

function getInitialView(): string {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  if (path === '/privacypolicy') return 'privacy';
  if (path === '/termsofuse') return 'terms';
  if (path === '/blogs') return 'blogs';
  if (path.startsWith('/blogs/')) return `blog-post:${path.split('/')[2]}`;
  return 'landing';
}

const App: React.FC = () => {
  const [view, setView] = useState<string>(getInitialView);

  useEffect(() => {
    const handlePopState = () => setView(getInitialView());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const isBlogView = view === 'blogs' || view.startsWith('blog-post:');
    if (!isBlogView) return;

    const previousBackground = document.body.style.background;
    const previousColor = document.body.style.color;
    document.body.style.background = '#09090b';
    document.body.style.color = '#f1f5f9';

    return () => {
      document.body.style.background = previousBackground;
      document.body.style.color = previousColor;
    };
  }, [view]);

  const navigateTo = (newView: string, path: string) => {
    window.history.pushState({}, '', path);
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (view === 'landing') {
    return (
      <>
        <Seo
          title={SITE_TITLE}
          description={SITE_DESCRIPTION}
          keywords={SITE_KEYWORDS}
          canonical={`${SITE_URL}/`}
          ogImage={OG_IMAGE}
          ogImageAlt={OG_IMAGE_ALT}
          jsonLd={HOME_JSON_LD}
        />
        <Suspense fallback={null}>
          <LandingPage />
        </Suspense>
      </>
    );
  }

  const isBlogView = view === 'blogs' || view.startsWith('blog-post:');

  return (
    <div
      className={
        isBlogView
          ? 'min-h-screen font-sans bg-[#09090b] text-slate-100'
          : 'min-h-screen font-sans bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100'
      }
    >
      {view === 'privacy' && <PrivacyPolicyView onBack={() => navigateTo('landing', '/')} />}
      {view === 'terms' && <TermsOfUseView onBack={() => navigateTo('landing', '/')} />}
      {view === 'blogs' && <AiCouncilBlogs onNavigate={navigateTo} />}
      {view.startsWith('blog-post:') && (
        <BlogPostView
          postId={view.split(':')[1]}
          onBack={() => navigateTo('blogs', '/blogs')}
        />
      )}
    </div>
  );
};

export default App;
