/* ============================================================
   About.jsx
   About Me section using a bento-grid layout:
   - Left column: background text + mission/vision cards
   - Right column: education timeline + achievements grid
   - Stats row: bold numbers in a 4-column strip
   ============================================================ */
import { GraduationCap, BookOpen, Award, Trophy, Star, Newspaper, Target, Eye, Rocket } from 'lucide-react';
import { about, identity } from '../portfolioData';
import './About.css';

/* Map icon string names to actual Lucide components */
const iconMap = { Award, Trophy, Star, Newspaper, GraduationCap, BookOpen };

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">

        {/* ── Section header ── */}
        <div className="section-header reveal">
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            The person behind the <span className="gradient-text">code</span>
          </h2>
          <p className="section-desc">
            Curious by nature, driven by purpose — here's a bit about who I am.
          </p>
        </div>

        {/* ══════════════════════════════════════════════
            BENTO GRID — 12-column CSS Grid
            Each bento "tile" is a glass-card with different
            col/row span to create an asymmetric mosaic.
        ══════════════════════════════════════════════ */}
        <div className="bento-grid stagger-parent">

          {/* Tile 1 — Background story (wide, tall) */}
          <div className="bento-tile tile-background glass-card reveal">
            <div className="tile-content-wrap">
              <div className="tile-icon-wrap blue"><Rocket size={20} /></div>
              <h3 className="tile-title">My Story</h3>
              <p className="tile-body">{about.background}</p>
            </div>
            
            <div className="story-photo-wrapper">
              <img src={identity.photo} alt={identity.name} className="story-photo" />
            </div>
          </div>

          {/* Tile 2 — Mission */}
          <div className="bento-tile tile-mission glass-card reveal">
            <div className="tile-icon-wrap purple"><Target size={20} /></div>
            <h3 className="tile-title">Mission</h3>
            <p className="tile-body">{about.mission}</p>
          </div>

          {/* Tile 3 — Vision */}
          <div className="bento-tile tile-vision glass-card reveal">
            <div className="tile-icon-wrap green"><Eye size={20} /></div>
            <h3 className="tile-title">Vision</h3>
            <p className="tile-body">{about.vision}</p>
          </div>

          {/* Tile 4 — Goals & Motivation */}
          <div className="bento-tile tile-goals glass-card reveal">
            <div className="tile-icon-wrap blue"><Star size={20} /></div>
            <h3 className="tile-title">Goals &amp; Motivation</h3>
            <p className="tile-body">{about.goalsMotivation}</p>
          </div>

          {/* Tile 5 — Education timeline */}
          <div className="bento-tile tile-education glass-card reveal">
            <h3 className="tile-title">Education</h3>
            <div className="edu-timeline">
              {about.education.map((item, i) => (
                <div className="edu-item" key={i}>
                  {/* Timeline dot */}
                  <div className="edu-dot" />
                  <div className="edu-body">
                    <p className="edu-degree">{item.degree}</p>
                    <p className="edu-school">{item.school}</p>
                    <span className="pill pill-blue">{item.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tile 6 — Achievements */}
          <div className="bento-tile tile-achievements glass-card reveal">
            <h3 className="tile-title">Achievements</h3>
            <div className="achievements-list">
              {about.achievements.map((a, i) => (
                <div className="achievement-item" key={i}>
                  <div className={`ach-icon ${['blue','purple','green','blue'][i % 3]}`}>
                    <Award size={14} />
                  </div>
                  <div>
                    <p className="ach-title">{a.title}</p>
                    <p className="ach-desc">{a.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div className="stats-strip stagger-parent">
          {about.stats.map((stat, i) => (
            <div className="stat-card glass-card reveal" key={i}>
              <span className="stat-value gradient-text">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
