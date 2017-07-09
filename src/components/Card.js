import React, { PropTypes } from 'react';
import Square from './Square';
import Label from './Label';

class Card extends React.Component {
  render () {
    var cardStyle = {
      height: "200px",
      width: "150px",
      padding: 0,
      backgroundColor: "#FFF",
      WebkitFilter: "drop-shadow(0px 0px 5px #666)",
      filter: "drop-shadow(0px 0px 5px #666)"
    }
    return (
      <div style={cardStyle}>
        <Square color={this.props.color}/>
        <Label color={this.props.color}/>
      </div>
    );
  }
}

export default Card;
