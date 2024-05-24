import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './about.css';
//아이콘 임포트
import { FaGithub, FaSchoolFlag } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdPeopleAlt } from "react-icons/md";

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
      <div className='about-img-box'>
        <img src="./images/profile.jpeg" alt='나의이미지' />
        <div className='about-info01'>
          <p>끈기와 밝은 애너지를 가진</p>
          <p><span className='about-info01-span01'>민덕기</span> 입니다.</p>
          <p>새벽에도 지치지 않고 거리를 밝히는</p>
          <p>뒷골목의 <span className='about-info01-span02'> 전광판</span> 처럼</p>
          <p>끝까지 성장하는 개발자가 되겠습니다</p>
        </div>
      </div>
      <div className='about-info-content' ref={aboutInfoContentRef}>
        <div className='reason'>
          <h2><span className={scrollPosition >= 0 ? 'about-title-scorll' : ''}>MY THINK ?</span></h2>
          <p>제가 생각하는 옳은 프론트엔드 개발자의 모습은</p>
          <p>최신 트렌드와 기술을 빠르게 캐치하고</p>
          <p>유연한 생각과 색다른 아이디어로</p>
          <p>사용자들의 니즈를 충족시켜주는 것이라 생각합니다.</p>
        </div>

        <div className='about-info02'>
          <h2><span className={scrollPosition >= 158 ? 'about-title-scorll' : ''}>MY INFO</span></h2>
          <div className='about-info02_box'>
            <div className={scrollPosition >= 170 ? 'about-info02-p01-scroll' : 'about-info02-p01'}>
              <MdPeopleAlt />
              <div>
                <p>이름</p>
                <p>민덕기</p>
              </div>
            </div>
            <div className={scrollPosition >= 170 ? 'about-info02-p02-scroll' : 'about-info02-p02'}>
              <LiaBirthdayCakeSolid />
              <div>
                <p>태어난날</p>
                <p>1997.09.23</p>
              </div>
            </div>
          </div>
          <div className='about-info02_box'>
            <div className={scrollPosition >= 170 ? 'about-info02-p03-scroll' : 'about-info02-p03'}>
              <IoCall />
              <div>
                <p>전화번호</p>
                <p>010-8948-9709</p>
              </div>
            </div>
            <div className={scrollPosition >= 170 ? 'about-info02-p04-scroll' : 'about-info02-p04'}>
              <IoMdMail />
              <div>
                <p>이메일</p>
                <p>alsejrrl9723@naver.com</p>
              </div>
            </div>
          </div>
          <div className='about-info02_box'>
            <div className={scrollPosition >= 170 ? 'about-info02-p05-scroll' : 'about-info02-p05'}>
              <FaGithub />
              <div>
                <p>깃 허브</p>
                <Link to={'https://github.com/deokgeneral'} target='_blank'>깃 허브가기</Link>
              </div>
            </div>
            <div className={scrollPosition >= 170 ? 'about-info02-p06-scroll' : 'about-info02-p06'}>
              <FaSchoolFlag />
              <div>
                <p>학력</p>
                <p>한신대학교</p>
              </div>
            </div>
          </div>
        </div>

        <div className='about-info03'>
          <div className='about-info03-skill'>
            <h2><span className={scrollPosition >= 800 ? 'about-title-scorll' : ''}>SKILLS</span></h2>
            <div className='about-info03-skill-frontend'>
              <h3>Frontend</h3>
              <div className='about-info03-skill-frontend-imgbox'>
                <img src='./icon/html.png' alt='html' />
                <img src='./icon/html-css.png' alt='html-css' />
                <img src='./icon/html-js.png' alt='html-js' />
                <img src='./icon/react.png' alt='react' />
                <img src='./icon/reactrouter_logo.png' alt='react' />
                <img src='./icon/vite_logo.png' alt='react' />
              </div>
              </div>
              <div className='about-info03-skill-backend'>
                <h3>Backend</h3>
                <div className='about-info03-skill-backend-imgbox'>
                <img src='./icon/firebase.png' alt='html' />
                <img src='./icon/axios.png' alt='html-css' />
                <img src='./icon/node-js_icon.png' alt='html-js' />
                </div>
            </div>
              <div className='about-info03-skill-versioncontrol'>
                <h3>Version Control</h3>
                <div className='about-info03-skill-versioncontrol-imgbox'>
                <img src='./icon/github.png' alt='html' />
                <img src='./icon/git-icon.png' alt='html-css' />
                </div>
              </div>
          </div>

          <div className='about-info03-02'>
            {/* <h2><span className={scrollPosition >= 2250 ? 'about-title-scorll' : ''}>Goovley</span></h2>
            <div className='speech-bubble-box speech-bubble-box-right'>  
              <div className='speech-bubble'>
                <p></p>
                <p>s</p>
                <p>s</p>
                <p>s</p>
              </div>
            </div>    */}
            <h2><span className={scrollPosition >= 2400 ? 'about-title-scorll' : ''}>FINALLY</span></h2>
            <div className='speech-bubble-box speech-bubble-box-left'>  
              <div className='speech-bubble'>
                <p>이 웹사이트를 만들게 된 이유는</p>
                <p>남들과 차별화된 사이트를 만들고 싶었기 때문입니다.</p>
                <p>저는 창의적인 아이디어로 유저들의 니즈를 충족시키는</p>
                <p>프론트엔드 개발자가 되기를 목표로 하고 있습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
