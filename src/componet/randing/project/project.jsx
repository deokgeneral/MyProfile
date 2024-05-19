import React from 'react'
import { Link } from 'react-router-dom'
import './project.css'

function Project() {
  return (
    <div className='project-contanier'>
      <div className='project-title'>
        <h2>만들어본 사이트</h2>
      </div>
      <div className='project-img-contanier'>
        <div className='project-img-box01'>
          <div className='project-img-box01-title'>
            <h3>1. MBTI별 강아지추천 사이트</h3>
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
            <h3>2. JS를 이용한 다양한 HTML</h3>
          </div>
          <img src='/images/MPPM.png' alt='MPPM 이미지' />
          <div className='project-img-box02-info'>
            <p>개인의 'MBTI'와 어울리는</p>
            <p>강아지를 추천해주는 사이트입니다.</p>
            <div className='project-img-box02-info-hide'>
            <Link to="https://deokgeneral.github.io/MPPM/" target="_blank">깃 허브이동하기</Link>
            </div>
          </div>
        </div>
        <div className='project-img-box03'>
          <div className='project-img-box03-title'>
            <h3>3. MBTI별 강아지추천 사이트</h3>
          </div>
          <img src='/images/MPPM.png' alt='MPPM 이미지' />
          <div className='project-img-box03-info'>
            <p>개인의 'MBTI'와 어울리는</p>
            <p>강아지를 추천해주는 사이트입니다.</p>
            <div className='project-img-box03-info-hide'>
            <Link to="https://deokgeneral.github.io/MPPM/" target="_blank">사이트 들어가기</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project