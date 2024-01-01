import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">로고</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">홈</Nav.Link>
            <Nav.Link as={Link} to="/map">미세먼지 지도</Nav.Link>
            <Nav.Link as={Link} to="/search">지역 검색</Nav.Link>
            <Nav.Link as={Link} to="/rank">미세먼지 순위</Nav.Link>
            <Nav.Link as={Link} to="/bookmark">즐겨찾기 관리</Nav.Link>
            <Nav.Link as={Link} to="/devinfo">개발정보</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
