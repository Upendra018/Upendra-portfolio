import useReveal from "../hooks/useReveal.js";
import { EDUCATION } from "../data/content.js";

export default function Education() {
  const revealRef = useReveal();

  return (
    <section id="education">
      <div className="wrap reveal" ref={revealRef}>
        <div className="sec-head">
          <span className="sec-dot cyan" />
          <h2>Education</h2>
          <div className="sec-rule" />
        </div>
        {EDUCATION.map((e) => (
          <div className="edu-item" key={e.degree}>
            <div className="edu-year">{e.year}</div>
            <div>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-school">{e.school}</div>
            </div>
            <div className="edu-gpa">{e.score}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
