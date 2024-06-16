import React from 'react';
import { Navbar, Nav, Container ,Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';


function AppNavbar() {
  const handleLogout = async () => {
    try {
      const response = await axios.post('/logout');
      window.alert('Logout successful:', response.data);
    } catch (err) {
      <Link to="/login">
      <Button>Log In</Button>
    </Link>
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/home">
          <Navbar.Brand>Sky Learns</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/leetcode">
              <Nav.Link>Leet Code</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/profile">
              <Nav.Link>Profile</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
