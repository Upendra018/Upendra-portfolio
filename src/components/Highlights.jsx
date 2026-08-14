import useReveal from "../hooks/useReveal.js";
import { HIGHLIGHTS } from "../data/content.js";

export default function Highlights() {
  const revealRef = useReveal();

  return (
    <section id="highlights">
      <div className="wrap reveal" ref={revealRef}>
        <div className="sec-head">
          <span className="sec-dot cyan" />
          <h2>Engineering Approach</h2>
          <div className="sec-rule" />
        </div>
        <div className="fit-list">
          {HIGHLIGHTS.map((h, i) => (
            <div className="fit-row" key={h.title}>
              <div className="fit-num">// {String(i + 1).padStart(2, "0")}</div>
              <div>
                <h3>{h.title}</h3>
                <p>{h.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
