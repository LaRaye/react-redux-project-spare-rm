export function fetchStays() {
  return (dispatch) => {
    dispatch({type: 'LOADING_STAYS'})

    fetch()
    .then(response => return response.json())
    .then(stayData => {dispatch({ type: 'ADD_STAYS', stays: stayData })})
  }
}
