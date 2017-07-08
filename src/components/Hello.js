import React from 'react';

export default class Hello extends React.Component {
  
  render() {
    return (
      <p>Hola, {this.props.greetTarget}!</p>
    );
  }
}
