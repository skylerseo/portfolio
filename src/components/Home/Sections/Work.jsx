import React from 'react'
import '../../../main.css'
import codegreen from '../../../assets/image/work/codegreen.png'
import etude from '../../../assets/image/work/etude-promotion-redesign-macbook.png'
import jbgd from '../../../assets/image/work/jbgd-macbook.png'
import phantom from '../../../assets/image/work/phantom-redesign-macbook-and-iphone.png'
import jo_malon from '../../../assets/image/work/jo-malone-home-redesign-macbook.png'
import sulbing from '../../../assets/image/work/sulbing-promotion-redesign-macbook.png'

const Work = (props) => {
  return (
    <section className='work'>
      <h2>Work</h2>
      <div className='bundle'>
        <img src={codegreen} alt='' />
        <div>
          https://codegreen.io/
          <p>React - 반응형 웹 유지보수</p>
          <p>약 4개월간 코드그린 반응형 사이트 프론트단 유지보수 및 기능구현을 담당하였습니다.</p>
        </div>
      </div>
      <div className='bundle'>
        <img src={phantom} alt='' />
        <div>
          https://skylerseo.github.io/posts/rolls-royce-phantom-detail-site-redesign/
          <p>웹디자인</p>
          <p>rolls-royce phantom redesign</p>
        </div>
      </div>
      <div className='bundle'>
        <img src={jo_malon} alt='' />
        <div>
          https://skylerseo.github.io/posts/jo-malone-home-page-redesign/
          <p>웹디자인</p>
          <p>Jo Malone 'home page' and 'about page' redesign</p>
        </div>
      </div>
      <div className='bundle'>
        <img src={etude} alt='' />
        <div>
          https://skylerseo.github.io/posts/etude-house-redesign/
          <p>상세페이지 디자인</p>
          <p>에뛰드 프로모션 디자인</p>
        </div>
      </div>
      <div className='bundle'>
        <img src={sulbing} alt='' />
        <div>
          https://skylerseo.github.io/posts/sulbing-promotion-redesign/
          <p>상세페이지 디자인</p>
          <p>설빙 프로모션 디자인</p>
        </div>
      </div>
      <div className='bundle'>
        <img src={jbgd} alt='' />
        <div>
          https://github.com/skylerseo/Desert-Shoppingmall-Team.JBGD
          <p>Java 팀 프로젝트</p>
          <p>Java 기반 하이브리드 웹앱, 디저트 쇼핑몰 '디저트에 자빠지다'입니다. Team.JBGD</p>
        </div>
      </div>
    </section>
  )
}

export default Work
