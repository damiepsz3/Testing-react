import React, { PropTypes } from 'react'

class Label extends React.Component {
  render () {
    var labelStyle = {
      fontFamily: "sans-serif",
      fontWeight: "bold",
      padding: "13px",
      margin: 0
    }
    return (
      <p style={labelStyle}>
      {this.props.color}
      </p>
    );
  }
}

export default Label;
