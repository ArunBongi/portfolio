// src/components/Experience.js
import React from "react";
import "../styles/Experience.css";

function Experience() {
  const experiences = [
    {
      company: "TATA Consultancy Services",
      role: "Developer",
      period: "July 2021 - December 2022",
      responsibilities: [
        "Developed and maintained web applications with a microservices architecture.",
        "Designed and implemented REST APIs, enhancing system scalability.",
        "Contributed to agile practices including sprint planning and daily stand-ups.",
      ],
    },
    {
      company: "Fartello Infotech PVT LTD",
      role: "Web Developer Intern",
      period: "August 2020 - May 2021",
      responsibilities: [
        "Designed dynamic user interfaces using HTML, CSS, and JavaScript.",
        "Integrated front-end components with MySQL databases.",
        "Optimized web application performance through debugging and troubleshooting.",
      ],
    },
  ];

  return (
    <section className="experience">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div className="experience-item" key={index}>
          <h3>{exp.company}</h3>
          <p>
            <strong>Role:</strong> {exp.role}
          </p>
          <p>
            <strong>Period:</strong> {exp.period}
          </p>
          <ul>
            {exp.responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;
