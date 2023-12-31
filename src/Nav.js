import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
  return (
      <ul className='d-flex justify-content-center list-unstyled'>
        <li className='mx-3'><Link to="/">홈</Link></li>
        <li className='mx-3'><Link to="/myplace">내 지역 설정</Link></li>
        <li className='mx-3'><Link to="/rank">미세먼지 순위</Link></li>
        <li className='mx-3'><Link to="/bookmark">즐겨찾기</Link></li>
        <li className='mx-3'><Link to="/search">지역 검색</Link></li>
        <li className='mx-3'><Link to="/devinfo">개발정보</Link></li>
      </ul>
  )
}

export default Nav