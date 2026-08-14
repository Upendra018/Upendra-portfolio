import { useEffect, useState } from "react";
import { ROLES, CONTACT } from "../data/content.js";

export default function Hero() {
  const [roleText, setRoleText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduce) {
      setRoleText(ROLES.join(" · "));
      setShowCursor(false);
      return;
    }

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = ROLES[roleIndex];

      if (!deleting) {
        charIndex++;

        if (charIndex > word.length) {
          deleting = true;
          timer = setTimeout(tick, 1300);
          return;
        }
      } else {
        charIndex--;

        if (charIndex < 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % ROLES.length;
          charIndex = 0;
        }
      }

      setRoleText(word.slice(0, charIndex));

      timer = setTimeout(
        tick,
        deleting ? 32 : 68
      );
    };

    tick();

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`

        /* =====================================================
           GLOBAL HERO
        ===================================================== */

        .hero {
          position: relative;

          width: 100%;

          min-height: 100vh;
          min-height: 100svh;

          overflow: hidden;

          isolation: isolate;

          background: #06090d;

          color: #f1f5f8;
        }


        /* =====================================================
           DEVELOPER BACKGROUND
        ===================================================== */

        .developer-bg {
          position: absolute;

          inset: 0;

          z-index: -1;

          overflow: hidden;

          pointer-events: none;
        }


        /* TECH GRID */

        .developer-bg::before {
          content: "";

          position: absolute;

          top: 0;
          right: 0;

          width: 62%;
          height: 100%;

          opacity: 0.28;

          background-image:
            linear-gradient(
              rgba(95, 150, 195, 0.055) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(95, 150, 195, 0.055) 1px,
              transparent 1px
            );

          background-size: 55px 55px;

          mask-image:
            linear-gradient(
              to right,
              transparent 0%,
              black 30%,
              black 100%
            );
        }


        /* BLUE ATMOSPHERE */

        .developer-bg::after {
          content: "";

          position: absolute;

          width: 700px;
          height: 700px;

          right: -240px;
          top: 45%;

          transform:
            translateY(-50%);

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(43, 111, 174, 0.16),
              rgba(28, 64, 95, 0.06) 38%,
              transparent 72%
            );

          filter: blur(35px);

          animation:
            atmosphereFloat
            12s
            ease-in-out
            infinite;
        }


        @keyframes atmosphereFloat {

          0%,
          100% {
            transform:
              translateY(-50%)
              scale(1);
          }

          50% {
            transform:
              translateY(-52%)
              scale(1.05);
          }
        }


        /* LEFT DARK FADE */

        .developer-fade {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              90deg,
              #06090d 0%,
              #06090d 28%,
              rgba(6, 9, 13, 0.98) 43%,
              rgba(6, 9, 13, 0.72) 60%,
              rgba(6, 9, 13, 0.25) 80%,
              transparent 100%
            );
        }


        /* =====================================================
           DEVELOPER CORE
        ===================================================== */

        .dev-core {
          position: absolute;

          width: 300px;
          height: 300px;

          right: 18%;
          top: 21%;

          transform:
            rotate(45deg);

          border:
            1px solid
            rgba(109, 172, 220, 0.24);

          background:
            linear-gradient(
              135deg,
              rgba(72, 137, 190, 0.07),
              rgba(255, 255, 255, 0.01)
            );

          box-shadow:
            0 0 90px
            rgba(46, 117, 177, 0.07);

          animation:
            coreFloat
            8s
            ease-in-out
            infinite;
        }


        .dev-core::before {
          content: "";

          position: absolute;

          inset: 34px;

          border:
            1px solid
            rgba(112, 174, 219, 0.17);

          background:
            rgba(67, 125, 170, 0.03);
        }


        .dev-core::after {
          content: "";

          position: absolute;

          inset: 84px;

          border:
            1px solid
            rgba(131, 196, 238, 0.30);

          background:
            rgba(80, 147, 203, 0.07);

          box-shadow:
            0 0 35px
            rgba(73, 145, 205, 0.10);
        }


        @keyframes coreFloat {

          0%,
          100% {
            transform:
              rotate(45deg)
              translateY(0);
          }

          50% {
            transform:
              rotate(45deg)
              translateY(-13px);
          }
        }


        /* =====================================================
           CIRCUITS
        ===================================================== */

        .circuit {
          position: absolute;

          height: 1px;

          background:
            rgba(102, 168, 217, 0.20);
        }


        .circuit::after {
          content: "";

          position: absolute;

          width: 5px;
          height: 5px;

          right: 0;
          top: -2px;

          border-radius: 50%;

          background: #70acd5;

          box-shadow:
            0 0 12px
            rgba(101, 178, 234, 0.7);
        }


        .circuit-one {
          width: 170px;

          right: 3%;
          top: 21%;
        }


        .circuit-two {
          width: 230px;

          right: 25%;
          top: 68%;
        }


        .circuit-three {
          width: 140px;

          right: 8%;
          top: 75%;
        }


        .circuit-four {
          width: 100px;

          right: 38%;
          top: 17%;
        }


        /* =====================================================
           TECH LABELS
        ===================================================== */

        .dev-label {
          position: absolute;

          font-family:
            "JetBrains Mono",
            "Fira Code",
            monospace;

          font-size: 8px;

          letter-spacing:
            0.15em;

          color:
            rgba(150, 195, 225, 0.30);

          text-transform:
            uppercase;
        }


        .label-one {
          right: 6%;
          top: 14%;
        }


        .label-two {
          right: 30%;
          bottom: 15%;
        }


        .label-three {
          right: 4%;
          bottom: 7%;
        }


        /* =====================================================
           NODES
        ===================================================== */

        .node {
          position: absolute;

          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #70acd5;

          box-shadow:
            0 0 14px
            rgba(100, 180, 235, 0.7);

          animation:
            nodePulse
            3s
            ease-in-out
            infinite;
        }


        .node-one {
          right: 40%;
          top: 27%;
        }


        .node-two {
          right: 9%;
          top: 40%;

          animation-delay:
            0.8s;
        }


        .node-three {
          right: 27%;
          bottom: 24%;

          animation-delay:
            1.4s;
        }


        .node-four {
          right: 4%;
          bottom: 34%;

          animation-delay:
            2s;
        }


        @keyframes nodePulse {

          0%,
          100% {
            opacity: 0.3;

            transform:
              scale(0.7);
          }

          50% {
            opacity: 1;

            transform:
              scale(1.35);
          }
        }


        /* =====================================================
           MAIN FLEX LAYOUT
        ===================================================== */

        .hero-inner {
          position: relative;

          z-index: 5;

          width:
            min(94%, 1400px);

          min-height:
            100vh;

          min-height:
            100svh;

          margin:
            0 auto;

          display:
            flex;

          align-items:
            center;

          justify-content:
            space-between;

          gap:
            clamp(45px, 6vw, 110px);

          padding:
            70px 0;
        }


        /* =====================================================
           LEFT CONTENT
        ===================================================== */

        .hero-content {
          flex:
            1 1 0;

          width:
            auto;

          max-width:
            760px;

          min-width:
            0;
        }


        /* =====================================================
           BADGE
        ===================================================== */

        .badge-pill {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            9px;

          margin-bottom:
            25px;

          padding:
            7px 12px;

          border:
            1px solid
            rgba(255, 255, 255, 0.10);

          border-radius:
            3px;

          background:
            rgba(255, 255, 255, 0.025);

          color:
            rgba(224, 233, 241, 0.55);

          font-family:
            "JetBrains Mono",
            "Fira Code",
            monospace;

          font-size:
            8px;

          letter-spacing:
            0.08em;

          text-transform:
            uppercase;
        }


        .badge-pill span {
          color:
            #70acd5;
        }


        /* =====================================================
           NAME
        ===================================================== */

        .name {
          margin:
            0;

          font-size:
            clamp(52px, 6vw, 92px);

          line-height:
            0.88;

          letter-spacing:
            -0.075em;

          font-weight:
            750;

          color:
            #f2f5f7;
        }


        /* =====================================================
           ROLE
        ===================================================== */

        .role-line {
          min-height:
            42px;

          margin-top:
            26px;

          display:
            flex;

          align-items:
            center;

          font-family:
            "JetBrains Mono",
            "Fira Code",
            monospace;

          font-size:
            clamp(19px, 2.4vw, 30px);

          letter-spacing:
            -0.035em;

          color:
            #71acd5;
        }


        .role-prefix {
          margin-right:
            8px;

          color:
            rgba(255, 255, 255, 0.25);
        }


        .cursor {
          width:
            2px;

          height:
            25px;

          margin-left:
            6px;

          background:
            #71acd5;

          animation:
            cursorBlink
            0.8s
            steps(1)
            infinite;
        }


        @keyframes cursorBlink {

          0%,
          45% {
            opacity: 1;
          }

          46%,
          100% {
            opacity: 0;
          }
        }


        /* =====================================================
           SUMMARY
        ===================================================== */

        .summary {
          max-width:
            600px;

          margin:
            23px 0 0;

          font-size:
            14px;

          line-height:
            1.78;

          color:
            rgba(218, 228, 237, 0.52);
        }


        /* =====================================================
           BUTTONS
        ===================================================== */

        .hero-cta-row {
          display:
            flex;

          flex-wrap:
            wrap;

          gap:
            8px;

          margin-top:
            30px;
        }


        .btn-solid,
        .btn-outline {
          min-height:
            43px;

          padding:
            0 17px;

          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          text-decoration:
            none;

          font-size:
            10px;

          font-weight:
            600;

          border-radius:
            3px;

          transition:
            0.25s ease;
        }


        .btn-solid {
          color:
            #071019;

          background:
            #d8ecfb;

          border:
            1px solid
            #d8ecfb;
        }


        .btn-solid:hover {
          background:
            #ffffff;

          transform:
            translateY(-2px);

          box-shadow:
            0 8px 25px
            rgba(100, 170, 220, 0.15);
        }


        .btn-outline {
          color:
            rgba(226, 235, 243, 0.65);

          border:
            1px solid
            rgba(255, 255, 255, 0.12);

          background:
            rgba(255, 255, 255, 0.025);
        }


        .btn-outline:hover {
          color:
            #ffffff;

          border-color:
            rgba(111, 174, 222, 0.45);

          background:
            rgba(100, 160, 210, 0.06);

          transform:
            translateY(-2px);
        }


        /* =====================================================
           DESKTOP RIGHT STATS
        ===================================================== */

        .hero-stats {
          flex:
            0 1 300px;

          width:
            300px;

          min-width:
            235px;

          max-width:
            320px;

          display:
            flex;

          flex-direction:
            column;

          position:
            relative;

          margin-right:
            0;
        }


        .hero-stats::before {
          content:
            "";

          position:
            absolute;

          left:
            -24px;

          top:
            0;

          bottom:
            0;

          width:
            1px;

          background:
            linear-gradient(
              to bottom,
              transparent,
              rgba(110, 170, 215, 0.35) 15%,
              rgba(110, 170, 215, 0.35) 85%,
              transparent
            );
        }


        .stat-item {
          display:
            grid;

          grid-template-columns:
            34px 1fr;

          align-items:
            start;

          padding:
            19px 0;

          border-bottom:
            1px solid
            rgba(255, 255, 255, 0.08);
        }


        .stat-item:first-child {
          padding-top:
            0;
        }


        .stat-item:last-child {
          border-bottom:
            none;

          padding-bottom:
            0;
        }


        .stat-index {
          padding-top:
            5px;

          font-family:
            "JetBrains Mono",
            "Fira Code",
            monospace;

          font-size:
            8px;

          letter-spacing:
            0.12em;

          color:
            rgba(115, 175, 215, 0.45);
        }


        .stat-number {
          font-family:
            "JetBrains Mono",
            "Fira Code",
            monospace;

          font-size:
            clamp(32px, 3vw, 44px);

          line-height:
            1;

          font-weight:
            500;

          letter-spacing:
            -0.06em;

          color:
            #edf3f7;
        }


        .stat-label {
          margin-top:
            7px;

          font-size:
            8px;

          line-height:
            1.4;

          letter-spacing:
            0.14em;

          text-transform:
            uppercase;

          color:
            rgba(190, 205, 218, 0.42);
        }


        /* =====================================================
           LARGE DESKTOP
        ===================================================== */

        @media (min-width: 1401px) {

          .hero-inner {
            width:
              min(1400px, 92%);

            gap:
              clamp(80px, 8vw, 140px);
          }


          .hero-content {
            max-width:
              780px;
          }


          .hero-stats {
            flex-basis:
              320px;

            width:
              320px;
          }


          .stat-number {
            font-size:
              44px;
          }
        }


        /* =====================================================
           LAPTOP 1200 - 1400
        ===================================================== */

        @media (min-width: 1200px) and (max-width: 1400px) {

          .hero-inner {
            width:
              92%;

            gap:
              55px;
          }


          .hero-content {
            flex:
              1 1 0;

            max-width:
              680px;
          }


          .hero-stats {
            flex:
              0 1 270px;

            width:
              270px;

            min-width:
              250px;
          }


          .name {
            font-size:
              clamp(52px, 6vw, 86px);
          }
        }


        /* =====================================================
           SMALL LAPTOP 1024 - 1199
        ===================================================== */

        @media (min-width: 761px) and (max-width: 1199px) {

          .hero-inner {
            width:
              92%;

            gap:
              45px;

            padding:
              60px 0;
          }


          .hero-content {
            flex:
              1 1 0;

            max-width:
              610px;
          }


          .hero-stats {
            flex:
              0 1 245px;

            width:
              245px;

            min-width:
              220px;
          }


          .name {
            font-size:
              clamp(48px, 6vw, 70px);
          }


          .summary {
            max-width:
              560px;

            font-size:
              13px;
          }


          .stat-number {
            font-size:
              34px;
          }


          .stat-label {
            font-size:
              7px;
          }


          .dev-core {
            width:
              250px;

            height:
              250px;

            right:
              10%;

            opacity:
              0.40;
          }
        }


        /* =====================================================
           1024 - 1050 SMALL LAPTOP
        ===================================================== */

        @media (min-width: 761px) and (max-width: 1050px) {

          .hero-inner {
            width:
              94%;

            gap:
              35px;
          }


          .hero-content {
            max-width:
              560px;
          }


          .hero-stats {
            flex-basis:
              220px;

            width:
              220px;

            min-width:
              200px;
          }


          .name {
            font-size:
              clamp(45px, 5.8vw, 65px);
          }


          .role-line {
            font-size:
              20px;
          }


          .summary {
            font-size:
              12px;

            line-height:
              1.7;
          }


          .stat-item {
            padding:
              15px 0;
          }


          .stat-number {
            font-size:
              30px;
          }


          .stat-label {
            font-size:
              6.5px;
          }
        }


        /* =====================================================
           MOBILE
           HORIZONTAL STATS
        ===================================================== */

        @media (max-width: 760px) {

          .hero {
            min-height:
              auto;
          }


          .hero-inner {
            width:
              min(92%, 600px);

            min-height:
              auto;

            margin:
              0 auto;

            padding:
              80px 0 45px;

            display:
              flex;

            flex-direction:
              column;

            align-items:
              stretch;

            justify-content:
              flex-start;

            gap:
              50px;
          }


          /* CONTENT */

          .hero-content {
            width:
              100%;

            max-width:
              none;

            text-align:
              center;
          }


          .badge-pill {
            justify-content:
              center;

            flex-wrap:
              wrap;
          }


          .name {
            font-size:
              clamp(42px, 12vw, 66px);

            line-height:
              0.92;
          }


          .role-line {
            justify-content:
              center;

            font-size:
              clamp(18px, 6vw, 27px);
          }


          .summary {
            max-width:
              520px;

            margin:
              22px auto 0;

            font-size:
              12.5px;

            line-height:
              1.75;
          }


          .hero-cta-row {
            justify-content:
              center;

            width:
              100%;
          }


          /* =================================================
             MOBILE STATS - HORIZONTAL
          ================================================= */

          .hero-stats {
            position:
              relative;

            top:
              auto;

            right:
              auto;

            transform:
              none;

            width:
              100%;

            min-width:
              0;

            max-width:
              none;

            margin:
              0;

            padding:
              18px 0 0;

            display:
              grid;

            grid-template-columns:
              repeat(4, minmax(0, 1fr));

            gap:
              0;

            border-top:
              1px solid
              rgba(255, 255, 255, 0.10);
          }


          .hero-stats::before {
            display:
              none;
          }


          .stat-item {
            min-width:
              0;

            display:
              block;

            padding:
              0 8px;

            border:
              none;

            text-align:
              left;
          }


          .stat-item:first-child {
            padding-top:
              0;
          }


          .stat-item:last-child {
            padding-bottom:
              0;
          }


          .stat-index {
            display:
              block;

            padding:
              0;

            margin-bottom:
              7px;

            font-size:
              6px;

            letter-spacing:
              0.10em;
          }


          .stat-number {
            font-size:
              clamp(23px, 7vw, 32px);

            line-height:
              1;
          }


          .stat-label {
            margin-top:
              6px;

            font-size:
              5.5px;

            line-height:
              1.35;

            letter-spacing:
              0.07em;

            white-space:
              normal;
          }


          /* MOBILE BACKGROUND */

          .developer-bg::before {
            width:
              100%;

            opacity:
              0.12;
          }


          .developer-fade {
            background:
              linear-gradient(
                180deg,
                #06090d 0%,
                rgba(6, 9, 13, 0.92) 48%,
                rgba(6, 9, 13, 0.72) 100%
              );
          }


          .dev-core {
            width:
              210px;

            height:
              210px;

            right:
              -100px;

            top:
              9%;

            opacity:
              0.18;
          }


          .circuit {
            opacity:
              0.30;
          }


          .dev-label {
            opacity:
              0.35;
          }
        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 430px) {

          .hero-inner {
            width:
              90%;

            padding:
              70px 0 35px;

            gap:
              42px;
          }


          .name {
            font-size:
              clamp(39px, 11.5vw, 57px);
          }


          .summary {
            font-size:
              12px;
          }


          .hero-cta-row {
            display:
              grid;

            grid-template-columns:
              1fr 1fr;

            width:
              100%;
          }


          .btn-solid,
          .btn-outline {
            width:
              100%;
          }


          .hero-stats {
            width:
              100%;

            grid-template-columns:
              repeat(4, minmax(0, 1fr));

            padding-top:
              15px;
          }


          .stat-item {
            padding:
              0 5px;
          }


          .stat-index {
            font-size:
              5px;

            margin-bottom:
              6px;
          }


          .stat-number {
            font-size:
              21px;
          }


          .stat-label {
            font-size:
              4.8px;

            letter-spacing:
              0.025em;
          }


          .dev-core {
            width:
              170px;

            height:
              170px;

            right:
              -80px;
          }
        }


        /* =====================================================
           VERY SMALL PHONES
        ===================================================== */

        @media (max-width: 350px) {

          .hero-inner {
            width:
              92%;
          }


          .stat-item {
            padding:
              0 3px;
          }


          .stat-number {
            font-size:
              19px;
          }


          .stat-label {
            font-size:
              4.3px;
          }
        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .developer-bg::after,
          .dev-core,
          .node {
            animation:
              none;
          }
        }

      `}</style>


      {/* =====================================================
          HERO
      ===================================================== */}

      <header className="hero">

        {/* =================================================
            DEVELOPER BACKGROUND
        ================================================= */}

        <div className="developer-bg">

          <div className="developer-fade" />

          <div className="dev-core" />


          <div className="circuit circuit-one" />

          <div className="circuit circuit-two" />

          <div className="circuit circuit-three" />

          <div className="circuit circuit-four" />


          <div className="dev-label label-one">
            SYSTEM / CORE
          </div>

          <div className="dev-label label-two">
            JAVA / API / DB
          </div>

          <div className="dev-label label-three">
            BUILD / DEPLOY
          </div>


          <div className="node node-one" />

          <div className="node node-two" />

          <div className="node node-three" />

          <div className="node node-four" />

        </div>


        {/* =================================================
            MAIN FLEX CONTAINER
        ================================================= */}

        <div className="wrap hero-inner">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="hero-content">

            <div className="badge-pill">

              Java Full-Stack Developer

              <span>|</span>

              Spring Boot

              <span>&amp;</span>

              React

            </div>


            <h1 className="name">
              {CONTACT.name}
            </h1>


            <div className="role-line">

              <span className="role-prefix">
                &gt;
              </span>

              <span>
                {roleText}
              </span>

              {showCursor && (
                <span className="cursor" />
              )}

            </div>


            <p className="summary">

              Full-Stack Developer specializing in
              Java, Spring Boot, and React, focused
              on building scalable and maintainable
              web applications. I work across the
              stack, from designing RESTful APIs and
              relational databases with MySQL and
              PostgreSQL to developing responsive
              React interfaces. I build reliable
              applications using JUnit and Mockito
              for testing, Log4j and Logback for
              application logging, and Swagger and
              Postman for API development and
              testing.

            </p>


            <div className="hero-cta-row">

              <a
                className="btn-solid"
                href={`mailto:${CONTACT.email}`}
              >
                Email me
              </a>


              <a
                className="btn-outline"
                href={`https://wa.me/${CONTACT.whatsapp.replace(
                    /\D/g,
                    ""
                )}`}
              >
                WhatsApp
              </a>


              <a
                className="btn-outline"
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>


              <a
                className="btn-outline"
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>

            </div>

          </div>


          {/* =================================================
              RIGHT STATS
          ================================================= */}

          <div className="hero-stats">


            {/* PROJECTS */}

            <div className="stat-item">

              <span className="stat-index">
                01
              </span>

              <div>

                <div className="stat-number">
                  4+
                </div>

                <div className="stat-label">
                  Projects shipped
                </div>

              </div>

            </div>


            {/* DATABASES */}

            <div className="stat-item">

              <span className="stat-index">
                02
              </span>

              <div>

                <div className="stat-number">
                  2
                </div>

                <div className="stat-label">
                  DB engines
                </div>

              </div>

            </div>


            {/* TOOLS */}

            <div className="stat-item">

              <span className="stat-index">
                03
              </span>

              <div>

                <div className="stat-number">
                  10+
                </div>

                <div className="stat-label">
                  Tools &amp; frameworks
                </div>

              </div>

            </div>


            {/* LANGUAGES */}

            <div className="stat-item">

              <span className="stat-index">
                04
              </span>

              <div>

                <div className="stat-number">
                  3
                </div>

                <div className="stat-label">
                  Languages spoken
                </div>

              </div>

            </div>


          </div>

        </div>

      </header>
    </>
  );
}