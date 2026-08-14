import { NAV_ITEMS } from "../data/content.js";

export default function Navbar({ active }) {
  return (
    <nav>
      <div className="wrap navbar">
        <div className="brand">
          <span className="brand-name">Upendra Bondala</span>
        </div>
        <div className="navlinks">
          {NAV_ITEMS.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={active === n.id ? "active" : ""}>
              {n.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="nav-cta">Get in touch</a>
      </div>
    </nav>
  );
}
