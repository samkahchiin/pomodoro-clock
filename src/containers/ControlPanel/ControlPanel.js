import React, { Component } from 'react';
import TimeControl from '../../components/TimeControl/TimeControl';

class ControlPanel extends Component {
  render() {
    return(
      <TimeControl type="break" duration={3}/>
    );
  }
}

export default ControlPanel;
