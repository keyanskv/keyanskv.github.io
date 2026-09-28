import { Shield, ExternalLink, Award } from 'lucide-react';
import { security } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Security() {
  const ref = useScrollReveal();

  return (
    <section id="security" className="section" ref={ref} aria-labelledby="security-heading">
      <div className="container">
        <p className="section-label reveal">Cybersecurity</p>
        <h2 id="security-heading" className="section-title reveal">Security Research &amp; Recognition</h2>
        <p className="security__intro reveal">{security.intro}</p>

        {/* Bugcrowd + TryHackMe — top row */}
        <div className="security__top reveal">
          {/* Bugcrowd */}
          <div className="security-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.5rem' }}>
              <Shield size={20} color="var(--accent-blue)" aria-hidden="true" />
              <p className="security-card__label">Researcher Profile</p>
            </div>
            <h3 className="security-card__title">{security.bugcrowd.label}</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.7 }}>
              Active participant in Vulnerability Disclosure Programs (VDPs) on Bugcrowd,
              practising responsible vulnerability research.
            </p>
            <a
              className="btn btn-secondary btn-sm"
              href={security.bugcrowd.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Bugcrowd profile (opens in new tab)"
            >
              <ExternalLink size={14} />
              View Bugcrowd Profile
            </a>
          </div>

          {/* TryHackMe */}
          <div className="security-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.5rem' }}>
              <Award size={20} color="var(--accent-violet)" aria-hidden="true" />
              <p className="security-card__label">Learning Platform</p>
            </div>
            <h3 className="security-card__title">TryHackMe</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.7 }}>
              Practising cybersecurity skills through hands-on labs and learning paths on TryHackMe.
            </p>
            <a
              className="btn btn-secondary btn-sm"
              href={security.tryhackme.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View TryHackMe badges (opens in new tab)"
            >
              <ExternalLink size={14} />
              View Badges
            </a>
          </div>
        </div>

        {/* Hall of Fame / Recognitions */}
        <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }} className="reveal">
          Recognitions &amp; Hall of Fame
        </h3>
        <div className="security__recognitions">
          {security.recognitions.map((r, i) => (
            <div
              key={r.org}
              className="recognition-card reveal"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="recognition-card__left">
                <p className="recognition-card__org">{r.org}</p>
                <p className="recognition-card__label">{r.label}</p>
              </div>
              {r.url ? (
                <a
                  className="btn btn-ghost btn-sm"
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${r.org} Hall of Fame (opens in new tab)`}
                >
                  <ExternalLink size={13} />
                </a>
              ) : (
                /* NCIIPC — no public link available */
                <span className="badge badge-amber" style={{ fontSize: '0.7rem' }}>Recognised</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
