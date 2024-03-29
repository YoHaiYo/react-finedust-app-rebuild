import React, { useState } from 'react';
import card from '../Style/card.module.scss';
import { getCardColor, getDustState, getEmojiState } from './DustStatus';
import BookmarkToggle from './BookmarkToggle';
import DustCriteria from './DustCriteria';

const SearchScreen = (props) => {
  const [searchText, setSearchText] = useState("");
  const searchArr = props.alldata.filter((el) => el.sidoName.includes(searchText) || (el.stationName.includes(searchText)));
  // console.log(props.alldata.filter((el) => el.sidoName.includes("세종")).map((el,idx)=>(el)))
  return (
    <section className='my-3'>
      <h3>지역별 미세먼지 검색</h3>
      <span>통합검색 : </span>
      <input
        value={searchText}
        type='text'
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className='my-2'>시도명 또는 지역명(구/동/로)으로 검색. 예) 서울, 종로구, 천계천로</div>
      <div className='my-2'>※ 측정소명 기준으로 검색됩니다. 검색어에 잡히지않는 경우 인근 지역으로 검색해보세요.</div>
      <DustCriteria />


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
              <BookmarkToggle stationName={el.stationName} />
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




