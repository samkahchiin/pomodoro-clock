import React, { Component } from 'react';
import BreakControl from '../../components/TimeControl/BreakControl/BreakControl';
import SessionControl from '../../components/TimeControl/SessionControl/SessionControl';
import Display from '../../components/Display/Display';
import MediaControl from '../../components/MediaControl/MediaControl';
import classes from './ControlPanel.module.css'

const BREAK = 'break';
const SESSION = 'session';

const DEFAULT_MIN = 25;
const DEFAULT_DURATION = DEFAULT_MIN * 60;
const DEFAULT_DISPLAY = `${DEFAULT_MIN}:00`

class ControlPanel extends Component {
  state = {
    type: SESSION,
    isOn: false,
    breakMins: 1,
    sessionMins: DEFAULT_MIN,
    duration: DEFAULT_DURATION,
    displayTime: DEFAULT_DISPLAY
  }

  increaseSessionHandler = () => {
    if (this.state.sessionMins >= 60) { return };
    let newMins = this.state.sessionMins + 1;
    this.setState({
      sessionMins: newMins,
      displayTime: `${newMins}:00`
    });
  }

  decreaseSessionHandler = () => {
    if (this.state.sessionMins <= 1) { return };
    let newMins = this.state.sessionMins - 1;
    this.setState({
      sessionMins: newMins,
      displayTime: `${newMins}:00`
    });
  }

  increaseBreakHandler = () => {
    if (this.state.breakMins >= 60) { return };
    this.setState({
      breakMins: this.state.breakMins + 1
    });
  }

  decreaseBreakHandler = () => {
    if (this.state.breakMins <= 1) { return };
    this.setState({
      breakMins: this.state.breakMins - 1
    });
  }

  toggleType = () => {
    let type, duration;

    if (this.state.type === SESSION) {
      type = BREAK;
      duration = this.state.breakMins * 60;
    } else {
      type = SESSION;
      duration = this.state.sessionMins * 60;
    }

    this.setState({
      type: type,
      duration: duration
    })
  }

  startTimerHandler = () => {
    let timer = this.state.sessionMins * 60;
    let self = this;
    this.setState({
      isOn: true
    });

    this.timer = setInterval(function() {
      let mins = parseInt(timer / 60, 10);
      let secs = parseInt(timer % 60, 10);

      mins = mins >= 10 ? mins : "0" + mins;
      secs = secs >= 10 ? secs : "0" + secs;

      timer--;
      self.setState({
        displayTime: mins + ":" + secs,
        duration: timer
      })

      if (timer < 0) {
        self.toggleType();
        timer = self.state.duration;
      }
    }, 1000);
  }

  stopTimerHandler = () => {
    this.setState({ isOn: false });
    clearInterval(this.timer);
  }

  resetTimerHandler = () => {
    clearInterval(this.timer);
    this.setState({
      isOn: false,
      sessionMins: DEFAULT_MIN,
      duration: DEFAULT_DURATION,
      displayTime: DEFAULT_DISPLAY
    })
  }

  render() {
    return(
      <div>
        <h1>POMODORO CLOCK</h1>
        <div className={classes.TimeControlPanel}>
          <BreakControl
            duration={this.state.breakMins}
            increase={this.increaseBreakHandler}
            decrease={this.decreaseBreakHandler}
          />
          <SessionControl
            duration={this.state.sessionMins}
            increase={this.increaseSessionHandler}
            decrease={this.decreaseSessionHandler}
          />
        </div>
        <Display
          type={this.state.type}
          duration={this.state.displayTime}/>
        <MediaControl
          isOn={this.state.isOn}
          startTimer={this.startTimerHandler}
          stopTimer={this.stopTimerHandler}
          resetTimer={this.resetTimerHandler}
        />
      </div>
    );
  }
}

export default ControlPanel;
