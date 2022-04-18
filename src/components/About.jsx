import React from 'react';
import aboutImage from "../images/hero.png"

const About = () => {
  return (
    <div className='about'>
    <div className='about-model'>
    <img src={aboutImage} alt="about-image" />
    </div>
    <div className='about-text'>
    <h2>We Are The Best<br></br>Real Estate Company </h2>
    <p>We are one of the best Real eatate service you will ever work with, we have
    been oprating for over 10 years with a lot of experiences on the job. We have also
    worked with differnt types of people in given them the best of houses.
    </p>
    <button>View More Details</button>
    </div>
    </div>
  )
}

export default About;