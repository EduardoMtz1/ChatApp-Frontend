import {combineReducers} from 'redux';
import roomReducer from './roomReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    chatroom: roomReducer
});

export default rootReducer;