import React, { PropTypes } from 'react'
import Letter from './components/Letter'
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Letter bgcolor="#58B3FF">A</Letter>
        <Letter bgcolor="#58B3FF">B </Letter>
        <Letter bgcolor="blue">C </Letter>
        <Letter bgcolor="green">A </Letter>
        <Letter bgcolor="red">A </Letter>
        <Letter bgcolor="white">A </Letter>
      </div>
    );
  }
}

export default App;
