const Types = {
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT'
}

export default Types

export const signInAction = payload => {
  window.localStorage.setItem('isAuthorized', JSON.stringify(true))
  return ({ type: Types.SIGN_IN, payload })
}

export const signOutAction = payload => {
  window.localStorage.removeItem('isAuthorized')
  return ({ type: Types.SIGN_OUT, payload })
}
