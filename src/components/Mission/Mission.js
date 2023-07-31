import React from 'react';
import './Mission.css';
import missionImage from '../../img/friends-primary_light.svg'  

const Mission = () => {
  return(
    <section id="mission" className="vertical-align">
      <div className="wrapper row vertical-align">

        <div className="img-container col-md-6">
          <img src={missionImage}></img>
        </div>

        <div className="mission-content-wrapper col-md-6">
          <h2>My mission. Your sucess.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a est ante. Nulla facilisi. Integer elementum velit at ultricies convallis.</p>
          <p>Integer a est ante. Nulla facilisi. Integer elementum velit at ultricies convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

      </div>
    </section>
  )
}

export default Mission;