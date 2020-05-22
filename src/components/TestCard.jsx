import React from 'react';
import styled from 'styled-components';
import {LineClamp} from './LineClamp';
import Time from './Time';

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

const TestCard = ({testInfo}) => {
  const {title, description, img, duration, timeBetweenAttempts} = testInfo;

  return (
    <StyledTestCard>
      <TestImage
        src={img}/>
      <div className="p-3">
        <p className="h2">{title}</p>
        <LineClamp lines={3}>{description}</LineClamp>
        <div className="d-flex align-items-center justify-content-end">
          <Time time={duration} className="mr-3"/>
          <Time time={timeBetweenAttempts} duration/>
        </div>
      </div>
    </StyledTestCard>
  );
};

export default TestCard;
