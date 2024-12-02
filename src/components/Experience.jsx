import React from "react";
import "../styles/Experience.css";

function Experience() {
  const experiences = [
    {
      company: "Freelancer",
      role: "Full Stack Web Developer",
      period: "June 2023 - Present",
      responsibilities: [
        "Developed custom websites and applications for various clients using React and Node.js.",
        "Designed and deployed REST APIs for different client projects.",
        "Worked with MongoDB and MySQL to manage and query databases.",
        "Implemented responsive designs with CSS frameworks like Bootstrap and Tailwind CSS.",
        "Collaborated with clients to understand project requirements and deliver tailored solutions.",
        "Performed end-to-end testing and ensured application security best practices.",
      ],
    },
    {
      company: "TATA Consultancy Services",
      role: "Developer",
      period: "July 2021 - December 2022",
      responsibilities: [
        "Developed and maintained web applications with a microservices architecture.",
        "Designed and implemented REST APIs, enhancing system scalability.",
        "Contributed to agile practices including sprint planning and daily stand-ups.",
        "Collaborated with cross-functional teams to deliver client solutions.",
        "Optimized application performance by implementing caching strategies and database indexing.",
        "Implemented unit tests and participated in code reviews to ensure high code quality.",
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
        "Worked closely with the back-end team to integrate RESTful APIs.",
        "Participated in client meetings and gathered requirements for feature development.",
      ],
    },
    {
      company: "Tech Solutions LLC",
      role: "Front-End Developer",
      period: "January 2020 - June 2020",
      responsibilities: [
        "Created user interfaces for web applications using React and Redux.",
        "Ensured cross-browser compatibility and optimized websites for speed and accessibility.",
        "Worked with version control (Git) to manage project code and collaborate with team members.",
        "Integrated front-end elements with REST APIs and third-party services.",
        "Collaborated with UX/UI designers to create user-friendly interfaces.",
      ],
    },
    {
      company: "NextGen Technologies",
      role: "Back-End Developer Intern",
      period: "June 2019 - August 2019",
      responsibilities: [
        "Worked with Node.js and Express.js to build and maintain RESTful APIs.",
        "Developed data models and implemented CRUD operations with MongoDB.",
        "Integrated authentication and authorization features with JWT and OAuth.",
        "Assisted with the deployment of back-end applications on AWS and Heroku.",
        "Created unit and integration tests for back-end services.",
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
