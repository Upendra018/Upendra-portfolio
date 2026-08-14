import useReveal from "../hooks/useReveal.js";
import { RESEARCH } from "../data/content.js";

export default function Research() {
  const revealRef = useReveal();

  return (
    <section id="research">
      <div className="wrap reveal" ref={revealRef}>
        <div className="sec-head">
          <span className="sec-dot cyan" />
          <h2>Research &amp; Technical Exploration</h2>
          <div className="sec-rule" />
        </div>
        <p style={{ color: "var(--ink-dim)", maxWidth: 620, marginBottom: 30, fontSize: 14 }}>
          Alongside project work, I spend time digging into the "why" behind tools and patterns
          rather than just using them — the notes below come out of that habit.
        </p>
        <div className="research-list">
          {RESEARCH.map((r) => (
            <div className="research-item" key={r.title}>
              <div className="research-tag">{r.tag}</div>
              <div>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
