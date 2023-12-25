import React from 'react'
import { useState, useEffect } from 'react';
import { DataUrlManger } from '../Data/DataUrlManger';

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
    <>
      {dustData.map((el, idx) => (
        <div key={idx}>
          <div>{idx}</div>
          <div>sidoName: {el.sidoName}</div>
          <div>stationName: {el.stationName}</div>
          <div>dataTime: {el.dataTime}</div>
          <div>pm10Value: {el.pm10Value}</div>
          <div>pm10Grade: {el.pm10Grade}</div>
        </div>
      ))}
    </>
  );
}