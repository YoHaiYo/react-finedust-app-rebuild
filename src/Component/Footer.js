import React from 'react'

  // Copyright연도 자동지정
const thisYear = new Date().getFullYear(); // 2023 (올해년도 출력)

export default function Footer() {
  
  return (
    <footer>
      <p>©Copyright {thisYear}. SimSeHoon. All rights reserved.</p>
      <p>email : 12si47bun@naver.com</p>
      <p>phone : 010-2094-5951</p>
    </footer>
  )
}
