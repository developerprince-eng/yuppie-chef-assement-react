import React from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'; 
import  useToken  from '../useToken';;
const NavbarDashboard = () => {
  const { logout } = useToken();
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Reviews</Nav.Link>
              <Nav.Link href="#link">Products</Nav.Link>
              <NavDropdown title="Reports" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Weekly Review Report</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Daily Report</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Custom Report</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/" onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/" onClick={logout}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavbarDashboard
