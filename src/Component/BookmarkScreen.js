import React, { useEffect, useState } from 'react';
import BookmarkToggle from './BookmarkToggle';
import { getCardColor, getDustState, getEmojiState } from './DustStatus';
import card from '../Style/card.module.scss';
import DustCriteria from './DustCriteria';

const BookmarkScreen = (props) => {
  const [bookmarkedItems, setBookmarkedItems] = useState([]);
  const [toBookmarkedData, setToBookmarkedData] = useState([]);

  useEffect(() => {
    // 로컬 스토리지에서 즐겨찾기 아이템을 불러옵니다.
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarkedItems')) || [];
    setBookmarkedItems(storedBookmarks);
    // console.log('test', bookmarkedItems)

    // bookmarkedItems에 저장된 stationName을 바탕으로 전체 데이터에서 재검색하여 즐겨찾기 데이터 설정
    const toBookmarkedData = props.alldata.filter(data => storedBookmarks.some(item => item.stationName === data.stationName));
    setToBookmarkedData(toBookmarkedData);
    // console.log(toBookmarkedData)
  }, [props.alldata]);

  return (
    <section className='mt-2'>
      <h3>즐겨찾기 관리</h3>
      <DustCriteria />
      {toBookmarkedData && toBookmarkedData.length > 0 ? (<div className={card.cardOuter}>
        {toBookmarkedData && toBookmarkedData.map((el, idx) => (
          <div key={idx} className={card.cardContainer} style={{ backgroundColor: getCardColor(el.pm10Value) }}>
            <div className={card.cardWrapTop}>
              <div className={card.sidoName}>{el.sidoName}</div>
              <BookmarkToggle stationName={el.stationName} />
              <div className={card.stationName}>{el.stationName}</div>
            </div>
            <div className={card.cardWrapMiddle}>
              <div className={card.emoji}>{getEmojiState(el.pm10Value)}</div>
              <div className={card.dustState}>{getDustState(el.pm10Value)}</div>
            </div>
            <div className={card.dustValue}>미세먼지: {el.pm10Value}</div>
            <div className={card.dataTime}>{el.dataTime} 기준</div>
          </div>
        ))}
      </div>) : (
        <div>현재 추가된 즐겨찾기가 없습니다.</div>
      )}
    </section>
  );
};

export default BookmarkScreen;
