import React from 'react';
import classes from './TimeControl.module.css'

const timeControl = (props) => {
  return (
    <div className={classes.TimeControl}>
      <h1>{props.type + " Length"}</h1>
      <p>
        <span><i className={classes.ArrowUp}/></span>
        <span className={classes.Duration}>{props.duration}</span>
        <span><i className={classes.ArrowDown}/></span>
      </p>
    </div>
  );
};

export default timeControl;
