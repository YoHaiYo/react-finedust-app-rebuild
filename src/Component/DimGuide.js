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
  /* right: 20%; */
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
  };

  return (
    <div>
      {isModalOpen && (
        <DimBG>
          <DimBtns>
            <DimBtn onClick={()=>{closeNoraml(); dimdelete();}} >닫기</DimBtn>
            <DimBtn onClick={()=>{closeOneday(); dimdelete();}} >하루동안안보기</DimBtn>
          </DimBtns>
          <div className='startguide'></div>
        </DimBG>
      )}
    </div>
  );
};


export const DimCard = styled.div`
position: relative;
border: 2px dashed #fff;
border-radius: 1rem;
padding: 1rem;
pointer-events: none; // Dim 상태서 클릭방지.
`;

const DimMessageStyle = styled.div`
  position: absolute;
  top: 105%;
  left: 0;
  right: 0;
  margin: 0 auto;
  border: 2px solid #fff;
  border-radius: 1rem;
  padding: 0.75rem;
  color: #fff;
  z-index: 2;
`;

export const DimMessage = (props) => {

  return(
      <>        
        <DimMessageStyle>
          {props.children}
        </DimMessageStyle>
      </>
  )
}