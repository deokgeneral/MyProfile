import React from 'react'
import "./skill.css"

function Skill() {
  return (
    <div className='skill-container'>
      <div className='skill-title'>
        <h2>사용해본 기술 및 스택</h2>
      </div>

      <div className='skill-img-container'>
        <div className='skill-img-box01'>
          <img src='./icon/html.png' alt='html' />
          <img src='./icon/html-css.png' alt='html-css' />
          <img src='./icon/react.png' alt='리액트' className="react-spin" />
          <img src='./icon/react-router.png' alt='리액트라우터' />
        </div>
        <div className='skill-img-box02'>
          <img src='./icon/js-icon.png' alt='JS' />
          <img src='./icon/nodejs.png' alt='노드제이에스' />
          <img src='./icon/axios.png' alt='액시오스' id='axios' /> 
          <img src='./icon/github.png' alt='깃허브' id='github'/> 
        </div>
      </div>

    </div>
  )
}

export default Skill