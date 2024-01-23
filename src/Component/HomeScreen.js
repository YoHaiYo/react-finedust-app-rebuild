import React, { useState, useEffect } from 'react';
import { Button, ToggleButton, ButtonGroup, Badge } from 'react-bootstrap';
import BookmarkScreen from './BookmarkScreen'
import MapScreen from './MapScreen'
import homecard from '../Style/homecard.module.scss';
import { Link } from 'react-router-dom';
import { getCardColor, getDustState, getEmojiState } from './DustStatus';
import { DimModal, DimCard, DimMessage } from './DimGuide';
import { HomeCard } from './HomeCard';

const loadingBookMarkArr = [
  {
    sidoName: "즐찾1",
    stationName: "추가필요",
    pm10Value: '13',
  },
  {
    sidoName: "즐찾2",
    stationName: "추가필요",
    pm10Value: '33',
  },
]

const loadingWorstArr = [
  {
    sidoName: "WORST",
    stationName: "로딩중",
    pm10Value: '103',
  }
]
const loadingBestArr = [
  {
    sidoName: "BEST",
    stationName: "로딩중",
    pm10Value: '13',
  },
]



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
      {/* <DimModal /> */}
      {/* <img src="./img/fullguide.png" alt="guide-img"></img> */}
      <section className='mt-2 d-lg-flex container mx-auto justify-content-center'>
        <div className='px-5 d-flex flex-column align-items-center'>
          {/* <DimCard> */}
          <h3 className='mt-2'>내 즐겨찾기</h3>
          <Link to="/bookmark" className={homecard.link}>
            {toBookmarkedData && toBookmarkedData.length > 0 ? (HomeCard(toBookmarkedData)) : (
              HomeCard(loadingBookMarkArr)
            )}
          </Link>
          {/* </DimCard> */}
          {/* <DimMessage className="dim-left">
            즐겨찾기를 추가하고 관리 할 수 있습니다.
          </DimMessage> */}

          <h3 className='mt-5'>미세먼지 WORST/BEST 지역</h3>
          {/* <DimCard> */}

          <Link to="/rank" className={`${homecard.link} d-inline-block mb-3`}>
            <div className='d-flex justify-content-center flex-wrap'>
              {worstplace && worstplace.length > 0 ? (HomeCard(worstplace)) : (
                HomeCard(loadingWorstArr)
              )}
              {bestplace && bestplace.length > 0 ? (HomeCard(bestplace)) : (
                HomeCard(loadingBestArr)
              )}
            </div>
            <Button variant="outline-primary" className='w-100 mt-2'>순위 더 보러가기</Button>
          </Link>
          {/* </DimCard> */}
          {/* <DimMessage className="dim-left">
            현재 한반도에서 가장 미세먼지가 <br />
            안좋은지역과 좋은 지역을 보여줍니다.
          </DimMessage> */}
        </div>
        {/* <DimCard> */}
        <MapScreen alldata={props.alldata} />
        {/* </DimCard> */}
        {/* <DimMessage className="dim-right">
          각 도시의 미세먼지 평균값을 <br />
          미세먼지기준 색상과 함께 보여줍니다.
        </DimMessage> */}


      </section>
    </>
  )
}
