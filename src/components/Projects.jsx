/* ============================================================
   Projects.jsx
   Projects section — card grid with:
   - Image placeholder area (with TODO comment)
   - Role badge + project type chip
   - Description text
   - Tech stack pills
   - GitHub link button
   ============================================================ */
import { GitFork, ExternalLink, Folder } from 'lucide-react';
import { projects } from '../portfolioData';
import './Projects.css';

/* Color config mapped to project color field */
const colorMap = {
  purple: { accent: 'rgba(139,92,246,0.15)', border: 'rgba(139,92,246,0.3)', pill: 'pill-purple', glow: 'var(--glow-purple)', titleHover: 'var(--purple)' },
  green:  { accent: 'rgba(16,185,129,0.15)',  border: 'rgba(16,185,129,0.3)',  pill: 'pill-green',  glow: 'var(--glow-green)', titleHover: 'var(--green)' },
  blue:   { accent: 'rgba(59,130,246,0.15)',  border: 'rgba(59,130,246,0.3)',  pill: 'pill-blue',   glow: 'var(--glow-blue)', titleHover: 'var(--blue)' },
  violet: { accent: 'rgba(109,40,217,0.15)',  border: 'rgba(109,40,217,0.3)',  pill: 'pill-purple', glow: 'var(--glow-purple)', titleHover: 'var(--purple)' },
};

/* Pills cycle through the three colors */
const pillCycle = ['pill-blue', 'pill-purple', 'pill-green'];

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">

        {/* ── Section header ── */}
        <div className="section-header reveal">
          <span className="section-label">Projects</span>
          <h2 className="section-title">
            Things I've <span className="gradient-text">built</span>
          </h2>
          <p className="section-desc">
            From academic capstones to ML-powered apps — real systems, real impact.
          </p>
        </div>

        {/* ── Project cards grid ── */}
        <div className="projects-grid stagger-parent">
          {projects.map((project, i) => {
            const c = colorMap[project.color] || colorMap.blue;
            return (
              <article
                className="project-card glass-card reveal"
                key={i}
                style={{
                  '--card-accent': c.accent,
                  '--card-border':  c.border,
                  '--card-glow':    c.glow,
                  '--card-title-hover': c.titleHover,
                }}
              >
                {/* ── Image / placeholder area ── */}
                {project.image ? (
                  <div className="project-img-container">
                    <img src={project.image} alt={project.title} className="project-img" />
                    <div className="img-gradient" />
                  </div>
                ) : (
                  <div className="project-img-placeholder" aria-hidden="true">
                    <Folder size={36} className="placeholder-icon" />
                    <span className="placeholder-text">Screenshot coming soon</span>
                    <div className="img-gradient" />
                  </div>
                )}

                <div className="project-body">
                  {/* Top row: type badge + year */}
                  <div className="project-meta-row">
                    <span className={`pill ${c.pill}`}>{project.type}</span>
                    <span className="project-year">{project.year}</span>
                  </div>

                  {/* Title */}
                  <h3 className="project-title">{project.title}</h3>

                  {/* Role */}
                  <p className="project-role">
                    <span className="role-label">Role: </span>
                    {project.role}
                  </p>

                  {/* Description */}
                  <p className="project-desc">{project.description}</p>

                  {/* Tech stack pills */}
                  <div className="project-stack">
                    {project.tools.map((tool, j) => (
                      <span className={`pill ${pillCycle[j % 3]}`} key={j}>
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="project-actions">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GitFork size={15} />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link project-link-live"
                        aria-label={`Live demo of ${project.title}`}
                      >
                        <ExternalLink size={15} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
