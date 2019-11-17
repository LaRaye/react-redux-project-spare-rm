export const userLogIn = (userObject) => {
  return (dispatch) => {
    fetch('http://localhost:3001/', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: userObject })
    })
    .then(response => response.json())
    .then(userObject =>
      this.setState({
        currentUser: userObject
      })
    )
  }
}
