/* ============================================================
   Hero.jsx
   Full-viewport landing section with:
   - Bold variable-size typography (clamp-based fluid sizing)
   - Animated background orbs / gradient blobs
   - Floating geometric shapes (CSS animations)
   - Download Resume CTA + secondary links
   - Typing cursor effect on the tagline
   ============================================================ */
import { useEffect, useRef, useState } from 'react';
import { Download, GitFork, ArrowDown, Sparkles } from "lucide-react";
import { identity } from '../portfolioData';
import './Hero.css';

export default function Hero() {
  const cursorRef = useRef(null);
  const [displayedTagline, setDisplayedTagline] = useState("");
  const fullTagline = `"${identity.tagline}"`;

  useEffect(() => {
    let timeout;
    let isTyping = true;
    let currentText = "";
    let i = 0;
    
    // Looping typewriter logic
    const playAnimation = () => {
      if (isTyping) {
        if (i < fullTagline.length) {
          currentText += fullTagline.charAt(i);
          setDisplayedTagline(currentText);
          i++;
          timeout = setTimeout(playAnimation, 50); 
        } else {
          isTyping = false;
          timeout = setTimeout(playAnimation, 20000); // pause at the end
        }
      } else {
        if (i > 0) {
          currentText = currentText.slice(0, -1);
          setDisplayedTagline(currentText);
          i--;
          timeout = setTimeout(playAnimation, 20); // erase speed
        } else {
          isTyping = true;
          timeout = setTimeout(playAnimation, 1000); // pause before re-typing
        }
      }
    };

    const startDelay = setTimeout(playAnimation, 500);

    return () => {
      clearTimeout(startDelay);
      clearTimeout(timeout);
    };
  }, [fullTagline]);

  return (
    <section id="home" className="hero">

      {/* ── Decorative background orbs (CSS animated) ── */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* ── Floating geometric shapes ── */}
      <div className="hero-shapes" aria-hidden="true">
        <div className="shape shape-ring" />
        <div className="shape shape-dot-grid" />
        <div className="shape shape-square" />
        <div className="shape shape-triangle" />
      </div>

      {/* ── Grid dot pattern overlay ── */}
      <div className="hero-grid" aria-hidden="true" />

      <div className="container hero-content">

        {/* ── Badge chip above name ── */}
        <div className="hero-badge reveal">
          <Sparkles size={13} />
          <span>Open to internships &amp; collaborations</span>
        </div>

        {/* ── Main headline — fluid clamp typography ── */}
        <h1 className="hero-name reveal">
          {/* Split the name so we can animate each part */}
          <span className="name-first">Henna Marie</span>
          <br />
          <span className="name-last gradient-text">Barcebal</span>
        </h1>

        {/* ── Title + separator ── */}
        <p className="hero-title reveal">
          {identity.title}
        </p>

        {/* ── Tagline with blinking cursor ── */}
        <p className="hero-tagline reveal">
          <span className="tagline-quote">
            {displayedTagline.startsWith('"') ? '"' : ''}
          </span>
          {displayedTagline.slice(
            displayedTagline.startsWith('"') ? 1 : 0,
            displayedTagline.length - (displayedTagline.length > 1 && displayedTagline.endsWith('"') ? 1 : 0)
          )}
          <span className="tagline-quote">
            {displayedTagline.length > 1 && displayedTagline.endsWith('"') ? '"' : ''}
          </span>
          {/* Blinking cursor — CSS animation 'blink' */}
          <span className="cursor" ref={cursorRef}>|</span>
        </p>

        {/* ── Bio text ── */}
        <p className="hero-bio reveal">{identity.bio}</p>

        {/* ── CTA buttons ── */}
        <div className="hero-cta reveal">
          {/*
            Download Resume:
            The `download` attribute on <a> triggers browser download.
            File should be placed at /public/resume.pdf
          */}
          <a href={identity.resumeUrl} download className="btn btn-primary">
            <Download size={17} />
            Download Resume
          </a>

          <a href="#projects" className="btn btn-outline">
            View Projects
          </a>
        </div>

        {/* ── Social links ── */}
        <div className="hero-socials reveal">
          <a
            href={identity.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <GitFork size={19} />
            <span>GitHub</span>
          </a>

          <span className="social-divider">·</span>
          <span className="location-tag">📍 {identity.location}</span>
        </div>
      </div>

      {/* ── Scroll indicator arrow ── */}
      <a href="#about" className="scroll-indicator" aria-label="Scroll down">
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
