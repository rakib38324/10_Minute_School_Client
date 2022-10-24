import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from './logo.svg'
const Header = () => {
    return (
        <Navbar collapseOnSelect className='mb-5' expand="lg" bg="light" variant="light">
            
      <Container>

        <Link className='text-decoration-none text-dark' to='/'><img src={logo} alt="" />Learn any time </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <Link className='text-decoration-none text-2xl fw-semibold text-dark px-4' to='/'>Home</Link>
            <Link className='text-decoration-none text-2xl fw-semibold text-dark px-4' to='/courses'>Courses</Link>
            <Link className='text-decoration-none text-2xl fw-semibold text-dark px-4' to='/login'>Login</Link>
            <Link className='text-decoration-none text-2xl fw-semibold text-dark px-4' to='/signup'>Sign Up</Link>
            


          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;