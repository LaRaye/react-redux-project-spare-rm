import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LogIn from './containers/LogIn';
import StaysList from './containers/StaysList';
import NewStay from './containers/NewStay';
import EditStay from './containers/EditStay';
import StayShowContainer from './containers/StayShowContainer';
import Navbar from './components/Navbar';
import { connect } from 'react-redux';
import { fetchStays } from './actions/stays';
import { userLogIn } from '../actions/users';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentUser: null,
      loginForm: {
        email: "",
        password: ""
      }
    }
  }

  handleChange = event => {
    this.setState({
      loginForm: {
        ...this.state.loginForm,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.userLogIn()
  }

  componentDidMount() {
    this.props.fetchStays()
  }

  render (){
    return (
      <div className="App">
        <Router>
            <Navbar />
              <Switch>
                <Route
                  exact path="/"
                  render={(props) =>
                    <LogIn {...props} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                  }
                />
                <Route exact path="/stays" component= { StaysList } />
                <Route path="/stays/new" component={ NewStay } />
                <Route path="/stays/:id/edit" component={ EditStay } />
                <Route path="/stays/:id" component={ StayShowContainer } />
              </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(
    null,
    { fetchStays, userLogIn }
)(App);
