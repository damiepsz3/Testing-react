import React from 'react';

export default class Buttonify extends React.Component {
  render (){
    return (<div>
      <button type={this.props.behavior}>{this.props.children}</button>
      </div>
    );
  }
}
