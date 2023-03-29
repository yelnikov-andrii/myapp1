import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

export const Header: React.FC = () => {
  return (
    <Navbar
      expand="lg"
      className='header'
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            My app 1
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link >
                Home
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/goods">
              <Nav.Link >
                Goods
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/new-good">
              <Nav.Link >
                Add new good
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

