import React, {useState} from 'react'
import { useNavigate, Navigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { createChatroom, getChatroom} from '../utils/Functioins';
import {setRoom} from '../actions';


export const Chatroom = () => {
  const [err1, setErr1] = useState(false);
  const [err2, setErr2] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogged = useSelector(state => state.isLogged);

  if(isLogged) {
    return <Navigate to="/"/>
  }

  const handleCreate = async (e) => {
    e.preventDefault();
    const chatroomName = e.target[0].value;
    try {
      await createChatroom(chatroomName).then(async (res) => {
        if(res.status === 400) {
          setErr1(true)
        } else {
          dispatch(setRoom(res.data))
          navigate("/chatroomId");
        }
      })
    }catch(err) {
      setErr1(true);
    }
  }

  const handleGet = async (e) => {
    e.preventDefault();
    const chatroomId = e.target[0].value;
    try {
      await getChatroom(chatroomId).then(async (res) => {
        if(res.status === 400) {
          setErr2(true);
        } else {
          dispatch(setRoom(res.data))
          navigate("/login")
        }
      })
    }catch(err) {
      setErr2(true);
    }
  }

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='chatAppName'>Welcome to ChatApp</span>
            <span className='title'>Wanna start a new Chatroom?</span>
             <form onSubmit={handleCreate}>
                <input type="text" placeholder='New Chatroom name'/>
                <button>Create now!</button>
                {err1 && <span>Chatroom already exists!</span>}
             </form>
             <span className='title'>Or join an existant one</span>
             <form onSubmit={handleGet}>
                <input type="text" placeholder='Chatroom ID'/>
                <button>Join now!</button>
                {err2 && <span>Chatroom doesn't exists!</span>}
             </form>
        </div>
    </div> 
  )
}
