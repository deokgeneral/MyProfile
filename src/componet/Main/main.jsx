import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Neondown from '../neonDown/neondown';
import Succle from '../succle/succle';
import "./main.css";

function Main() {
  const [btnClicked, setBtnClicked] = useState(false);

  const handleClick = () => {
    setBtnClicked(prevState => !prevState);
  };

  return (
    <div className='main-contanier'>
      <div className='main-title'>
        <p>Front-End</p>
        <p>Front-End</p>
        <p>프론트엔드 개발자 <span>"민덕기"</span>입니다.</p>
      </div>
      <div className='main-img'>
        <button className={btnClicked ? 'main-img-btn-clicked' : 'main-img-btn'} onClick={handleClick}>
          <img src='./images/my.png' alt='프로필이미지' />
        </button>
        <div className={btnClicked ? 'main-info show' : 'main-info'}>
          <p>이름 : 민덕기</p>
          <p>출생년도 : 1997년 9월 23일</p>
          <p>전화번호 : 010-8948-9709</p>
          <p>E-Mail : alsejrrl9723@naver.com</p>
          <p>Github : <Link to="https://github.com/deokgeneral">https://github.com/deokgeneral</Link></p>
        </div>
      </div>
      <Succle />
      <Neondown />
    </div>
  )
}

export default Main;
