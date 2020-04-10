import React, { Component } from 'react';
import BreakControl from '../../components/TimeControl/BreakControl/BreakControl';
import SessionControl from '../../components/TimeControl/SessionControl/SessionControl';
import Display from '../../components/Display/Display';
import MediaControl from '../../components/MediaControl/MediaControl';

const BREAK = 'break';
const SESSION = 'session';

class ControlPanel extends Component {
  state = {
    type: SESSION,
    breakLength: 1,
    sessionLength: 25
  }

  increaseSessionHandler = () => {
    if (this.state.sessionLength >= 60) { return };
    this.setState({
      sessionLength: this.state.sessionLength + 1
    });
  }

  decreaseSessionHandler = () => {
    if (this.state.sessionLength <= 1) { return };
    this.setState({
      sessionLength: this.state.sessionLength - 1
    });
  }

  increaseBreakHandler = () => {
    if (this.state.breakLength >= 60) { return };
    this.setState({
      breakLength: this.state.breakLength + 1
    });
  }

  decreaseBreakHandler = () => {
    if (this.state.breakLength <= 1) { return };
    this.setState({
      breakLength: this.state.breakLength - 1
    });
  }

  render() {
    return(
      <div>
        <BreakControl
          duration={this.state.breakLength}
          increase={this.increaseBreakHandler}
          decrease={this.decreaseBreakHandler}
        />
        <SessionControl
          duration={this.state.sessionLength}
          increase={this.increaseSessionHandler}
          decrease={this.decreaseSessionHandler}
        />
        <Display type={this.state.type} duration={this.state.sessionLength}/>
        <MediaControl />
      </div>
    );
  }
}

export default ControlPanel;
