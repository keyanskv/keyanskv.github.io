import { Mail, Shield } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personal } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

const contacts = [
  {
    label: 'Primary Email',
    value: 'keyanskv@gmail.com',
    href: `mailto:${personal.emailPrimary}`,
    Icon: Mail,
  },
  {
    label: 'Private Email',
    value: 'keyanskv@protonmail.com',
    href: `mailto:${personal.emailSecondary}`,
    Icon: Mail,
  },
  {
    label: 'GitHub',
    value: 'github.com/keyanskv',
    href: personal.githubUrl,
    Icon: GithubIcon,
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'Karthi Keyan S',
    href: personal.linkedinUrl,
    Icon: LinkedinIcon,
    external: true,
  },
  {
    label: 'Bugcrowd',
    value: 'bugcrowd.com/h/Keyans',
    href: personal.bugcrowdUrl,
    Icon: Shield,
    external: true,
  },
];

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="section bg-alt" ref={ref} aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact__inner">
          <p className="section-label reveal">Get in Touch</p>
          <h2 id="contact-heading" className="section-title reveal">Let&apos;s Connect</h2>
          <p className="contact__desc reveal">
            I&apos;m always interested in learning, building projects, contributing to open source
            and connecting with people working in technology.
          </p>

          <div className="contact__grid reveal">
            {contacts.map((c) => {
              const { Icon } = c;
              return (
                <a
                  key={c.label}
                  className="contact-card"
                  href={c.href}
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noopener noreferrer' : undefined}
                  aria-label={`${c.label}: ${c.value}${c.external ? ' (opens in new tab)' : ''}`}
                >
                  <Icon size={20} className="contact-card__icon" aria-hidden="true" />
                  <p className="contact-card__label">{c.label}</p>
                  <p className="contact-card__value">{c.value}</p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
