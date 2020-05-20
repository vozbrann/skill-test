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

export default StyledTestCardSmall;
