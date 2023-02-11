var chatuser = {}
const SET_CHAT = "SET_CHAT"
const RESET_CHAT = "RESET_CHAT"

export const userChatReducer = (state = chatuser, action) => {
    switch(action.type) {
        case SET_CHAT:
            return Object.assign({}, state, {user:action.payload})
        case RESET_CHAT:
            return {}
        default: 
            return state
    }
}
