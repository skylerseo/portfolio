import React from 'react'
import '../../main.css'
import { Element } from 'react-scroll'
import About from './Sections/About'
import Skills from './Sections/Skills'
import Work from './Sections/Work'
import Contact from './Sections/Contact'
import Faq from './Sections/Faq'

const Home = (props) => {
  return (
    <div className='home'>
      <div className='home_wrapper'>
        {/* <h2>개편중입니다. 조금만 기다려주세요😘</h2> */}
        <Element name='home'>
          <section className='home_section'>
            <h2>서수연(Skyler Seo)</h2>
            <p>
              구조적인 마크업과 웹접근성을 중요시하며, 깔끔하고 시적인 코드를 지향하는 감각적인 프론트엔드 주니어
              웹개발자
            </p>
          </section>
        </Element>
        <Element name='about'>
          <About />
        </Element>
        <Element name='skills'>
          <Skills />
        </Element>
        <Element name='work'>
          <Work />
        </Element>
        <Element name='faq'>
          <Faq />
        </Element>
        <Element name='contact'>
          <Contact />
        </Element>
      </div>
    </div>
  )
}

export default Home
