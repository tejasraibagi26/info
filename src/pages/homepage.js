import React, { useEffect } from 'react';
import logo from '../logo.svg';
import introImage from '../introImage.svg';
import certImage from '../cert.svg';
import skillsImage from '../skill.svg';
import SkillBar from 'react-skillbars';
import certData from '../certificateData/certificate.json';
import { Nav, Navbar, Container, Row, Col, Button, Form } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import '../App.css';

function Homepage() {

    //SkillsBarAnimation
    const skills = [
        { type: "C#", level: 85 },
        { type: "Python", level: 80 },
        { type: "Flutter", level: 75 },
        { type: "React", level: 60 },
    ];

    useEffect(() => {
        Aos.init({ duration: 2000 })
    })

    return (
        <main>
            <div className="nav-bar">
                <Navbar collapseOnSelect expand="lg" fixed="top">
                    <Navbar.Brand href="#home" className="fadeInDown">
                        <Link to="home" smooth={true} duration={1000}>
                            <img src={logo} className="logo" alt="Tejas Raibagi" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto" >
                            <Link to="home" smooth={true} duration={1000} className="btn fadeInDown" style={{ animationDelay: '.2s' }}>Home</Link>
                            <Link to="certificate" smooth={true} duration={1000} className="btn fadeInDown" style={{ animationDelay: '.4s' }}>Certificate</Link>
                            <Link to="skills" smooth={true} duration={1000} className="btn fadeInDown" style={{ animationDelay: '.6s' }}>Skills</Link>
                            <Link to="contact" smooth={true} duration={1000} className="btn fadeInDown" style={{ animationDelay: '.8s' }}>Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div className="intropage" id="home">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6}>
                            <img className="content-image slideInLeft" src={introImage} alt="HomeImage" />
                        </Col>
                        <Col xs={12} md={6}>
                            <h1 className="intro-title slideInRight">Tejas Raibagi</h1>
                            <p className="intro-content slideInRight" style={{ animationDelay: '1.2s' }}>
                                I am currently pursuing Bachelor of Engineering in Information Technology from India, passionate about Software development. I have knowledge in C#, Python, Flutter. I have sucessfully created a game in Unity and is available on PlayStore, looking forward to add React and NodeJS in my cart!
              </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="certificatepage" id="certificate">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6}>
                            <img data-aos="fade-right" className="content-image" src={certImage} alt="HomeImage" />
                        </Col>
                        <Col xs={12} md={6} data-aos="fade-left">
                            <h1 className="intro-title">Certificate</h1>
                            <p className="intro-content">
                                Want to see my Certificate?
                            </p>
                            <p align="center">
                                <Link to="certificate-list" smooth={true} duration={2000}>
                                    <Button variant="outline-primary" className="cert-view" >View certificate</Button>
                                </Link>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="skillspage" id="skills">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6}>
                            <img data-aos="fade-right" className="content-image2" src={skillsImage} alt="HomeImage" />
                        </Col>
                        <Col xs={12} md={6} data-aos="fade-left">
                            <h1 className="intro-title">Skills</h1>
                            <p className="intro-content">
                                <SkillBar skills={skills} />
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div id="contact">
                <div className="contact-form">
                    <Form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSe3LQ2pOD5nGMcaTWGM--B0bn1ra3-xQ_87hxDeon6gITpaaA/formResponse"
                        target="_self" method="POST" id="mG61Hd">
                        <p data-aos="fade-down" className="contact-header">Contact</p>
                        <Form.Group data-aos="fade-right" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control className="holder" type="text" placeholder="Name" name="entry.1747207542" required />
                        </Form.Group>

                        <Form.Group data-aos="fade-left" controlId="formBasicPassword">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className="holder" type="email" placeholder="Email Address" name="entry.1806584055" required />
                        </Form.Group>
                        <Form.Group data-aos="fade-right">
                            <Form.Label>Message</Form.Label>
                            <textarea id="message" className="holder" rows='6' placeholder="Message" name="entry.1608936070" required></textarea>
                        </Form.Group>
                        <p align="center">
                            <Button className="form-button" type="submit">
                                Submit
              </Button>
                        </p>
                    </Form>
                </div>
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

export default Homepage;