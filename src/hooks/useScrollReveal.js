import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to add .visible class
 * when elements with .reveal enter the viewport.
 */
export function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      // Just show everything immediately
      const elements = ref.current?.querySelectorAll('.reveal');
      elements?.forEach(el => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = ref.current?.querySelectorAll('.reveal');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}
