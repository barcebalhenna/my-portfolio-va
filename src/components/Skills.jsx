/* ============================================================
   Skills.jsx
   Core Skills & Services section:
   - Marquee (auto-scrolling) technical skills ticker
   - Bento grid for services
   - Proficiency bars (animated via IntersectionObserver ref)
   - Soft skills + software tools grid
   ============================================================ */
import { useEffect, useRef } from 'react';
import { Globe, Smartphone, LayoutDashboard, Database, FileText, PenTool } from 'lucide-react';
import { skills } from '../portfolioData';
import './Skills.css';

/* Map icon names from data to Lucide components */
const IconMap = { Globe, Smartphone, LayoutDashboard, Database, FileText, Figma: PenTool };

/* Pill color cycling: blue → purple → green → repeat */
const pillColors = ['pill-blue', 'pill-purple', 'pill-green'];

export default function Skills() {
  /* Double the array so the marquee loops seamlessly */
  const marqueeItems = [...skills.technical, ...skills.technical];

  /*
   * ── Proficiency bar animation ───────────────────────────
   * We attach a ref to the proficiency panel and create a
   * separate IntersectionObserver just for it. When the panel
   * enters the viewport, we add the .animate class to each
   * .prof-bar, which triggers the CSS width transition from
   * 0 → var(--w). This is more reliable than nesting selectors.
   */
  const profPanelRef = useRef(null);

  useEffect(() => {
    const panel = profPanelRef.current;
    if (!panel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate every bar inside the panel
          panel.querySelectorAll('.prof-bar').forEach((bar) => {
            bar.classList.add('animate');
          });
          observer.unobserve(panel); // fire once
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(panel);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section skills-section">
      {/* Background accent */}
      <div className="skills-bg-accent" aria-hidden="true" />

      <div className="container">

        {/* ── Section header ── */}
        <div className="section-header reveal">
          <span className="section-label">Skills &amp; Services</span>
          <h2 className="section-title">
            What I bring to the <span className="gradient-text">table</span>
          </h2>
          <p className="section-desc">
            A blend of technical depth, creative thinking, and collaborative leadership.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════
            MARQUEE — Continuous horizontally scrolling ticker
            CSS animation 'marquee' defined in index.css.
            We duplicate the list so the loop is seamless.
            Hovering pauses it (see CSS: animation-play-state).
        ══════════════════════════════════════════════════ */}
        <div className="marquee-outer reveal" aria-label="Technical skills">
          {/* Fade masks on left/right edges */}
          <div className="marquee-fade-left"  aria-hidden="true" />
          <div className="marquee-fade-right" aria-hidden="true" />
          <div className="marquee-track">
            {marqueeItems.map((skill, i) => (
              <span className={`marquee-pill ${pillColors[i % 3]}`} key={i}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
            SERVICES BENTO GRID
            First tile spans 2 cols for visual hierarchy.
        ══════════════════════════════════════════════════ */}
        <h3 className="subsection-title reveal">Specialized Services</h3>
        <div className="services-bento stagger-parent">
          {skills.services.map((svc, i) => {
            const Icon = IconMap[svc.icon] || Globe;
            const colorClass = ['blue', 'purple', 'green', 'purple', 'blue', 'green'][i];
            return (
              <div
                className={`service-tile glass-card reveal ${i === 0 ? 'tile-wide' : ''}`}
                key={i}
              >
                {/* Gradient accent circle in top-right corner */}
                <div className={`service-accent accent-${colorClass}`} aria-hidden="true" />
                <div className={`service-icon icon-${colorClass}`}>
                  <Icon size={22} />
                </div>
                <h4 className="service-name">{svc.name}</h4>
                <p className="service-desc">{svc.description}</p>
              </div>
            );
          })}
        </div>

        {/* ══════════════════════════════════════════════════
            PROFICIENCY BARS + SOFT SKILLS (side by side)
        ══════════════════════════════════════════════════ */}
        <div className="skills-bottom">

          {/*
           * Proficiency bars panel.
           * ref={profPanelRef} — attached so the useEffect above
           * can observe this specific DOM node and trigger bar
           * animations only when this panel enters the viewport.
           */}
          <div className="proficiency-panel glass-card reveal" ref={profPanelRef}>
            <h3 className="panel-title">Proficiency</h3>
            <div className="prof-bars">
              {skills.proficiency.map((item, i) => (
                <div className="prof-item" key={i}>
                  <div className="prof-label-row">
                    <span className="prof-label">{item.tool}</span>
                    <span className="prof-pct">{item.level}%</span>
                  </div>
                  {/*
                    The bar track. --w sets the target width.
                    --delay staggers bars so they animate one after another.
                    The .animate class (added by the observer above)
                    transitions width from 0 to var(--w).
                  */}
                  <div className="prof-track">
                    <div
                      className="prof-bar"
                      style={{
                        '--w': `${item.level}%`,
                        '--delay': `${i * 0.12}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft skills + software tools */}
          <div className="soft-panel reveal">
            <h3 className="panel-title">Soft Skills</h3>
            <div className="soft-chips">
              {skills.soft.map((s, i) => (
                <span className={`soft-chip ${pillColors[i % 3]}`} key={i}>{s}</span>
              ))}
            </div>

            <h3 className="panel-title" style={{ marginTop: '1.5rem' }}>Software Tools</h3>
            <div className="tools-groups">
              {Object.entries(skills.softwareTools).map(([group, items]) => (
                <div className="tool-group" key={group}>
                  <p className="tool-group-label">{group}</p>
                  <div className="tool-chips">
                    {items.map((t, j) => (
                      <span className="tool-chip" key={j}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
