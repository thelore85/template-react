import React from "react";
import "./DarkMode.css";

const DarkMode = ({ onDarkMode }) =>{
    return(
      <div id="dark-mode" className="theme-switch-wrapper">

        <span className="toggle-icon">
          <i className="fas fa-sun"></i>
        </span>

        <label className="switch">
          <input type="checkbox" onClick={onDarkMode}/>
          <span className="slider round"></span>
        </label>

      </div>
    )
}

export default DarkMode;