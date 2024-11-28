import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signin from '../css/signin.module.css';
import { ReactComponent as Icon } from '../img/Icon.svg';

const API_URL = 'http://3.39.224.92:8080/api/user/login';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const payload = {
    email,
    password: password, // password1 필드로 전달
  };

  console.log('Request Payload:', payload);

  const handleSignIn = async () => {
    const payload = {
      email,
      password, // 서버가 요구하는 필드 이름에 맞춤
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // JSON 요청
        },
        body: JSON.stringify(payload), // 요청 본문
      });

      const contentType = response.headers.get('Content-Type');

      let data;
      if (contentType && contentType.includes('application/json')) {
        // JSON 형식의 응답 처리
        data = await response.json();
      } else {
        // 텍스트 형식의 응답 처리
        data = await response.text();
      }

      console.log('Response Status:', response.status);

      if (response.ok) {
        alert('로그인이 완료되었습니다!');
        navigate('/question_page');
      } else {
        setError(data.message || '로그인에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('서버와의 통신에 실패했습니다.');
    }
  };
  return (
    <>
      <div className={signin.cont}>
        <div className={signin.div}>
          <h1 className={signin.title_h1}>
            로<Icon className={signin.Icon} width="89.2"></Icon>
            <span className={signin.title}>그</span>인
          </h1>
        </div>
      </div>
      <div className={signin.input_cont}>
        <div className={signin.input_input}>
          <input
            className={signin.input}
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // 이메일 입력값 상태 업데이트
          />
          <input
            className={signin.input}
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // 비밀번호 입력값 상태 업데이트
          />
        </div>
        {error && <p className={signin.error}>{error}</p>}{' '}
        {/* 에러 메시지 출력 */}
        <button className={signin.btn} onClick={handleSignIn}>
          로그인
        </button>
        <a href="/signup" className={signin.signup}>
          회원가입
        </a>
      </div>
    </>
  );
};

export default SignIn;
