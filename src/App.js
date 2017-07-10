import React, { Component } from 'react';
import LightningCounterDisplay from './components/LightningCounterDisplay';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LightningCounterDisplay />
      </div>
    );
  }
}

export default App;
