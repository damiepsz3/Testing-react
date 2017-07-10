import React, { PropTypes } from 'react'

class LightningCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {strikes: 0};
  }

  timerTick() {
    this.setState({
      strikes: this.state.strikes + 100
    });
  }

  componentDidMount() {
    setInterval(
      () => this.timerTick(), 100
    )
  }

  render () {
    var counterStyle = {
      color: "#66FFFF",
      fontSize: 50
    }
    var count = this.state.strikes.toLocaleString();
    return(
      <h1 style={counterStyle}>{count}</h1>
    );
  }
}

export default LightningCounter;
