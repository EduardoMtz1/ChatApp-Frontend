var isLogged = false;
const SET_LOGGED = "SET_LOGGED";

export const loggedReducer = (state = isLogged, action) => {
  switch(action.type) {
    case SET_LOGGED:
        return !state;
    default:
        return state;
  }
}
