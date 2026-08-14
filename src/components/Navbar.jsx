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
    const handleOutsideClick = (event) => {
      if (
        open &&
        !event.target.closest(".navbar")
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
           DESKTOP
        ===================================================== */

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
        display: block !important;
        color: #ffffff !important;
        font-size: 16px;
        font-weight: 700;
        line-height: 1;
        letter-spacing: 0.1px;
        white-space: nowrap;
        visibility: visible !important;
        opacity: 1 !important;
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

        .mobile-menu-header {
          display: none;
        }


        /* =====================================================
           TABLET
        ===================================================== */

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


        /* =====================================================
           MOBILE
        ===================================================== */

       @media (max-width: 768px)  {

          /* -----------------------------------------------
             SMALL HEADER
          ------------------------------------------------ */

          .wrap.navbar {
            width: 100%;

            max-width: none;

            height: 54px;

            padding: 0 12px;

            box-sizing: border-box;
          }

          .brand {
            flex: 1;
          }

          .brand-name {
            font-size: 13px;
            font-weight: 600;
          }


          /* -----------------------------------------------
             HAMBURGER BUTTON
          ------------------------------------------------ */

          .nav-toggle {
            display: flex;

            width: 32px;
            height: 32px;

            margin-left: auto;

            z-index: 1100;

            background: #0b101c;

            border: 1px solid rgba(255, 255, 255, 0.12);

            border-radius: 6px;
          }

          .nav-toggle span {
            width: 15px;
            height: 1.5px;
          }


          /* =================================================
             IMPORTANT:
             TOP-RIGHT MOBILE DROPDOWN
          ================================================= */

          .navlinks {

            position: absolute;

            top: 62px;

            right: 12px;

            left: auto;

            width: 230px;

            margin: 0;

            padding: 8px;

            box-sizing: border-box;

            display: flex;

            flex-direction: column;

            align-items: stretch;

            gap: 2px;

            background: #070c16;

            border: 1px solid rgba(255, 255, 255, 0.10);

            border-radius: 9px;

            box-shadow:
              0 14px 35px rgba(0, 0, 0, 0.45);

            z-index: 1090;

            opacity: 0;

            visibility: hidden;

            pointer-events: none;

            transform: translateY(-8px);

            transition:
              opacity 0.18s ease,
              transform 0.18s ease,
              visibility 0.18s ease;
          }


          /* OPEN */

          .navlinks.open {

            opacity: 1;

            visibility: visible;

            pointer-events: auto;

            transform: translateY(0);
          }


          /* -----------------------------------------------
             NAME INSIDE OPEN MENU
          ------------------------------------------------ */

          .mobile-menu-header {

            display: flex;

            align-items: center;

            min-height: 42px;

            padding: 0 10px;

            margin-bottom: 4px;

            box-sizing: border-box;

            color: #ffffff;

            font-size: 13px;

            font-weight: 700;

            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }


          /* -----------------------------------------------
             MENU LINKS
          ------------------------------------------------ */

          .navlinks a {

            width: 100%;

            padding: 10px;

            box-sizing: border-box;

            border-radius: 5px;

            color: #aeb6c7;

            font-size: 13px;

            line-height: 1.2;
          }

          .navlinks a:hover {

            color: #ffffff;

            background: rgba(255, 255, 255, 0.05);
          }

          .navlinks a.active {

            color: #ffffff;

            background: rgba(255, 255, 255, 0.06);
          }

          .navlinks a.active::after {
            display: none;
          }


          /* -----------------------------------------------
             GET IN TOUCH
          ------------------------------------------------ */

          .nav-cta-mobile {

            display: flex;

            width: 100%;

            height: 35px;

            margin-top: 5px;

            align-items: center;
            justify-content: center;

            font-size: 12px !important;

            color: #f0b44c !important;

            border: 1px solid rgba(240, 180, 76, 0.35);

            background: rgba(240, 180, 76, 0.04);
          }

          .nav-cta-desktop {
            display: none;
          }
        }


        /* =====================================================
           SMALL PHONE
        ===================================================== */

        @media (max-width: 480px) {

          .wrap.navbar {
            height: 50px;

            padding-left: 10px;
            padding-right: 10px;
          }
          
           .brand {
            display: flex !important;
            align-items: center;
            justify-content: flex-start;
          
            flex: 1;
            min-width: 0;
          
            visibility: visible !important;
            opacity: 1 !important;
          }
          
          .brand-name {
            display: block !important;
          
            color: #ffffff !important;
          
            font-size: 14px !important;
            font-weight: 700 !important;
          
            line-height: 1;
          
            white-space: nowrap;
          
            visibility: visible !important;
            opacity: 1 !important;
          }

          .nav-toggle {
            width: 30px;
            height: 30px;
          }

          .nav-toggle span {
            width: 14px;
          }

          .navlinks {
            top: 57px;

            right: 10px;

            width: 215px;
          }

          .mobile-menu-header {
            min-height: 40px;

            font-size: 12px;
          }

          .navlinks a {
            padding: 9px;

            font-size: 12px;
          }
        }


        /* =====================================================
           VERY SMALL PHONE
        ===================================================== */

       @media (max-width: 480px) {

          .wrap.navbar {
            height: 46px;

            padding-left: 8px;
            padding-right: 8px;
          }

          .brand-name {
            font-size: 12px !important;
            }

          .nav-toggle {
            width: 28px;
            height: 28px;
          }

          .navlinks {
            top: 52px;

            right: 8px;

            width: 200px;
          }

          .mobile-menu-header {
            min-height: 38px;

            font-size: 11px;
          }

          .navlinks a {
            padding: 8px;

            font-size: 11px;
          }
        }


        /* =====================================================
           EXTRA SMALL PHONE
        ===================================================== */

        @media (max-width: 360px) {

          .wrap.navbar {
            height: 42px;

            padding-left: 7px;
            padding-right: 7px;
          }

          .brand-name {
            font-size: 11px !important;
            }

          .nav-toggle {
            width: 26px;
            height: 26px;
          }

          .navlinks {
            top: 48px;

            right: 7px;

            width: 185px;
          }
        }

      `}</style>


      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav>

        <div className="wrap navbar">

          {/* BRAND */}
          <div className="brand">

            <span className="brand-name">
              Upendra Bondala
            </span>

          </div>


          {/* MENU BUTTON */}
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


          {/* NAV MENU */}
          <div
            className={`navlinks ${
              open ? "open" : ""
            }`}
          >

            {/* NAME INSIDE OPEN BUTTON MENU */}
            <div className="mobile-menu-header">
              Upendra Bondala
            </div>


            {/* NAV ITEMS */}
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

