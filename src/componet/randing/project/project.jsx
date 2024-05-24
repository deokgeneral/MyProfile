import React from 'react'
import { Link } from 'react-router-dom'
import './project.css'

function Project() {
  return (
    <div className='project-contanier'>
      <div className='project-title'>
        <h2>My work</h2>
      </div>
      <div className='project-img-contanier'>
        <div className='project-img-box01'>
          <div className='project-img-box01-title'>
            <h3>MBTI별 강아지추천 사이트</h3>
          </div>
          <img src='/images/MPPM.png' alt='MPPM 이미지' />
            <div className='project-img-box01-info'>
            <p>개인의 'MBTI'와 어울리는</p>
            <p>강아지를 추천해주는 사이트입니다.</p>
            <div className='project-img-box01-info-hide'>
            <Link to="https://deokgeneral.github.io/MPPM/" target="_blank">사이트 들어가기</Link>
            </div>
            </div>
        </div>
        <div className='project-img-box02'>
          <div className='project-img-box02-title'>
            <h3>JS를 이용한 다양한 HTML</h3>
          </div>
          <div className='project-img02'>
            <h2>HTML</h2>
            <h2>CSS</h2>
            <h2>JS</h2>
          </div>
          <div className='project-img-box02-info'>
            <p>JS와 CSS를 이용하여 간단한</p>
            <p>기능들과 클론코딩을 해봤습니다.</p>
            <div className='project-img-box02-info-hide'>
            <Link to="https://github.com/deokgeneral/HTML-CSS-JS/tree/main" target="_blank">깃 허브이동하기</Link>
            </div>
          </div>
        </div>
        <div className='project-img-box03'>
          <div className='project-img-box03-title'>
            <h3>ProJect - Poomgo</h3>
          </div>
            <div className='project-img-box03_img'>
              <img src='/icon/poomgo_logo.png' alt='품고' />
            </div>
          <div className='project-img-box03-info'>
            <p>'Poomgo'사이트의 메인화면을</p>
            <p>개발해본 경험이있습니다.</p>
            <div className='project-img-box03-info-hide'>
            <Link to="https://poomgo.com/" target="_blank">사이트 들어가기</Link>
            </div>
          </div>
        </div>
        <div className='project-img-box04'>
          <div className='project-img-box04-title'>
            <h3>My Profile</h3>
          </div>
            <div className='project-img-box04_img'>
              <img src='/images/myprofile.png' alt='품고' />
            </div>
          <div className='project-img-box04-info'>
            <p>React를 사용하여</p>
            <p>포트폴리오사이트를 구현해봤습니다.</p>
            <div className='project-img-box04-info-hide'>
            <Link to="https://deok-s-portfolio.web.app" target="_blank">사이트 들어가기</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project