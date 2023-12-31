import React from 'react'
import { useState, useEffect } from 'react';
import { DataUrlManger } from './DataUrlManger';
import axios from 'axios'; // Import Axios

// 비동기로 전국 데이터를 한번만 가져오는것만 함수
// 매시각 정각마다 미세먼지가 데이터가 리셋되니 때에 맞게 랜더링 시키기
export function AllDataGet() {
  const [dustData, setDustData] = useState([]);

  useEffect(() => { 
    const fetchData = async () => { 
      try {
        // Use axios instead of fetch : get,post를 정확히 지정할 수 있기때문에
        const response = await axios.get(DataUrlManger("전국", 650)); 
        /* 650이라고 하드코딩한 이유 : 거의 늘어날일이 없는 관측소 숫자를 메서드로 불러와서 성능을 떨어뜨리는 것보다 관측소가 늘어날때에 맞춰서 숫자를 바꿔주는게
          이득이라고 판단해서 입니다.
        */
        const data = response.data.response.body.items;
        setDustData([...data])

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); // 전체 데이터 한번만 불러옴

  return (dustData);
}
