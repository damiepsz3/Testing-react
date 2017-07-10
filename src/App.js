import React, { Component } from 'react';
import CounterParent from './components/CounterParent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterParent/>
      </div>
    );
  }
}

export default App;
