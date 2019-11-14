import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import StaysList from './containers/StaysList';
import NewStay from './containers/NewStay';
import Stay from './components/Stay';
import Navbar from './components/Navbar';
import { connect } from 'react-redux';
import { fetchStays } from './actions/stays';


class App extends Component {

  componentDidMount() {
    this.props.fetchStays()
  }

  render (){
    return (
      <div className="App">
        <Router>
          <Navbar />
            <Route exact path="/" component={ Home } />
            <Route exact path="/stays" component={ StaysList } />
            <Route exact path="/stays/:id" component={ Stay } />
            <Route exact path="/stays/new" component={ NewStay } />
        </Router>
      </div>
    );
  }
}

export default connect(
    null,
    { fetchStays }
)(App);
