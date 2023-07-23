import React from 'react';
import './Menu.css';


const Menu = () => {

    return(
        <section id="menu">
            <div className="wrapper">
                <div className="logo">
                  <i class="fa-solid fa-mug-hot"></i>
                  MY-LOGO
                </div>
                <div className="links">
                    <a href="#">Menu</a>
                    <a href="#">Log-in</a>   
                </div>
            </div>
        </section>
    )
}

export default Menu;

