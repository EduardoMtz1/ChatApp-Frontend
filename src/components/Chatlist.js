import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUserToChatlist } from '../actions';
import { ChatUser } from './ChatUser';

export const Chatlist = () => {
  const chatlist = useSelector(state => state.chatlist)
  return (
    <div className='chatlist'>
      {chatlist.map((chatuser) => 
        <ChatUser user={chatuser}/>
      )}
    </div>
  )
}
