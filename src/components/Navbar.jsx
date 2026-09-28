import { useState, useEffect } from 'react';
import { GithubIcon } from './BrandIcons';
import { navLinks, personal } from '../data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Mark navbar as scrolled for glass effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map(l => l.href.replace('#', ''));
    const observers = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const scrollTo = (href) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} aria-label="Main navigation">
        <div className="container">
          {/* Logo */}
          <button
            className="nav-logo"
            onClick={() => scrollTo('#home')}
            aria-label="Go to top"
          >
            {'<'}<span>keyanskv</span>{' />'}
          </button>

          {/* Desktop links */}
          <div className="nav-links" role="list">
            {navLinks.map(link => (
              <button
                key={link.href}
                role="listitem"
                className={`nav-link${activeSection === link.href.replace('#', '') ? ' active' : ''}`}
                onClick={() => scrollTo(link.href)}
                aria-current={activeSection === link.href.replace('#', '') ? 'page' : undefined}
              >
                {link.label}
              </button>
            ))}
            <a
              className="btn btn-primary btn-sm nav-cta"
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub profile (opens in new tab)"
            >
              <GithubIcon size={14} />
              View GitHub
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`nav-hamburger${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen(o => !o)}
            aria-expanded={mobileOpen}
            aria-label="Toggle mobile menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav-mobile${mobileOpen ? ' open' : ''}`} aria-hidden={!mobileOpen}>
        {navLinks.map(link => (
          <button
            key={link.href}
            className={`nav-link${activeSection === link.href.replace('#', '') ? ' active' : ''}`}
            onClick={() => scrollTo(link.href)}
          >
            {link.label}
          </button>
        ))}
        <a
          className="btn btn-primary btn-sm nav-cta"
          href={personal.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon size={14} />
          View GitHub
        </a>
      </div>
    </>
  );
}
