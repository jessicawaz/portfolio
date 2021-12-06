import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-col">
        <h1>About Me.</h1>
        <p>
          I am currently a senior Software Engineering student at Florida Gulf
          Coast University. After being introduced to the various programming
          fields, I realized I have a passion for web development.
        </p>
      </div>
      <div className="about-col">
        <h1>Stack.</h1>
        <div className="stack-icons">
          <i class="fab fa-node icon"></i>
          <i class="fab fa-js-square icon"></i>
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
  );
};

export default About;
