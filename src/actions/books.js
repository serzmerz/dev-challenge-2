const Types = {
  ADD_BOOK: 'ADD_BOOK',
  SET_BOOKS: 'SET_BOOKS',
  BUY_BOOK: 'BUY_BOOK'
}

export default Types

export const addBookAction = payload => ({ type: Types.ADD_BOOK, payload })
export const setBooksAction = payload => ({ type: Types.SET_BOOKS, payload })
export const buyBookAction = payload => ({ type: Types.BUY_BOOK, payload })
