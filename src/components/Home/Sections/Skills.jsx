import React from 'react'
import '../../../main.css'
import sass_logo from '../../../assets/icon/sass_logo.svg'
import react_logo from '../../../assets/icon/react.svg'
import javascript_logo from '../../../assets/icon/javascript_logo.svg'
import html_css_logo from '../../../assets/icon/html_css_logo.svg'

const Skills = (props) => {
  return (
    <section className='skills'>
      <h2>Skills</h2>
      <div className='bundle'>
        <h3>프론트 엔드</h3>
        <div className='logos'>
          <img src={html_css_logo} alt='html, css' />
          <img src={javascript_logo} alt='javascript es6' />
          <img src={react_logo} alt='react' />
          <img src={sass_logo} alt='sass' />
        </div>
        <p>HTML5, CSS3, JavaScript(ES6~), Sass, React</p>
      </div>

      <div className='bundle'>
        <h3>기획, 소통</h3>
        <p>
          UI&UX를 고려한 웹설계, 원활한 소통,
          <br />
          귀여운 영어 실력, 원어민급 일본어 실력
        </p>
      </div>

      <div className='bundle'>
        <h3>그래픽</h3>
        <p>포토샵 고수, 그림 잘 그림, 웹디자인 가능, 색감 좋음</p>
      </div>

      <div className='bundle'>
        <h3>Tools</h3>
        <p>
          Mac & Window, Visual Studio Code,
          <br />
          Adobe Photoshop, Figma, Postman, Notion
        </p>
      </div>

      <div className='bundle'>
        <h3>Etc</h3>
        <p>
          Git, PostCSS, 데이터베이스 기본,
          <br />
          나쁘지 않은 웹디자인 실력, 심상치 않은 그림실력,
          <br />
          스펀지 같은 피드백 흡수와 침투하는 커뮤니케이션
        </p>
      </div>
    </section>
  )
}

export default Skills
