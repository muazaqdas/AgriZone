import React, { useState } from "react";
import useResizeObserver from "../hooks/useResizeObserver"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../assets/styles/navStyle.css";
import { Button } from "react-bootstrap";

import {AiFillStar} from 'react-icons/ai'
import {CgGitFork} from 'react-icons/cg'

   const Navigation = React.forwardRef((props, ref) => {

    const navbarMenuRef = React.useRef();
    
    const navbarDimensions = useResizeObserver(navbarMenuRef);
    const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
    
    const [colorChange, setColorchange] = useState(false);
    
    const changeNavbarColor = () =>{
      if(window.scrollY >= navBottom){
        setColorchange(true);
      }
      else{
        setColorchange(false);
      }
    };
    window.addEventListener('scroll', changeNavbarColor);
    

    return (
      <Navbar 
        ref={navbarMenuRef}
        className={`fixed-top navbar navbar-expand-lg myNavbar ${ colorChange ? "navbar-transparent" : "navbar-green"}`}  expand="lg">
        <Navbar.Brand className={ colorChange ? "brand" : "brandColor"} href={process.env.PUBLIC_URL + "/#home"}>AGRI ZONE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="nav-link lead " href={process.env.PUBLIC_URL + "/#aboutme"}>ABOUT US</Nav.Link>
            <Nav.Link className="nav-link lead" href={process.env.PUBLIC_URL + "/#shop"}>PRODUCTS</Nav.Link>
            <Nav.Link className="nav-link lead" href="/#order" target="" rel="noreferrer noopener">ORDER</Nav.Link>
            <Nav.Link className="nav-link lead" href={process.env.PUBLIC_URL + "/#contactus"}>CONTACT US</Nav.Link>
          </Nav>
            // <Button className="githubButton btn-outline-dark" href="https://github.com/muazaqdas/agrizone" variant="outlined" target="_blank">
            //   <CgGitFork style={{ fontSize: "1.7em" }} />{" "}
            //   <AiFillStar style={{ fontSize: "1.6em" }} />
            // </Button>
        </Navbar.Collapse>
      </Navbar>
    );
  });

export default Navigation;
