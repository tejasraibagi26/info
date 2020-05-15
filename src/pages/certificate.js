import React from 'react';
import '../cert.css';
import {Navbar,Nav} from 'react-bootstrap';

import logo from '../logo.svg';

function Certificate(){
    return(
        <main>
            <div className="nav-bar">
        <Navbar collapseOnSelect expand="lg" fixed="top">
          <Navbar.Brand href="#home" className="fadeInDown">
            <img src={logo} className="logo" alt="Tejas Raibagi" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" >
              <Nav.Link href = "/info" className="btn fadeInDown" style={{ animationDelay: '.2s' }}>Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>   
      </div>
      
        </main>
    );
}

export default Certificate;