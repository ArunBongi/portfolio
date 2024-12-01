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
      items: ["React", "Bootstrap", "Express.js"],
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "VSCode", "Agile Methodologies"],
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB"],
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
