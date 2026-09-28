import { Briefcase } from 'lucide-react';
import { experience } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="section" ref={ref} aria-labelledby="exp-heading">
      <div className="container">
        <p className="section-label reveal">Work Experience</p>
        <h2 id="exp-heading" className="section-title reveal">Professional Experience</h2>
        <p className="section-desc reveal">
          Practical industry experience gained through hands-on development work.
        </p>

        <div className="experience__timeline reveal">
          {experience.map((job) => (
            <article key={job.role} className="exp-card">
              {/* Role header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.25rem' }}>
                <Briefcase size={18} color="var(--accent-blue)" aria-hidden="true" />
                <h3 className="exp-card__role">{job.role}</h3>
              </div>
              <p className="exp-card__period">
                {job.period} &nbsp;·&nbsp; {job.duration}
              </p>

              {/* Responsibilities */}
              <ul className="exp-card__list" aria-label="Responsibilities">
                {job.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              {/* Tech used */}
              <div className="tags">
                {job.tech.map(t => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
