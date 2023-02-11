var chatroom = {};

const SET_ROOM = "SET_ROOM";
const RESET_ROOM = "RESET_ROOM"

const roomReducer = (state = chatroom, action) => {
    switch(action.type) {
        case SET_ROOM:
            return Object.assign({}, state, {chatroom: action.payload})
        case RESET_ROOM:
            return {}
        default:
            return state;
    }
}

export default roomReducer;