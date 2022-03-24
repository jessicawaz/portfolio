import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div>
        <h1>About Me.</h1>
        <p>
          Hello! I am a Developer with backend experience writing API's using Node.js and databases such as MongoDB and Firebase. 
    I also have some experience on the frontend with React and Boostrap. Currently, I am working on a mobile/web application using Flutter/Dart. 
    I will be receiving a Bachelor's Degree in Software Engineering in May of 2022.
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
              <i class="fab fa-react icon"></i>
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
    
            <div className="col">
              <img
                className="flutter"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*5-aoK8IBmXve5whBQM90GA.png&f=1&nofb=1"
                alt="Flutter"
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
