import React, { PropTypes } from 'react'
import LightningCounter from './LightningCounter'

class LightningCounterDisplay extends React.Component {
  render () {
    var divStyle = {
      width: 250,
      textAlign: "center",
      backgroundColor: "black",
      padding: 40,
      fontFamily: "sans-serif",
      color: "#999",
      borderRadius: 10
    };
    var commonStyle = {
      margin: 0,
      padding: 0
    }
    var textStyles = {
      emphasis: {
        fontSize: 38,
        ...commonStyle
      },
      smallEmphasis : {
        ...commonStyle
      },
      small : {
        fontSize: 17,
        opacity: 0.5,
        ...commonStyle
      }
    }
    return (
      <div style={divStyle}>
        <LightningCounter/>
        <h2 style={textStyles.smallEmphasis}>LIGHTNING STRIKES</h2>
        <h2 style={textStyles.emphasis}>WORLDWIDE</h2>
        <h2 style={textStyles.small}>(since you loaded this example)</h2>
      </div>
    );
  }
}

export default LightningCounterDisplay;
