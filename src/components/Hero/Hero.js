import React from 'react';
import './Hero.css';
import heroImage from '../../img/dev-primary_light.svg'

const Hero = () => {
  return(
    <section id="hero">
      <div className="wrapper row vertical-align">
        <div className="hero-content-wrapper col-md-6">
          <h1>Build your Web Application</h1>
          <h2>Push the limit of your creativity with React</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a est ante. Nulla facilisi. Integer elementum velit at ultricies convallis.</p>
          <button type="button" className="btn btn-secondary">Start Now</button>
          <button type="button" className="btn btn-secondary-alt">Discover More</button>
        </div>

        <div className="hero-image-wrapper col-md-6 d-none d-md-block d-lg-block">
          <img className="hero-image" id="hero-image" src={heroImage}/>
        </div>
      </div>
    </section>
  )
}

export default Hero;