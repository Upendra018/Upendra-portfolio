import { useState } from "react";
import { NAV_ITEMS } from "../data/content.js";

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <style>{`
        /* =========================
           NAVBAR
        ========================= */

        nav {
          width: 100%;
          position: relative;
          z-index: 1000;
          background: rgba(7, 12, 22, 0.96);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .wrap.navbar {
          width: 100%;
          max-width: 1200px;
          height: 72px;
          margin: 0 auto;
          padding: 0 28px;
          box-sizing: border-box;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        /* =========================
           BRAND
        ========================= */

        .brand {
          flex-shrink: 0;
        }

        .brand-name {
          color: #ffffff;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 0.3px;
          white-space: nowrap;
        }

        /* =========================
           NAV LINKS
        ========================= */

        .navlinks {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          margin-left: auto;
        }

        .navlinks a {
          position: relative;
          color: #aeb6c7;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.25s ease;
          white-space: nowrap;
        }

        .navlinks a:hover {
          color: #ffffff;
        }

        .navlinks a.active {
          color: #ffffff;
        }

        .navlinks a.active::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -8px;
          height: 2px;
          border-radius: 10px;
          background: linear-gradient(
            90deg,
            #f0b44c,
            #6c9ff5
          );
        }

        /* =========================
           GET IN TOUCH
        ========================= */

        .nav-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          min-width: 105px;
          height: 40px;
          padding: 0 18px;

          border: 1px solid rgba(240, 180, 76, 0.45);
          border-radius: 8px;

          color: #ffffff;
          background: linear-gradient(
            135deg,
            rgba(240, 180, 76, 0.15),
            rgba(108, 159, 245, 0.12)
          );

          text-decoration: none;
          font-size: 13px;
          font-weight: 600;

          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            background 0.25s ease;
        }

        .nav-cta:hover {
          transform: translateY(-2px);
          border-color: #f0b44c;
          background: linear-gradient(
            135deg,
            rgba(240, 180, 76, 0.25),
            rgba(108, 159, 245, 0.2)
          );
        }

        .nav-cta-mobile {
          display: none;
        }

        /* =========================
           MOBILE MENU BUTTON
        ========================= */

        .nav-toggle {
          display: none;

          width: 42px;
          height: 42px;
          padding: 10px;

          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;

          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;

          cursor: pointer;
        }

        .nav-toggle span {
          display: block;
          width: 20px;
          height: 2px;
          border-radius: 5px;
          background: #ffffff;

          transition:
            transform 0.25s ease,
            opacity 0.25s ease;
        }

        .nav-toggle.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .nav-toggle.open span:nth-child(2) {
          opacity: 0;
        }

        .nav-toggle.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 900px) {
          .wrap.navbar {
            padding: 0 20px;
          }

          .navlinks {
            gap: 20px;
          }

          .navlinks a {
            font-size: 13px;
          }

          .nav-cta-desktop {
            min-width: 90px;
            padding: 0 14px;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 768px) {
          nav {
            width: 100%;
          }

          .wrap.navbar {
            width: 100%;
            max-width: 100%;
            height: 64px;
            padding: 0 16px;
          }

          .brand-name {
            font-size: 16px;
          }

          .nav-toggle {
            display: flex;
            flex-shrink: 0;
          }

          .navlinks {
            display: none;

            position: absolute;
            top: 64px;
            left: 0;
            right: 0;

            width: 100%;
            box-sizing: border-box;

            padding: 18px 16px 22px;

            flex-direction: column;
            align-items: stretch;
            gap: 4px;

            background: rgba(7, 12, 22, 0.98);
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
          }

          .navlinks.open {
            display: flex;
          }

          .navlinks a {
            width: 100%;
            box-sizing: border-box;
            padding: 13px 12px;

            border-radius: 7px;

            font-size: 14px;
          }

          .navlinks a:hover {
            background: rgba(255, 255, 255, 0.05);
          }

          .navlinks a.active {
            background: rgba(255, 255, 255, 0.04);
          }

          .navlinks a.active::after {
            display: none;
          }

          .nav-cta-desktop {
            display: none;
          }

          .nav-cta-mobile {
            display: flex;
            width: 100%;
            margin-top: 10px;
          }
        }

        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width: 480px) {
          .wrap.navbar {
            height: 60px;
            padding: 0 14px;
          }

          .brand-name {
            font-size: 15px;
          }

          .nav-toggle {
            width: 40px;
            height: 40px;
          }

          .navlinks {
            top: 60px;
          }
        }
      `}</style>

      <nav>
        <div className="wrap navbar">

          {/* Brand */}
          <div className="brand">
            <span className="brand-name">
              Upendra Bondala
            </span>
          </div>

          {/* Mobile Menu Button */}
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

          {/* Navigation */}
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

            {/* Mobile Get In Touch */}
            <a
              href="#contact"
              className="nav-cta nav-cta-mobile"
              onClick={closeMenu}
            >
              Get in touch
            </a>

          </div>

          {/* Desktop Get In Touch */}
          <a
            href="#contact"
            className="nav-cta nav-cta-desktop"
          >
            Get in touch
          </a>

        </div>
      </nav>
    </>
  );
}
