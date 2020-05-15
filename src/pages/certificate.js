import React from 'react';
import '../cert.css';
import {Navbar,Nav} from 'react-bootstrap';
import certData from '../certificateData/certificate.json';
import {Link} from 'react-router-dom';

import logo from '../logo.svg';

function Certificate(){
    return(
        <main>
            <div className="nav-bar">
        <Navbar collapseOnSelect expand="lg" fixed="top">
          <Navbar.Brand href="#home" className="fadeInDown">
            <Link to = "/info">
            <img src={logo} className="logo" alt="Tejas Raibagi" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" >
              <Nav.Link href = "/info" className="btn fadeInDown" style={{ animationDelay: '.2s' }}>Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>   
      </div>
      <div className="certificate-display" id="certificate-list">
                <div className="cert-header">
                    <h2 className="cert-title fadeInDown">Certificates!</h2>
                    <div className="row">
                        {certData.map((certDetails, index) => {
                            return (
                                <div className="cert-item mb-4 mb-sm-0 pb-4 col-lg-6 fadeInDown" style={{ animationDelay: '.5s' }}>
                                    <h3>{certDetails.title}</h3>
                                    <span>{certDetails.courseProvider}</span>
                                    <br></br>
                                    <span>{certDetails.courseIssue}</span>
                                    <p>{certDetails.credID}</p>
                                    <a className="view-certificate" target='_blank' href={certDetails.cretLink} rel="noopener noreferrer">
                                        <strong> View Certificate</strong>
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Certificate;