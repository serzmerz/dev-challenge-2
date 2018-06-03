const Types = {
  ADD_LIBRARY: 'ADD_LIBRARY',
  SET_LIBRARIES: 'SET_LIBRARIES'
}

export default Types

export const addLibraryAction = payload => ({ type: Types.ADD_LIBRARY, payload })
export const setLibrariesAction = payload => ({ type: Types.SET_LIBRARIES, payload })
