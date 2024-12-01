// src/components/About.js
import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>
        Web Developer with 2+ years of experience specializing in front-end and
        back-end development using modern tools like React, Node.js, and REST
        APIs.
      </p>
      <a href="../assests/resume/Arun Bongi.pdf" download>
        Download My Resume
      </a>
    </section>
  );
}

export default About;
