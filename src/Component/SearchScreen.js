import React, { useState } from 'react';
import card from '../Style/card.module.scss';
import { getCardColor, getDustState, getEmojiState } from '../Data/DustStatus';
import BookmarkToggle from './BookmarkToggle';

const SearchScreen = (props) => {

  return (
    <section>
      <h3>검색스크린</h3>

      <div className={card.cardOuter}>
      {props.alldata && props.alldata.map((el, idx) => (
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




