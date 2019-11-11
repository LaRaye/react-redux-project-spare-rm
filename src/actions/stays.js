export const fetchStays = () => {
  return (dispatch) => {
    // dispatch({ type: 'LOADING_STAYS' })

    fetch('http://localhost:3001/stays')
    .then(response => response.json())
    .then(stayData => console.log(stayData))
    // .then(stayData => {dispatch({ type: 'ADD_STAYS', stays: stayData })})
  }
}
