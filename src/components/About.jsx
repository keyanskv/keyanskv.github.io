import { about } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="section" ref={ref} aria-labelledby="about-heading">
      <div className="container">
        <p className="section-label reveal">About Me</p>
        <h2 id="about-heading" className="section-title reveal">Who I Am</h2>

        <div className="about__grid reveal">
          {/* Paragraphs */}
          <div className="about__paragraphs">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* What I enjoy */}
          <div className="about__interests">
            <h3>What I Enjoy</h3>
            <ul>
              {about.interests.map((item) => (
                <li key={item} className="interest-item">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
