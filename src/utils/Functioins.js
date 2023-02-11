import axios from "axios";



var apiUri = "http://localhost:9090/api"
export const createUser = (username, password, chatroom) => {
    return axios
        .post(
            apiUri + "/register",
            {
                username: username,
                password: password,
                chatroom: chatroom
            },
            {
                headers: {"Content-type": "application/json"}
            }
        ).then((res) => {
            return res;
        })
}

export const loginUser = (username, password, chatroom) => {
    return axios
        .post(
            apiUri + "/login",
            {
                username: username,
                password: password,
                chatroom: chatroom
            },
            {
                headers: {"Content-type": "application/json"}
            }
        ).then((res) => {
            return res;
        })
}

export const createChatroom = (chatroomName) => {
    return axios
        .post(
            apiUri + "/chatroom/",
            chatroomName,
            {
                headers: {"Content-type": "application/json"}
            }
        ).then((res) => {
            return res;
        })
}

export const getChatroom = (chatroomID) => {
    return axios
        .get(
            apiUri + "/chatroom/" + chatroomID,
            {
                headers: {"Content-type": "application/json"}
            }
        ).then((res) => {
            return res;
        })
}

export const updateChatroom = (username, password, chatroomID) => {
    return axios
        .put(
            apiUri + "/user/chatroom/",
            {
                username: username,
                password: password,
                chatroom: chatroomID
            },
            {
                auth: {
                    username: username,
                    password: password
                  }
            }
        ).then((res) => {
            return res;
        })
}

export const getChatList = (username, password, chatroomID) => {
    return axios
        .get(
            apiUri + "/userlist/" + chatroomID,
            {
                auth: {
                    username: username,
                    password: password
                  }
            }   
        ).then((res) => {
            return res;
        })
}

export const getMessageList = (username, password, chatroomID, selectedUser) => {
    return axios
        .get(
            apiUri + "/history/" + chatroomID + "/" + username + "/" + selectedUser,
            {
                auth: {
                    username: username,
                    password: password
                  }
            } 
        ).then((res) => {
            return res;
        })
}