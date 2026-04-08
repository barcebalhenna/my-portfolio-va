/* ============================================================
   Experience.jsx
   Work Experience section — vertical timeline layout.
   Each entry has a role, company, duration, type badge,
   and a list of responsibilities.
   ============================================================ */
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experience } from '../portfolioData';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">

        {/* ── Section header ── */}
        <div className="section-header reveal">
          <span className="section-label">Experience</span>
          <h2 className="section-title">
            My professional <span className="gradient-text">journey</span>
          </h2>
          <p className="section-desc">
            Where theory meets practice — a record of what I've built and led.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════
            VERTICAL TIMELINE
            The vertical line is a ::before pseudo-element on
            .timeline-container. Each entry has a dot marker
            that glows in the brand gradient.
        ══════════════════════════════════════════════════ */}
        <div className="timeline-container">
          {experience.map((job, i) => (
            <div className="timeline-entry reveal" key={i}>

              {/* Animated dot on the timeline spine */}
              <div className="timeline-dot">
                <div className="dot-inner" />
              </div>

              <div className="timeline-card glass-card">

                {/* Top row: role + type badge */}
                <div className="tc-header">
                  <div>
                    <h3 className="tc-role">{job.role}</h3>
                    <p className="tc-company">
                      <MapPin size={13} className="tc-icon" />
                      {job.company}
                    </p>
                  </div>
                  <div className="tc-meta">
                    <span className="pill pill-blue">
                      <Calendar size={11} style={{ marginRight: '4px' }} />
                      {job.duration}
                    </span>
                    <span className="pill pill-purple">{job.type}</span>
                  </div>
                </div>

                {/* Responsibilities list */}
                <ul className="tc-responsibilities">
                  {job.responsibilities.map((r, j) => (
                    <li key={j} className="tc-resp-item">
                      {/* Gradient bullet dot */}
                      <span className="resp-dot" aria-hidden="true" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/*
            TODO: Internship entry will appear here automatically
            once you add it to the `experience` array in portfolioData.js.
          */}

          {/* "Seeking internship" end node */}
          <div className="timeline-end reveal">
            <div className="timeline-dot">
              <div className="dot-inner dot-seeking" />
            </div>
            <div className="timeline-card glass-card seeking-card">
              <div className="seeking-icon">
                <Briefcase size={20} />
              </div>
              <div>
                <h4 className="seeking-title">Actively Seeking Internship</h4>
                <p className="seeking-desc">
                  Open to software development and project management internship opportunities.
                  Let's build something great together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
