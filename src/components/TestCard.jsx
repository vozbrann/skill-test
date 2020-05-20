import React from 'react';
import styled from 'styled-components';
import {LineClamp} from './LineClamp';

const StyledTestCard = styled.div`
  transition: all 0.3s ease;
  background-color: #fff;
  position: relative;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  &:hover {
    cursor: pointer;
    box-shadow: 0 2px 20px rgba(0,0,0,0.15);
  }
`;

const TestImage = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
`;

function convertMS( milliseconds ) {
  let day, hour, minute, seconds;
  seconds = Math.floor(milliseconds / 1000);
  minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;
  day = Math.floor(hour / 24);
  hour = hour % 24;
  return {
    day,
    hour,
    minute,
    seconds
  };
}

const TestCard = ({testInfo}) => {
  const {title, description, img, duration, timeBetweenAttempts} = testInfo;
  const parsedDuration = convertMS(duration);
  const parsedTimeBA = convertMS(timeBetweenAttempts);

  return (
    <StyledTestCard>
      <TestImage
        src={img}/>
      <div className="p-3">
        <p className="h2">{title}</p>
        <LineClamp lines={3}>{description}</LineClamp>
        <div className="d-flex align-items-center justify-content-end">
          <div className="d-flex align-items-center mr-3">
            <span className="material-icons mr-1">alarm</span>
            <span className="mr-2">
              {!!parsedDuration.day && parsedDuration.day + " day" + ((parsedDuration.day === 1) ? "" : "s")}
              {!!parsedDuration.hour && parsedDuration.hour + " hour" + ((parsedDuration.hour === 1) ? "" : "s")}
              {!!parsedDuration.minute && parsedDuration.minute + " minute" + ((parsedDuration.minute === 1) ? "" : "s")}
            </span>
          </div>
          <div className="d-flex align-items-center">
            <span className="material-icons mr-1">history</span>
            <span className="mr-2">
              {!!parsedTimeBA.day && parsedTimeBA.day + " day" + ((parsedTimeBA.day === 1) ? "" : "s")}
              {!!parsedTimeBA.hour && parsedTimeBA.hour + " hour" + ((parsedTimeBA.hour === 1) ? "" : "s")}
              {!!parsedTimeBA.minute && parsedTimeBA.minute + " minute" + ((parsedTimeBA.minute === 1) ? "" : "s")}
            </span>
          </div>
        </div>
      </div>
    </StyledTestCard>
  );
};

export default TestCard;
