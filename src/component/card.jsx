import React, { useEffect, useRef } from 'react';
import card from '../css/card.module.css';
import { useNavigate } from 'react-router-dom';

function Card() {
  const navigate = useNavigate();
  const handleClick = () => {
    if (!cardRef.current) {
      console.warn('Card is not mounted');
      return;
    }
    navigate('/answer_page');
  };

  const cardRef = useRef(null);

  useEffect(() => {
    return () => {
      cardRef.current = null; // 컴포넌트 언마운트 시 참조 해제
    };
  }, []);
  return (
    <>
      <div className={card.cont} ref={cardRef}>
        <div className={card.card} onClick={handleClick}>
          <div className={card.card_top}>
            <div className={card.profile}></div>
            <div className={card.name}>에디</div>
          </div>
          <div className={card.card_bottom}>
            <div className={card.introduce}>
              GDG 프론트엔드 멤버 컴퓨터 공학과 23학번 입니다!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
