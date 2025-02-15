import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {Link as ReactLink} from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar bg="primary" expand="lg" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">React Task Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" ></Nav>
          <div className='Nav'>
            <ReactLink to="/">Logout</ReactLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default NavbarComponent;