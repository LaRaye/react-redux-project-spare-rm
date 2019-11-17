import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome, Please Log In Below</h1>
          <LoginForm />
      </div>
    )
  }
}

export default Home;
