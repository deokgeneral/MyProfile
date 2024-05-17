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
          <p>WHO IS 덕기
            <span style={{ transform: `rotate(${rotation}deg)` }}>
              <FaGear />
            </span>
          </p>
        </div>
        <div className='about-info01'>
          <p>끈기와 밝은 애너지를 가진</p>
          <p><span className='about-info01-span01'>" 민덕기 "</span> 입니다.</p>
          <p>사람과 소통하는걸 즐기고 협동심이 강하며</p>
          <p>새벽에도 치지지 않고 거리를 밝히는</p>
          <p>뒷골목의 <span className='about-info01-span02'> 전광판</span> 처럼</p>
          <p>끝까지 성장하는 개발자가 되겠습니다</p>
        </div>
        <div className='about-info02'>
          <h2><span className={scrollPosition >= 250 ? 'about-info03-title-scorll' : ''}>개인 정보</span></h2>
          <p className={scrollPosition >= 220 ? 'about-info02-p01-scorll' : 'about-info02-p01-scorll-after'}>이름 : <span className='about-info02-span01'>민덕기</span></p>
          <p className={scrollPosition >= 220 ? 'about-info02-p02-scorll' : 'about-info02-p02-scorll-after'}>생년월일 : <span className='about-info02-span02'>1997년 9월 23일</span></p>
          <p className={scrollPosition >= 220 ? 'about-info02-p03-scorll' : 'about-info02-p03-scorll-after'}>연락처 : <span className='about-info02-span03'>010-8948-9709</span></p>
          <p className={scrollPosition >= 220 ? 'about-info02-p04-scorll' : 'about-info02-p04-scorll-after'}>E-mail : <span className='about-info02-span04'>alsejrrl9723@naver.com</span></p>
          <p className={scrollPosition >= 220 ? 'about-info02-p05-scorll' : 'about-info02-p05-scorll-after'}>Git-Hub : <Link to={'https://github.com/deokgeneral'} target='_blank'>
            https://github.com/deokgenera3
          </Link></p>
        </div>
        <div className='about-info03'>
          <h2><span className={scrollPosition >= 677 ? 'about-info03-title-scorll' : ''}>학력 및 출신지</span></h2>
          <p>최종학력 : <span className={`about-info03-span ${scrollPosition >= 677 ? 'underline' : ''}`}>한신대학교</span> 졸업</p>
          <p>전공 : <span className='about-info01-span02'> 컴퓨터공학부</span></p>
          <p>거주지 : 경기도 양주시 고덕로 340-12</p>
          <h2><span className={scrollPosition >= 850 ? 'about-info03-title-scorll' : ''}>입사 후 포부</span></h2>
          <p><span className={`about-info03-span ${scrollPosition >= 850 ? 'underline' : ''}`}>한 기업의 사이트를 개발하여</span></p>
          <p>정식으로 유저들에게 <span className='about-info01-span02'>서비스</span>하는 것이</p>
          <p>저의 첫 목표입니다.</p>
          <h2><span className={scrollPosition >= 1096 ? 'about-info03-title-scorll' : ''}>끝내며...</span></h2>
          <p>전공을살려 <span className='about-info01-span02'>프론트엔드 개발자</span>에 </p>
          <p>도전하게 됐습니다</p>
          <p>부족하지만 포기하지 않는 끈기로</p>
          <p><span className={`about-info03-span ${scrollPosition >= 1200 ? 'underline' : ''}`}>계속해서 성장해가는 개발자가 되겠습니다.</span></p>
        </div>
      </div>
    <Neondown className={scrollPosition >= 1180 ? 'flip-vertical' : 'neondown-conatainer'} />
    </div>
  )
}

export default About;
