import { useEffect, useRef } from 'react';
import { Network, Monitor, Shield, Atom, Cloud } from 'lucide-react';
import { certifications } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Map icon name strings to Lucide components
const ICONS = { Network, Monitor, Shield, Atom, Cloud };

// Credly badge embed — injects the div + loads the Credly script once
function CredlyBadge({ badgeId, name }) {
  const ref = useRef(null);

  useEffect(() => {
    // Only load if not already present in the document
    if (!document.querySelector('script[src*="credly.com"]')) {
      const script = document.createElement('script');
      script.src = '//cdn.credly.com/assets/utilities/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Script already loaded — tell Credly to re-scan for new badges
      if (window.CREDLY && typeof window.CREDLY.init === 'function') {
        window.CREDLY.init();
      }
    }
  }, [badgeId]);

  return (
    <div className="credly-badge-wrapper" ref={ref}>
      <div
        data-iframe-width="150"
        data-iframe-height="270"
        data-share-badge-id={badgeId}
        data-share-badge-host="https://www.credly.com"
        aria-label={`Credly verified badge for ${name}`}
      />
    </div>
  );
}

export default function Certifications() {
  const ref = useScrollReveal();

  // Separate certs with Credly embeds from the regular grid
  const featured = certifications.filter((c) => c.credlyBadgeId);
  const rest = certifications.filter((c) => !c.credlyBadgeId);

  return (
    <section id="certifications" className="section bg-alt" ref={ref} aria-labelledby="cert-heading">
      <div className="container">
        <p className="section-label reveal">Certifications</p>
        <h2 id="cert-heading" className="section-title reveal">Certificates &amp; Courses</h2>
        <p className="section-desc reveal">
          Industry certifications completed through Cisco, IBM and IBM SkillsBuild programs.
        </p>

        {/* ── Credly featured badges ──────────────────────────── */}
        {featured.length > 0 && (
          <div className="credly-featured reveal">
            {featured.map((cert) => (
              <div key={cert.name} className="credly-featured__item">
                <CredlyBadge badgeId={cert.credlyBadgeId} name={cert.name} />
                <p className="credly-featured__label">{cert.name}</p>
                <p className="credly-featured__issuer">{cert.issuer} · {cert.year}</p>
              </div>
            ))}
          </div>
        )}

        {/* ── Regular cert cards ──────────────────────────────── */}
        <div className="cert__grid">
          {rest.map((cert, i) => {
            const Icon = ICONS[cert.icon] ?? Shield;
            return (
              <a
                key={cert.name}
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
                aria-label={`Verify ${cert.name}`}
              >
                <div className="cert-card__icon" aria-hidden="true">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="cert-card__name">{cert.name}</h3>
                  <p className="cert-card__issuer">{cert.issuer}</p>
                  <p className="cert-card__year">{cert.year}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
