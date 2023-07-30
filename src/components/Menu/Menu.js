import React from 'react';
import Logo from './Logo/Logo.js';
import DarkMode from './DarkMode/DarkMode.js';
import Navigation from './Navigation/Navigation.js'
import './Menu.css';


const Menu = ( { onDarkMode } ) => {
  return(
    <section id="menu">
      <nav className="wrapper">  

        <Logo />
        <DarkMode onDarkMode={onDarkMode}/>
        <Navigation />
        
      </nav>
    </section>
  )
}

export default Menu;

