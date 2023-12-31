import king from './Style/king.module.scss';
import React, { useState } from 'react';
import Nav from './Nav'
import MainContents from './MainContents'

export default function King() {

  return (
    <section className={king.mainwrap}>
      <Nav/>
      <MainContents/>
    </section>
  );
}
