import React from 'react';
import TimeControl from '../TimeControl'

const sessionControl = (props) => {
  return (
    <TimeControl
      type="session"
      duration={props.duration}
      increase={props.increase}
      decrease={props.decrease}
      />
  )
}

export default sessionControl;
