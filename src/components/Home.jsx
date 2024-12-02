// src/components/Home.jsx
import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <section className="home">
      <h2>Welcome to My Portfolio</h2>
      <p>
        I’m Arun Bongi, a passionate web developer with a knack for creating
        dynamic and responsive web applications.
      </p>
      <button>
        <a href="/projects">View My Work</a>
      </button>
    </section>
  );
}

export default Home;
