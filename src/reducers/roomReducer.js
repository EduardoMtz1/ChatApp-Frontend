var chatroom = {};

const SET_ROOM = "SET_ROOM";

const roomReducer = (state = chatroom, action) => {
    switch(action.type) {
        case SET_ROOM:
            return Object.assign({}, state, {chatroom: action.payload})
        default:
            return state;
    }
}

export default roomReducer;