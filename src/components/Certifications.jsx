import { Network, Monitor, Shield, Atom, Cloud } from 'lucide-react';
import { certifications } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Map icon name strings to Lucide components
const ICONS = { Network, Monitor, Shield, Atom, Cloud };

export default function Certifications() {
  const ref = useScrollReveal();

  return (
    <section id="certifications" className="section bg-alt" ref={ref} aria-labelledby="cert-heading">
      <div className="container">
        <p className="section-label reveal">Certifications</p>
        <h2 id="cert-heading" className="section-title reveal">Certificates &amp; Courses</h2>
        <p className="section-desc reveal">
          Industry certifications completed through Cisco, IBM and IBM SkillsBuild programs.
        </p>

        <div className="cert__grid">
          {certifications.map((cert, i) => {
            const Icon = ICONS[cert.icon] ?? Shield;
            return (
              <article
                key={cert.name}
                className="cert-card reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="cert-card__icon" aria-hidden="true">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="cert-card__name">{cert.name}</h3>
                  <p className="cert-card__issuer">{cert.issuer}</p>
                  <p className="cert-card__year">{cert.year}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
