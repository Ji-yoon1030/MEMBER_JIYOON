import React, { useEffect, useRef, useState } from 'react';
import styles from '../css/sidebar.module.css';
import img1 from '../img/chevron-right.svg';
import img2 from '../img/chevron-left.svg';

const Sidebar = ({ width = 280, children }) => {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(width); // 사이드바 위치
  const side = useRef(null); // 사이드바 참조

  // 사이드바 토글
  const toggleMenu = () => {
    if (xPosition > 0) {
      setX(0); // 열림
      setOpen(true);
    } else {
      setX(width); // 닫힘
      setOpen(false);
    }
  };

  // 사이드바 외부 클릭 감지 및 닫기
  const handleClose = (e) => {
    if (side.current && !side.current.contains(e.target)) {
      setX(width);
      setOpen(false);
    }
  };

  // 외부 클릭 이벤트 리스너 추가 및 제거
  useEffect(() => {
    window.addEventListener('click', handleClose);
    return () => {
      window.removeEventListener('click', handleClose); // 클린업
    };
  }, [isOpen, width]); // 의존성 배열에 상태 추가

  return (
    <div className={styles.container}>
      <div
        ref={side}
        className={styles.sidebar}
        style={{
          width: `${width}px`,
          height: '100%',
          transform: `translateX(${-xPosition}px)`,
          transition: 'transform 0.3s ease-in-out', // 부드러운 애니메이션
        }}
      >
        {/* 토글 버튼 */}
        <button onClick={toggleMenu} className={styles.button}>
          {isOpen ? (
            <img src={img2} alt="close button" className={styles.closeBtn} />
          ) : (
            <img src={img1} alt="open button" className={styles.openBtn} />
          )}
        </button>

        {/* 사이드바 콘텐츠 */}
        <div className={styles.content}>{children}djsljdlsjl</div>
      </div>
    </div>
  );
};

export default Sidebar;
