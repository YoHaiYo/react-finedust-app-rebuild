import king from './Style/king.module.scss';
import React, { useState } from 'react';
import { DustCard } from './Component/DustCard';
import { DataSort } from './Component/DataSort';
import BookmarksList from './Component/BookmarkList';
import SortControl from './Component/SortControl';

export default function King() {
  const [sortNum, setSortNum] = useState(5);
  const [sortDirection, setSortDirection] = useState("내림차순");
  const [searchData, setSearchData] = useState("정자");

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
      <h3>검색 및 순위보기</h3>
      <SortControl
        sortNum={sortNum}
        sortDirection={sortDirection}
        searchData={searchData}
        onSortNumChange={handleSortNumChange}
        onSortDirectionChange={handleSortDirectionChange}
        onSearchDataChange={setSearchData}
      />
      <DataSort sortNum={sortNum} sortDirection={sortDirection} />
      <h3>북마크리스트</h3>
      <BookmarksList />
    </section>
  );
}
