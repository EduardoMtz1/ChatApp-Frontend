var user = {};
const SET_USER = "SET_USER";
const RESET_USER = "RESET_USER"

const userReducer = (state = user, action) => {
    switch(action.type) {
        case SET_USER:
            return Object.assign({}, state, {user: action.payload})
        case RESET_USER:
            return {}
        default:
            return state;
    }
}

export default userReducer;