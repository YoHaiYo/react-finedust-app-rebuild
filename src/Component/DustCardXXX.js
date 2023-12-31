import React from 'react'
import { useState, useEffect } from 'react';
import { DataUrlManger } from '../Data/DataUrlManger';
import { getCardColor, getDustState, getEmojiState } from '../Data/DustStatus';
import card from '../Style/card.module.scss'
import { Bookmark } from './Bookmark';


/// GetApiData로 접근한 URL을 비동기 통신으로 객체 데이터로 가공 후 html 태그로 화면출력
export function DustCard({ selectedSido, numOfRows }) {
  const [dustData, setDustData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(DataUrlManger(selectedSido, numOfRows));
        const data = await response.json();
        const items = data.response.body.items;

        setDustData(items);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedSido, numOfRows]);

  return (
    <div className={card.cardOuter}>
    {dustData.map((el, idx) => (
      <div key={idx} className={card.cardContainer}
      style={{
        backgroundColor: getCardColor(el.pm10Value),
      }}>
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
        <div className={card.dustValue}
        >미세먼지 : {el.pm10Value}</div>
        <div className={card.dataTime}>{el.dataTime} 기준</div>
      </div>
    ))}
  </div>
  );
}