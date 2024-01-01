import React, { useState } from 'react';
import card from '../Style/card.module.scss';
import { getCardColor, getDustState, getEmojiState } from '../Data/DustStatus';
import BookmarkToggle from './BookmarkToggle';

const SearchScreen = (props) => {
  const [searchText, setSearchText] = useState("세종");
  const searchArr = props.alldata.filter((el) => el.sidoName.includes(searchText) || (el.stationName.includes(searchText)));
  // console.log(props.alldata.filter((el) => el.sidoName.includes("세종")).map((el,idx)=>(el)))
  return (
    <section>
      <h3>검색스크린(검색범위:시도)</h3>
      <span>통합검색 : </span>
      <input
        value={searchText}
        type='text'             
        onChange={(e)=>setSearchText(e.target.value)}
      />    
      <div>시도명 또는 지역명(구/동/로)으로 검색. 예) 서울, 종로구, 천계천로</div>
      

      <div className={card.cardOuter}>
      {searchText && searchArr.map((el, idx) => ( // searchText && : 검색 텍스트가 없을 경우 전체 데이터 랜더링 방지
        <div
          key={el.sidoName + el.stationName}
          className={card.cardContainer}
          style={{
            backgroundColor: getCardColor(el.pm10Value),
          }}
        >
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

export default SearchScreen;




