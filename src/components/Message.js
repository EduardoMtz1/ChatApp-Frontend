import React from 'react'
import UserIcon from "../img/user.png"

export const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img src={UserIcon} alt=""/>
        <span>Just now</span>
      </div>
      <div className='messageContent'>
        <p>Oh hi!</p>
      </div>
    </div>
  )
}
