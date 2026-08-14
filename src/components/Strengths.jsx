import useReveal from "../hooks/useReveal.js";
import { STRENGTHS, LANGUAGES } from "../data/content.js";

export default function Strengths() {
  const revealRef = useReveal();

  return (
    <section id="strengths">
      <div className="wrap reveal" ref={revealRef}>
        <div className="sec-head">
          <span className="sec-dot violet" />
          <h2>Strengths &amp; Languages</h2>
          <div className="sec-rule" />
        </div>
        <div className="two-col">
          <ul className="strength-list">
            {STRENGTHS.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <div className="lang-row">
            {LANGUAGES.map((l) => (
              <div className={`lang-chip ${l.tint}`} key={l.name}>{l.name}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
