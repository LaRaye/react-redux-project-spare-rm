import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import StaysList from './containers/StaysList';
import NewStay from './containers/NewStay';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={ Home } />
        <Route path="/stays" component={ StaysList } />
        <Route path="/stays/new" component={ NewStay } />
      </Router>
    </div>
  );
}

export default App;
