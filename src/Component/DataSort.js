import card from '../Style/card.module.scss'
import React from 'react'
import { useState, useEffect } from 'react';
import { DataUrlManger } from '../Data/DataUrlManger';
import { getCardColor, getDustState, getEmojiState } from '../Data/DustStatus';
import { Bookmark } from './Bookmark';


/// GetApiData로 접근한 URL을 비동기 통신으로 객체 데이터로 가공 후 html 태그로 화면출력

export function DataSort({ sortNum, sortDirection }) {
  const [dustData, setDustData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(DataUrlManger("전국", 649)); // 전체에서 소팅해야되서 "전국", 649개 고정임.
        const data = await response.json();
        const items = data.response.body.items;
        let sortedData;

        if ( sortDirection === "내림차순") {
          // 데이터 소팅 내림차순
          sortedData = items.sort((a, b) => parseFloat(b.pm10Value) - parseFloat(a.pm10Value));
        } else if ( sortDirection === "오름차순" ) {
          // 데이터 소팅 오른차순
          sortedData = items.sort((a, b) => parseFloat(a.pm10Value) - parseFloat(b.pm10Value));
        } else {
          console.log("DataSort 입력오류")
        }

        // 처음부터 sortNum 개만 잘라내기
        const slicedData = sortedData.slice(0, sortNum);

        setDustData(slicedData);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [sortNum, sortDirection]);

  return (
    <div className={card.cardOuter}>
    {dustData.map((el, idx) => (
      <div key={idx} className={card.cardContainer}
      style={{
        backgroundColor: getCardColor(el.pm10Value),
      }}>
        <div className={card.rank}>{idx + 1}위</div>
        <div className={card.cardWrapTop}>
          <div className={card.sidoName}>{el.sidoName}</div>
          <Bookmark sidoName={el.sidoName} stationName={el.stationName} pm10Value={el.pm10Value} dataTime={el.dataTime} />
          <div className={card.stationName}>{el.stationName}</div>
        </div>
        <div className={card.cardWrapMiddle}>
            <div className={card.emoji}>{getEmojiState(el.pm10Value)}</div>
          {/* <div className='dustValue'>pm10Value : {el.pm10Value}</div> */}
          <div className={card.dustState}>{getDustState(el.pm10Value)}</div>
        </div>
        <div className={card.dustValue} style={{color: "red"}}
        >미세먼지 : {el.pm10Value}</div>
        <div className={card.dataTime}>{el.dataTime} 기준</div>
      </div>
    ))}
  </div>
  );
}