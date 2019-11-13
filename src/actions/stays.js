export const fetchStays = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_STAYS' })

    fetch('http://localhost:3001/stays')
    .then(response => response.json())
    .then(stayData => {dispatch({ type: 'ADD_STAYS', stays: stayData })})
  }
}

export const createStay = (stayObject) => {
  console.log(stayObject)

  return (dispatch) => {

    fetch('http://localhost:3001/stays', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ stay: stayObject })
    })
    .then(response => response.json())
    .then(stay => {dispatch({ type: 'CREATE_STAY', stay: stay })})
  }
}
