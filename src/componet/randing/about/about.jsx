import React, { useEffect, useRef, useState } from 'react';
import { FaGear } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Neondown from '../../neondown/neondow';
import './about.css';

function About() {
  const [rotation, setRotation] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const aboutInfoContentRef = useRef(null);

const handleScroll = () => {
  const aboutInfoContent = aboutInfoContentRef.current;
  const { scrollTop } = aboutInfoContent;
  console.log("Scroll position:", scrollTop);
  setScrollPosition(scrollTop);

  // 스크롤 픽셀 위치에 따라 회전 각도 계산
  const rotationIncrement = Math.ceil(scrollTop / 10) * 3;
  setRotation(rotationIncrement);
};

  useEffect(() => {
    const aboutInfoContent = aboutInfoContentRef.current;
    aboutInfoContent.addEventListener('scroll', handleScroll);

    return () => {
      aboutInfoContent.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div className='about-container'>
      <div className='about-img'>
        <img src="./images/profile.png" alt='나의이미지'/>
      </div>
      <div className='about-info-content' ref={aboutInfoContentRef}>
        <div className='about-info-title'>
          <p>나를 소개
            <span style={{ transform: `rotate(${rotation}deg)` }}>
              <FaGear />
            </span>
          </p>
        </div>
        <div className='about-info01'>
          <p>끈기와 밝은 애너지를 가진</p>
          <p><span className='about-info01-span01'>" 민덕기 "</span> 입니다.</p>
          <p>사람들과 소통하는걸 즐기고 협동심이 강하며</p>
          <p>새벽에도 치지지 않고 거리를 밝히는</p>
          <p>뒷골목의 <span className='about-info01-span02'> 전광판</span> 처럼</p>
          <p>지치지않고 발전하는 개발자가 되겠습니다</p>
        </div>
        <div className='about-info02'>
          <h2><span className={scrollPosition >= 250 ? 'about-info02-title-scorll' : ''}>개인 정보</span></h2>
          <p className={scrollPosition >= 220 ? 'about-info02-p01-scorll' : 'about-info02-p01-scorll-after'}>이름 : 민덕기</p>
          <p className={scrollPosition >= 220 ? 'about-info02-p02-scorll' : 'about-info02-p02-scorll-after'}>생년월일 : 1997년 9월23일</p>
          <p className={scrollPosition >= 220 ? 'about-info02-p03-scorll' : 'about-info02-p03-scorll-after'}>연락처 : 010-8948-9709</p>
          <p className={scrollPosition >= 220 ? 'about-info02-p04-scorll' : 'about-info02-p04-scorll-after'}>E-mail : alsejrrl9723@naver.com</p>
          <p className={scrollPosition >= 220 ? 'about-info02-p05-scorll' : 'about-info02-p05-scorll-after'}>Git-Hub : <Link to={'https://github.com/deokgeneral'} target='_blank'>
            https://github.com/deokgenera3
          </Link></p>
        </div>
        <div className='about-info03'>
          <h2>출신지 및 학력</h2>
          <p>최종학력 : 4년제 한신대학교 졸업</p>
          <p>전공 : 컴퓨터공학부</p>
          <p>거주지 : 경기도 양주시 고읍동 현대아이파크</p>
          <h2>개발자가 된다면 ?</h2>
          <p>프론트엔드 개발자가된다면 한 기업의 사이트를</p>
          <p>구현하거나 개발하여 서비스하는것이 저의 첫 목표입니다</p>
          <h2>마지막으로</h2>
          <p>대학교를 졸업 후 1년동안 전공을과 다른일을 하였지만</p>
          <p>나의 전공을살려 직업을 가지고싶어</p>
          <p>프론트엔드 개발자에 도전을하게 됐습니다</p>
          <p>부족하지만 포기하지 않는 끈기로 계속해서 성장하는 개발자다 되겠습니다.</p>
        </div>
      </div>
      <Neondown />
    </div>
  )
}

export default About;
