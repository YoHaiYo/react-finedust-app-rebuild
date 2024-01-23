import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from './logo/logo-temp.png';
import long_logo from './logo/logo-temp-long.png';
import { DimModal, DimCard, DimMessage } from './Component/DimGuide';

function Navigation() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);

  // 반응형으로 로고 바꾸기
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 992);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // useEffect 한 번만 실행되도록 빈 배열 전달

  const logoSrc = isSmallScreen ? logo : long_logo;

  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"><img src={logoSrc} alt='logo' style={{ height: "27px" }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/"><i className="fa-solid fa-house mx-1"></i>홈</Nav.Link>
            <Nav.Link as={Link} to="/map"><i className="fa-solid fa-map-location-dot mx-1"></i>미세먼지 지도</Nav.Link>
            <Nav.Link as={Link} to="/rank"><i className="fa-solid fa-ranking-star mx-1"></i>미세먼지 순위</Nav.Link>
            <Nav.Link as={Link} to="/search"><i className="fa-solid fa-magnifying-glass mx-1"></i>지역 검색</Nav.Link>
            <Nav.Link as={Link} to="/bookmark"><i className="fa-solid fa-book-bookmark mx-1"></i>즐겨찾기 관리</Nav.Link>
            <Nav.Link as={Link} to="/devinfo"><i className="fa-solid fa-code mx-1"></i>개발정보</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navigation;
