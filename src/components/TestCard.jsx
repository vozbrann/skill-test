import React from 'react';
import styled from 'styled-components';
import {LineClamp} from './LineClamp';
import Time from './Time';
import Skeleton from 'react-loading-skeleton';

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
  return (
    <StyledTestCard>
      {testInfo ? <TestImage
        src={testInfo.image}/> : <div style={{lineHeight: '1'}}><Skeleton
        height={200}/></div>}
      <div className="p-3">
        <p className="h2">{testInfo ? testInfo.title : <Skeleton width={150}/>}</p>
        <LineClamp lines={3}>{testInfo ? testInfo.description : <Skeleton
          count={3}/>}</LineClamp>
        <div className="d-flex align-items-center justify-content-end">
          {testInfo ?
            <>
              <Time time={testInfo.time_interval_ms} className="mr-3"/>
              <Time time={testInfo.time_between_attempts_ms} duration/>
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
      </div>
    </StyledTestCard>
  );
};

export default TestCard;
