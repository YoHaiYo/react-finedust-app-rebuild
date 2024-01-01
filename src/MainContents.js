import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RankScreen from './Component/RankScreen'
// import BookmarksList from './Component/BookmarkList'
import BookmarkScreen from './Component/BookmarkScreen'
import { AllDataGet } from './Data/AllDataGet';
import SearchScreen from './Component/SearchScreen';
import MapScreen from './Component/MapScreen';
import HomeScreen from './Component/HomeScreen';
import DevInfo from './Component/DevInfo';

function MainContents() {

  const alldata = AllDataGet() // 최초 한번 모든 데이터 가져와 각 컴포넌트로 넘겨주기
  // console.log(alldata)

  return (
      <Routes>
        {/* <Route path='경로' element={보여줄 컴포넌트}> */}
        <Route path='/' element={<HomeScreen alldata={alldata}/>}></Route>
        <Route path='/map' element={<MapScreen alldata={alldata}/>}></Route>
        <Route path='/rank' element={<RankScreen alldata={alldata}/>}></Route>
        <Route path='/bookmark' element={<BookmarkScreen alldata={alldata}/>}></Route>
        <Route path='/search' element={<SearchScreen alldata={alldata}/>}></Route>
        <Route path='/devinfo' element={<DevInfo/>}></Route>

      </Routes>
  )
}

export default MainContents