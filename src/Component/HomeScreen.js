import React, { useState, useEffect } from 'react';
import { Button, ToggleButton, ButtonGroup, Badge } from 'react-bootstrap';
import BookmarkScreen from './BookmarkScreen'
import MapScreen from './MapScreen'
import homecard from '../Style/homecard.module.scss';
import { Link } from 'react-router-dom';
import { getCardColor, getDustState, getEmojiState } from './DustStatus';
import DimGuide from './DimGuide';

export default function HomeScreen(props) {
  const [bookmarkedItems, setBookmarkedItems] = useState([]);
  const [toBookmarkedData, setToBookmarkedData] = useState([]);

  useEffect(() => {
    // 로컬 스토리지에서 즐겨찾기 아이템을 불러옵니다.
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarkedItems')) || [];
    setBookmarkedItems(storedBookmarks);

    // bookmarkedItems에 저장된 stationName을 바탕으로 전체 데이터에서 재검색하여 즐겨찾기 데이터 설정
    const toBookmarkedData = props.alldata.filter(data => storedBookmarks.some(item => item.stationName === data.stationName));
    setToBookmarkedData(toBookmarkedData);
    // console.log(toBookmarkedData)    

  }, [props.alldata]);

  // 미세먼지 최악지역 선정
  const worstplace = props.alldata
    .filter(el => el.pm10Value !== '-' && el.pm10Value !== null) // 통신오류로 미세먼지값이 -, null 경우 배제하기
    .sort((a, b) => parseFloat(b.pm10Value) - parseFloat(a.pm10Value))
    .slice(0, 1);

  // 미세먼지 최상지역 선정
  const bestplace = props.alldata
    .filter(el => el.pm10Value !== '-' && el.pm10Value !== null) // 통신오류로 미세먼지값이 -, null 경우 배제하기
    .sort((a, b) => parseFloat(a.pm10Value) - parseFloat(b.pm10Value))
    .slice(0, 1);

  return (
    <>
      <DimGuide />
      <section className='mt-2 d-lg-flex container mx-auto '>
        <div className='px-5 d-flex flex-column align-items-center'>
          <h3 className='mt-2'>내 즐겨찾기</h3>
          <Link to="/bookmark" className={homecard.link}>
            {toBookmarkedData && toBookmarkedData.length > 0 ? (<div className={homecard.cardOuter}>
              {toBookmarkedData && toBookmarkedData.map((el, idx) => (
                <div key={idx} className={homecard.cardContainer} style={{ backgroundColor: getCardColor(el.pm10Value) }}>
                  <div className={homecard.cardWrapTop}>
                    <div className={homecard.sidoName}>{el.sidoName}</div>
                    <div className={homecard.stationName}>{el.stationName}</div>
                  </div>
                  <div className={homecard.cardWrapMiddle}>
                    <div className={homecard.emoji}>{getEmojiState(el.pm10Value)}</div>
                    <div className={homecard.dustState}>{getDustState(el.pm10Value)}</div>
                    <div className={homecard.dustValue}>({el.pm10Value})</div>
                  </div>
                </div>
              ))}
            </div>) : (
              <>
                <div>현재 추가된 즐겨찾기가 없습니다.</div>
              </>
            )}
          </Link>
          <h3 className='mt-3'>미세먼지 WORST/BEST 지역</h3>
          <Link to="/rank" className={`${homecard.link} d-inline-block mb-3`}>
            <div className='d-flex justify-content-center flex-wrap'>
              {/* WORST 지역 */}
              <div className={homecard.cardOuter}>
                {worstplace && worstplace.map((el, idx) => (
                  <div key={idx} className={homecard.cardContainer} style={{ backgroundColor: getCardColor(el.pm10Value) }}>
                    {/* <div className={homecard.cardWrapTop}>{idx + 1}위</div> */}
                    <div className={homecard.cardWrapTop}>
                      <div className={homecard.sidoName}>{el.sidoName}</div>
                      <div className={homecard.stationName}>{el.stationName}</div>
                    </div>
                    <div className={homecard.cardWrapMiddle}>
                      <div className={homecard.emoji}>{getEmojiState(el.pm10Value)}</div>
                      <div className={homecard.dustState}>{getDustState(el.pm10Value)}</div>
                      <div className={homecard.dustValue}>({el.pm10Value})</div>
                    </div>
                  </div>
                ))}
              </div>
              {/* BEST 지역 */}
              <div className={homecard.cardOuter}>
                {bestplace && bestplace.map((el, idx) => (
                  <div key={idx} className={homecard.cardContainer} style={{ backgroundColor: getCardColor(el.pm10Value) }}>
                    {/* <div className={homecard.cardWrapTop}>{idx + 1}위</div> */}
                    <div className={homecard.cardWrapTop}>
                      <div className={homecard.sidoName}>{el.sidoName}</div>
                      <div className={homecard.stationName}>{el.stationName}</div>
                    </div>
                    <div className={homecard.cardWrapMiddle}>
                      <div className={homecard.emoji}>{getEmojiState(el.pm10Value)}</div>
                      <div className={homecard.dustState}>{getDustState(el.pm10Value)}</div>
                      <div className={homecard.dustValue}>({el.pm10Value})</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Button variant="outline-primary" className='w-100 mt-2'>순위 더 보러가기</Button>
            <img className='guide' src="./img/guide-1.png" alt="guide-img"></img>
          </Link>
        </div>
        <MapScreen alldata={props.alldata} />
      </section>
    </>
  )
}
