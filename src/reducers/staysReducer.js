const stayReducer = (state = { stays: [], loading: false }, action) => {
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
        stays: [...state.stays],
        loading: false
      }
    default:
      return state;
  }
}

export default stayReducer;
