import { useState } from "react";
import { NAV_ITEMS } from "../data/content.js";

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <nav>
      <style>{`
        .nav-toggle {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 26px;
          height: 20px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 1001;
        }
        .nav-toggle span {
          display: block;
          height: 2px;
          width: 100%;
          background: #111;
          border-radius: 2px;
          transition: transform 0.25s ease, opacity 0.25s ease;
        }
        .nav-toggle.open span:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }
        .nav-toggle.open span:nth-child(2) {
          opacity: 0;
        }
        .nav-toggle.open span:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
        }
        .nav-cta-mobile {
          display: none;
        }
        @media (max-width: 768px) {
          .navbar {
            position: relative;
          }
          .nav-toggle {
            display: flex;
          }
          .nav-cta-desktop {
            display: none;
          }
          .navlinks {
            position: fixed;
            top: 0;
            right: -100%;
            height: 100vh;
            width: 70%;
            max-width: 300px;
            background: #fff;
            flex-direction: column;
            align-items: flex-start;
            padding: 80px 24px 24px;
            gap: 20px;
            transition: right 0.3s ease;
            z-index: 1000;
            box-shadow: -2px 0 12px rgba(0, 0, 0, 0.1);
          }
          .navlinks.open {
            right: 0;
          }
          .nav-cta-mobile {
            display: inline-block;
            margin-top: 12px;
          }
        }
      `}</style>

      <div className="wrap navbar">
        <div className="brand">
          <span className="brand-name">Upendra Bondala</span>
        </div>

        <button
          className={`nav-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navlinks ${open ? "open" : ""}`}>
          {NAV_ITEMS.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={active === n.id ? "active" : ""}
              onClick={closeMenu}
            >
              {n.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta nav-cta-mobile" onClick={closeMenu}>
            Get in touch
          </a>
        </div>

        <a href="#contact" className="nav-cta nav-cta-desktop">
          Get in touch
        </a>
      </div>
    </nav>
  );
}
