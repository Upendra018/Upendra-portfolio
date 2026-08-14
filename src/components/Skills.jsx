import useReveal from "../hooks/useReveal.js";
import { SKILL_GROUPS } from "../data/content.js";

export default function Skills() {
  const revealRef = useReveal();

  return (
    <section id="skills">
      <div className="wrap reveal" ref={revealRef}>
        <div className="sec-head">
          <span className="sec-dot violet" />
          <h2>Technical Skills</h2>
          <div className="sec-rule" />
        </div>
        <div className="skill-grid">
          {SKILL_GROUPS.map((g, i) => (
            <div className="skill-group" key={g.group}>
              <div className="skill-group-head">
                <span className={`skill-dot ${i % 2 === 0 ? "cyan" : "violet"}`} />
                <h3>{g.group}</h3>
              </div>
              <div className="tag-row">
                {g.items.map((item) => (
                  <span className="tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
