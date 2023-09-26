import React from 'react';
import Pic from '../assets/pic1.png';


const Banner = () => {
  return (
    <div className='banner' id='about'>
      <div className='banner-container'>
        <div className='banner-content'>
          <div className='banner-text'>
            <h2>Hey  there! <br/> I’m <span>Zuben Kalyan</span></h2>
            <p>I am a roboticist and an electronics enthusiast with a particular interest in renewables. Using these knowledge with soft skills, I’m channelling my enthusiasm into innovative solution for sustainable energy through my start-up, <strong>Tatolic Energy Systems</strong>.</p>
          </div>
          <div className='banner-img'>
            <img src={Pic} alt="img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;