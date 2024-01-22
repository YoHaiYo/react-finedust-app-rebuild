import React, { useEffect } from 'react';
import card from '../Style/card.module.scss';
import { useState } from 'react';

export default function BookmarkToggle({ stationName }) {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 로컬 스토리지에서 상태를 불러와 설정
    const bookmarkedItems = JSON.parse(localStorage.getItem('bookmarkedItems')) || [];
    const isStationBookmarked = bookmarkedItems.some(item => item.stationName === stationName);

    setIsClicked(isStationBookmarked);
  }, [stationName]);

  const handleClick = () => {
    // 다른 바텀네비바를 클릭하면 즐겨찾기에 저장된 상태가 초기화되어서 localStorage로 상태 데이터를 유저의 로컬장치에 저장하는 방법을 사용.
    const BookmarkArr = JSON.parse(localStorage.getItem('bookmarkedItems')) || [];

    if (!isClicked) {
      // 즐찾 추가
      const newItem = { stationName, isClicked: true };
      BookmarkArr.push(newItem);
    } else {
      // 즐찾 삭제
      const itemIndex = BookmarkArr.findIndex(item => item.stationName === stationName);
      if (itemIndex !== -1) {
        BookmarkArr.splice(itemIndex, 1);
      }
    }

    // Update local storage with updated bookmarked items
    localStorage.setItem('bookmarkedItems', JSON.stringify(BookmarkArr));
    setIsClicked(!isClicked); // 상태를 토글

    console.log(BookmarkArr)
  };

  return (
    <div className={card.bookmark} onClick={handleClick}>
      {isClicked ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}
    </div>
  );
}
