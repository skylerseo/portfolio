import React, { useState } from 'react'
import '../../../main.css'
import codegreen from '../../../assets/image/work/codegreen.png'
import etude from '../../../assets/image/work/etude-promotion-redesign-macbook.png'
import jbgd from '../../../assets/image/work/jbgd-macbook.png'
import phantom from '../../../assets/image/work/phantom-redesign-macbook-and-iphone.png'
import jo_malon from '../../../assets/image/work/jo-malone-home-redesign-macbook.png'
import sulbing from '../../../assets/image/work/sulbing-promotion-redesign-macbook.png'
import fiive from '../../../assets/image/work/fiive.jpg'

const Work = (props) => {
  const [frontEnd, setFrontEnd] = useState(true)
  const showFrontEndHandler = () => {
    setFrontEnd(true)
    setWebDesign(false)
    setBackEnd(false)
  }
  const [webDesign, setWebDesign] = useState(false)
  const showWebDesignHandler = () => {
    setWebDesign(true)
    setFrontEnd(false)
    setBackEnd(false)
  }
  const [backEnd, setBackEnd] = useState(false)
  const showBackEndHandler = () => {
    setBackEnd(true)
    setFrontEnd(false)
    setWebDesign(false)
  }

  return (
    <section className='work'>
      <h2>Work</h2>
      <div className='work_buttons'>
        <button type='button' onClick={showFrontEndHandler}>
          Front-End
        </button>
        <button type='button' onClick={showWebDesignHandler}>
          Web-Design
        </button>
        <button type='button' onClick={showBackEndHandler}>
          Back-End
        </button>
      </div>
      {frontEnd && (
        <div className='bundle_wrapper'>
          <div className='bundle'>
            <a href='https://fiive.me/' target='_blank' rel='noreferrer'>
              <img src={fiive} alt='' />
            </a>
            <div>
              <a href='https://fiive.me/' target='_blank' rel='noreferrer'>
                ⇢ Link
              </a>
              <p className='work_tag'>React - 반응형 웹 프론트</p>
              <p className='work_description'>
                피이브 웹사이트 기획 단계부터 참여 및 프론트단 기능구현을 담당하였습니다.
              </p>
            </div>
          </div>
          <div className='bundle'>
            <a href='https://codegreen.io/' target='_blank' rel='noreferrer'>
              <img src={codegreen} alt='' />
            </a>
            <div>
              <a href='https://codegreen.io/' target='_blank' rel='noreferrer'>
                ⇢ Link
              </a>
              <p className='work_tag'>React - 반응형 웹 프론트</p>
              <p className='work_description'>코드그린 웹사이트 프론트단 기능구현 및 유지보수를 담당하였습니다.</p>
            </div>
          </div>
        </div>
      )}
      {webDesign && (
        <div className='bundle_wrapper'>
          <div className='bundle'>
            <a
              href='https://skylerseo.github.io/posts/rolls-royce-phantom-detail-site-redesign/'
              target='_blank'
              rel='noreferrer'
            >
              <img src={phantom} alt='' />
            </a>
            <div>
              <a
                href='https://skylerseo.github.io/posts/rolls-royce-phantom-detail-site-redesign/'
                target='_blank'
                rel='noreferrer'
              >
                ⇢ Link
              </a>
              <p className='work_tag'>웹디자인</p>
              <p className='work_description'>롤스로이스 팬텀 re디자인</p>
            </div>
          </div>
          <div className='bundle'>
            <a href='https://skylerseo.github.io/posts/jo-malone-home-page-redesign/' target='_blank' rel='noreferrer'>
              <img src={jo_malon} alt='' />
            </a>
            <div>
              <a
                href='https://skylerseo.github.io/posts/jo-malone-home-page-redesign/'
                target='_blank'
                rel='noreferrer'
              >
                ⇢ Link
              </a>
              <p className='work_tag'>웹디자인</p>
              <p className='work_description'>조말론 'home page', 'about page' re디자인</p>
            </div>
          </div>
          <div className='bundle'>
            <a href='https://skylerseo.github.io/posts/etude-house-redesign/' target='_blank' rel='noreferrer'>
              <img src={etude} alt='' />
            </a>
            <div>
              <a href='https://skylerseo.github.io/posts/etude-house-redesign/' target='_blank' rel='noreferrer'>
                ⇢ Link
              </a>
              <p className='work_tag'>상세페이지 디자인</p>
              <p className='work_description'>에뛰드 프로모션 디자인</p>
            </div>
          </div>
          <div className='bundle'>
            <a href='https://skylerseo.github.io/posts/sulbing-promotion-redesign/' target='_blank' rel='noreferrer'>
              <img src={sulbing} alt='' />
            </a>
            <div>
              <a href='https://skylerseo.github.io/posts/sulbing-promotion-redesign/' target='_blank' rel='noreferrer'>
                ⇢ Link
              </a>
              <p className='work_tag'>상세페이지 디자인</p>
              <p className='work_description'>설빙 프로모션 디자인</p>
            </div>
          </div>
        </div>
      )}
      {backEnd && (
        <div className='bundle_wrapper'>
          <div className='bundle'>
            <a href='https://github.com/skylerseo/Desert-Shoppingmall-Team.JBGD' target='_blank' rel='noreferrer'>
              <img src={jbgd} alt='' />
            </a>
            <div>
              <a href='https://github.com/skylerseo/Desert-Shoppingmall-Team.JBGD' target='_blank' rel='noreferrer'>
                ⇢ Link
              </a>
              <p className='work_tag'>Java 팀 프로젝트</p>
              <p className='work_description'>
                Java 기반 하이브리드 웹앱, 디저트 쇼핑몰 '디저트에 자빠지다'입니다. Team.JBGD
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Work
