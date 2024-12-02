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
      link: "https://github.com/arunbongi/todo-list",
    },
    {
      title: "Weather App",
      technologies: ["React", "OpenWeather API", "CSS"],
      tech: "JavaScript, HTML, CSS",
      description:
        "An application that displays real-time weather information for any city using the OpenWeather API.",
      link: "https://github.com/arunbongi/weather-app",
    },
    {
      title: "E-commerce Website",
      description:
        "A fully functional e-commerce platform where users can browse products, add them to a shopping cart, and complete purchases.",
      tech: "React, Node.js, Express.js, MongoDB, Stripe API",
      link: "https://github.com/yourusername/e-commerce-website",
    },
    {
      title: "Blog Platform",
      description:
        "A platform where users can create, edit, and delete blog posts, as well as interact with others' posts.",
      tech: "React, Node.js, Express.js, MongoDB, JWT Authentication, Cloudinary",
      link: "https://github.com/yourusername/blog-platform",
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
