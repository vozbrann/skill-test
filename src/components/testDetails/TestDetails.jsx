import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Time from '../Time';
import AlertImage from '../../img/undraw_alert_mc7b.svg';
import Image from 'react-bootstrap/Image';
import {Link, useHistory, useParams} from 'react-router-dom';
import {fetchTestInfo} from '../../store/actions/testInfoActions';
import {startTest} from '../../store/actions/testActions';
import {useDispatch, useSelector} from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Skeleton from 'react-loading-skeleton';

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
  const user = useSelector(state => state.user.user);

  const testStartLoading = useSelector(state => state.test.testStartLoading);
  const testStartError = useSelector(state => state.test.testStartError);

  const dispatch = useDispatch();
  let history = useHistory();
  let {id} = useParams();

  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    if (!testStartLoading) {
      setShowModal(false)
    }
  };
  const handleModalShow = () => setShowModal(true);

  const startTestHandle = () => {
    dispatch(startTest(id, history));
  };

  useEffect(() => {
    dispatch(fetchTestInfo(id, history));
  }, []);

  return (
    <div className="position-relative" data-testid='testDetails-page'>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ready to start?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {testInfo && <p className="h5">Test: {testInfo.title}</p>}
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam at cum deleniti enim ipsam laudantium quasi quidem repellendus
            repudiandae velit!</p>
          {testInfo &&
            <div>
              <div className="d-flex">
                <span className="mr-2">Test duration:</span>
                <Time className="font-weight-bold" time={testInfo.time_interval_ms} clear/>
              </div>
              <div className="d-flex">
                <span className="mr-1">You can retake test in</span>
                <Time className="font-weight-bold" time={testInfo.time_between_attempts_ms} clear/>
              </div>
            </div>
          }
          {testStartError &&
            <Alert variant="warning">
              {testStartError}
            </Alert>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button disabled={testStartLoading} variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button disabled={testStartLoading} variant="primary" onClick={startTestHandle}>
            {testStartLoading ? "Loading..." : "Start"}
          </Button>
        </Modal.Footer>
      </Modal>
      <Container>
        <Row>
          <Button onClick={() => history.goBack()} variant="outline-primary"
                  className="d-flex my-3">
            <span className="material-icons">keyboard_backspace</span>
          </Button>
        </Row>
        {testInfoError &&
        <Alert variant="warning">
          {testInfoError}
        </Alert>
        }
        <Row className=" mb-5 shadow">
          <Col lg={8} className="p-5">
            <TestTitle className="mb-3">{testInfo && !testInfoLoading ? testInfo.title : <Skeleton width={200}/>}</TestTitle>
            <p className="mb-4">{testInfo && !testInfoLoading ? testInfo.description : <Skeleton count={5}/>}</p>
            <div className="d-flex justify-content-between">
              {!testInfo || testInfoLoading ? <Skeleton height={40} width={160} /> :
                <>{!user ?
                <OverlayTrigger
                  trigger="click"
                  placement='right'
                  overlay={
                    <Popover id={`popover-positioned-right`}>
                      <Popover.Title as="h3">Authentication
                        required</Popover.Title>
                      <Popover.Content>
                        Please, <Link to="/login">login</Link> or <Link
                        to="/signUp">sign up</Link>
                      </Popover.Content>
                    </Popover>
                  }
                >
                  <StartButton variant="primary"
                               className="text-white px-5">Start</StartButton>
                </OverlayTrigger>
                :
                <StartButton variant="primary"
                             className="text-white px-5"
                             onClick={handleModalShow}>Start</StartButton>
              }
              </>}
              <div className="d-flex">
                {testInfo && !testInfoLoading ?
                  <>
                    <Time time={testInfo.time_interval_ms } duration className="mr-3"/>
                    <Time time={testInfo.time_between_attempts_ms}/>
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
          </Col>
          <Col className="px-0">
            {testInfo && !testInfoLoading ? <TestImage src={testInfo.image}/> :
              <div style={{lineHeight: '1'}}>
                <Skeleton height={400}/>
              </div>
            }
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
