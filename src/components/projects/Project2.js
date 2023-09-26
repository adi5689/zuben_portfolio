import React from "react";
import PJ3 from "../../assets/PJ3.png";
import './projects.css';

const Project2 = () => {
  return (
    <div className="project-container">
      <h3>Project 2</h3>
      <h2>Solar-Still Monitoring System</h2>
      <div className="project-content">
        <div className="project-media">
          <img src={PJ3} alt='prodimage'/>
        </div>
        <div className="project-para">
          <div className="project-desc">
            <p>
              Solar stills are simple devices used to purify water by harnessing
              the energy of the sun. They are particularly useful in areas with
              limited access to clean drinking water, such as arid regions or
              remote locations. Solar stills operate on the principle of solar
              distillation, a process that separates pure water from impurities
              and contaminants through evaporation and condensation.
            </p>
          </div>
          <div className="project-specification">
            <h3>I proposed the following system to acquire the data that would be used to improve the efficiency of the system:</h3>
            <ul>
              <li>Measure internal temperature and external temperature and humidity</li>
              <li>Updates those data to the google spreadsheet hourly</li>
              <li>Real-time data can be accessed anytime using a custom-made mobile application</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
