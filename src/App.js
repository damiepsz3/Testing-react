import React, { Component } from 'react';
import Hello from './components/Hello';
import Buttonify from './components/Buttonify';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello greetTarget="Pichon de picuru"/>
        <Buttonify behavior="Submit">SEND DATA</Buttonify>
      </div>
    );
  }
}

export default App;
