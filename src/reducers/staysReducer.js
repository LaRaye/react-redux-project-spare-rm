const staysReducer = (state = { stays: [], filteredStays: [], loading: false, completedSearch: false }, action) => {
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
    case 'FINDING_STAYS':
      return {
        ...state,
        stays: [...state.stays],
        loading: true
      }
    case 'ADD_FILTERED_STAYS':
      return {
        ...state,
        filteredStays: action.filteredStays,
        loading: false,
        completedSearch: true
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
    case 'DELETING_STAY':
      return {
        ...state,
        stays: [...state.stays],
        loading: true
      }
    case 'DELETED_STAY':
      const new_stays = state.stays.filter(stay => stay.id !== action.stay_id)

      return {
        ...state,
        stays: new_stays,
        loading: false
      }
    case 'UPDATING_STAY':
      return {
        ...state,
        stays: [...state.stays],
        loading: true
      }
    case 'UPDATED_STAY':
      const updated_stays = state.stays.map(stay => {
        if (stay.id === action.stay.id) {
          return action.stay;
        } else {
          return stay;
        }
      })

      return {
        ...state,
        stays: updated_stays,
        loading: false
      }
    default:
      return state;
  }
}

export default staysReducer;
