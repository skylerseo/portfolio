import React from 'react'
import '../../../main.css'
import github_white from '../../../assets/image/contact/github_white.svg'
import mail_white from '../../../assets/image/contact/mail_white.svg'
import linkedin_white from '../../../assets/image/contact/linkedin_white.svg'

const Contact = (props) => {
  return (
    <section className='contact'>
      <h2>Contact</h2>
      <p>편하게 연락 주세요!</p>
      <p>E-mail : skylerseo.dev@gmail.com</p>
      <div className='sns'>
        <a href='mailto:skylerseo.dev@gmail.com' target='_blank' rel='noreferrer'>
          <img src={mail_white} alt='이메일' />
        </a>
        <a href='https://github.com/skylerseo' target='_blank' rel='noreferrer'>
          <img src={github_white} alt='깃허브' />
        </a>
        <a href='https://www.linkedin.com/in/skyler-dev' target='_blank' rel='noreferrer'>
          <img src={linkedin_white} alt='링크드인' />
        </a>
      </div>
    </section>
  )
}

export default Contact
