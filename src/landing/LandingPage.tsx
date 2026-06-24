import React, { useEffect, useRef } from 'react';
import landingBody from './landing-body.html?raw';
import './landing.css';
import { initLandingPage } from './initLandingPage';

const LandingPage: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const previousBackground = document.body.style.background;
    document.body.style.background = '#08090e';
    const cleanup = initLandingPage(rootRef.current);
    return () => {
      document.body.style.background = previousBackground;
      cleanup();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="landing-page"
      dangerouslySetInnerHTML={{ __html: landingBody }}
    />
  );
};

export default LandingPage;
