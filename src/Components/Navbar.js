import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../assets/styles/navStyle.css";

   const Navigation = React.forwardRef((props, ref) => {

    
    
    const [colorChange] = useState(false);

    return (
      <Navbar 
        // ref={navbarMenuRef}
        className="navbar navbar-expand-lg myNavbar"  expand="lg">
        <Navbar.Brand className="brand" href={process.env.PUBLIC_URL + "/#home"}>AGRI ZONE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="nav-link lead " href={process.env.PUBLIC_URL + "/#aboutme"}>ABOUT US</Nav.Link>
            <Nav.Link className="nav-link lead" href={process.env.PUBLIC_URL + "/#shop"}>PRODUCTS</Nav.Link>
            <Nav.Link className="nav-link lead" href="/#order" target="" rel="noreferrer noopener">ORDER</Nav.Link>
            <Nav.Link className="nav-link lead" href={process.env.PUBLIC_URL + "/#contactus"}>CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  });

export default Navigation;
