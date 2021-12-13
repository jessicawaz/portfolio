import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div>
        <h1>About Me.</h1>
        <p>
          Hello! I am a Backend Developer with experience writing API's using
          Node.js and databases such as MongoDB and Firebase. I will be
          receiving a Bachelor's Degree in Software Engineering in May of 2022.
        </p>
      </div>

      <div>
        <h1>Stack.</h1>
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <i class="fab fa-node icon"></i>
            </div>

            <div className="col">
              <i class="fab fa-js-square icon"></i>
            </div>
            <div className="col">
              <img
                className="firebase"
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Ffirebase-logo-png-firebase-logo-png-transparent-amp-svg-vector-pluspng-2400x3291.png&f=1&nofb=1"
                alt="Firebase"
                width="auto"
                height="60px"
                color="black"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
