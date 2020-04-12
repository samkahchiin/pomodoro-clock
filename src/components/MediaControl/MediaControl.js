import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faSync } from '@fortawesome/free-solid-svg-icons';
import classes from './MediaControl.module.css';

const mediaControl = (props) => {
  return (
    <div className={classes.MediaControl}>
      <span id="start_stop"
        onClick={props.isOn ? props.stopTimer : props.startTimer}>
        <FontAwesomeIcon className="fa-2x" icon={faPlay} />
        <FontAwesomeIcon className="fa-2x" icon={faPause} />
      </span>
      <span id="reset" onClick={props.resetTimer}>
        <FontAwesomeIcon className="fa-2x" icon={faSync} />
      </span>
      <audio id="beep" src="https://goo.gl/65cBl1" />
    </div>
  )
}

export default mediaControl;
