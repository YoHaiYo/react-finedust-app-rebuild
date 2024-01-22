import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Cookies from 'js-cookie';


// 페이지 시작시 dim 클래스주기
document.body.classList.add("dim");

const DimBG = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DimBtns = styled.div`
  position: absolute;
  bottom: 5%;    
  right: 2%;
  z-index: 5;
  
`;
const DimBtn = styled.button`
  margin: 0 0.5rem;
  position: relative;
  /* bottom: 10%;     */
  z-index: 3;
  border: 2px solid #fff;
  border-radius: 0.5rem;
  backdrop-filter: blur(10px); /* 흐림 효과의 강도를 조절할 수 있습니다. */
  background-color: transparent;
  color: #fff;
  font-size: 2rem;
  padding: 0 1rem;
`;

export const DimModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    const cookieValue = Cookies.get('close');
    if (cookieValue === 'Y') {
      setIsModalOpen(false);
    }
  }, []);
  const closeNoraml = () => {
    setIsModalOpen(false);
  };

  const closeOneday = () => {
    setIsModalOpen(false);
    // expires :1 -> 1 day expiration
    // expires: 1 / 1440 -> 1 minute expiration
    Cookies.set('close', 'Y', { expires: 1 / 1440 });
  };


  const dimdelete = () => {
    document.body.classList.remove("dim")
    document.querySelector(".dim-intro").classList.add("dim-intro-out")
    /*  document.querySelectorAll(".dim-guide").forEach(function (element) {
      // element.style.opacity = 0;
      element.style.visibility = 'hidden';
    }); */

    // dim-guide클래스 태그를 지우는 순간 자식태그들을 새로 만들어줌! css로는 안되기때문.
    const dimCard = document.querySelector('.dim-guide'); // `.dim-guide` 클래스를 가진 DimCard 선택
    const parent = dimCard.parentNode; // DimCard의 부모 요소 선택
    const children = Array.from(dimCard.childNodes); // DimCard의 모든 자식 노드를 배열로 변환

    // 자식 노드를 부모 노드에 하나씩 삽입
    children.forEach(child => {
      parent.insertBefore(child, dimCard);
    });

    // DimCard 요소 제거
    parent.removeChild(dimCard);
  };

  return (
    <div>
      {isModalOpen && (
        <DimBG>
          <DimBtns>
            <DimBtn onClick={() => { closeNoraml(); dimdelete(); }} >닫기</DimBtn>
            <DimBtn onClick={() => { closeOneday(); dimdelete(); }} >하루동안안보기</DimBtn>
          </DimBtns>
          <div className='startguide'></div>
        </DimBG>
      )}
    </div>
  );
};


export const DimCardStyle = styled.div`
z-index: 3;
position: relative;
border: 2px dashed #fff;
border-radius: 1rem;
pointer-events: none; // Dim 상태서 클릭방지.
`;

export const DimCard = (props) => {

  return (
    <>
      <DimCardStyle className='dim-guide'>
        {props.children}
      </DimCardStyle>
    </>
  )
}


const DimMessageStyle = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  /* right : calc(100% + 102px); */
  /* left : calc(100% + 102px); */
  min-width: 270px;
  border: 2px solid #fff;
  border-radius: 1rem;
  padding: 0.75rem;
  color: #fff;
  z-index: 2;
`;

const DimArrow = styled.div`
  position: absolute;
  top: 50%;
  /* left: 100%; */
  right: 100%;  
  width: 100px;
  /* transform: translateY(-50%); */
  /* transform: translateY(-50%) rotate(180deg); */
  z-index: 2;
`;

export const DimMessage = (props) => {

  return (
    <>
      <DimMessageStyle className={`${props.className}`}>
        {props.children}
        <DimArrow className="dim-arrow">
          <img className='arrow' src='./img/arrow-1.png' alt="arrow" style={{ width: 100 }}></img>
        </DimArrow>
      </DimMessageStyle>
    </>
  )
}