import React from 'react';
import Logo from '../Logo/Logo.js';
import DarkMode from '../DarkMode/DarkMode.js';
import './Menu.css';


const Menu = ( { onDarkMode } ) => {
  return(
    <section id="menu">
      <nav className="wrapper">
        <Logo />

        <div className="links">
            <a href="#">Register</a>
            <a href="#">Log-in</a>
            <DarkMode onDarkMode={onDarkMode}/>
        </div>

      </nav>
    </section>
  )
}

export default Menu;

