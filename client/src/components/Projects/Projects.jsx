import React from "react";
import "./Projects.css";
import { Section } from "../global/Section/Section";

const Projects = () => {
  return (
    <Section sectionClass="projectsWrapper">
      <div className="projects">
        <h1>Projects.</h1>
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Inventory Tracker</h5>
                <p class="card-text">
                  Inventory app built with the MERN stack.
                </p>
                <a
                  href="https://github.com/jessicawaz/Inventory-App"
                  rel="noreferrer"
                  class="btn btn-primary"
                  target="_blank"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">This Portfolio</h5>
                <p class="card-text">
                  Portfolio built with React and Bootstrap.
                </p>
                <a
                  href="https://github.com/jessicawaz/portfolio"
                  rel="noreferrer"
                  class="btn btn-primary"
                  target="_blank"
                >
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
                <h5 class="card-title">BYO Toast</h5>
                <p class="card-text">Website built with React and Bulma.</p>
                <a
                  href="https://github.com/jessicawaz/BYOToast"
                  rel="noreferrer"
                  class="btn btn-primary"
                  target="_blank"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Requirements Engineering</h5>
                <p class="card-text">Created an SRS with Jira/Confluence.</p>
                <a
                  href="https://drive.google.com/file/d/1W3j6csIHG0Et9euxf-iRHqQh0JVzsKI3/view?usp=sharing"
                  class="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Document
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
