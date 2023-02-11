import { Register } from './views/Register';
import "./style.scss";
import { Login } from './views/Login';
import { Chatroom } from './views/Chatroom';
import { Home } from './views/Home';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCookie, setCookie } from './utils/Cookies';
import { setLogged, setUser, setRoom } from './actions';
import React, {useEffect} from 'react'
import { ChatroomId } from './views/ChatroomId';

function App() {
  const user = useSelector(state => state.isLogged)
  const dispatch = useDispatch();
  useEffect(() => {
    var userCookie = getCookie("userSession");
    if(userCookie.length === 0) {
      if(user) {
        dispatch(setLogged())
      }
    } else {
      var cookieBody = JSON.parse(userCookie);
      dispatch(setUser(cookieBody.user))
      dispatch(setRoom(cookieBody.chatroom))
      var toStore = {
        user: cookieBody.user,
        chatroom: cookieBody.chatroom
      }
      setCookie("userSession", toStore)
      if(!user) {
        dispatch(setLogged())
      }
    }
  }, [dispatch, user]);


  const ProtectedRoute = ({children}) => {
    if(!user) {
      return <Navigate to="/chatroom"/>
    }
    return children
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element = {<ProtectedRoute><Home/></ProtectedRoute>}/>
          <Route path='login' element = {<Login/>}/>
          <Route path='register' element = {<Register/>}/>
          <Route path='chatroom' element = {<Chatroom/>}/>
          <Route path='chatroomId' element = {<ChatroomId/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
