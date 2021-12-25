import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-purple-600 text-white rounded-b h-40 ">
                <Container>
                    <Link to="/home" className="text-white mr-6 no-underline text-3xl">
                        Programming for Kids
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto custom-nav">
                            <Link to="/home" className="text-white mx-6 no-underline">Home</Link>
                            <Link to="/allcourses" className="text-white mx-6 no-underline">All Courses</Link>
                            <Link to="/trainers" className="text-white mx-6 no-underline">Our Trainers</Link>
                            <Link to="/aboutus" className="text-white mx-6 no-underline">About Us</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;