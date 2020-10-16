import { LOGIN, REGISTER, LOGOUT, AUTH_USER } from "../actions/types";

export default function(state = {}, action) {
  switch(action.type) {
    case LOGIN:
      return { ...state, loginSuccess: action.payload }
    case REGISTER:
      return { ...state, registerSuccess: action.payload}
    case LOGOUT:
      return { ...state}
    case AUTH_USER:
      return {...state, userData: action.payload}
    default: 
      return state
  }
} 