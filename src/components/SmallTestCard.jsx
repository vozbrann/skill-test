import React from 'react';
import {LineClamp} from './LineClamp';
import Time from './Time';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

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
    <StyledTestCardSmall className="rounded p-3" data-testid={!test ? 'smallTestCardSkeleton' : 'smallTestCard'}>
      <div
        className="d-flex justify-content-between align-items-center mb-3">
        <p className="h4 mb-0 w-100">{(test && test.title) ||
        <Skeleton width={100}/>}</p>
      </div>
      <LineClamp lines={2} className="">{(test && test.description) ||
      <Skeleton count={2}/>}</LineClamp>
      <div className="d-flex align-items-center justify-content-end">
        {test ?
          <>
            <Time time={test.time_interval_ms} className="mr-3"/>
            < Time time={test.time_between_attempts_ms} duration/>
          </> :
         <span>
           <span className="mr-3">
             <Skeleton width={80}/>
           </span>
           <span>
             <Skeleton width={80}/>
           </span>
         </span>
        }
      </div>
    </StyledTestCardSmall>
  );
};

export default SmallTestCard;
