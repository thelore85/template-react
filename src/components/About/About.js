import React from 'react';
import './About.css';
import aboutImage from '../../img/friends-primary_light.svg'

const About = () => {
  return(
    <section id="about" className="vertical-align">
      <div className="wrapper row vertical-align">

        <div className="about-image-wrapper col-md-6">
          <img className="about-image" id="about-image" src={aboutImage}/>
        </div>

        <div className="about-content-wrapper col-md-6">
          <h2>An amazing About section</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a est ante. Nulla facilisi. Integer elementum velit at ultricies convallis.</p>
          <p>Integer a est ante. Nulla facilisi. Integer elementum velit at ultricies convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button type="button" className="btn btn-primary">Start Now</button>
        </div>

      </div>
    </section>
  )
}

export default About;