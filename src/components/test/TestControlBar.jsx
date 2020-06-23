import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import {useDispatch, useSelector} from 'react-redux';
import {cancelTest, submitTest} from '../../store/actions/testActions';
import {convertMS} from '../../utils/helpers'
import {useHistory} from 'react-router-dom';

const TestControlBar = () => {
  const dispatch = useDispatch();
  const test = useSelector(state => state.test.test);
  const testSubmitLoading = useSelector(state => state.test.testSubmitLoading);
  const testCancelLoading = useSelector(state => state.test.testCancelLoading);
  const testCancelError = useSelector(state => state.test.testCancelError);

  const [showCancelModal, setCancelModalShow] = useState(false);
  const [timeLeft, setTimeLeft] = useState(test.time_interval_ms);

  let history = useHistory();

  const handleCancelModalClose = () => {
    if (!testCancelLoading){
      setCancelModalShow(false)
    }
  };
  const handleCancelModalShow = () => setCancelModalShow(true);
  const handleCancel = () => {
    dispatch(cancelTest(history));
  };
  useEffect(() => {
    setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1000);
      } else if(!testSubmitLoading) {
        dispatch(submitTest(history));
      }
    }, 1000);
  });

  return (
    <div className="border border-bottom d-flex justify-content-between align-items-center py-2 px-4">
      <Modal show={showCancelModal} onHide={handleCancelModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cancel test</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            asperiores dicta est harum laudantium libero neque.</p>
          {testCancelError &&
          <Alert className="mt-3" variant="danger">
            {testCancelError}
          </Alert>}
        </Modal.Body>
        <Modal.Footer>
          <Button disabled={testCancelLoading} variant="primary" onClick={handleCancelModalClose}>
            Back to test
          </Button>
          <Button disabled={testCancelLoading} variant="danger" onClick={handleCancel}>
            {testCancelLoading ? "Loading..." : "Confirm cancellation"}
          </Button>
        </Modal.Footer>
      </Modal>
      <p className="h4 mb-0">{test.title}</p>
      <div className="d-flex align-items-center">
        {testSubmitLoading || testCancelLoading ? <Spinner size="sm" animation="border" className="mr-4" /> :
          <div className="d-flex align-items-center mr-4">
            <span className="mr-1">{convertMS(timeLeft).hour}:{convertMS(timeLeft).minute}:{convertMS(timeLeft).seconds}</span>
            <span className="material-icons">alarm</span>
          </div>
        }
        <Button variant="" onClick={handleCancelModalShow} className="d-flex">
          <span className="material-icons">exit_to_app</span>
        </Button>
      </div>
    </div>
  );
};

export default TestControlBar;
