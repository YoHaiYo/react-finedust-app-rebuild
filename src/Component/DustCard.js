import React from 'react'
import { useState, useEffect } from 'react';
import { DataUrlManger } from '../Data/DataUrlManger';
import { getCardColor, getDustState, getEmojiState } from '../Data/DustStatus';



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
        <div className='cardOuter'>
          {dustData.map((el, idx) => (
            <div key={idx} className='cardContainer'
            style={{
              backgroundColor: getCardColor(el.pm10Value),
            }}>
              <div className='card-wrap-top'>
                <div className='sidoName'>{el.sidoName}</div>
                <div className='stationName'>{el.stationName}</div>
              </div>
              <div className='card-wrap-middle'>
                  <div className='emoji'>{getEmojiState(el.pm10Value)}</div>
                {/* <div className='dustValue'>pm10Value : {el.pm10Value}</div> */}
                <div className='dustState'>{getDustState(el.pm10Value)}</div>
              </div>
              <div className='dustValue'>미세먼지 : {el.pm10Value}</div>
              <div className='dataTime'>{el.dataTime} 기준</div>
            </div>
          ))}
        </div>
  );
}