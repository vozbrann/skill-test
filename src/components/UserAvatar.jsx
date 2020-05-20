import styled from 'styled-components';

const UserAvatar = styled.img`
  height: ${props => props.imageLarge ? "120px" : "40px"};
  width: ${props => props.imageLarge ? "120px" : "40px"};
  border-radius: 50%;
  object-fit: cover;
`;

export default UserAvatar;
