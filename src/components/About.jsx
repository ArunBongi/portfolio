import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>
        Hi, I’m a passionate <strong> Full Stack Web Developer</strong> with
        over 3 years of experience in building scalable and efficient web
        applications. Over the years, I’ve worked extensively with technologies
        like <strong>React</strong>, <strong>Node.js</strong>, and{" "}
        <strong>MongoDB</strong>, delivering solutions tailored to meet diverse
        client needs.
      </p>
      <p>
        My technical expertise spans multiple areas including languages,
        frameworks, tools, and cloud platforms. For a detailed view of my
        skills, check out the <a href="/skills">Skills</a> section.
      </p>
      <p>
        I’m committed to delivering exceptional results, ensuring every project
        is efficient, secure, and visually engaging. Let’s connect and create
        something remarkable together!
      </p>
    </section>
  );
}

export default About;
