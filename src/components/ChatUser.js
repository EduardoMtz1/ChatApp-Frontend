import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearMessageList, setChatUser, setMessageList, updateUserInChatlist } from '../actions'
import UserIcon from "../img/user.png"
import { getMessageList } from '../utils/Functioins'

export const ChatUser = ({user}) => {
  const actualUser = useSelector(state => state.user)
  const chatroom = useSelector(state => state.chatroom)
  const chatlist = useSelector(state => state.chatlist)
  const username = actualUser.user.username;
  const dispatch = useDispatch();

  const handleOnClick = async () => {
    dispatch(setChatUser(user.username))
    dispatch(clearMessageList())
    try {
        getMessageList(username, actualUser.user.password, chatroom.chatroom.id, user.username).then((res) => {
          dispatch(setMessageList(res.data));

        })
    }catch(err) {
        alert("Error getting the message list, try again later")
    }
    var joinedUser = null
    for(var chatuser of chatlist) {
      if(user.username === chatuser.username) {
        joinedUser = chatuser
      }
    }
    joinedUser.notifications = 0;
    dispatch(updateUserInChatlist(joinedUser))

  }

  if(user.username === username || user.username == null) {
    return(
        ''
    )
  } 
  return (
    <div className='userChat' onClick={handleOnClick}>
        {
            user.notifications > 0 ? <p className='notification'>{user.notifications}</p>: ''
          }
        <img src={UserIcon} alt=""/>
        <div className='userChatInfo'>
          <span>{user.username}</span>
          {
            user.status === "Online"? <p className='online'>{user.status}</p>: <p className='offline'>{user.status}</p>
          }
        </div>
      </div>
  ) 
}
