/* ============================================================
   App.jsx  —  Root component
   Responsibilities:
   1. Manages dark/light mode state and persists to localStorage
   2. Applies the .dark class to <html> so CSS variables switch
   3. Mounts all section components in scroll order
   4. Calls useScrollReveal() so the IntersectionObserver
      watches every .reveal element on the page
   ============================================================ */
import { useState, useEffect } from 'react';
import useScrollReveal from './hooks/useScrollReveal';
import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import About      from './components/About';
import Skills     from './components/Skills';
import Experience from './components/Experience';
import Projects   from './components/Projects';
import Contact    from './components/Contact';
import Footer     from './components/Footer';
import './index.css';

export default function App() {

  // ── Dark mode state ──────────────────────────────────────
  // We initialise from localStorage so the user's preference
  // persists across page reloads. Default = dark.
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    // If nothing stored, use the OS preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // ── Apply / remove .dark on <html> whenever state changes ─
  // The CSS custom properties (--bg, --text, etc.) are scoped
  // to .dark in index.css, so toggling the class instantly
  // repaints every themed element.
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // ── Toggle handler passed down to Navbar ─────────────────
  const toggleDark = () => setDarkMode((prev) => !prev);

  // ── Wire up scroll-reveal IntersectionObserver ───────────
  // This hook queries all .reveal / .reveal-left / .reveal-right
  // elements and adds the .visible class when they scroll into view.
  // We call it here (App level) so it runs after the full DOM
  // has mounted with all sections present.
  useScrollReveal();

  return (
    <>
      {/* Sticky navbar receives darkMode state + toggle */}
      <Navbar darkMode={darkMode} toggleDark={toggleDark} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
