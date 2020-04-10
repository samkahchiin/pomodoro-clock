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
      <span id="reset">
        <FontAwesomeIcon onClick={props.resetTimer} className="fa-2x" icon={faSync} />
      </span>
    </div>
  )
}

export default mediaControl;
