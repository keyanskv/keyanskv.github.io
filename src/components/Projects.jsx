import {
  CheckSquare, QrCode, Package, ListTodo, Database, Lock, Bot, ExternalLink,
  ScanSearch, ServerCog, Atom
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { projects } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Map icon string names from data to Lucide components
const ICONS = { CheckSquare, QrCode, Package, ListTodo, Database, Lock, Bot, ScanSearch, ServerCog, Atom };

const featured = projects.filter(p => p.featured);
const other = projects.filter(p => !p.featured);

function ProjectCard({ project, large = false }) {
  const Icon = ICONS[project.icon] ?? Package;

  return (
    <article className="project-card">
      <div className="project-card__header">
        <div className="project-card__icon-wrap" aria-hidden="true">
          <Icon size={20} />
        </div>
        <h3 className="project-card__name">{project.name}</h3>
      </div>

      <p className="project-card__desc">{project.description}</p>

      {/* Feature tags — only for featured cards with features */}
      {large && project.features.length > 0 && (
        <div className="project-card__features" aria-label="Features">
          {project.features.map(f => (
            <span key={f} className="feature-tag">{f}</span>
          ))}
        </div>
      )}

      {/* Tech stack */}
      <div className="tags">
        {project.tech.map(t => (
          <span key={t} className="badge">{t}</span>
        ))}
      </div>

      {/* Actions */}
      <div className="project-card__actions">
        <a
          className="btn btn-ghost btn-sm"
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.name} on GitHub`}
        >
                  <GithubIcon size={14} />
          GitHub
        </a>
        {project.demoUrl && (
          <a
            className="btn btn-secondary btn-sm"
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} demo`}
          >
            <ExternalLink size={14} />
            Demo
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="section bg-alt" ref={ref} aria-labelledby="projects-heading">
      <div className="container">
        <p className="section-label reveal">Portfolio</p>
        <h2 id="projects-heading" className="section-title reveal">Featured Projects</h2>
        <p className="section-desc reveal">
          A selection of projects I&apos;ve built while learning and exploring different technologies.
        </p>

        {/* Featured */}
        <div className="projects__featured">
          {featured.map((project, i) => (
            <div key={project.name} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <ProjectCard project={project} large />
            </div>
          ))}
        </div>

        {/* Other projects */}
        <p className="projects__other-label reveal">Other Projects</p>
        <div className="projects__grid">
          {other.map((project, i) => (
            <div key={project.name} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
