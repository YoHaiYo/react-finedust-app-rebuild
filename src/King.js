import React from 'react'
import { useEffect } from 'react';
import { GetApiData, ProcessData } from './Data/DataUrlManger';
import { DustCard } from './Component/DustCard';
import { DataTest } from './Component/DataTest';
import { DataFetch } from './Component/DataFetch';

export default function King() {

  return (
    <>
      <h3>기본보기</h3>
      <DustCard selectedSido="서울" numOfRows={3}/>
      <h3>순위보기</h3>
      <DataTest selectedSido="전국" numOfRows={20}/>
    </>
  )
}
