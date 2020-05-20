import styled from 'styled-components';

export const LineClamp = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: ${props => props.lines || 3};
  -webkit-box-orient: vertical; 
  overflow: hidden;
`;
