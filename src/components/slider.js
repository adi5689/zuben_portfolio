import React,{ useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './slider.css';
import Project1 from './projects/Project1';
import Project2 from './projects/Project2';
import Project3 from './projects/Project3';
import Project4 from './projects/Project4';

const SliderCarousel = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectDetails = (projectComponent) => {
    setSelectedProject(projectComponent);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };
  
  return (
    <div className="carousel-container">
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={50}
      >
        <div className="slide">
          <h4>Project 1:</h4>
          <h2>Solar Energy Systems</h2>
          <button onClick={() => openProjectDetails(<Project1 />)}>Know More</button>        </div>
        <div className="slide">
        <h4>Project 2:</h4>
          <h2>Solar-Still Monitoring System</h2>
          <button onClick={() => openProjectDetails(<Project2 />)}>Know More</button>
        </div>
        <div className="slide">
        <h4>Project 3:</h4>
          <h2>Bipedal Humanoid Robots</h2>   
          <button onClick={() => openProjectDetails(<Project3 />)}>Know More</button>
        </div>
        <div className="slide">
        <h4>Project 4:</h4>
          <h2>ARFFEICAO</h2>  
          <button onClick={() => openProjectDetails(<Project4 />)}>Know More</button>
        </div>
      </Carousel>

      {selectedProject && (
        <div className="modal-overlay">
          <div className="project-details">
            {selectedProject}
            <button onClick={closeProjectDetails}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SliderCarousel;
