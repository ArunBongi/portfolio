// src/components/Footer.js
import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Arun Bongi. All Rights Reserved.</p>
      <div>
        <a
          href="https://www.linkedin.com/in/arun-bongi"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        {" | "}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;
