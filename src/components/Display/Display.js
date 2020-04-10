import React from 'react';
import classes from './Display.module.css'

const display = (props) => {
  return (
    <div className={classes.Display}>
      <h2>{props.type}</h2>
      <h1>{props.duration}</h1>
    </div>
  )
}

export default display;
