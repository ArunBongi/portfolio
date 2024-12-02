// src/components/About.jsx
import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>
        I am a passionate Web Developer with over 2 years of experience
        specializing in front-end and back-end development using modern tools
        like React, Node.js, and REST APIs. I strive to build intuitive and
        responsive web applications.
      </p>
      <a href="/assests/resume/ Arun Bongi.pdf" download className="resume-btn">
        Download My Resume
      </a>
    </section>
  );
}

export default About;
