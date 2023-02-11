import React from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector} from 'react-redux'


export const ChatroomId = () => {
  const navigate = useNavigate();
  const chatroom = useSelector(state => state.chatroom);


  const handleOnClick = () => {
    navigate("/login");
  }


  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='chatAppName'>Welcome to ChatApp</span>
            <span className='title'>Your chatroom ID is:</span>
            <span className='chatAppName'>{chatroom.chatroom.id}</span>
            <span className='title'>You need this ID to access again to the room, save it</span>
            <button onClick={handleOnClick}>Let's join the room!</button>
        </div>
    </div> 
  )
}
