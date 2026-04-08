// ============================================================
//  useScrollReveal.js  —  Custom hook
//  Wires up IntersectionObserver to add .visible to all
//  elements that carry a .reveal / .reveal-left / .reveal-right
//  class, once they scroll into the viewport.
// ============================================================
import { useEffect } from 'react';

/**
 * Call once at the App level (or per section).
 * It queries ALL .reveal* elements in the document and
 * observes each one. When 20% of the element enters the
 * viewport, the 'visible' class is toggled on, triggering
 * the CSS fade/slide transition defined in index.css.
 */
export default function useScrollReveal() {
  useEffect(() => {
    // Create an observer with 20% threshold — fires when
    // at least 1/5 of the element is visible on screen.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Once visible we unobserve to save resources.
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    // Query every element that should animate on scroll
    const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    targets.forEach((el) => observer.observe(el));

    // Cleanup: disconnect observer on unmount
    return () => observer.disconnect();
  }, []);
}
