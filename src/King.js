import React, { useState } from 'react';
import { DustCard } from './Component/DustCard';
import { DataSort } from './Component/DataSort';
import BookmarksList from './Component/BookmarkList';
import king from './Style/king.module.scss';

export default function King() {
  const [sortNum, setSortNum] = useState(5);
  const [sortDirection, setSortDirection] = useState("내림차순");

  const handleSortNumChange = (e) => {
    setSortNum(parseInt(e.target.value, 10));
  };

  const handleSortDirectionChange = (e) => {
    setSortDirection(e.target.value);
  };

  return (
    <section className={king.common}>
      <h3>기본</h3>
      <DustCard selectedSido="서울" numOfRows={3} />
      <h3>순위보기</h3>
      <div>
        <label htmlFor="sortNum">정렬 개수:</label>
        <input
          type="number"
          id="sortNum"
          value={sortNum}
          onChange={handleSortNumChange}
        />
      </div>
      <div>
        <label htmlFor="sortDirection">정렬 방향:</label>
        <select
          id="sortDirection"
          value={sortDirection}
          onChange={handleSortDirectionChange}
        >
          <option value="내림차순">미세먼지안좋은곳부터보기</option>
          <option value="오름차순">미세먼지좋은곳부터보기</option>
        </select>
      </div>
      <DataSort sortNum={sortNum} sortDirection={sortDirection} />
      <h3>북마크리스트</h3>
      <BookmarksList />
    </section>
  );
}
