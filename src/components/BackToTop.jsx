import { useEffect, useState } from "react";

export default function BackToTop() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      className={`back-to-top ${scrolled ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!scrolled}
      tabIndex={scrolled ? 0 : -1}
    >
      <span className="back-to-top-arrow">↑</span>
      <span className="back-to-top-label">top</span>
    </button>
  );
}
