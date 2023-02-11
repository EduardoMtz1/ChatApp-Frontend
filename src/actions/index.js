export const setUser = (user) => {
    return {
        type:"SET_USER",
        payload: user
    }
}

export const setRoom = (chatroom) => {
    return {
        type:"SET_ROOM",
        payload: chatroom
    }
}

export const setLogged = () => {
    return {
        type:"SET_LOGGED"
    }
}

export const addUserToChatlist = (name) => {
    return {
        type:"ADD_USER",
        payload: name
    }
}

export const addNewUser = (name) => {
    return {
        type:"NEW_USER",
        payload: name
    }
}

export const updateUserInChatlist = (user) => {
    return {
        type:"UPDATE_USER",
        payload: user
    }
}

export const setChatUser = (username) => {
    return {
        type:"SET_CHAT",
        payload: username
    }
}

export const setMessageList = (list) => {
    return {
        type:"SET_LIST",
        payload: list
    }
}

export const addMessageToList = (message) => {
    return {
        type:"ADD_MESSAGE",
        payload: message
    }
}

export const setConnected = () => {
    return {
        type:"SET_CONNECTED"
    }
}

export const clearMessageList = () => {
    return {
        type: "CLEAR_LIST"
    }
}

export const clearChatList = () => {
    return {
        type: "RESET_LIST"
    }
}

export const resetChatuser = () => {
    return {
        type: "RESET_CHAT"
    }
}

export const resetChatroom = () => {
    return {
        type: "RESET_ROOM"
    }
}

export const resetUser = () => {
    return {
        type: "RESET_USER"
    }
}

