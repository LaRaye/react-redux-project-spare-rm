import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import StaysList from './containers/StaysList';
import NewStay from './containers/NewStay';
import { connect } from 'react-redux';
import { fetchStays } from './actions/stays';
import Stay from './components/Stay';

class App extends Component {

  componentDidMount() {
    this.props.fetchStays()
  }

  render (){
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={ Home } />
          <Route exact path="/stays" component={ StaysList } />
          <Route exact path="/stays/new" component={ NewStay } />
          <Route exact path="/stays/:id" component={ Stay } />
        </Router>
      </div>
    );
  }
}

export default connect(
    null,
    { fetchStays }
)(App);
