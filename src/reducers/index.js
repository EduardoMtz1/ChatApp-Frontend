import {combineReducers} from 'redux';
import { chatlistReducer } from './chatlistReducer';
import { userChatReducer } from './chatuserReducer';
import { connectedReducer } from './connectedReducer';
import { loggedReducer } from './loggedReducer';
import { messageListReducer } from './messageListReducer';
import roomReducer from './roomReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    chatroom: roomReducer,
    isLogged: loggedReducer,
    chatlist: chatlistReducer,
    selectedChat: userChatReducer,
    messageList: messageListReducer,
    isConnected: connectedReducer
});

export default rootReducer;