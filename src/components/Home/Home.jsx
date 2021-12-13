import React from "react";
import { Link } from "react-scroll";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div>
        <h1 className="home-name">Jessica Wazbinski.</h1>
        <h2 className="home-desc">Backend Web Developer</h2>

        <div className="container">
          <div className="row">
            <div className="col">
              <a
                href="https://www.linkedin.com/in/jessica-wazbinski/"
                rel="noreferrer"
                target="_blank"
              >
                <i class="fab fa-linkedin icons"></i>
              </a>
              <p>LinkedIn</p>
            </div>

            <div className="col">
              <a
                href="https://github.com/jessicawaz"
                rel="noreferrer"
                target="_blank"
              >
                <i class="fab fa-github-square icons"></i>
              </a>
              <p>GitHub</p>
            </div>
          </div>
        </div>
      </div>

      <div className="home-pointer">
        <Link to="about" smooth={true} duration={500}>
          <h6>Read More Below</h6>
          <i class="far fa-hand-point-down"></i>
        </Link>
      </div>
    </div>
  );
};

export default Home;
