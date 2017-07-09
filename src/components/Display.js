import React, { PropTypes } from 'react'

class Display extends React.Component {
  render () {
    return (
      <div>
        <p>{this.props.color}</p>
        <p>{this.props.num}</p>
        <p>{this.props.size}</p>
        <p>{this.props.myid}</p>
      </div>
    );
  }
}

export default Display;
