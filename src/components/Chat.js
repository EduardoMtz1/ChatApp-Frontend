import React from 'react'
import { MessageList } from './MessageList'
import { InputMessage } from './InputMessage'

export const Chat = () => {
  return (
    <div className='chat'>
        <div className='chatInfo'>
            <span>Username</span>          
        </div>
        <MessageList/>
        <InputMessage/>
    </div>
  )
}
