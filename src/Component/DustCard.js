import React from 'react'
import { useState, useEffect } from 'react';
import { DataUrlManger } from '../Data/DataUrlManger';



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
        <>
          {dustData.map((el, idx) => (
            <div key={idx}>
              <div>sidoName : {el.sidoName}</div>
              <div>stationName : {el.stationName}</div>
              <div>dataTime : {el.dataTime}</div>
              <div>pm10Value : {el.pm10Value}</div>
              <div>pm10Grade : {el.pm10Grade}</div>
            </div>
          ))}
        </>
  );
}