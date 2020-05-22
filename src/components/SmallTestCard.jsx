import React from 'react';
import {LineClamp} from './LineClamp';
import Time from './Time';
import styled from 'styled-components';

const StyledTestCardSmall = styled.div`
  transition: all 0.3s ease;
  position: relative;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  &:hover {
    cursor: pointer;
    box-shadow: 0 2px 20px rgba(0,0,0,0.15);
  }
  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 0;
    height: 0;
    border-top: 20px solid rgba(9,104,255,0.63);
    border-left: 20px solid transparent;
  }
`;


const SmallTestCard = ({test}) => {
  return (
    <StyledTestCardSmall className="rounded p-3">
      <div
        className="d-flex justify-content-between align-items-center mb-3">
        <p className="h4 mb-0">{test.title}</p>
      </div>
      <LineClamp lines={2} className="">{test.description}</LineClamp>
      <div className="d-flex align-items-center justify-content-end">
        <Time time={test.duration} className="mr-3"/>
        <Time time={test.timeBetweenAttempts} duration/>
      </div>
    </StyledTestCardSmall>
  );
};

export default SmallTestCard;
