/* ============================================================
   Navbar.jsx
   Sticky top navbar with:
   - Smooth-scroll links (via CSS scroll-behavior + href anchors)
   - Active section highlight (IntersectionObserver)
   - Dark / Light mode toggle button
   - Mobile hamburger menu
   ============================================================ */
import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Moon, Sun, Code2 } from 'lucide-react';
import { navLinks, identity } from '../portfolioData';
import './Navbar.css';

export default function Navbar({ darkMode, toggleDark }) {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [activeSection, setActive]    = useState('home');

  // ── Shrink navbar on scroll ──────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Highlight active nav link based on visible section ───
  useEffect(() => {
    // We watch each section and mark whichever is most visible
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // ── Close mobile menu on link click ──────────────────────
  const handleLinkClick = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">

        {/* Logo / initials */}
        <a href="#home" className="navbar-logo" onClick={handleLinkClick}>
          <span className="logo-icon"><Code2 size={18} /></span>
          <span className="logo-text">{identity.initials}</span>
        </a>

        {/* Desktop links */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
              >
                {link.label}
                {/* Active underline indicator */}
                <span className="nav-indicator" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="navbar-controls">
          {/* Dark mode toggle — pressing this calls toggleDark() in App.jsx */}
          <button
            className="theme-toggle"
            onClick={toggleDark}
            aria-label="Toggle dark mode"
          >
            {/* We swap the icon based on current mode */}
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Hamburger (mobile only) */}
          <button
            className="hamburger"
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`mobile-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
            onClick={handleLinkClick}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
