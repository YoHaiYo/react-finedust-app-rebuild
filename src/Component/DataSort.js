import card from '../Style/card.module.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import { DataUrlManger } from '../Data/DataUrlManger';
import { getCardColor, getDustState, getEmojiState } from '../Data/DustStatus';
import { Bookmark } from './Bookmark';

export function DataSort({ sortNum, sortDirection, searchData }) {
  const [dustData, setDustData] = useState([]);
  const [dustInfo, setDustInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use axios instead of fetch : get,post를 정확히 지정할 수 있기때문에
        const response = await axios.get(DataUrlManger("전국", 650)); 
        const data = response.data.response.body.items;

        setDustInfo([...data])

        /* let sortedData;

        if (sortDirection === "내림차순") {
          sortedData = data.sort((a, b) => parseFloat(b.pm10Value) - parseFloat(a.pm10Value));
        } else if (sortDirection === "오름차순") {
          sortedData = data.sort((a, b) => parseFloat(a.pm10Value) - parseFloat(b.pm10Value));
        } else {
          console.log("DataSort 입력오류");
        }

        const slicedData = sortedData.slice(0, sortNum);
        setDustData(slicedData); */

        // 검색기능
        // const searchDataArr = sortedData.filter((el) => el.stationName.includes(searchData));
        // setDustData(searchDataArr);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


        /* const slicedData = dustInfo.slice(0, sortNum);
        setDustInfo(slicedData); */

      /* let slicedData = sortedData.slice(0, sortNum);
      setDustData(slicedData); */

  // useEffect(()=> {
  // },[sortNum, sortDirection])

  return (
    <div className={card.cardOuter}>
      {dustInfo && dustInfo.slice(0, sortNum).map((el, idx) => (
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
          <div className={card.dustValue} style={{ color: "red" }}>
            미세먼지 : {el.pm10Value}
          </div>
          <div className={card.dataTime}>{el.dataTime} 기준</div>
        </div>
      ))}

      {/* {dustData.map((el, idx) => (
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
          <div className={card.dustValue} style={{ color: "red" }}>
            미세먼지 : {el.pm10Value}
          </div>
          <div className={card.dataTime}>{el.dataTime} 기준</div>
        </div>
      ))} */}
    </div>
  );
}
