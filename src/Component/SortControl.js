import React from 'react';

const SortControl = ({ sortNum, sortDirection, onSortNumChange, onSortDirectionChange }) => {
  return (
    <div>
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
        <option value="내림차순">미세먼지 안 좋은 곳부터 보기</option>
        <option value="오름차순">미세먼지 좋은 곳부터 보기</option>
      </select>
    </div>
  );
};

export default SortControl;
