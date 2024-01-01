import React from 'react'
import dustcriteria from '../Style/dustcriteria.module.scss';

export default function DustCriteria() {
  return(
    <div className={dustcriteria.wrap}>
      <div className={`${dustcriteria.criteria} ${dustcriteria.good}`}>😄좋음:~30</div>
      <div className={`${dustcriteria.criteria} ${dustcriteria.soso}`}>🙂보통:~80</div>
      <div className={`${dustcriteria.criteria} ${dustcriteria.bad}`}>😭나쁨:~150</div>
      <div className={`${dustcriteria.criteria} ${dustcriteria.verybad}`}>👿매우나쁨:150~</div>
    </div>
  )
}