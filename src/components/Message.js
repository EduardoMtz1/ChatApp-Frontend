import React from 'react'
import { useSelector } from 'react-redux'
import UserIcon from "../img/user.png"

export const Message = ({content}) => {
  const user = useSelector(state => state.user)
  const username = user.user.username
  if(username === content.from) {
    return (
      <div className='message owner'>
        <div className='messageInfo'>
          <img src={UserIcon} alt=""/>
          <span>{content.date}</span>
        </div>
        <div className='messageContent'>
          <p>{content.content}</p>
        </div>
      </div>
    )
  }

  return (
    <div className='message'>
      <div className='messageInfo'>
        <img src={UserIcon} alt=""/>
        <span>{content.date}</span>
      </div>
      <div className='messageContent'>
        <p>{content.content}</p>
      </div>
    </div>
  )
}
