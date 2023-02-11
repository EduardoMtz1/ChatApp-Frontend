import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessageToList } from '../actions';
var LocalDateTime = require('@js-joda/core').LocalDateTime;

export const InputMessage = ({onSend}) => {
  const user = useSelector(state => state.user)
  const chatroom = useSelector(state => state.chatroom)
  const destiny = useSelector(state => state.selectedChat)
  const username = user.user.username
  const chatroomId = chatroom.chatroom.id
  const userDestiny = destiny.user
  const dispatch = useDispatch();
  
  const [content, setContent] = useState("");
  const handleOnClick = () => {
    onSend(userDestiny, content)
    var message = {
      content: content,
      from: username,
      to: userDestiny,
      chatroom: chatroomId,
      date: LocalDateTime.now().toString()
    }
    dispatch(addMessageToList(message))
    setContent("")
  }
  if(userDestiny == null) {
    return(
      <div className='inputMessage '>
    </div>
    )
  }

  return (
    <div className='inputMessage '>
      <input type="text" placeholder='Type something' value = {content} onChange={(e) => setContent(e.target.value)}/>
      <div className='send'>
        <button onClick={handleOnClick}>Send</button>
      </div>
    </div>
  )
}
