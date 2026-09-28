import { ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personal } from '../data/portfolio';

// Terminal widget showing a static "typed" session
function Terminal() {
  return (
    <div className="terminal" aria-hidden="true">
      <div className="terminal__bar">
        <span className="terminal__dot terminal__dot--red" />
        <span className="terminal__dot terminal__dot--yellow" />
        <span className="terminal__dot terminal__dot--green" />
        <span className="terminal__title">keyan@portfolio ~ zsh</span>
      </div>
      <div className="terminal__body">
        <div>
          <span className="terminal__prompt">❯</span>
          <span className="terminal__cmd"> whoami</span>
        </div>
        <span className="terminal__out">keyanskv</span>
        <br />
        <div>
          <span className="terminal__prompt">❯</span>
          <span className="terminal__cmd"> focus</span>
        </div>
        <span className="terminal__out">software development</span>
        <span className="terminal__out">linux &amp; devops</span>
        <span className="terminal__out">cybersecurity</span>
        <span className="terminal__out">open source</span>
        <br />
        <div>
          <span className="terminal__prompt">❯</span>
          <span className="terminal__cmd"> status</span>
        </div>
        <span className="terminal__out terminal__out--dim">learning...</span>
        <span className="terminal__out terminal__out--dim">building...</span>
        <span className="terminal__out terminal__out--dim">contributing...<span className="terminal__cursor" /></span>
      </div>
    </div>
  );
}

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero" aria-label="Introduction">
      {/* Decorative orbs */}
      <div className="orb hero__orb-1" aria-hidden="true" />
      <div className="orb hero__orb-2" aria-hidden="true" />

      <div className="container">
        <div className="hero__content">
          {/* Left — text */}
          <div className="hero__text">
            {/* Status badge */}
            <div className="hero__status">
              <span className="status-dot" aria-hidden="true" />
              {personal.statusBadge}
            </div>

            <h1 className="hero__heading">Hi, I&apos;m Keyan 👋</h1>

            <p className="hero__subheading">{personal.tagline}</p>

            <p className="hero__desc">{personal.heroDescription}</p>

            {/* CTA buttons */}
            <div className="hero__actions">
              <button className="btn btn-primary" onClick={scrollToProjects}>
                <ChevronDown size={16} />
                Explore My Work
              </button>
              <a
                className="btn btn-secondary"
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GitHub profile (opens in new tab)"
              >
                <GithubIcon size={16} />
                GitHub Profile
              </a>
            </div>

            {/* Social links */}
            <div className="hero__social">
              <a
                className="hero__social-link"
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
                GitHub
              </a>
              <span className="hero__divider" aria-hidden="true" />
              <a
                className="hero__social-link"
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right — terminal widget */}
          <Terminal />
        </div>
      </div>
    </section>
  );
}
