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

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        open &&
        !event.target.closest(".navbar") &&
        !event.target.closest(".navlinks")
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [open]);

  return (
    <>
      <style>{`

        /* =====================================================
           NAVBAR
        ===================================================== */

        nav {
          width: 100%;
          position: relative;
          z-index: 1000;

          background: rgba(7, 12, 22, 0.94);

          border-bottom: 1px solid rgba(255, 255, 255, 0.07);

          backdrop-filter: blur(10px);
        }

        .wrap.navbar {
          width: 100%;
          max-width: 1200px;

          height: 68px;

          margin: 0 auto;
          padding: 0 24px;

          box-sizing: border-box;

          display: flex;
          align-items: center;
          justify-content: space-between;
        }


        /* =====================================================
           BRAND
        ===================================================== */

        .brand {
          flex-shrink: 0;
        }

        .brand-name {
          color: #ffffff;

          font-size: 17px;
          font-weight: 700;

          letter-spacing: 0.2px;

          white-space: nowrap;
        }


        /* =====================================================
           NAV LINKS
        ===================================================== */

        .navlinks {
          display: flex;
          align-items: center;

          gap: 28px;

          margin-left: auto;
          margin-right: 22px;
        }

        .navlinks a {
          position: relative;

          color: #aeb6c7;

          text-decoration: none;

          font-size: 14px;
          font-weight: 500;

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

          border-radius: 10px;

          background: linear-gradient(
            90deg,
            #f0b44c,
            #6c9ff5
          );
        }


        /* =====================================================
           GET IN TOUCH
        ===================================================== */

        .nav-cta {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          height: 38px;

          padding: 0 16px;

          border: 1px solid rgba(240, 180, 76, 0.4);

          border-radius: 7px;

          color: #ffffff;

          background: rgba(240, 180, 76, 0.08);

          text-decoration: none;

          font-size: 13px;
          font-weight: 600;

          transition:
            transform 0.2s ease,
            border-color 0.2s ease,
            background 0.2s ease;
        }

        .nav-cta:hover {
          transform: translateY(-1px);

          border-color: #f0b44c;

          background: rgba(240, 180, 76, 0.15);
        }

        .nav-cta-mobile {
          display: none;
        }


        /* =====================================================
           MOBILE MENU BUTTON
        ===================================================== */

        .nav-toggle {
          display: none;

          width: 40px;
          height: 40px;

          padding: 0;

          border: 1px solid rgba(255, 255, 255, 0.12);

          border-radius: 7px;

          background: rgba(255, 255, 255, 0.03);

          cursor: pointer;

          align-items: center;
          justify-content: center;

          flex-direction: column;

          gap: 5px;

          flex-shrink: 0;

          transition:
            background 0.2s ease,
            border-color 0.2s ease;
        }

        .nav-toggle:hover {
          background: rgba(255, 255, 255, 0.07);

          border-color: rgba(255, 255, 255, 0.2);
        }

        .nav-toggle span {
          display: block;

          width: 19px;
          height: 2px;

          border-radius: 5px;

          background: #ffffff;

          transition:
            transform 0.25s ease,
            opacity 0.2s ease;
        }


        /* =====================================================
           HAMBURGER CLOSED
        ===================================================== */

        .nav-toggle span:nth-child(1),
        .nav-toggle span:nth-child(2),
        .nav-toggle span:nth-child(3) {
          transform: none;
          opacity: 1;
        }


        /* =====================================================
           HAMBURGER OPEN → X
        ===================================================== */

        .nav-toggle.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .nav-toggle.open span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }

        .nav-toggle.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }


        /* =====================================================
           TABLET
        ===================================================== */

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

          .nav-cta {
            padding: 0 14px;
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 768px) {

          .wrap.navbar {
            width: 100%;

            max-width: 100%;

            height: 62px;

            padding: 0 16px;
          }


          /* BRAND */

          .brand-name {
            font-size: 16px;
          }


          /* HAMBURGER */

          .nav-toggle {
            display: flex;

            z-index: 1002;
          }


          /* MOBILE NAV MENU */

          .navlinks {

            position: absolute;

            top: 62px;

            left: 0;
            right: 0;

            width: 100%;

            margin: 0;

            padding: 10px 16px 16px;

            box-sizing: border-box;

            display: flex;

            flex-direction: column;

            align-items: stretch;

            gap: 3px;

            background: rgba(7, 12, 22, 0.98);

            border-bottom: 1px solid rgba(255, 255, 255, 0.07);


            /* CLOSED */

            opacity: 0;

            visibility: hidden;

            transform: translateY(-8px);

            pointer-events: none;

            transition:
              opacity 0.2s ease,
              transform 0.2s ease,
              visibility 0.2s ease;
          }


          /* OPEN */

          .navlinks.open {

            opacity: 1;

            visibility: visible;

            transform: translateY(0);

            pointer-events: auto;
          }


          /* MOBILE LINKS */

          .navlinks a {

            width: 100%;

            box-sizing: border-box;

            padding: 12px;

            border-radius: 6px;

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


          /* MOBILE GET IN TOUCH */

          .nav-cta-mobile {

            display: flex;

            width: 100%;

            height: 40px;

            margin-top: 7px;
          }


          /* HIDE DESKTOP BUTTON */

          .nav-cta-desktop {
            display: none;
          }
        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {

          .wrap.navbar {

            height: 58px;

            padding: 0 14px;
          }

          .brand-name {
            font-size: 15px;
          }

          .nav-toggle {

            width: 38px;
            height: 38px;
          }

          .navlinks {

            top: 58px;
          }
        }

      `}</style>


      {/* =====================================================
          NAVBAR HTML
      ===================================================== */}

      <nav>

        <div className="wrap navbar">


          {/* BRAND */}

          <div className="brand">

            <span className="brand-name">
              Upendra Bondala
            </span>

          </div>


          {/* MOBILE HAMBURGER */}

          <button
            type="button"
            className={`nav-toggle ${open ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label={
              open
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={open}
          >

            <span></span>
            <span></span>
            <span></span>

          </button>


          {/* NAVIGATION */}

          <div
            className={`navlinks ${
              open ? "open" : ""
            }`}
          >

            {NAV_ITEMS.map((n) => (

              <a
                key={n.id}
                href={`#${n.id}`}
                className={
                  active === n.id
                    ? "active"
                    : ""
                }
                onClick={closeMenu}
              >
                {n.label}
              </a>

            ))}


            {/* MOBILE GET IN TOUCH */}

            <a
              href="#contact"
              className="nav-cta nav-cta-mobile"
              onClick={closeMenu}
            >
              Get in touch
            </a>

          </div>


          {/* DESKTOP GET IN TOUCH */}

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
