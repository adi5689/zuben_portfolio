import React from "react";
import  SliderCarousel  from './slider';
const Project = () => {
    
    
  return (
    <div className="projects" id="projects">
      <div className="projects-container">
        <h1>Projects</h1>
        <div className="projects-content">
          <div className="project-text">
            <h2>Where my dreams come true!</h2>
            <p>
              Since my childhood, I've always been keen on creating things on my
              own. If my memory serves me correctly, I began dismantling and
              reassembling electrical devices when I was just 5 . I initially
              began with my toys, I would take them apart (and if I couldn't,
              I'd break them). Then, I endeavored to understand their internal
              workings and attempted to enhance their speed or power, usually by
              connecting more batteries, which often resulted in frying the
              circuitry. After numerous such unsuccessful experiments, I finally
              grasped the concept of maximum current for a component. I learned
              about resistance the hard way, through the burning of many LEDs
              and tiny bulbs that I salvaged from Diwali lights. These Diwali
              string lights taught me about series and parallel connections. No
              electrical device in my home was spared from my inquisitive
              experiments, I opened them all up. I began with basic equipment
              and, with time and persistent effort, taught myself about
              electronics and robotics. Below, you can see some of my projects
              in action.
            </p>
          </div>
          <div className="slider-carousel">
            <SliderCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
