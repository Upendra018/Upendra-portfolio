import useReveal from "../hooks/useReveal.js";
import { CONTACT } from "../data/content.js";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const revealRef = useReveal();

  return (
    <footer id="contact">
      <div
        className="wrap reveal"
        ref={revealRef}
      >
        {/* Contact heading */}
        <div className="contact-title">
          Let's build{" "}
          <span className="accent">
            something.
          </span>
        </div>

        {/* Contact description */}
        <p className="contact-sub">
          Open to full-stack and backend Java roles.
          The fastest way to reach me is email or phone.
        </p>

        {/* Contact links */}
        <div className="contact-links">

          {/* Email */}
          <a
            href={`mailto:${CONTACT.email}`}
            className="primary"
          >
            ✉ {CONTACT.email}
          </a>

          {/* Phone */}
          <a
            href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`}
          >
            ☎ {CONTACT.phone}
          </a>

          {/* GitHub */}
         <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-link"
          >
            <FaGithub className="social-icon" />
            <span>GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-link"
          >
            <FaLinkedin className="social-icon" />

            <span>LinkedIn</span>
          </a>

        </div>

        {/* Copyright */}
        <div className="foot-note">
          © 2024 {CONTACT.name}
        </div>
      </div>
    </footer>
  );
}


