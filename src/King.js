import React from 'react'
import { useEffect, useState } from 'react';
import { DustCard } from './Component/DustCard';
import { DataSort } from './Component/DataSort';
export default function King() {
  const [sortNum, setSortNum] = useState(5);


  return (
    <>
      <h3>기본보기</h3>
      <DustCard selectedSido="서울" numOfRows={3}/>
      <h3>순위보기</h3>
      <input
        type="number"
        value={sortNum}
        onChange={(e) => setSortNum(e.target.value)}
      />
      <DataSort sortNum={sortNum} sortDirection={"내림차순"}/>
    </>
  )
}
