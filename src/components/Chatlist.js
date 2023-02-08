import React from 'react';
import UserIcon from "../img/user.png"

export const Chatlist = () => {
  return (
    <div className='chatlist'>
      <div className='userChat'>
        <img src={UserIcon} alt=""/>
        <div className='userChatInfo'>
          <span>Username</span>
          <p>Message</p>
        </div>
      </div>
      <div className='userChat'>
        <img src={UserIcon} alt = ""/>
        <div className='userChatInfo'>
          <span>Username</span>
          <p>Message</p>
        </div>
      </div>
      <div className='userChat'>
        <img src={UserIcon} alt = ""/>
        <div className='userChatInfo'>
          <span>Username</span>
          <p>Message</p>
        </div>
      </div>
    </div>
  )
}
