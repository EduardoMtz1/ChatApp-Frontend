import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { clearChatList, clearMessageList, resetChatroom, resetChatuser, resetUser, setConnected, setLogged } from '../actions';
import { deleteCookie } from '../utils/Cookies';

export const Navbar = ({userLeave, onClose}) => {
  const room = useSelector(state => state.chatroom.chatroom);
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleOnClick = () => {
    userLeave()
    onClose()
    deleteCookie("userSession");
    dispatch(clearMessageList());
    dispatch(clearChatList());
    dispatch(resetChatuser());
    dispatch(resetChatroom());
    dispatch(resetUser());
    dispatch(setConnected());
    dispatch(setLogged());
    navigate("/chatroom");
  }
  return (
    <div className='navbar'>
        <span className='room'>Chatroom: {room.name}</span>
        <div className='user'>
            <span>{user.username}</span>
            <button onClick={handleOnClick}>Log out</button>
        </div>
    </div>
  )
}
