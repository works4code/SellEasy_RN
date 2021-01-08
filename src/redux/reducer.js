import {SET_USER} from './actiontypes'

const INITIAL_STATE = {
  user: {}
}

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload
      }
      break;
  
    default:
      return state
      break;
  }
}