import React, { useState } from 'react';
import signup from '../css/signup.module.css';
import { ReactComponent as Icon } from '../img/Icon.svg';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://3.39.224.92:8080/api/user/signup';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const payload = {
    email,
    password1: password, // password1 필드로 전달
    password2: confirmPassword, // password2 필드로 전달
    username,
  };

  console.log('Request Payload:', payload);

  const handleSignUp = async () => {
    // 비밀번호 확인
    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

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
        alert('회원가입이 완료되었습니다!');
        navigate('/signin');
      } else {
        setError(data.message || '회원가입에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('서버와의 통신에 실패했습니다.');
    }
  };

  return (
    <>
      <div className={signup.cont}>
        <div className={signup.div}>
          <h1 className={signup.title_h1}>
            회<Icon className={signup.Icon} width="89.2"></Icon>
            <span className={signup.title}>원가</span>입
          </h1>
        </div>
      </div>
      <div className={signup.input_cont}>
        <div className={signup.input_input}>
          <input
            className={signup.input}
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={signup.input}
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className={signup.input}
            type="password"
            placeholder="비밀번호 확인"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <input
            className={signup.input}
            placeholder="사용자 이름"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {error && <p className={signup.error}>{error}</p>}
        <button className={signup.btn} onClick={handleSignUp}>
          회원가입 완료
        </button>
      </div>
    </>
  );
}

export default SignUp;
