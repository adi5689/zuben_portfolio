import React from "react";
import PJ1 from "../../assets/PJ1.mp4";
import "./projects.css";

const Project1 = () => {
  return (
    <div className="project-container">
      <h3>Project 1</h3>
      <h2>Solar Energy Systems</h2>
      <div className="project-content">
        <div className="project-media">
          <video controls autoPlay>
            <source src={PJ1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="project-para">
          <div className="project-desc">
            <p>
              As the world is shifting towards renewable energy to overcome the
              ever-increasing demand for energy, solar energy is the best bet we
              have in the current scenario. There are many solar installations
              that we can see but most of those installations are very big.
              However, this work proposes a compact and modular setup that can
              be used as a plug-and-play device. The module is highly
              customizable according to the consumer’s demand.
            </p>
          </div>
          <div className="project-specification">
            <h3>Currently the solar energy system consists of:</h3>
            <ul>
              <li>50 watts/12 v Mono PERC solar panel</li>
              <li>10 amps solar charge controller</li>
              <li>12v, 7ah lead acid battery</li>
              <li>200 watts inverter board</li>
              <li>6 amps dc mcb</li>
              <li>12v, 5 amps transformer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
