import useReveal from "../hooks/useReveal.js";
import TiltCard from "./TiltCard.jsx";
import { PROJECTS } from "../data/content.js";

const slugify = (name) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function Projects() {
  const revealRef = useReveal();

  return (
    <section id="projects">
      <div className="wrap reveal" ref={revealRef}>
        <div className="sec-head">
          <span className="sec-dot violet" />
          <h2>Projects</h2>
          <div className="sec-rule" />
        </div>
        {PROJECTS.map((p, i) => (
          <TiltCard
            className={`glass project-card accent-${i % 2 === 0 ? "cyan" : "violet"}`}
            key={p.name}
          >
            <div className="panel-chrome">
              <span className="panel-dot" />
              <span className="panel-dot" />
              <span className="panel-dot" />
              <span className="panel-path">~/projects/{slugify(p.name)}</span>
            </div>
            <div className="project-top">
              <h3>{p.name}</h3>
            </div>
            <p className="project-desc">{p.desc}</p>
            <ul className="project-points">
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <div className="project-stack">
              {p.stack.map((s) => (
                <span className="stack-chip" key={s}>{s}</span>
              ))}
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
