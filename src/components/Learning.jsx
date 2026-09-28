import { learning } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Map status labels to CSS modifier class names
function statusClass(status) {
  return `learning-status learning-status--${status.toLowerCase()}`;
}

export default function Learning() {
  const ref = useScrollReveal();

  return (
    <section id="learning" className="section" ref={ref} aria-labelledby="learning-heading">
      <div className="container">
        <p className="section-label reveal">Current Focus</p>
        <h2 id="learning-heading" className="section-title reveal">Currently Learning &amp; Exploring</h2>
        <p className="section-desc reveal">
          Areas I am actively studying, practising or building projects around right now.
        </p>

        <div className="learning__grid">
          {learning.map((item, i) => (
            <div
              key={item.topic}
              className="learning-card reveal"
              style={{ transitionDelay: `${i * 45}ms` }}
            >
              <span className="learning-card__topic">{item.topic}</span>
              <span className={statusClass(item.status)}>{item.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
