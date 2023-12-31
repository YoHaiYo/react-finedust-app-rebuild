import React from 'react';

const SortControl = ({ sortNum, sortDirection, searchData, onSortNumChange, onSortDirectionChange, onSearchDataChange }) => {
  return (
    <div>
      {/* <label htmlFor="searchData">검색 :</label>
      <input
        type="text"
        id="searchData"
        value={searchData}
        onChange={onSearchDataChange}
      /> */}
      <label htmlFor="sortNum">정렬 개수:</label>
      <input
        type="number"
        id="sortNum"
        value={sortNum}
        onChange={onSortNumChange}
      />
      <label htmlFor="sortDirection">정렬 방향:</label>
      <select
        id="sortDirection"
        value={sortDirection}
        onChange={onSortDirectionChange}
      >
        <option value="tobad">미세먼지 안 좋은 곳부터 보기</option>
        <option value="togood">미세먼지 좋은 곳부터 보기</option>
      </select>
    </div>
  );
};

export default SortControl;
