import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Cookies from 'js-cookie';

const DimStyle = styled.div`
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

const DimGuide = () => {
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

  return (
    <div>
      {isModalOpen && (
        <DimStyle>
          <button onClick={closeNoraml}>닫기</button>
          <button onClick={closeOneday}>하루동안안보기</button>
        </DimStyle>
      )}
    </div>
  );
};

export default DimGuide;
