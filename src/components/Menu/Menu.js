import React from 'react';
import Logo from '../Logo/Logo.js';
import './Menu.css';


const Menu = () => {
  return(
    <section id="menu">
      <div className="wrapper">
        <Logo />

        <div className="links">
            <a href="#">Register</a>
            <a href="#">Log-in</a>   
        </div>
      </div>
    </section>
  )
}

export default Menu;

