import React from 'react';
import classes from './TimeControl.module.css'

const timeControl = (props) => {
  return (
    <div className={classes.TimeControl} id={props.type + "-label"}>
      <h1>{props.type + " Length"}</h1>
      <p>
        <span>
          <i
            className={classes.ArrowUp}
            id={props.type + "-increment"}
            onClick={props.increase}/>
        </span>
        <span
          className={classes.Duration}
          id={props.type + "-length"}>
          {props.duration}
        </span>
        <span>
          <i
            className={classes.ArrowDown}
            id={props.type + "-decrement"}
            onClick={props.decrease}/>
        </span>
      </p>
    </div>
  );
};

export default timeControl;
