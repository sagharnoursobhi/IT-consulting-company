
import {Navbar, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Logo from '../assets/logo.png';
import '../assets/styles/header.scss';
import React from 'react';

const AppNavbar = () => {

    return(
        <div className="header custom-linear home-page career-page clients-page services-page contact-page">
            <div className="navbar-container">
                <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar-custom-container">
                    <Container>
                        <Navbar.Brand as={NavLink} to='/' className="d-flex justify-content-center align-items-center icon-container">
                            <img src={Logo} alt="Logo" className="mx-100 nav-icon"/>
                            <div className="ml-2 nav-title">SNIT Consulting AB</div>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" className="nav-black" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                            <Nav className="align-items-xl-center align-items-lg-center align-items-md-start align-items-sm-start ml-xl-3 ml-lg-3 mr-xl-3 mr-lg-3 links-container">
                                <Nav.Link as={NavLink} className="link" to='/'>Home Page</Nav.Link>
                                <Nav.Link as={NavLink} className="link" to='/services'>Services</Nav.Link>
                                <Nav.Link as={NavLink} className="link" to='/clients'>Clients</Nav.Link>
                                <Nav.Link as={NavLink} className="link" to='/careers'>Careers</Nav.Link>
                                <Nav.Link as={NavLink} className="link" to='/contactUs'>Contact Us</Nav.Link>
                                <Nav.Link as={NavLink} className="link" to='/aboutUs'>About Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}

export default AppNavbar;