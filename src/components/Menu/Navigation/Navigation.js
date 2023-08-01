import React from 'react';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'; // sidebar menu
import './Navigation.css';
import LogoutMenu from '../LogoutMenu/LogoutMenu.js';


const Navigation = () => {

  const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

  return(
    <>
    <div className="navigation 	d-none d-sm-block">
      <LogoutMenu />
    </div>

    <div className="mobile-nagvigation d-block d-sm-none">
      <i class="fa-solid fa-bars" onClick={handleShow} ></i>
    </div>

    {/* hidden menu - offcanvas*/}
    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
    
        <div className="canvas-navigation">
          <LogoutMenu />
        </div>

        </Offcanvas.Body>
      </Offcanvas>

    </>
  )
}

export default Navigation;