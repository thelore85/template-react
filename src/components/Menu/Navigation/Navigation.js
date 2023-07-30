import React from 'react';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'; // sidebar menu

import './Navigation.css';

const Navigation = () => {

  const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


  return(
    <>
    <div className="navigation 	d-none d-sm-block">
      <a href="#">Register</a>
      <a href="#">Log-in</a>
    </div>

    <div className="mobile-nagvigation d-block d-sm-none">
      <button className="header-menu-button menu" variant="primary" onClick={handleShow}>|||</button>
      <button className="header-account-button account" variant="primary" onClick={handleShow}><i className="fa fa-user" aria-hidden="true"></i></button>
    </div>

    {/* hidden menu - offcanvas*/}
    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
    
        <div className="canvas-navigation">
          <a href="#">Register</a>
          <a href="#">Log-in</a>
        </div>

        </Offcanvas.Body>
      </Offcanvas>

    </>
  )
}

export default Navigation;