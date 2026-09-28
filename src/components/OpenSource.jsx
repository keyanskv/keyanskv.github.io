import { GitPullRequest, ExternalLink, GitMerge, Clock } from 'lucide-react';
import { openSource } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function OpenSource() {
  const ref = useScrollReveal();

  return (
    <section id="opensource" className="section bg-alt" ref={ref} aria-labelledby="os-heading">
      <div className="container">
        <p className="section-label reveal">Open Source</p>
        <h2 id="os-heading" className="section-title reveal">Open Source Contributions</h2>

        <blockquote className="os__intro reveal">
          &ldquo;{openSource.intro}&rdquo;
        </blockquote>

        <div className="os__grid">
          {openSource.contributions.map((contrib, i) => (
            <article
              key={contrib.project}
              className="os-card reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="os-card__header">
                <h3 className="os-card__project">{contrib.project}</h3>
                {/* Status badge */}
                {contrib.status === 'Merged' ? (
                  <span className="badge badge-green" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <GitMerge size={12} />
                    Merged
                  </span>
                ) : (
                  <span className="badge badge-amber" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Clock size={12} />
                    Under Review
                  </span>
                )}
              </div>

              <p className="os-card__pr">
                <GitPullRequest size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.3rem' }} />
                {contrib.pr}
              </p>

              <p className="os-card__desc">{contrib.description}</p>

              <a
                className="btn btn-ghost btn-sm"
                href={contrib.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${contrib.project} pull request on GitHub (opens in new tab)`}
              >
                <ExternalLink size={14} />
                View on GitHub
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
