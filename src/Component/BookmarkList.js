import React, { useState, useEffect } from "react";
import { getCardColor, getDustState, getEmojiState } from '../Data/DustStatus';
import card from '../Style/card.module.scss';
import { Bookmark } from './BookmarkXXX';

const BookmarksList = () => {
  const [bookmarkedItems, setBookmarkedItems] = useState([]);

  useEffect(() => {
    // 로컬스토리지에서 즐겨찾기 아이템을 불러옵니다.
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarkedItems')) || [];
    setBookmarkedItems(storedBookmarks);
  }, []); // 초기 로딩 시 한 번만 실행


  return (
    <div className={card.cardOuter}>
      {bookmarkedItems.map((el, idx) => (
        <div key={idx} className={card.cardContainer} style={{ backgroundColor: getCardColor(el.pm10Value) }}>
          <div className={card.cardWrapTop}>
            <div className={card.sidoName}>{el.sidoName}</div>
            <Bookmark sidoName={el.sidoName} stationName={el.stationName} pm10Value={el.pm10Value} dataTime={el.dataTime} />
            <div className={card.stationName}>{el.stationName}</div>
          </div>
          <div className={card.cardWrapMiddle}>
            <div className={card.emoji}>{getEmojiState(el.pm10Value)}</div>
            <div className={card.dustState}>{getDustState(el.pm10Value)}</div>
          </div>
          <div className={card.dustValue}>미세먼지 : {el.pm10Value}</div>
          <div className={card.dataTime}>{el.dataTime} 기준</div>
        </div>
      ))}
    </div>
  );
};

export default BookmarksList;
