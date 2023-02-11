var messageList = []
const SET_LIST = "SET_LIST";
const ADD_MESSAGE = "ADD_MESSAGE"
const CLEAR_LIST = "CLEAR_LIST"

export const messageListReducer = (state = messageList, action) => {
    switch(action.type) {
        case SET_LIST:
            return state.concat(action.payload)
        case ADD_MESSAGE:
            return state.concat(action.payload)
        case CLEAR_LIST:
            return []
        default:
            return state;
    }
}