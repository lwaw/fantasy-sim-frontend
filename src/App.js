import logo from './images/logo.png';
import Sidebar from './sidebar/sidebar';
import './App.css';
import './commons/form.css';
import React, { Component } from 'react';



import CreateAccount from './createAccount/createAccount';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';






class App extends Component {
  render() {
    return (
      <Router>
        <div class="div-background-color ">
          <div className="App" id="outer-container">
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <img src={logo} height={150} width={450}/>
            <hr />
            <Routes>
                <Route path='/createAccount' element={ <CreateAccount/> } />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
