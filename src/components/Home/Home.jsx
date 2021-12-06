import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div>
        <h1 className="home-name">Jessica Wazbinski.</h1>
        <h2 className="home-desc">Backend Web Developer</h2>
      </div>
      <div className="home-pointer">
        <i class="far fa-hand-point-down"></i>
      </div>
    </div>
  );
};

export default Home;
