import React, {useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Time from '../Time';
import AlertImage from '../../img/undraw_alert_mc7b.svg';
import Image from 'react-bootstrap/Image';
import { useHistory, useParams } from "react-router-dom";
import {
  fetchTestInfo,
} from '../../store/actions/testInfoActions';
import {useDispatch, useSelector} from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';


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
  const testInfo = useSelector(state => state.testInfo.testInfo);
  const testInfoLoading = useSelector(state => state.testInfo.testInfoLoading);
  const testInfoError = useSelector(state => state.testInfo.testInfoError);

  const dispatch = useDispatch();
  let history = useHistory();
  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchTestInfo(id));
  }, []);

  return (
    <div className="position-relative">
      <Container>
        <Row>
          <Button onClick={() => history.goBack()} variant="outline-primary" className="d-flex my-3">
            <span className="material-icons">keyboard_backspace</span>
          </Button>
        </Row>
        {testInfoError &&
          <Alert variant="warning">
            {testInfoError}
          </Alert>
        }
        {testInfoLoading ?
        <div className="text-center mb-4">
          <Spinner animation="border" />
        </div> :
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
        }

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
