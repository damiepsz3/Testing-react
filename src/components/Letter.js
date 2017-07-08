import React, { PropTypes } from 'react'

class Letter extends React.Component {
  render () {
    var letterStyle = {
      padding: "10px",
      margin: "10px",
      backgroundColor: this.props.bgcolor,
      display: "inline-block",
      fontFamily: "monospace",
      fontSize: "32px",
      textAlign: "center"
    };
    return (
      <div style={letterStyle}>
        {this.props.children}
      </div>
    );
  }
}

export default Letter;
