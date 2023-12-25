import React from 'react'
import { useState, useEffect } from 'react';

/// 에어코리아 대기오염 정보 API로 접근하기 위한 URL 메이킹 함수.
export function DataUrlManger(selectedSido, numOfRows) {
  // http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=서울&pageNo=1&numOfRows=100&returnType=json&serviceKey=Ikzw3SfvaxIdli8OxevjDkVYC5iCdUFCiSnzQXNuT81qkRZuwGA%2B9GTuGyRDBE7rDIMg3%2BkQJaRxk3ulGEMe9A%3D%3D&ver=1.0
  const apiKey = 'Ikzw3SfvaxIdli8OxevjDkVYC5iCdUFCiSnzQXNuT81qkRZuwGA+9GTuGyRDBE7rDIMg3+kQJaRxk3ulGEMe9A==';
  const baseURL = 'https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty';
  const queryParams = {    
    // 시도이름(18개) : 전국, 서울, 부산, 대구, 인천, 광주, 대전, 울산, 경기, 강원, 충북, 충남, 전북, 전남, 경북, 경남, 제주, 세종
    sidoName: selectedSido,
    pageNo: 1,
    numOfRows: numOfRows,
    returnType: 'json',
    serviceKey: apiKey,
    ver: '1.0',
  };
  const queryString = Object.keys(queryParams)
    // encodeURIComponent : 바닐라JS 문자인코딩 메서드. 이걸 쓰는게 속도 제일 빨랐음.
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
    .join('&');
  const fulldataurl = `${baseURL}?${queryString}`;
  console.log(`Data URL : ${fulldataurl}`)

  return (fulldataurl);
}


