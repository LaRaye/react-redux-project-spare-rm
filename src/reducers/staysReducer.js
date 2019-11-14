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
      return {
        ...state,
        stays: [...state.stays, action.stay],
        loading: false
      }
    case 'DELETE_STAY':
      return {
        ...state,
        stays: state.stays.filter(stay => stay.id !== action.payload),
        loading: false
      }
    default:
      return state;
  }
}

export default staysReducer;
