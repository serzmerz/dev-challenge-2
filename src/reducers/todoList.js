import Types from '../actions/todoList'

const initialState = {
  isLoading: false,
  data: [
    {
      id: 1,
      title: 'abcdfs',
      checked: false
    },
    {
      id: 2,
      title: 'two onesfdsfs',
      checked: false
    }
  ]
}

export default function todoList (state = initialState, action) {
  switch (action.type) {
    case Types.CREATE_TASK:
      return {
        ...state,
        ...{
          count: state.count + 1,
          data: [...state.data, {id: state.count + 1, ...action.payload}]
        }
      }
    default:
      return state
  }
}
