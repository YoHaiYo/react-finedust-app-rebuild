import React from 'react'
import { useState, useEffect } from 'react';
import { DataUrlManger } from '../Data/DataUrlManger';
import { getCardColor, getDustState, getEmojiState } from '../Data/DustStatus';

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
  }, [sortNum]);

  return (
    <div className='cardOuter'>
    {dustData.map((el, idx) => (
      <div key={idx} className='cardContainer'
      style={{
        backgroundColor: getCardColor(el.pm10Value),
      }}>
        <div>{idx + 1}위</div>
        <div className='card-wrap-top'>
          <div className='sidoName'>{el.sidoName}</div>
          <div className='stationName'>{el.stationName}</div>
        </div>
        <div className='card-wrap-middle'>
            <div className='emoji'>{getEmojiState(el.pm10Value)}</div>
          {/* <div className='dustValue'>pm10Value : {el.pm10Value}</div> */}
          <div className='dustState'>{getDustState(el.pm10Value)}</div>
        </div>
        <div className='dustValue'
        style={{
        color: "red"}}
        >미세먼지 : {el.pm10Value}</div>
        <div className='dataTime'>{el.dataTime} 기준</div>
      </div>
    ))}
  </div>
  );
}