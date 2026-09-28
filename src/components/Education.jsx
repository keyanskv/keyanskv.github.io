import { GraduationCap } from 'lucide-react';
import { education } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Education() {
  const ref = useScrollReveal();

  return (
    <section id="education" className="section" ref={ref} aria-labelledby="edu-heading">
      <div className="container">
        <p className="section-label reveal">Education</p>
        <h2 id="edu-heading" className="section-title reveal">Academic Background</h2>

        <div className="education__grid">
          {education.map((edu) => (
            <article key={edu.degree} className="edu-card reveal">
              <div className="edu-card__icon" aria-hidden="true">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="edu-card__degree">{edu.degree}</h3>
                <p className="edu-card__spec">{edu.specialization}</p>
                <p className="edu-card__uni">{edu.institution}</p>
                <p className="edu-card__period">{edu.period}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
