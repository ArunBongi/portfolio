// src/components/Projects.js
import React from "react";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Venue Booking System",
      description: "A platform for users to book venues in real time.",
      tech: "React, JavaScript, HTML, CSS",
      link: "https://github.com/yourusername/venue-booking",
    },
    {
      title: "Todo List App",
      description: "A to-do list app to manage tasks.",
      tech: "React, JavaScript, HTML, CSS",
      link: "https://github.com/yourusername/todo-list",
    },
    {
      title: "Weather App",
      technologies: ["React", "OpenWeather API", "CSS"],
      tech: "JavaScript, HTML, CSS",
      description:
        "An application that displays real-time weather information for any city using the OpenWeather API.",
      link: "https://github.com/yourusername/weather-app",
    },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <small>{project.tech}</small>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
