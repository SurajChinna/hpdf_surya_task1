import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar.js';
import Body from './Body.js'

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor:"#e6ecf0"}}>
        <NavBar />
        <Body />
      </div>
    );
  }
}

export default App;
