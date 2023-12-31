import React from 'react'
import card from '../Style/card.module.scss'
import { useState, useEffect } from "react";

export default function BookmarkToggle({ stationName }) {
  const [isClicked, setIsClicked] = useState(false);
  
  const handleClick = () => {
    // 다른 바텀네비바를 클릭하면 즐겨찾기에 저장된 상태가 초기화되서 localStorage로 상태 데이터를 유저의 로컬장치에 저장하는 방법을 사용.
    const updatedBookmarkList = JSON.parse(localStorage.getItem('bookmarkedItems')) || [];  
    if (!isClicked) { // 즐찾 추가
      const newItem = { stationName}; 
      updatedBookmarkList.push(newItem);
      setIsClicked(true);
    } else { // 즐찾삭제
      const itemIndex = updatedBookmarkList.findIndex(
        (item) =>
          item.stationName === stationName
      );
      if (itemIndex !== -1) { // -1이면 없다는 뜻. 즉, 없지않은경우 즐찾삭제
        updatedBookmarkList.splice(itemIndex, 1);
        setIsClicked(false);
      }
    }
    // Update local storage with updated bookmarked items
    localStorage.setItem('bookmarkedItems', JSON.stringify(updatedBookmarkList));
    console.log(updatedBookmarkList)
  };    
  return (
    <div className={card.bookmark} onClick={handleClick}>
    {isClicked ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}
  </div>
  )
}
