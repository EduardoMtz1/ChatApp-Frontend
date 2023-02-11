import React, { useState } from 'react'
import { MessageList } from './MessageList'
import { InputMessage } from './InputMessage'
import { useSelector } from 'react-redux'

export const Chat = ({onSend, userJoin, userLeave}) => {
  const selectedUser = useSelector(state => state.selectedChat)
  const [isConnected, setIsConnected] = useState("");
  const handleChange = (e) => {
    setIsConnected(e.target.value)
    if(e.target.value === "Online") {
      userJoin()
    } else {
      userLeave()
    }
  }
  return (
    <div className='chat'>
        <div className='chatInfo'>
            <span>{selectedUser.user}</span>
            <div className='selectStatus'>
              <select value = {isConnected} onChange = {handleChange}>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </div>          
        </div>
        <MessageList/>
        <InputMessage onSend={onSend}/>
    </div>
  )
}
