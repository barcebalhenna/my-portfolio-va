/* ============================================================
   Footer.jsx
   Simple footer with name, nav links, and copyright.
   ============================================================ */
import { Heart, Code2 } from 'lucide-react';
import { identity, navLinks } from '../portfolioData';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">

        {/* Logo */}
        <a href="#home" className="footer-logo">
          <span className="footer-logo-icon"><Code2 size={16} /></span>
          <span className="footer-logo-text">{identity.initials}</span>
        </a>

        {/* Nav links */}
        <nav className="footer-nav" aria-label="Footer navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="footer-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="footer-copy">
          © {year} {identity.name}. Built with{' '}
          <Heart size={12} className="footer-heart" aria-label="love" /> and React.
        </p>
      </div>

      {/* Top gradient border */}
      <div className="footer-border" aria-hidden="true" />
    </footer>
  );
}
