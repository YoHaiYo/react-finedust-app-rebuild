import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from './logo-temp-long.png';

function Navigation() {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>        
        <Navbar.Brand as={Link} to="/"><img src={logo} alt='logo' style={{height: "27px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/"><i className="fa-solid fa-house mx-1"></i>홈</Nav.Link>
            <Nav.Link as={Link} to="/map"><i className="fa-solid fa-map-location-dot mx-1"></i>미세먼지 지도</Nav.Link>
            <Nav.Link as={Link} to="/search"><i className="fa-solid fa-magnifying-glass mx-1"></i>지역 검색</Nav.Link>
            <Nav.Link as={Link} to="/rank"><i className="fa-solid fa-ranking-star mx-1"></i>미세먼지 순위</Nav.Link>
            <Nav.Link as={Link} to="/bookmark"><i className="fa-solid fa-book-bookmark mx-1"></i>즐겨찾기 관리</Nav.Link>
            <Nav.Link as={Link} to="/devinfo"><i className="fa-solid fa-code mx-1"></i>개발정보</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navigation;
