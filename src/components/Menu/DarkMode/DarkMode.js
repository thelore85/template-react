import React from "react";
import "./DarkMode.css";


const DarkMode = ({  }) =>{

  //check box control
  const onDarkModeSwitch = (event) => {
    let darkModeChecked = event.target.checked;
    
    if(darkModeChecked){document.documentElement.setAttribute('data-theme', 'dark')}
    else{document.documentElement.setAttribute('data-theme', 'light')}
  }

  return(
    <div id="dark-mode" className="theme-switch-wrapper vertival-align">

      <span className="toggle-icon">
        {/* <i className="fas fa-sun"></i> */}
      </span>

      <label className="switch">
        <input type="checkbox" onChange={onDarkModeSwitch}/>
        <span className="slider round"></span>
      </label>

    </div>
    )

}

export default DarkMode;