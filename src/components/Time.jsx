import React from 'react';
import {convertMS} from '../utils/helpers';

const Time = ({time, className, duration, clear}) => {
  const parsedTime = convertMS(time);
  return (
    <div className={"d-flex align-items-center " + className}>
      {!clear && <span className="material-icons mr-1">{duration? "alarm" : "history"}</span>}
      <span className="mr-2">
        {!!parsedTime.day && parsedTime.day + " day" + ((parsedTime.day === 1) ? "" : "s")}
        {!!parsedTime.hour && parsedTime.hour + " hour" + ((parsedTime.hour === 1) ? "" : "s")}
        {!!parsedTime.minute && parsedTime.minute + " minute" + ((parsedTime.minute === 1) ? "" : "s")}
        {!!parsedTime.seconds && parsedTime.seconds + " second" + ((parsedTime.seconds === 1) ? "" : "s")}
      </span>
    </div>
  );
};

export default Time;
