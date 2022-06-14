import React from 'react'
import '../../../main.css'
import smec from '../../../assets/image/about/smec.png'
import thejoeun from '../../../assets/image/about/thejoeun.jpeg'
import pureblack from '../../../assets/image/about/pureblack.webp'
import codegreen from '../../../assets/image/about/codegreen.webp'
import monsternplay from '../../../assets/image/about/monsternplay_logo.jpg'
import dpworld from '../../../assets/image/about/dpworld.png'

const About = (props) => {
  return (
    <section className='about'>
      <h2>About Me</h2>
      <div className='bundle'>
        <p>
          안녕하세요~ 감각적인 프론트엔드 웹개발자를 지향하는 서수연이라고 합니다.
          <br />
          저는 웹접근성과 시멘틱한 마크업을 중요하게 생각하고 있으며, 깨끗하고 시적인 코드를 지향하고 있습니다.
          <br />
          또한 복잡한 문제를 심플하게 녹여내는 것을 즐기며, 아름답고 상호작용 가능한 디자인으로 바꾸는 것을 좋아합니다.
        </p>
      </div>

      <div className='bundle'>
        <h3>What I Enjoy</h3>
        <p>라이브 공연 관람, 음악 듣기, 책 읽기, 그림 그리기</p>
      </div>

      <div className='bundle'>
        <h3>Work Experience</h3>
        <div className='work'>
          <img src={dpworld} alt='DP World' />
          <div>
            <p>Developer</p>
            <p>DP World Management BV Korea Branch</p>
            <p>2022.07 ~ Present</p>
          </div>
        </div>
        <div className='work'>
          <img src={monsternplay} alt='몬스터앤플레이' />
          <div>
            <p>프론트엔드 웹개발자 & 디자이너</p>
            <p>(주)몬스터앤플레이, (주)에스제이이앤엠</p>
            <p>2021.10 ~ 2022.06</p>
          </div>
        </div>
        <div className='work'>
          <img src={pureblack} alt='퓨어블랙' />
          <div>
            <p>프론트엔드 웹개발자</p>
            <p>(주)퓨어블랙(PURE BLACK)</p>
            <p>2021.04 ~ 2021.08</p>
          </div>
        </div>
        <div className='work'>
          <img src={codegreen} alt='코드그린' />
          <div>
            <p>코드그린 프론트엔드 웹개발자</p>
            <p>(주)리더스오브그린소사이어티</p>
            <p>2020.11 ~ 2021.02</p>
          </div>
        </div>
      </div>

      <div className='bundle'>
        <h3>Education</h3>
        <div className='edu'>
          <img src={thejoeun} alt='더조은 IT아카데미' />
          <div>
            <p>Java 기반 하이브리드 앱개발 과정 이수</p>
            <p>더조은 IT아카데미</p>
            <p>2019.06 ~ 2019.11</p>
          </div>
        </div>
        <div className='edu'>
          <img src={smec} alt='연세대학교 미래교육원 SMEC' />
          <div>
            <p>게임그래픽 학과 졸업</p>
            <p>연세대학교 미래교육원 SMEC</p>
            <p>2013.03 ~ 2017.02</p>
          </div>
        </div>
      </div>

      <hr className='devider' />
    </section>
  )
}

export default About
