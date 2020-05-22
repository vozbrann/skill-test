import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Time from '../Time';
import AlertImage from '../../img/undraw_alert_mc7b.svg';
import Image from 'react-bootstrap/Image';
import { useHistory } from "react-router-dom";

const testInfo = {
  id: 1,
  title: 'HTML',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aut autem consequatur distinctio dolor dolore dolores doloribus eaque eos est et eveniet excepturi facilis fuga id ipsa magnam mollitia nisi non provident quasi qui quidem quis reiciendis sapiente suscipit, voluptates? Accusantium cupiditate.',
  img: 'https://www.positronx.io/wp-content/uploads/2019/06/space-in-html-00.jpg',
  duration: 60000,
  timeBetweenAttempts: 2592000000,
};

const TestTitle = styled.h1`
  font-size: 5em;
  line-height: 1em;
`;

const TestImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StartButton = styled(Button)`
  letter-spacing: 4px;
  text-transform: uppercase;
  font-weight: 600;
`;

const TestDetails = () => {
  let history = useHistory();
  return (
    <div className="position-relative">
      <Container>
        <Row>
          <Button onClick={() => history.goBack()} variant="outline-primary" className="d-flex my-3">
            <span className="material-icons">keyboard_backspace</span>
          </Button>
        </Row>
        <Row className=" mb-5 shadow">
          <Col lg={8} className="p-5">
            <TestTitle className="mb-3">{testInfo.title}</TestTitle>
            <p className="mb-4">{testInfo.description}</p>
            <div className="d-flex justify-content-between">
              <StartButton variant="primary" className="text-white px-5">Start</StartButton>
              <div className="d-flex">
                <Time time={testInfo.duration} duration className="mr-3"/>
                <Time time={testInfo.timeBetweenAttempts}/>
              </div>
            </div>
          </Col>
          <Col className="px-0">
            <TestImage src={testInfo.img}/>
          </Col>
        </Row>

        <h2 className="h1 mb-4">Rules</h2>
        <Row className="mb-5">
          <Col md={4}>
            <Image fluid src={AlertImage}/>
          </Col>
          <Col>
            <h2>Cheating</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur autem culpa dolorem earum eum eveniet ipsum, libero
              natus possimus praesentium reprehenderit saepe! Aliquid dolores
              sit veniam. Ab amet blanditiis consectetur deserunt dolorem, est
              exercitationem facere facilis.</p>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur</li>
              <li>Lorem ipsum dolor sit amet, consectetur</li>
              <li>Lorem ipsum dolor sit amet, consectetur</li>
              <li>Lorem ipsum dolor sit amet, consectetur</li>
            </ul>
          </Col>
        </Row>


      </Container>
    </div>
  );
};

export default TestDetails;
