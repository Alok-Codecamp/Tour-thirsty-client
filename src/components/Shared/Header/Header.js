import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, LogOut, isLoading, } = useAuth();
    return (
        <div className='nav-container'>
            {/* nav bar start  */}

            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Tour thirsty</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="menu-item me-2 ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <Link to="/home">Home</Link>
                            <Link to="/packages">Packages</Link>
                            <Link to="/mybooking">My Booking</Link>
                            <Link to="/managebooking">Manage All Booking</Link>
                            {
                                user.email&&<Link to="/addpackage">Add Package</Link>
                            }
                            {
                                user.email ?
                                    <button className="btn btn-dark " onClick={LogOut}>Logout</button>
                                    :
                                    <Link to="/login">Login</Link>
                            }
                            {
                                user && <span>{user.displayName}</span>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* nav bar end */}

        </div>
    );
};

export default Header;