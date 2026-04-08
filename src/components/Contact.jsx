/* ============================================================
   Contact.jsx
   Contact section with:
   - Clickable email links (personal + university)
   - GitHub icon links
   - Location display
   - A mailto: CTA button for quick email
   ============================================================ */
import { Mail, GitFork, MapPin, Send, ExternalLink } from 'lucide-react';
import { identity, contact } from '../portfolioData';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      {/* Background orbs */}
      <div className="contact-orb-1 orb" aria-hidden="true" />
      <div className="contact-orb-2 orb" aria-hidden="true" />

      <div className="container">

        {/* ── Section header ── */}
        <div className="section-header reveal">
          <span className="section-label">Contact</span>
          <h2 className="section-title">
            {contact.heading} <span className="gradient-text">✦</span>
          </h2>
          <p className="section-desc">{contact.subheading}</p>
        </div>

        {/* ── Contact card grid ── */}
        <div className="contact-grid stagger-parent">

          {/* ── Big CTA card ── */}
          <div className="contact-cta-card glass-card reveal">
            <div className="cta-glow" aria-hidden="true" />
            <h3 className="cta-heading">Ready to work together?</h3>
            <p className="cta-sub">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of something amazing.
            </p>
            {/*
              Gmail compose link — opens Gmail in a new tab
              with the To field pre-filled.
            */}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${identity.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary cta-btn"
            >
              <Send size={16} />
              Send me a message
            </a>

            {/* Floating decorative shapes inside cta card */}
            <div className="cta-shape cta-shape-1" aria-hidden="true" />
            <div className="cta-shape cta-shape-2" aria-hidden="true" />
          </div>

          {/* ── Info cards column ── */}
          <div className="contact-info-col">

            {/* Personal email */}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${identity.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item glass-card reveal"
              aria-label="Send email to personal address"
            >
              <div className="contact-item-icon blue">
                <Mail size={18} />
              </div>
              <div className="contact-item-body">
                <p className="contact-item-label">Personal Email</p>
                <p className="contact-item-value">{identity.email}</p>
              </div>
              <ExternalLink size={14} className="contact-item-arrow" />
            </a>

            {/* University email */}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${identity.emailUniversity}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item glass-card reveal"
              aria-label="Send email to university address"
            >
              <div className="contact-item-icon purple">
                <Mail size={18} />
              </div>
              <div className="contact-item-body">
                <p className="contact-item-label">University Email</p>
                <p className="contact-item-value">{identity.emailUniversity}</p>
              </div>
              <ExternalLink size={14} className="contact-item-arrow" />
            </a>

            {/* GitHub */}
            <a
              href={identity.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item glass-card reveal"
              aria-label="Visit GitHub profile"
            >
              <div className="contact-item-icon dark">
                <GitFork size={18} />
              </div>
              <div className="contact-item-body">
                <p className="contact-item-label">GitHub</p>
                <p className="contact-item-value">github.com/barcebalhenna</p>
              </div>
              <ExternalLink size={14} className="contact-item-arrow" />
            </a>

            {/* Location — not a link, just info */}
            <div className="contact-item contact-location glass-card reveal">
              <div className="contact-item-icon green">
                <MapPin size={18} />
              </div>
              <div className="contact-item-body">
                <p className="contact-item-label">Location</p>
                <p className="contact-item-value">{identity.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
