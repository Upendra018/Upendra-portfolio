import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../data/content.js";

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        open &&
        !event.target.closest(".navbar") &&
        !event.target.closest(".navlinks")
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      <style>{`
        nav {
          width: 100%;
          position: relative;
          z-index: 1000;
          background: rgba(7, 12, 22, 0.94);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .wrap.navbar {
          width: 100%;
          max-width: 1200px;
          height: 64px;
          margin: 0 auto;
          padding: 0 24px;
          box-sizing: border-box;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .brand {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .brand-name {
          color: #ffffff;
          font-size: 16px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.1px;
          white-space: nowrap;
        }

        .navlinks {
          display: flex;
          align-items: center;
          gap: 26px;
          margin-left: auto;
          margin-right: 20px;
        }

        .navlinks a {
          position: relative;
          color: #aeb6c7;
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          line-height: 1;
          white-space: nowrap;
          transition: color 0.2s ease;
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
          border-radius: 20px;
          background: linear-gradient(
            90deg,
            #f0b44c,
            #6c9ff5
          );
        }

        .nav-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          height: 34px;
          min-width: 90px;
          padding: 0 14px;
          box-sizing: border-box;

          border: 1px solid rgba(240, 180, 76, 0.35);
          border-radius: 6px;

          color: #ffffff;
          background: rgba(240, 180, 76, 0.07);

          text-decoration: none;

          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;

          transition:
            background 0.2s ease,
            border-color 0.2s ease,
            transform 0.2s ease;
        }

        .nav-cta:hover {
          transform: translateY(-1px);
          border-color: #f0b44c;
          background: rgba(240, 180, 76, 0.14);
        }

        .nav-cta-mobile {
          display: none;
        }

        .nav-toggle {
          display: none;

          width: 34px;
          height: 34px;
          padding: 0;

          flex-shrink: 0;

          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 4px;

          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;

          background: rgba(255, 255, 255, 0.025);

          cursor: pointer;
          box-sizing: border-box;
        }

        .nav-toggle span {
          display: block;

          width: 16px;
          height: 2px;

          border-radius: 10px;
          background: #ffffff;

          transition:
            transform 0.22s ease,
            opacity 0.18s ease;
        }

        .nav-toggle.open span:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
        }

        .nav-toggle.open span:nth-child(2) {
          opacity: 0;
        }

        .nav-toggle.open span:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
        }

        @media (max-width: 900px) {
          .wrap.navbar {
            height: 60px;
            padding-left: 18px;
            padding-right: 18px;
          }

          .brand-name {
            font-size: 15px;
          }

          .navlinks {
            gap: 18px;
            margin-right: 14px;
          }

          .navlinks a {
            font-size: 12px;
          }

          .nav-cta {
            min-width: 82px;
            height: 32px;
            padding: 0 11px;
            font-size: 11px;
          }
        }

        @media (max-width: 768px) {
          .wrap.navbar {
            width: 100%;
            max-width: none;
            height: 54px;
            padding: 0 12px;
            gap: 10px;
          }

          .brand-name {
            font-size: 13px;
          }

          .nav-toggle {
            display: flex;
          }

          .navlinks {
            position: absolute;

            top: 54px;
            left: 0;
            right: 0;

            width: 100%;

            margin: 0;

            padding: 8px 12px 12px;

            box-sizing: border-box;

            display: flex;
            flex-direction: column;
            align-items: stretch;

            gap: 2px;

            background: rgba(7, 12, 22, 0.98);

            border-bottom: 1px solid rgba(255, 255, 255, 0.06);

            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);

            opacity: 0;
            visibility: hidden;
            pointer-events: none;

            transform: translateY(-5px);

            transition:
              opacity 0.18s ease,
              transform 0.18s ease,
              visibility 0.18s ease;
          }

          .navlinks.open {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            transform: translateY(0);
          }

          .navlinks a {
            width: 100%;
            padding: 10px 11px;
            box-sizing: border-box;
            border-radius: 5px;
            font-size: 13px;
            line-height: 1.2;
          }

          .navlinks a:hover {
            background: rgba(255, 255, 255, 0.04);
          }

          .navlinks a.active {
            background: rgba(255, 255, 255, 0.035);
          }

          .navlinks a.active::after {
            display: none;
          }

          .nav-cta-mobile {
            display: flex;
            width: 100%;
            height: 34px;
            margin-top: 5px;
            font-size: 12px;
          }

          .nav-cta-desktop {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .wrap.navbar {
            height: 50px;
            padding-left: 10px;
            padding-right: 10px;
          }

          .brand-name {
            font-size: 12px;
          }

          .nav-toggle {
            width: 30px;
            height: 30px;
          }

          .nav-toggle span {
            width: 14px;
            height: 1.5px;
          }

          .navlinks {
            top: 50px;
            padding: 7px 10px 10px;
          }

          .navlinks a {
            padding: 9px 10px;
            font-size: 12px;
          }

          .nav-cta-mobile {
            height: 32px;
            font-size: 11px;
          }
        }

        @media (max-width: 360px) {
          .wrap.navbar {
            height: 46px;
            padding-left: 8px;
            padding-right: 8px;
            gap: 6px;
          }

          .brand-name {
            font-size: 11px;
          }

          .nav-toggle {
            width: 28px;
            height: 28px;
          }

          .nav-toggle span {
            width: 13px;
          }

          .navlinks {
            top: 46px;
            padding: 6px 8px 8px;
          }

          .navlinks a {
            padding: 8px;
            font-size: 11px;
          }

          .nav-cta-mobile {
            height: 30px;
            font-size: 10px;
          }
        }

        @media (max-width: 300px) {
          .wrap.navbar {
            height: 42px;
            padding-left: 7px;
            padding-right: 7px;
          }

          .brand-name {
            font-size: 10px;
          }

          .nav-toggle {
            width: 26px;
            height: 26px;
          }

          .nav-toggle span {
            width: 12px;
            height: 1px;
          }

          .navlinks {
            top: 42px;
          }
        }
      `}</style>

      <nav>
        <div className="wrap navbar">

          <div className="brand">
            <span className="brand-name">
              Upendra Bondala
            </span>
          </div>

          <button
            type="button"
            className={`nav-toggle ${open ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label={open ? "Close navigation" : "Open navigation"}
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

            <a
              href="#contact"
              className="nav-cta nav-cta-mobile"
              onClick={closeMenu}
            >
              Get in touch
            </a>

          </div>

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
