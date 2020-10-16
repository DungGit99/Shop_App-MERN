import { LOGIN, REGISTER, LOGOUT } from "../actions/types";

export default function(state = {}, action) {
  switch(action.type) {
    case LOGIN:
      return { ...state, loginSuccess: action.payload }
    case REGISTER:
      return { ...state, registerSuccess: action.user}
    case LOGOUT:
      return { ...state}
    default: 
      return state
  }
} 