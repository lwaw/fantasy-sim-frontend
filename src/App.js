import logo from './images/logo.png';
import Sidebar from './sidebar/sidebar';
import './App.css';
import React, { Component } from 'react';

import CreateAccount from './createAccount/createAccount';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

/*function App() {
  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
        <h1>Cool Restaurant</h1>
        <h2>Check out our offerings in the sidebar!</h2>
      </div>
    </div>
  );
}

export default App;*/




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" id="outer-container">
          <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
          <img src={logo} height={150} width={450}/>
          <hr />
          <Routes>
              <Route path='/createAccount' element={ <CreateAccount/> } />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
