var chatlist = [{}];
const ADD_USER = "ADD_USER";
const UPDATE_USER = "UPDATE_USER";
const NEW_USER = "NEW_USER";
const RESET_LIST = "RESET_LIST"

export const chatlistReducer = (state = chatlist, action) => {
    switch(action.type) {
        case ADD_USER:
            var exists = false;
            state.map((user) => {
                if(user.username === action.payload) {
                    exists = true;
                }
                
            })
            if(!exists) {
                return [
                    { username: action.payload, notifications: 0, status: "Offline" },
                    ...state
                ];
            } else {
                return state;
            }
            
        case UPDATE_USER:
            return state.map((user) => {
                if(user.username === action.payload.username) {
                    return action.payload
                } else {
                    return user;
                }
            })

            case NEW_USER:
                var exists = false;
                state.map((user) => {
                    if(user.username === action.payload) {
                        exists = true;
                    }
                    
                })
                if(!exists) {
                    return [
                        { username: action.payload, notifications: 0, status: "Online" },
                        ...state
                    ];
                } else {
                    return state;
                }
            case RESET_LIST:
                return []    
        default:
            return state;
    }
}