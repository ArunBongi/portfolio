// src/components/Skills.js
import React from "react";
import "../styles/Skills.css";

function Skills() {
  const skills = [
    {
      category: "Languages & Technologies",
      items: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python"],
    },
    {
      category: "Frameworks",
      items: ["React", "Bootstrap", "Express.js", "Tailwind CSS"],
    },
    {
      category: "Tools & Platforms",
      items: [
        "Git",
        "GitHub",
        "Bitbucket",
        "VSCode",
        "Agile Methodologies",
        "Slack",
        "Trello",
      ],
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB", "PostgreSQL"],
    },
    {
      category: "Web Development Skills",
      items: [
        "Responsive Web Design",
        "Flexbox",
        "CSS Grid",
        "Media Queries",
        "Sass",
        "Web Performance Optimization",
        "Lazy Loading",
        "Image Optimization",
        "SEO Optimization",
      ],
    },
    {
      category: "Authentication & Security",
      items: ["OAuth", "JWT", "CORS", "HTTPS"],
    },
    {
      category: "Design & Prototyping",
      items: ["Figma", "Adobe XD", "Sketch"],
    },
    {
      category: "Collaboration & Productivity",
      items: ["Slack", "Trello", "Jira", "Agile/Scrum"],
    },
    {
      category: "DevOps & Cloud",
      items: ["AWS", "Azure", "Google Cloud Platform"],
    },
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <div className="skill-category" key={index}>
          <h3>{skill.category}</h3>
          <ul>
            {skill.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skills;
