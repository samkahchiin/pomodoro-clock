import React from 'react';
import classes from './Display.module.css'

const display = (props) => {
  return (
    <div className={classes.Display}>
      <p id="timer-label" className={classes.TimeLabel}>{props.type}</p>
      <p id="time-left" className={classes.TimeLeft}>{props.duration}</p>
    </div>
  )
}

export default display;
