import React, {useEffect, useState}  from 'react';
import Container from 'react-bootstrap/Container';
import hireImage from '../../img/undraw_hire_te5y.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from "react-router";
import {
  changePublicStatus,
  fetchResult,
} from '../../store/actions/testResultsActions';
import Skeleton from 'react-loading-skeleton';
import Alert from 'react-bootstrap/Alert';

const TestImage = styled(Image)`
  height: 300px;
  width: 100%;
  object-fit: cover;
`;

const TestScore = () => {
  const dispatch = useDispatch();
  const result = useSelector(state => state.testResults.result);
  const resultStatusLoading = useSelector(
    state => state.testResults.resultStatusLoading);
  const resultStatusError = useSelector(
    state => state.testResults.resultStatusError);
  const [showStatusModal, setShowStatusModal] = useState(false);

  let { id } = useParams();
  useEffect(() => {
    dispatch(fetchResult(id));
  }, []);

  const handleStatusModalClose = () => {
    if (!resultStatusLoading) {
      setShowStatusModal(false);
    }
  };
  const handleStatusModalShow = () => {
    setShowStatusModal(true);
  };

  const handleSubmit = () => {
    dispatch(changePublicStatus(id, handleStatusModalClose));
  };
  return (
    <Container className="my-5" data-testid='result-page'>
      {result &&
      <Modal show={showStatusModal} onHide={handleStatusModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{result.public ? 'Hide' : 'Publish'} your test
            score</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-between align-items-center">
            <p className="h3 mb-0">{result.test.title}</p>
            <p className="h3 mb-0">{result.result}%</p>
          </div>
          {resultStatusError &&
          <Alert className="mt-3" variant="danger">
            {resultStatusError}
          </Alert>}
        </Modal.Body>
        <Modal.Footer>
          <Button disabled={resultStatusLoading} variant="secondary"
                  onClick={handleStatusModalClose}>
            Cancel
          </Button>
          <Button disabled={resultStatusLoading} variant="primary"
                  onClick={handleSubmit}>
            {resultStatusLoading ? 'Loading...' : (result.public
              ? 'Hide'
              : 'Publish')}
          </Button>
        </Modal.Footer>
      </Modal>}
      {result && <Row className="mb-5">
        <Col className="">
          <div className="mb-4">
            <div className="d-flex justify-content-between">
              <h1 className="mb-4">{result.test.title}</h1>
              {result && <p className="mb-0 h1">
                  { !result.canceled ? result.result+"%" :
                    "Canceled"
                  }
              </p>}
            </div>
            <p>{result.test.description}</p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            {!result.canceled && <Button onClick={handleStatusModalShow} variant="primary">
              {resultStatusLoading ? 'Loading...' : (result.public
                ? 'Hide result'
                : 'Publish result')}
            </Button>}
            {/*<Button onClick={handleStatusModalShow} variant="primary">*/}
            {/*  {resultStatusLoading ? 'Loading...' : (result.public*/}
            {/*    ? 'Hide result'*/}
            {/*    : 'Publish result')}*/}
            {/*</Button>*/}
            <p className="mb-0 text-secondary">{result.created_at}</p>
          </div>
        </Col>
        <Col>
          <TestImage
            src="https://www.positronx.io/wp-content/uploads/2019/06/space-in-html-00.jpg"
            alt=""/>
        </Col>
      </Row>}
    </Container>
  );
};

export default TestScore;
