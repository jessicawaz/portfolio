import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects.</h1>
      <div className="project-cards">
        <div className="card-item">
          <h4>
            <b>Inventory Tracker</b>
          </h4>
          <p>Created using the MERN stack.</p>
          <a href="#" target="_blank">
            Source Code
          </a>
        </div>
      </div>

      <div className="project-cards">
        <div className="card-item">
          <h4>
            <b></b>
          </h4>
          <p>Created using the MERN stack.</p>
          <a href="#" target="_blank">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
