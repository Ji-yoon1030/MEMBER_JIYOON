// import React from 'react';
// import Sidebar from '../component/sidebar';
// import answer from '../css/answer.module.css';
// import { useNavigate } from 'react-router-dom';

// function Answer() {
//   const navigate = useNavigate();
//   const handleClick = () => {
//     navigate('/question_page');
//   };
//   return (
//     <>
//       <div className={answer.cont}>
//         <Sidebar />
//         <div className={answer.box}>
//           <div className={answer.section1}>
//             <div className={answer.profile}></div>
//             <div className={answer.name}>에디</div>
//             <div className={answer.introduce}>
//               GDG 프론트엔드 멤버 컴퓨터 공학과 23학번 입니다!
//             </div>
//           </div>
//           <div className={answer.section2}>
//             <div className={answer.emo_sec}>
//               <p className={answer.emo_face}>😀</p>
//               <p className={answer.emo_text}>친해져요!</p>
//             </div>
//             <div className={answer.emo_sec}>
//               <p className={answer.emo_face}>🤔</p>
//               <p className={answer.emo_text}>궁금해요!</p>
//             </div>
//             <div className={answer.emo_sec}>
//               <p className={answer.emo_face}>😍</p>
//               <p className={answer.emo_text}>약속잡아요!</p>
//             </div>
//             <div className={answer.emo_sec}>
//               <div className={answer.emo_face}>❓</div>
//               <p className={answer.emo_text}>기타!</p>
//             </div>
//           </div>
//           <div className={answer.section3}>
//             <div className={answer.title_sec}>
//               <p className={answer.title}>제목</p>
//               <input className={answer.title_input} type="text" />
//             </div>
//             <div className={answer.title_sec}>
//               <p className={answer.title}>내용</p>
//               <input className={answer.title_input2} type="text" />
//             </div>
//           </div>
//           <div className={answer.section4}>
//             <button className={answer.btn} onClick={handleClick}>
//               질문하기
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Answer;

import React, { useState } from 'react';
import Sidebar from '../component/sidebar';
import answer from '../css/answer.module.css';
import { useNavigate } from 'react-router-dom';

function Answer() {
  const navigate = useNavigate();

  // 입력값 상태 관리
  const [targetId, setTargetId] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // 질문 등록 API 호출
  const handleSubmit = async () => {
    const payload = {
      targetId: Number(targetId), // 숫자 변환
      subject,
      content,
    };

    try {
      const response = await fetch('http://3.39.224.92:8080/api/question  ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSuccess('질문이 성공적으로 등록되었습니다!');
        setError('');
        navigate('/question_page'); // 등록 후 페이지 이동
      } else {
        const data = await response.json();
        setError(data.message || '질문 등록에 실패했습니다.');
        setSuccess('');
      }
    } catch (err) {
      setError('서버와의 통신에 실패했습니다.');
      setSuccess('');
    }
  };

  return (
    <>
      <div className={answer.cont}>
        <Sidebar />
        <div className={answer.box}>
          <div className={answer.section1}>
            <div className={answer.profile}></div>
            <div className={answer.name}>에디</div>
            <div className={answer.introduce}>
              GDG 프론트엔드 멤버 컴퓨터 공학과 23학번 입니다!
            </div>
          </div>
          <div className={answer.section2}>
            <div className={answer.emo_sec}>
              <p className={answer.emo_face}>😀</p>
              <p className={answer.emo_text}>친해져요!</p>
            </div>
            <div className={answer.emo_sec}>
              <p className={answer.emo_face}>🤔</p>
              <p className={answer.emo_text}>궁금해요!</p>
            </div>
            <div className={answer.emo_sec}>
              <p className={answer.emo_face}>😍</p>
              <p className={answer.emo_text}>약속잡아요!</p>
            </div>
            <div className={answer.emo_sec}>
              <div className={answer.emo_face}>❓</div>
              <p className={answer.emo_text}>기타!</p>
            </div>
          </div>
          <div className={answer.section3}>
            <div className={answer.title_sec}>
              {/* <p className={answer.title}>타겟 ID</p>
              <input
                className={answer.title_input}
                type="number"
                value={targetId}
                onChange={(e) => setTargetId(e.target.value)}
              /> */}
            </div>
            <div className={answer.title_sec}>
              <p className={answer.title}>제목</p>
              <input
                className={answer.title_input}
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className={answer.title_sec}>
              <p className={answer.title}>내용</p>
              <input
                className={answer.title_input2}
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </div>
          <div className={answer.section4}>
            {error && <p className={answer.error}>{error}</p>}
            {success && <p className={answer.success}>{success}</p>}
            <button className={answer.btn} onClick={handleSubmit}>
              질문하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Answer;
