import React from 'react';
import '../cert.css';
import {Navbar,Nav} from 'react-bootstrap';
import certData from '../certificateData/certificate.json';
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
              <Nav.Link href = "/" className="btn fadeInDown" style={{ animationDelay: '.2s' }}>Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>   
      </div>
      <div className = "cert-header">
          <h2 className = "header-title fadeInDown">Certificates!</h2>
        <div className="row">
            {certData.map((certDetails, index) => {
                return (
                    <div  className = "cert-item mb-4 mb-sm-0 pb-4 col-lg-6 fadeInDown" style = {{animationDelay:'.5s'}}>
                        <h3>{certDetails.title}</h3>
                        <span>{certDetails.courseProvider}</span>
                        <br></br>
                        <span>{certDetails.courseIssue}</span>
                        <p>{certDetails.credID}</p>
                        <a className = "view-certificate" target='_blank' href={certDetails.cretLink} rel="noopener noreferrer">
                            <strong> View Certificate</strong>
                        </a>
                    </div>
                )
            })}
        </div>
        </div>
        </main>
    );
}

export default Certificate;