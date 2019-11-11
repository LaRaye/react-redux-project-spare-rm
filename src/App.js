import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import StaysList from './containers/StaysList';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={ Home } />
        <Route path="/stays" component={ StaysList } />
      </Router>
    </div>
  );
}

export default App;
