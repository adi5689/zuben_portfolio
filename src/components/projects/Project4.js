import React from "react";
import PJ4 from "../../assets/PJ4.png";
import "./projects.css";

const Project1 = () => {
  return (
    <div className="project-container">
      <h3>Project 4</h3>
      <h2>ARFFEICAO</h2>
      <div className="project-content">
        <div className="project-media">
          <img src={PJ4} alt="prodimage" />
        </div>
        <div className="project-para">
          <div className="project-desc">
            <p>
              It’s an acronym for Automated Robot for Fire Extinguishing In
              Compact Areas Onboard This robot is especially designed for fire
              extinguishing on ships. This robot can extinguish different types
              of fire. It has two fire suppression mediums, that are Water based
              and CO2 based. It can move freely in compact areas like engine
              rooms. It's wirelessly controlled with live video feed. It is
              highly customisable according to different engine room
              specifications.
            </p>
          </div>
          <div className="project-specification">
            <h3>Some of the salient features are:</h3>
            <ul style={{ textAlign: "left" }}>
              <li>Controlled by Arduino as a microcontroller.</li>
              <li>Developed a custom android application to control the movement of the robot.</li>
              <li>10 DOF, 6-axis robot integrated</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
