import React from 'react';
import TimeControl from '../TimeControl'

const breakControl = (props) => {
  return (
    <TimeControl
      type="break"
      duration={props.duration}
      increase={props.increase}
      decrease={props.decrease} />
  )
}

export default breakControl;
