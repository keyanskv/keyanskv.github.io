import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personal } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="container">
        <div className="footer__inner">
          {/* Copyright */}
          <p className="footer__copy">
            &copy; 2026 Keyan. Built with React.
          </p>

          {/* Tagline */}
          <p className="footer__tagline">Learning • Building • Contributing</p>

          {/* Social icons */}
          <div className="footer__social">
            <a
              className="footer__social-link"
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              className="footer__social-link"
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              className="footer__social-link"
              href={`mailto:${personal.emailPrimary}`}
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
