import React, { Component } from 'react';
import BreakControl from '../../components/TimeControl/BreakControl/BreakControl';
import SessionControl from '../../components/TimeControl/SessionControl/SessionControl';
import Display from '../../components/Display/Display';
import MediaControl from '../../components/MediaControl/MediaControl';
import classes from './ControlPanel.module.css';
import mp3 from '../../assets/beep-sound.mp3';

const BREAK = 'break';
const SESSION = 'session';

const DEFAULT_SESSION = 25;
const DEFAULT_BREAK = 5;
const DEFAULT_DURATION = DEFAULT_SESSION * 60;
const DEFAULT_DISPLAY = `${DEFAULT_SESSION}:00`

class ControlPanel extends Component {
  state = {
    type: SESSION,
    isOn: false,
    breakMins: DEFAULT_BREAK,
    sessionMins: DEFAULT_SESSION,
    duration: DEFAULT_DURATION,
    displayTime: DEFAULT_DISPLAY
  }

  increaseSessionHandler = () => {
    if (this.state.sessionMins >= 60) { return };
    let newMins = this.state.sessionMins + 1;
    let displayMins = newMins >= 10 ? newMins.toString() : '0' + newMins;
    this.setState({
      sessionMins: newMins,
      duration: newMins * 60,
      displayTime: `${displayMins}:00`
    });
  }

  decreaseSessionHandler = () => {
    if (this.state.sessionMins <= 1) { return };
    let newMins = this.state.sessionMins - 1;
    let displayMins = newMins >= 10 ? newMins.toString() : '0' + newMins;
    this.setState({
      sessionMins: newMins,
      duration: newMins * 60,
      displayTime: `${displayMins}:00`
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
    let duration = this.state.duration;
    let self = this;
    this.setState({
      isOn: true
    });

    const countDown = function() {
      let mins = parseInt(duration / 60, 10);
      let secs = parseInt(duration % 60, 10);

      mins = mins >= 10 ? mins : "0" + mins;
      secs = secs >= 10 ? secs : "0" + secs;

      duration--;
      self.setState({
        displayTime: mins + ":" + secs,
        duration: duration
      })

      if (duration < 0) {
        self.toggleType();
        duration = self.state.duration;
        self.audio.play();
      }
    };

    // This will fire the function immediately without waiting for the interval
    countDown();
    this.timer = setInterval(countDown, 1000)
  }

  stopTimerHandler = () => {
    this.setState({ isOn: false });
    clearInterval(this.timer);
  }

  resetTimerHandler = () => {
    this.audio.pause();
    this.audio.currentTime = 0;
    clearInterval(this.timer);
    this.setState({
      isOn: false,
      type: SESSION,
      sessionMins: DEFAULT_SESSION,
      breakMins: DEFAULT_BREAK,
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
        <audio
          id='beep'
          src={mp3}
          ref={(audio) => this.audio = audio}/>
      </div>
    );
  }
}

export default ControlPanel;
