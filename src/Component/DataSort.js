import card from '../Style/card.module.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import { DataUrlManger } from '../Data/DataUrlManger';
import { getCardColor, getDustState, getEmojiState } from '../Data/DustStatus';
import { Bookmark } from './Bookmark';
import { AllDataGet } from '../Data/AllDataGet';

export function DataSort({ sortNum, sortDirection, searchData }) {
  const alldata = AllDataGet();
    let sortedData;
    // sortedData = alldata.slice(0, sortNum);

    if (sortDirection === "tobad") {
      sortedData = alldata
        .filter(el => el.pm10Value !== '-' && el.pm10Value !== null) // 통신오류로 미세먼지값이 -, null 경우 배제하기
        .sort((a, b) => parseFloat(b.pm10Value) - parseFloat(a.pm10Value))
        .slice(0, sortNum);
    } else if (sortDirection === "togood") {
      sortedData = alldata
        .filter(el => el.pm10Value !== '-' && el.pm10Value !== null) // 통신오류로 미세먼지값이 -, null 경우 배제하기
        .sort((a, b) => parseFloat(a.pm10Value) - parseFloat(b.pm10Value))
        .slice(0, sortNum);
    } else {
      console.log("DataSort 입력오류");
    }
    console.log(sortedData)

  return (    
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
            <Bookmark sidoName={el.sidoName} stationName={el.stationName} pm10Value={el.pm10Value} dataTime={el.dataTime} />
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
  );
}
