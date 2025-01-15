// src/components/Footer.js
import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Arun Bongi. All Rights Reserved.</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/arun-bongi"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          {" | "}
          <a
            href="https://github.com/arunbongi"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {" | "}
          <a href="mailto:arun.bongi19@gmail.com">Email</a>
          {" | "}
          Phone: +1 7785485116
        </div>
      </div>
    </footer>
  );
}

export default Footer;
