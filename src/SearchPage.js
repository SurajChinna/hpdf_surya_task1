import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './Components/NavBar.js';
import AadhaarBar from './Components/SubComponents/AadhaarBar.js';
import AadhaarNavBar from './Components/SubComponents/AadhaarNavBar.js';
import SearchBody from './SearchBody.js'

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor:"#e6ecf0"}}>
        <NavBar />
        <AadhaarBar />
        <AadhaarNavBar />
        <SearchBody />
      </div>
    );
  }
}

export default App;
