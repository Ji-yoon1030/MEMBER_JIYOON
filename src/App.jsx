import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Start from './MainPage/start_page';
import SignUp from './MainPage/signup_page';
import Quesion from './MainPage/question_page';
import Answer from './MainPage/answer_page';
import Side from './component/sidebar';
import SignIn from './MainPage/signin_page';

const ChangeBodyColor = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      document.body.style.backgroundColor = '#5B5E4A'; // 원하는 색상
    } else if (
      location.pathname === '/signup' ||
      location.pathname === '/signin'
    ) {
      document.body.style.backgroundColor = 'white'; // 원하는 색상
    } else if (
      location.pathname === '/question_page' ||
      location.pathname === '/answer_page'
    ) {
      document.body.style.backgroundColor = '#EFF1E3'; // 원하는 색상
    }

    // 컴포넌트 언마운트 시 원래 색상 복구
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [location]);

  return null;
};

function App() {
  return (
    <>
      <ChangeBodyColor />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/question_page" element={<Quesion />}></Route>
        <Route path="/answer_page" element={<Answer />}></Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/side" element={<Side />}></Route>
      </Routes>
    </>
  );
}

export default App;
