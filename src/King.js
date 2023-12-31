import king from './Style/king.module.scss';
import React, { useState } from 'react';
import { DustCard } from './Component/DustCard';
import  Rank from './Component/Rank';
import BookmarksList from './Component/BookmarkList';

export default function King() {

  return (
    <section className={king.common}>
      <h3>기본</h3>
      <DustCard selectedSido="서울" numOfRows={3} />
      
      <Rank />
      <h3>북마크리스트</h3>
      <BookmarksList />
    </section>
  );
}
