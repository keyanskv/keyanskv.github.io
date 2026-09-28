import {
  Code2, Layout, Smartphone, Server, Terminal, Network, Shield, Brain
} from 'lucide-react';
import { skills } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Map icon string names from data to actual Lucide components
const ICONS = { Code2, Layout, Smartphone, Server, Terminal, Network, Shield, Brain };

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="section bg-alt" ref={ref} aria-labelledby="skills-heading">
      <div className="container">
        <p className="section-label reveal">Technical Skills</p>
        <h2 id="skills-heading" className="section-title reveal">What I Work With</h2>
        <p className="section-desc reveal">
          Technologies and tools I&apos;ve worked with across software development,
          Linux administration, networking and cybersecurity.
        </p>

        <div className="skills__grid">
          {skills.map((category, i) => {
            const Icon = ICONS[category.icon] ?? Code2;
            return (
              <div
                key={category.category}
                className="skill-card reveal"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="skill-card__header">
                  <Icon size={18} className="skill-card__icon" aria-hidden="true" />
                  <h3 className="skill-card__title">{category.category}</h3>
                </div>
                <div className="skill-badges">
                  {category.items.map(item => (
                    <span key={item} className="skill-badge">{item}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
