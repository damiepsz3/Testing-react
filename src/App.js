import React, { PropTypes } from 'react'
import Card from './components/Card'
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Card color="#FF1235"/>
      </div>
    );
  }
}

export default App;
