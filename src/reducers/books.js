import Types from '../actions/books'

const initialState = {
  resources: [
    { id: 674745,
      name: 'Some book',
      author: 'Favorite Author',
      year: '1996',
      isbn: '58766',
      image: 'https://www.freeimages.com/',
      libraries: [{ value: 123, status: 'free', booking: null }]
    }
  ]
}

export default function books (state = initialState, action) {
  switch (action.type) {
    case Types.ADD_BOOK:
      return {
        ...state,
        resources: [...state.resources, action.payload]
      }

    case Types.SET_BOOKS:
      return {
        ...state,
        resources: action.payload
      }

    case Types.BUY_BOOK:
      return {
        ...state,
        resources: state.resources.map(resource => {
          if (resource.id === action.payload.bookId) {
            return ({
              ...resource,
              libraries: resource.libraries.map(library =>
                library.value === action.payload.library.value
                  ? action.payload.library
                  : library
              )
            })
          }
          return resource
        })
      }
    default:
      return state
  }
}
