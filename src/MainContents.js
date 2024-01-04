import React from 'react'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import RankScreen from './Component/RankScreen'
import BookmarkScreen from './Component/BookmarkScreen'
import { AllDataGet } from './Data/AllDataGet';
import SearchScreen from './Component/SearchScreen';
import MapScreen from './Component/MapScreen';
import HomeScreen from './Component/HomeScreen';
import DevInfoScreen from './Component/DevInfoScreen';

function MainContents() {

  const alldata = AllDataGet() // 최초 한번 모든 데이터 가져와 각 컴포넌트로 넘겨주기
  // console.log(alldata)

  useEffect(() => {
    const fetchData = async () => {
      // 현재 시간을 얻어옵니다.
      const currentTime = new Date();
      const currentMinutes = currentTime.getMinutes();

      // 매시 정각에 실행되도록 설정합니다.
      if (currentMinutes === 0 && !localStorage.getItem('lastDataFetchDate')) {
        await AllDataGet();
        localStorage.setItem('lastDataFetchDate', new Date().toDateString());
      }
    };
    fetchData();
    // 매시 정각에 실행되도록 타이머를 설정합니다.
    const intervalId = setInterval(fetchData, 60 * 60 * 1000); // 1시간 간격
    return () => clearInterval(intervalId); // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
  }, []);

  return (
      <Routes>
        {/* <Route path='경로' element={보여줄 컴포넌트}> */}
        <Route path='/' element={<HomeScreen alldata={alldata}/>}></Route>
        <Route path='/map' element={<MapScreen alldata={alldata}/>}></Route>
        <Route path='/rank' element={<RankScreen alldata={alldata}/>}></Route>
        <Route path='/search' element={<SearchScreen alldata={alldata}/>}></Route>
        <Route path='/bookmark' element={<BookmarkScreen alldata={alldata}/>}></Route>
        <Route path='/devinfo' element={<DevInfoScreen/>}></Route>
      </Routes>
  )
}

export default MainContents