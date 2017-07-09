import React, { PropTypes } from 'react';
import Label from './Label'

class Shirt extends React.Component {
  render () {
    return(
      <div>
        <Label {...this.props}/>
      </div>
    );
  }
}

export default Shirt;
