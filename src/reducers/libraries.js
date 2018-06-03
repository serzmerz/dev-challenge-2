import Types from '../actions/libraries'

const initialState = {
  resources: [
    { id: 123, name: 'Ivanko', address: 'Sumy' },
    { id: 654, name: 'Drezdi', address: 'Kiev' }
  ]
}

export default function libraries (state = initialState, action) {
  switch (action.type) {
    case Types.ADD_LIBRARY:
      return {
        ...state,
        resources: [...state.resources, action.payload]
      }

    case Types.SET_LIBRARIES:
      return {
        ...state,
        resources: action.payload
      }
    default:
      return state
  }
}
