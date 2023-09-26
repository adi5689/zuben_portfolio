import React from "react";
import humanoid from "../../assets/humanoid.mp4";
import "./projects.css";

const Project1 = () => {
  return (
    <div className="project-container">
      <h3>Project 3</h3>
      <h2>BIPEDAL HUMANOID ROBOT</h2>
      <div className="project-content">
        <div className="project-media">
          <video controls autoPlay>
            <source src={humanoid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="project-para">
          <div className="project-desc">
            <p>
              This is Abby-100, my Bipedal Humanoid Robot. Abby can stand
              straight on his own. It can do all the movement with his hand.
            </p>
          </div>
          <div className="project-specification">
            <h3>Some technical features are:</h3>
            <ul style={{ textAlign: "left" }}>
              <li>Has 17 DOFs</li>
              <li>Initially using Arduino as a microcontroller</li>
              <li>Has 2 ultrasonic distance sensors (front and back)</li>
              <li>Powered by an 11.2-volt lithium-ion battery pack</li>
              <li>It will be controlled by Raspberry Pi.</li>
              <li>The chest will consist of 5 inch LCD screen.</li>
              <li>
                The head will consist of 2 cameras (for each eye), 2
                microphones(for each ear), and a speaker.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
