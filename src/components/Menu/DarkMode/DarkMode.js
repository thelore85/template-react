import React from "react";
import "./DarkMode.css";


const DarkMode = () =>{

  //darkmode checkbox
  const modeIcon = document.getElementsByClassName('fas');

  const onDarkModeSwitch = (event) => {
    let darkModeChecked = event.target.checked;

    if(darkModeChecked === true){
      document.documentElement.setAttribute('data-theme', 'dark')
      
      modeIcon[0].classList.toggle('hidden');
      modeIcon[1].classList.toggle('hidden');
      
    }if(darkModeChecked === false){
      document.documentElement.setAttribute('data-theme', 'light')

      modeIcon[0].classList.toggle('hidden');
      modeIcon[1].classList.toggle('hidden');
    }
  }

  return(
    <div id="dark-mode" className="theme-switch-wrapper vertival-align">

      <span className="toggle-icon">
        <i className="fas fa-sun"></i>
        <i class="fas fa-solid fa-moon hidden"></i>
      </span>

      <label className="switch">
        <input id="checkbox" type="checkbox" onChange={onDarkModeSwitch}/>
        <span className="slider round"></span>
      </label>

    </div>
    )
}

export default DarkMode;