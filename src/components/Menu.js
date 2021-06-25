import React from 'react';
import { Navbar, Container, NavDropdown, Nav} from 'react-bootstrap'
import './Navbars.css'

const Menu = () => {
    return (
        <div className="menu">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="">
                    <NavDropdown title="CATEGORIES" id="basic-nav-dropdown">
                                <NavDropdown.Item>Laptops</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>PCs</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>Games</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>Appliances</NavDropdown.Item>
                            </NavDropdown>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav-light">
                        <Nav className="me-auto" style={{color:'white'}}>
                            <Nav.Link style={{color:'white'}} className="header">Home</Nav.Link>
                            <Nav.Link style={{color:'white'}} className="header">Auctions</Nav.Link>
                            <Nav.Link style={{color:'white'}} className="header">Vendors</Nav.Link>
                            <Nav.Link style={{color:'white'}} className="header">Shortcodes</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
export default Menu;