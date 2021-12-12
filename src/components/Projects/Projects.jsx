import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects.</h1>
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Inventory Tracker</h5>
              <p class="card-text">Inventory app built with the MERN stack.</p>
              <a href="#" class="btn btn-primary">
                Source Code
              </a>
            </div>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">This Portfolio</h5>
              <p class="card-text">Portfolio built with React.</p>
              <a href="#" class="btn btn-primary">
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Requirements Engineering</h5>
              <p class="card-text">Created an SRS with Jira/Confluence.</p>
              <a href="#" class="btn btn-primary">
                View Documents
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
