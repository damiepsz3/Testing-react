import React from 'react';
import Counter from './Counter';

class CounterParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counts: 0};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // console.log(this.state);
    this.setState(prevState => ({
      counts: this.state.counts + 1
    }));
  }

  render () {
    var backgroundStyle = {
      padding: 50,
      backgroundColor: "#FFC53A",
      width: 250,
      height: 100,
      borderRadius: 10,
      textAling: "center"
    }
    var buttonStyle = {
      fontSize: "1em",
      width: 30,
      height: 30,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold",
      lineHeight: "3px"
    }
    var number = this.state.counts;
    return (
      <div style={backgroundStyle}>
        <Counter display={number}/>
        <button style={buttonStyle} onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

export default CounterParent;
