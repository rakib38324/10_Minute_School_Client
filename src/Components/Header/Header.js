import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import logo from './logo.svg'
import './Header.css'






const Header = () => {
    const { user, logOut } = useContext(AuthContext)






    return (
        <Navbar collapseOnSelect className='mb-5 position-related position-relative' expand="lg" bg="light" variant="light">

            <Container>

                <Link className='text-decoration-none text-dark ' to='/'><img src={logo} alt="" />Learn any time </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">

                        <Link className='text-decoration-none text-2xl fw-semibold text-dark px-4' to='/'>Home</Link>
                        <Link className='text-decoration-none text-2xl fw-semibold text-dark px-4' to='/courses'>Courses</Link>
                        <Link className='text-decoration-none text-2xl fw-semibold text-dark px-4' to='/blog'>Blog</Link>

                        {
                            user?.uid ?
                                <>
                                    <Link className='text-decoration-none text-2xl fw-semibold text-dark px-4' onClick={logOut}>Log out</Link>


                                    <div className='w-25  mt-5  position-absolute top-50 end-0 translate-middle-y'>
                                        <img data-toggle="tooltip" data-placement="top" title={user?.displayName} className='border border-primary rounded-circle w-25 h-25' src={user?.photoURL} alt="" />
                                    </div>
                                </>


                                :

                                <>
                                    <Link className='text-decoration-none text-2xl fw-semibold text-dark px-4' to='/login'>Login</Link>
                                    <Link className='text-decoration-none text-2xl fw-semibold text-dark px-4' to='/signup'>Sign Up</Link>
                                </>
                        }


                      

                    </Nav>
                    <Nav>






                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;