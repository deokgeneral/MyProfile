import React from 'react';
import { HiCursorClick } from "react-icons/hi";
import "./main.css";

function Main() {
  return (
    <div className='main-contanier'>
      <div className='main-title'>
        <p>Front-End</p>
        <p>Front-End</p>
        <p>프론트엔드 개발자 "민덕기"입니다.</p>
      </div>
      <div className='main-img'>
        <button className='main-img-btn'>
          <img src='./images/my.png' alt='프로필이미지' />
        </button>
         <HiCursorClick className='img-icon' />
      </div>
    </div>
  )
}

export default Main