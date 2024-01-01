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