import React, { useState } from 'react';
import card from '../Style/card.module.scss';
import { getCardColor, getDustState, getEmojiState } from '../Data/DustStatus';
import { Bookmark } from './BookmarkXXX';
import BookmarkToggle from './BookmarkToggle';

const Rank = (props) => {
  const [sortNum, setSortNum] = useState(10); // n개씩 보기
  const [sortDirection, setSortDirection] = useState('tobad'); // 오름차 내림차

  const handleSortNumChange = e => {
    setSortNum(Number(e.target.value));
  };

  const handleSortDirectionChange = e => {
    setSortDirection(e.target.value);
  };

  let sortedData;

  if (sortDirection === 'tobad') {
    sortedData = props.alldata
      .filter(el => el.pm10Value !== '-' && el.pm10Value !== null) // 통신오류로 미세먼지값이 -, null 경우 배제하기
      .sort((a, b) => parseFloat(b.pm10Value) - parseFloat(a.pm10Value))
      .slice(0, sortNum);
  } else if (sortDirection === 'togood') {
    sortedData = props.alldata
      .filter(el => el.pm10Value !== '-' && el.pm10Value !== null) // 통신오류로 미세먼지값이 -, null 경우 배제하기
      .sort((a, b) => parseFloat(a.pm10Value) - parseFloat(b.pm10Value))
      .slice(0, sortNum);
  } else {
    console.log('sortDirection 입력오류');
  }

  return (
    <section>
      <h3>검색 및 순위보기</h3>
      <button onClick={()=>{setSortNum(5)}}>TOP5</button>
      <button onClick={()=>{setSortNum(10)}}>TOP10</button>

      <label>정렬 개수:</label>
      <input type="number" value={sortNum} onChange={handleSortNumChange} />

      <label>정렬 방향:</label>
      <select value={sortDirection} onChange={handleSortDirectionChange}>
        <option value="tobad">미세먼지 안 좋은 곳부터 보기</option>
        <option value="togood">미세먼지 좋은 곳부터 보기</option>
      </select>

      <div className={card.cardOuter}>
      {sortedData && sortedData.map((el, idx) => (
        <div
          key={el.sidoName + el.stationName}
          className={card.cardContainer}
          style={{
            backgroundColor: getCardColor(el.pm10Value),
          }}
        >
          <div className={card.rank}>{idx + 1}위</div>
          <div className={card.cardWrapTop}>
            <div className={card.sidoName}>{el.sidoName}</div>
            <BookmarkToggle stationName={el.stationName}/>
            <div className={card.stationName}>{el.stationName}</div>
          </div>
          <div className={card.cardWrapMiddle}>
            <div className={card.emoji}>{getEmojiState(el.pm10Value)}</div>
            <div className={card.dustState}>{getDustState(el.pm10Value)}</div>
          </div>
          <div className={card.dustValue}>
            미세먼지 : {el.pm10Value}
          </div>
          <div className={card.dataTime}>{el.dataTime} 기준</div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default Rank;




