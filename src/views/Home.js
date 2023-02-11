import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SockJS from 'sockjs-client'
import {over} from 'stompjs';
import { addMessageToList, addNewUser, addUserToChatlist, setConnected, updateUserInChatlist } from '../actions';
import { Chat } from '../components/Chat'
import { Sidebar } from '../components/Sidebar'
import { getChatList } from '../utils/Functioins';
import { store } from '../index';

var stompClient = null;
var LocalDateTime = require('@js-joda/core').LocalDateTime;
export const Home = () => {

  const user = useSelector(state => state.user)
  const chatroom = useSelector(state => state.chatroom)
  const isConnected = useSelector(state => state.isConnected)
  const dispatch = useDispatch();

  const connect = () => {
    if(isConnected === false && stompClient === null) {
      dispatch(setConnected())
      let Sock = new SockJS("http://localhost:9090/ws")
      stompClient = over(Sock)
      stompClient.connect( {}, onConnect, onError)
    }
  }

  const onConnect = () => {
    stompClient.subscribe('/queue/'+chatroom.chatroom.id+'/'+user.user.username, onMessageReceived);
    stompClient.subscribe('/topic/'+chatroom.chatroom.id, onAlertRecieved);
    userJoin();
  }

  const userJoin=()=>{
    var chatMessage = {
      username: user.user.username,
      status:"JOIN"
    };
    stompClient.send("/app/alert/" + chatroom.chatroom.id, {}, JSON.stringify(chatMessage));
  }

  const onMessageReceived = (payload) => {
    var recieved = JSON.parse(payload.body)
    var storedChat = store.getState().selectedChat.user
    if(storedChat != null && recieved.Username === storedChat) {
      var message = {
        content: recieved.content,
        from: recieved.Username,
        to: user.user.username,
        chatroom: chatroom.chatroom.id,
        date: recieved.date
      }
      dispatch(addMessageToList(message))
    } else {
      var joinedUser = null;
      var storedChatlist = store.getState().chatlist;
      for(var chatuser of storedChatlist) {
        if(chatuser.username != null && chatuser.username === recieved.Username) {
          joinedUser = chatuser;
        }
      }
      var notifications = joinedUser.notifications
      joinedUser.notifications = notifications + 1;
      dispatch(updateUserInChatlist(joinedUser))
    }
  }

  const onAlertRecieved = (payload) => {
    var alert = JSON.parse(payload.body)
    if(alert.status === "JOIN") {
      if(alert.username !== user.user.username) {
        var joinedUser = null
        var storedChatlist = store.getState().chatlist;
        for(var chatuser of storedChatlist) {
          if(chatuser.username != null && chatuser.username === alert.username) {
            joinedUser = chatuser;
          }
        }
        if(joinedUser === null) {
          dispatch(addNewUser(alert.username))
        } else {
          joinedUser.status = "Online"
          dispatch(updateUserInChatlist(joinedUser))
        }
        var chatMessage = {
          username: user.user.username,
          reciever: alert.username,
          status:"ACTIVE"
        };
        stompClient.send("/app/alert/" + chatroom.chatroom.id, {}, JSON.stringify(chatMessage));
      }
    }
    if(alert.status === "ACTIVE") {
      if(alert.reciever === user.user.username) {
      var storedChatlist = store.getState().chatlist;
      var joinedUser = null
      for(var chatuser of storedChatlist) {
        if(chatuser.username != null && chatuser.username === alert.username) {
          joinedUser = chatuser;
        }
      }
      if(joinedUser === null) {
        dispatch(addNewUser(alert.username))
      } else {
        joinedUser.status = "Online"
        dispatch(updateUserInChatlist(joinedUser))
      }
      }
    }
    if(alert.status === "DISCONNECT") {
      if(alert.username !== user.user.username) {
        var joinedUser = null
        var storedChatlist = store.getState().chatlist;
        for(var chatuser of storedChatlist) {
          if(chatuser.username != null && chatuser.username === alert.username) {
            joinedUser = chatuser;
          }
        }
        joinedUser.status = "Offline"
        dispatch(updateUserInChatlist(joinedUser)) 
      }
    }
  }

  const userLeave = () => {
    var chatMessage = {
      username: user.user.username,
      status:"DISCONNECT"
    };
    stompClient.send("/app/alert/" + chatroom.chatroom.id, {}, JSON.stringify(chatMessage));
  }

  const onError = (err) => {
    console.log(err);
  }

  const onClose = () => {
    stompClient.disconnect()
    stompClient = null
  }
 
  const sendValue = (destiny, content) => {
    if(stompClient != null) {
    
        var message = {
            content: content,
            from: user.user.username,
            to:destiny,
            chatroom: chatroom.chatroom.id,
            date: LocalDateTime.now().toString()
        }
        stompClient.send("/app/chat/"+chatroom.chatroom.id+"/"+destiny, {}, JSON.stringify(message))
    }
  } 

  useEffect(() => {
     if(isConnected === false) {
      connect()
    }
  })

  useEffect(() => {
    const handleTabClose = event => {
      event.preventDefault();
      userLeave()
      onClose()
    };
  
    window.addEventListener('beforeunload', handleTabClose);
  
    return () => {
      window.removeEventListener('beforeunload', handleTabClose);
    };
  }, []);

  try {
    getChatList(user.user.username, user.user.password, chatroom.chatroom.id).then((res)=>{
      res.data.map((name) => {
        dispatch(addUserToChatlist(name))
      })
      
    })
   } catch(err) {
    alert("Error getting the user list, try again later")
  }
  
  return (
        <div className='home'>
            <div className='container'>
                <Sidebar userLeave={userLeave} onClose={onClose}/>
                <Chat onSend={sendValue} userJoin = {userJoin} userLeave={userLeave}/>
            </div>
        </div>
      )
}
 