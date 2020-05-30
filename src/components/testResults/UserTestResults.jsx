import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import TestScorePreview from './TestScorePreview';
import { fetchResults } from '../../store/actions/testResultsActions'
import {useDispatch, useSelector} from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import {changePublicStatus} from '../../store/actions/testResultsActions';

const UserTestResults = () => {
  const dispatch = useDispatch();
  const resultList = useSelector(state => state.testResults.resultList);
  const resultListLoading = useSelector(state => state.testResults.resultListLoading);
  const resultListError = useSelector(state => state.testResults.resultListError);
  const resultStatusLoading = useSelector(state => state.testResults.resultStatusLoading);
  const resultStatusError = useSelector(state => state.testResults.resultStatusError);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [activeTestRes, setActiveTestRes] = useState(null);

  const handleStatusModalClose = () => {
    if (!resultStatusLoading){
      setShowStatusModal(false)
    }
  };
  const handleStatusModalShow = (result) => {
    setShowStatusModal(true);
    setActiveTestRes(result);
  };

  useEffect(() => {
    dispatch(fetchResults());
  }, []);

  const handleSubmit = (newStatus) => {
    dispatch(changePublicStatus(newStatus, handleStatusModalClose));
  };

  return (
    <Container className="my-3">
      {activeTestRes && <Modal show={showStatusModal} onHide={handleStatusModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{activeTestRes.public ? "Hide": "Publish"} your test score</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-between align-items-center">
            <p className="h3 mb-0">{activeTestRes.title}</p>
            <p className="h3 mb-0">{activeTestRes.score}%</p>
          </div>
          {resultStatusError &&
          <Alert className="mt-3" variant="danger">
            {resultStatusError}
          </Alert>}
        </Modal.Body>
        <Modal.Footer>
          <Button disabled={resultStatusLoading} variant="secondary" onClick={handleStatusModalClose}>
            Cancel
          </Button>
          <Button disabled={resultStatusLoading} variant="primary" onClick={handleSubmit}>
            {resultStatusLoading ? "Loading..." : (activeTestRes.public ? "Hide": "Publish")}
          </Button>
        </Modal.Footer>
      </Modal>}
      <h1 className="mb-4 text-center">My results</h1>
      {resultListLoading && <div className="text-center my-3"><Spinner animation="border" /></div>}
      {resultListError &&
      <Alert variant="warning">
        resultListError
      </Alert>}
      {!!resultList.length && <div>
        {resultList.map(result => (
          <TestScorePreview handleStatusModalShow={handleStatusModalShow} key={result.id} result={result}/>
        ))}
      </div>}
    </Container>
  );
};

export default UserTestResults;
