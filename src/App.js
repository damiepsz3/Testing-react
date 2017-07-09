import React, { Component } from 'react';
import Shirt from './components/Shirt';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Shirt myid="unique" color="steelblue" num="3.14" size="medium" />
      </div>
    );
  }
}

export default App;
