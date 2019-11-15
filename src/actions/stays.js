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
    dispatch({ type: 'CREATING_NEW_STAY' })

    fetch('http://localhost:3001/stays', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ stay: stayObject })
    })
    .then(response => response.json())
    .then(stay => {dispatch({ type: 'CREATED_STAY', stay: stay })})
  }
}

export const deleteStay = (id, history) => {
  return (dispatch) => {
    dispatch({ type: 'DELETING_STAY' })

    fetch(`http://localhost:3001/stays/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(id => {
      dispatch({ type: 'DELETED_STAY', stay_id: id });
      history.push('/stays');
    })
  }
}
