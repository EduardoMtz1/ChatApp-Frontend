var isConnected = false;
const SET_CONNECTED = "SET_CONNECTED";

export const connectedReducer = (state = isConnected, action) => {
    switch(action.type) {
        case SET_CONNECTED:
            return !state;
        default:
            return state;
    }
}