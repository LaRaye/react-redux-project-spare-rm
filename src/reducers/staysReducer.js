const staysReducer = (state = { stays: [], loading: false }, action) => {
  switch (action.type) {
    case 'LOADING_STAYS':
      return {
        ...state,
        stays: [...state.stays],
        loading: true
      }
    case 'ADD_STAYS':
      return {
        ...state,
        stays: action.stays,
        loading: false
      }
    case 'CREATING_NEW_STAY':
      return {
        ...state,
        stays: [...state.stays],
        loading: true
      }
    case 'CREATED_STAY':
      debugger
      return {
        ...state,
        stays: [...state.stays, action.stay],
        loading: false
      }
    default:
      return state;
  }
}

export default staysReducer;
