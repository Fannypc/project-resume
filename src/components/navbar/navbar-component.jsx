import React, { useState } from "react";
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom";
import '../../views/navbar-styles.css';

export function NavbarComponent(){
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar expanded={expanded} bg="light" expand="lg" className="navbar-expandido">
 
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto lista-navbar">

          <div className="rojo"></div>
            <Navbar.Text>Stefany Porras</Navbar.Text>
            <Navbar.Text>mars.poc@gmail.com</Navbar.Text> 

            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/">INTRODUCCIÓN</Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/acerca">ACERCA DE MÍ</Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/experiencia">EXPERIENCIA</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}