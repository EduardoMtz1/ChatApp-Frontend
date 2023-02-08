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