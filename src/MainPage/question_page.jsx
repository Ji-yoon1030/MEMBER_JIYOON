import React from 'react';
import Card from '../component/card';
import Sidebar from '../component/sidebar';
import question from '../css/question.module.css';

function Question() {
  return (
    <>
      <div className={question.cont}>
        <Sidebar />
        <div className={question.cont_card}>
          <div className={question.cont_top}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className={question.cont_bottom}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default Question;
