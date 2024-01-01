import React, { useState, useEffect } from 'react';
import BookmarkScreen from './BookmarkScreen'
import MapScreen from './MapScreen'
import homecard from '../Style/homecard.module.scss';
import { Link } from 'react-router-dom';
import { getCardColor, getDustState, getEmojiState } from '../Data/DustStatus';

export default function HomeScreen(props) {
  const [bookmarkedItems, setBookmarkedItems] = useState([]);
  const [toBookmarkedData, setToBookmarkedData] = useState([]);

  useEffect(() => {
    // 로컬 스토리지에서 즐겨찾기 아이템을 불러옵니다.
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarkedItems')) || [];
    setBookmarkedItems(storedBookmarks);

    // bookmarkedItems에 저장된 stationName을 바탕으로 전체 데이터에서 재검색하여 즐겨찾기 데이터 설정
    const toBookmarkedData = props.alldata.filter(data => storedBookmarks.some(item => item.stationName === data.stationName));
    setToBookmarkedData(toBookmarkedData);
    // console.log(toBookmarkedData)
  }, [props.alldata]);

  return (
    <section className='mt-2'>
      <h3>내 즐겨찾기</h3>
      <Link to="/bookmark" className={homecard.link}>
      <div className={homecard.cardOuter}>
        {toBookmarkedData && toBookmarkedData.map((el, idx) => (
          <div key={idx} className={homecard.cardContainer} style={{ backgroundColor: getCardColor(el.pm10Value) }}>
            <div className={homecard.cardWrapTop}>
              <div className={homecard.sidoName}>{el.sidoName}</div>
              <div className={homecard.stationName}>{el.stationName}</div>
            </div>
            <div className={homecard.cardWrapMiddle}>
              <div className={homecard.emoji}>{getEmojiState(el.pm10Value)}</div>
              <div className={homecard.dustState}>{getDustState(el.pm10Value)}</div>
              <div className={homecard.dustValue}>({el.pm10Value})</div>
            </div>
          </div>
        ))}
      </div>
      </Link>
      <MapScreen alldata={props.alldata}/>
    </section>
  )
}
