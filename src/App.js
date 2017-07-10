import React, { Component } from 'react';
import Circle from './components/Circle';
import './App.css';

class App extends Component {



  render() {
    var theCircles = <Circle bgColor="#F9C240"/>
    var showCircle = () => {
      var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363"];
      var ran = Math.floor(Math.random() * colors.length);
      return <Circle bgColor={colors[ran]}/>;
    }
    var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363",
                  "#85FFC7", "#297373", "#FF8552", "#A40E4C"];
    var colorsCircle = (colors) => {
      var items = [];
      for(var i=0; i < colors.length; i++) {
        var color = colors[i];
        items.push(<Circle key={i + color} bgColor={color}/>)
      }
      return items;
    }

    return (
      <div className="App">
         {colorsCircle(colors)}
      </div>
    );
  }
}

export default App;
