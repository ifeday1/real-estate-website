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
    <p>jsdnfkjbskfjbnajbnmskzj,fs,gnkjdsnfbjsdkjdhfjkhxiufghjbgdj
    jkfxmnkjsdfhvnckjfhbjdkhnoidfgjmsfosjbfgijsdghsjkfnbvjzd</p>
    <button>View More Details</button>
    </div>
    </div>
  )
}

export default About;