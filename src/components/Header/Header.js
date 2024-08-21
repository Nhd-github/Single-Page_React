import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Avatar from '@mui/material/Avatar';

export default function Header() {
    return (
        <>
            <Container>

                <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary m-1">
                    <Container>
                        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '40% ' }}>
                                <Avatar alt="Remy Sharp" src="./img/Cofee.png" />
                                <Link style={{ textDecoration: 'none', color: 'var(--bs-nav-link-color)' }} to="/" >Home</Link>
                                <Link style={{ textDecoration: 'none', color: 'var(--bs-nav-link-color)' }} to="/courses" >Courses</Link>
                                <Link style={{ textDecoration: 'none', color: 'var(--bs-nav-link-color)' }} to="/about" >About</Link>
                                <NavDropdown title="News" id="collapsible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">New Learners</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another Course
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Boot Capms</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Finding Job
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">More PodCasts</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    Culture 
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>



        </>
    )
}

