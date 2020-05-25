import React from 'react';
import {LineClamp} from '../LineClamp';
import styled from 'styled-components';

const MainBlock = styled.div`
  transition: all 0.3s ease;
  cursor: pointer;
  background-color: ${props => props.active ? "#F4F4F4" : "white"};
  &:hover {
    cursor: ${props => props.active && "default"};
    background-color: #F4F4F4;
  }  
`;

const QuestionListItem = ({index, text, active, done, onClick}) => {
  return (
    <MainBlock onClick={onClick} className="p-3 pl-4 d-flex" active={active} done={done}>
      <span className="material-icons text-secondary mr-2" >{done ? "check_circle_outline":"panorama_fish_eye"}</span>
      <LineClamp className="mb-0" lines={1}><span className="mr-1">{index+1}.</span>{text}</LineClamp>
    </MainBlock>
  );
};

export default QuestionListItem;
