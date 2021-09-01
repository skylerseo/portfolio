import React from 'react'
import close_mobile from '../../../assets/icon/close_white.svg'
import menu_mobile from '../../../assets/icon/menu_white.svg'

const MobileMenu = (props) => {
  return (
    <div className='menu_mobile' onClick={props.showDrawerHandler}>
      {props.isVisible ? <img src={close_mobile} alt='메뉴 닫기' /> : <img src={menu_mobile} alt='메뉴 열기' />}
    </div>
  )
}

export default MobileMenu
