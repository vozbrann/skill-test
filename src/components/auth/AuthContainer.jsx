import React from 'react';
import friendImage from '../../img/undraw_sign_in_e6hj.svg';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styled from 'styled-components';


const MainContainer = styled(Container)`
  box-shadow: 0 2px 20px rgba(0,0,0,0.15);
  @media (max-width: 767px) {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
}
`;

const AuthContainer = ({children}) => {
  return (
    <div className="py-3 py-md-5">
      <MainContainer className="bg-white">
        <Row>
          <Col md={6} className="p-5 d-none d-md-flex bg-light align-items-center">
            <Image className="mt-5" fluid src={friendImage}/>
          </Col>
          <Col className="p-4 p-md-5">
            {children}
          </Col>
        </Row>
      </MainContainer>
    </div>
  );
};

export default AuthContainer;
