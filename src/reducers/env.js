import Types from '../actions/env'

const initialState = {
  isAuthorized: window.localStorage.getItem('isAuthorized') || false
}

export default function env (state = initialState, action) {
  switch (action.type) {
    case Types.SIGN_IN:
      return {
        ...state,
        isAuthorized: true
      }

    case Types.SIGN_OUT:
      return {
        ...state,
        isAuthorized: false
      }
    default:
      return state
  }
}
