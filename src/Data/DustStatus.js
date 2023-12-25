// DustStatus.js
import { useState,useEffect } from "react";

// 미세먼지 수치에 따른 카드 색상 반환
export const getCardColor = (pm10Value) => {
  if (pm10Value === "-") {
    return '#acacac';
  } else if (pm10Value > 150) {
    return '#e67474';
  } else if (pm10Value > 80) {
    return '#f79036';
  } else if (pm10Value > 30) {
    return '#56ed5e';
  } else {
    return '#5190fc';
  }
};

// 미세먼지 수치에 따른 미세먼지 상태 반환
export const getDustState = (pm10Value) => {
  if (pm10Value === "-") {
    return '통신오류';
  } else if (pm10Value > 150) {
    return '매우나쁨';
  } else if (pm10Value > 80) {
    return '나쁨';
  } else if (pm10Value > 30) {
    return '보통';
  } else {
    return '좋음';
  }
};

// 미세먼지 수치에 따른 이모지 상태 반환
export const getEmojiState = (pm10Value) => {
  if (pm10Value === "-") {
    return '❔';
  } else if (pm10Value > 150) {
    return '👿';
  } else if (pm10Value > 80) {
    return '😭';
  } else if (pm10Value > 30) {
    return '🙂';
  } else {
    return '😄';
  }
};

  // 즐겨찾기 추가 함수
export const BookmarkChange = ({ sidoName, stationName, pm10Value, dataTime }) => {
    const [isClicked, setIsClicked] = useState(false);
    useEffect(() => {
      const bookmarkedItems = JSON.parse(localStorage.getItem('bookmarkedItems')) || [];
      const isItemBookmarked = bookmarkedItems.some(
        (item) =>
          item.sidoName === sidoName &&
          item.stationName === stationName &&
          item.pm10Value === pm10Value &&
          item.dataTime === dataTime
      );
      setIsClicked(isItemBookmarked);
    }, [sidoName, stationName, pm10Value, dataTime]);
    const handleClick = () => {
      // 다른 바텀네비바를 클릭하면 즐겨찾기에 저장된 상태가 초기화되서 localStorage로 상태 데이터를 유저의 로컬장치에 저장하는 방법을 사용.
      const updatedBookmarkList = JSON.parse(localStorage.getItem('bookmarkedItems')) || [];  
      if (!isClicked) {
        const newItem = { sidoName, stationName, pm10Value, dataTime };
        updatedBookmarkList.push(newItem);
        setIsClicked(true);
      } else {
        const itemIndex = updatedBookmarkList.findIndex(
          (item) =>
            item.sidoName === sidoName &&
            item.stationName === stationName &&
            item.pm10Value === pm10Value &&
            item.dataTime === dataTime
        );
        if (itemIndex !== -1) {
          updatedBookmarkList.splice(itemIndex, 1);
          setIsClicked(false);
        }
      }
      // Update local storage with updated bookmarked items
      localStorage.setItem('bookmarkedItems', JSON.stringify(updatedBookmarkList));
      console.log(updatedBookmarkList)
    };    
    return (
      <div className='bookmark' onClick={handleClick}>
        {isClicked ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}
      </div>
    );
  };

// 다른 함수들도 유사하게 작성될 것입니다.
