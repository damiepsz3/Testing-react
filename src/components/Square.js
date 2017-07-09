import React, { PropTypes } from 'react'

class Square extends React.Component {
  render () {
    var squareStyle = {
      height: "150px",
      backgroundColor: this.props.color
    }
    return (
      <div style={squareStyle}>
      </div>
    );
  }
}

export default Square;
