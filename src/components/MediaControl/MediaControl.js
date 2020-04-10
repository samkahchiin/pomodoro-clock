import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faSync } from '@fortawesome/free-solid-svg-icons';
import classes from './MediaControl.module.css';

const mediaControl = () => {
  return (
    <div className={classes.MediaControl}>
      <span id="start_stop">
        <FontAwesomeIcon className="fa-2x" icon={faPlay} />
        <FontAwesomeIcon className="fa-2x" icon={faPause} />
      </span>
      <span id="reset">
        <FontAwesomeIcon className="fa-2x" icon={faSync} />
      </span>
    </div>
  )
}

export default mediaControl;
