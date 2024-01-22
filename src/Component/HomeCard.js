
import homecard from '../Style/homecard.module.scss';
import { getCardColor, getDustState, getEmojiState } from './DustStatus';

export const HomeCard = (maparr) => {

  return (
    <div className={homecard.cardOuter}>
      {maparr && maparr.map((el, idx) => (
        <div key={idx} className={homecard.cardContainer} style={{ backgroundColor: getCardColor(el.pm10Value) }}>
          {/* <div className={homecard.cardWrapTop}>{idx + 1}위</div> */}
          <div className={homecard.cardWrapTop}>
            <div className={homecard.sidoName}>{el.sidoName}</div>
            <div className={homecard.stationName}>{el.stationName}</div>
          </div>
          <div className={homecard.cardWrapMiddle}>
            <div className={homecard.emoji}>{getEmojiState(el.pm10Value)}</div>
            <div className={homecard.dustState}>{getDustState(el.pm10Value)}</div>
            <div className={homecard.dustValue}>({el.pm10Value})</div>
          </div>
        </div>
      ))}
    </div>
  )
}