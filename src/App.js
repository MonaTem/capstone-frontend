
import React, { Component } from 'react';
import './App.css';
import Fabia from './components/Fabia.js';
import About from './components/About.js';
import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {


  render() {
    return (
      <div className="App">
      <br/>
      <br/>
        <Router>
          <div>
            <Route exact path="/" component={Fabia}></Route>
            <Route exact path="/About" component={About}></Route>
           </div>
        </Router>
      </div>
    );
  }
}

export default App;
