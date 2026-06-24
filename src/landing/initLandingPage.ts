declare global {
  interface Window {
    switchPillar: (id: string, btn: HTMLElement) => void;
  }
}

export function initLandingPage(root: HTMLElement): () => void {
  window.switchPillar = (id: string, btn: HTMLElement) => {
    document.querySelectorAll('.pillars__panel').forEach((p) => p.classList.remove('pillars__panel--active'));
    document.querySelectorAll('.pillars__tab').forEach((t) => t.classList.remove('pillars__tab--active'));
    document.getElementById(`pillar-${id}`)?.classList.add('pillars__panel--active');
    btn.classList.add('pillars__tab--active');
  };

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  );

  root.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  const nav = root.querySelector<HTMLElement>('#nav');
  const onScroll = () => {
    if (!nav) return;
    nav.style.borderBottomColor = window.scrollY > 100 ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.03)';
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  const anchorCleanups: Array<() => void> = [];
  root.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    const onClick = (e: Event) => {
      e.preventDefault();
      const href = anchor.getAttribute('href');
      if (!href) return;
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: (target as HTMLElement).offsetTop - 72,
          behavior: 'smooth',
        });
      }
    };
    anchor.addEventListener('click', onClick);
    anchorCleanups.push(() => anchor.removeEventListener('click', onClick));
  });

  const mockupCleanups: Array<() => void> = [];
    root.querySelectorAll('.phone-mockup').forEach((mockup) => {
      const slides = mockup.querySelectorAll<HTMLElement>('img.phone-slide, .phone-slide');
    const dots = mockup.querySelectorAll('.phone-dot');
    const prevBtn = mockup.querySelector('.prev-btn');
    const nextBtn = mockup.querySelector('.next-btn');
    let currentSlide = 0;
    let slideInterval: ReturnType<typeof setInterval> | undefined;

    const showSlide = (index: number) => {
      if (!slides.length) return;
      slides.forEach((slide) => slide.classList.remove('active'));
      dots.forEach((dot) => dot.classList.remove('active'));
      currentSlide = (index + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
      dots[currentSlide]?.classList.add('active');
    };

    const startSlideInterval = () => {
      if (slideInterval) clearInterval(slideInterval);
      slideInterval = setInterval(() => showSlide(currentSlide + 1), 4000);
    };

    const onPrev = () => {
      showSlide(currentSlide - 1);
      startSlideInterval();
    };
    const onNext = () => {
      showSlide(currentSlide + 1);
      startSlideInterval();
    };

    prevBtn?.addEventListener('click', onPrev);
    nextBtn?.addEventListener('click', onNext);

    const dotHandlers: Array<() => void> = [];
    dots.forEach((dot, idx) => {
      const onDot = () => {
        showSlide(idx);
        startSlideInterval();
      };
      dot.addEventListener('click', onDot);
      dotHandlers.push(() => dot.removeEventListener('click', onDot));
    });

    startSlideInterval();

    mockupCleanups.push(() => {
      if (slideInterval) clearInterval(slideInterval);
      prevBtn?.removeEventListener('click', onPrev);
      nextBtn?.removeEventListener('click', onNext);
      dotHandlers.forEach((cleanup) => cleanup());
    });
  });

  return () => {
    revealObserver.disconnect();
    window.removeEventListener('scroll', onScroll);
    anchorCleanups.forEach((cleanup) => cleanup());
    mockupCleanups.forEach((cleanup) => cleanup());
    delete window.switchPillar;
  };
}
