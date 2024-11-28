import React from 'react';
import start from '../../src/css/start.module.css';
import { ReactComponent as Leaf } from '../img/Leaf.svg';
import { ReactComponent as Pot } from '../img/Pot.svg';
import { useNavigate } from 'react-router-dom';

function Start() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/signin');
  };

  return (
    <>
      <div className={start.cont}>
        <div className={start.div}>
          <h1 className={start.title}>
            Plan
            <div className={start.title_div}>
              <Leaf className={start.Leaf} width="144.38" height="59"></Leaf>
              <span className={start.title_T}>T</span>
            </div>
            alk
          </h1>
          <p className={start.sub_FR}>
            La bonne conversation doit fleurir naturellement, comme les fleurs
            dans un jardin
          </p>
          <p className={start.sub_KR}>
            좋은 대화는 정원에서 꽃이 피는 것처럼 자연스럽게 피어야 한다
          </p>
        </div>
        <div className={start.pot_cont}>
          <Pot
            onClick={handleClick}
            className={start.pot}
            width="200"
            height="200.31"
          ></Pot>
        </div>
      </div>
    </>
  );
}

export default Start;
