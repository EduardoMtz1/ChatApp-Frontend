import React, {useState} from 'react'
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from '../utils/Functioins';
import { useDispatch, useSelector} from 'react-redux'
import { setLogged, setUser } from '../actions';
import { setCookie } from '../utils/Cookies';



export const Login = () => {

  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const chatroom = useSelector(state => state.chatroom)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    const chatroomId = chatroom.chatroom.id
    try{
      await loginUser(username, password, chatroomId).then((res) => {
        if(res.status === 401) {
          setErr(true);
        } else {
          dispatch(setUser({
            username,
            password
          }))
          var toStore = {
            user: {
              username,
              password
            },
            chatroom: chatroom.chatroom
          }
          setCookie("userSession",toStore);
          dispatch(setLogged());
          navigate("/");
        }
      });
    }catch(err) {
      setErr(true);
    }

    
  }

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='chatAppName'>Welcome to ChatApp</span>
            <span className='title'>Please log in to start </span>
             <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Username'/>
                <input type="password" placeholder='Password'/>
                <button>Log in!</button>
                {err && <span>Username or password are wrong, try again</span>}
             </form>
             <p>Don't have an account yet? <Link to="/register">Sign up here!</Link></p>
        </div>
    </div>
  )
}
