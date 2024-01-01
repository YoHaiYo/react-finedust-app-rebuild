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