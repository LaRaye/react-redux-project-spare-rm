import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import { userLogIn } from '../actions/users';
class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null,
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.userLogIn()
  }

  render() {
    return (
      <div>
        <h1>Welcome, Please Log In Below</h1>
          <LoginForm
            formData={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
      </div>
    )
  }
}

export default Home;
