import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import QuestionListItem from './QuestionListItem';
import Question from './Question';
import {useDispatch, useSelector} from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';
import ProgressBar from 'react-bootstrap/ProgressBar';

import {submitTest} from '../../store/actions/testActions'
import {useHistory} from 'react-router-dom';
import TestControlBar from './TestControlBar';
import Toast from "react-bootstrap/Toast";
import {useBeforeunload} from 'react-beforeunload';

const QuestionList = styled.div`
  max-height: 80vh;
  overflow-y: auto;
  
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }
  ::-webkit-scrollbar {
    width: 10px;
    background-color: #F5F5F5;
  }
    ::-webkit-scrollbar-thumb {
    background-color: #d5d5d5;
  }
`;

const Test = () => {
    const dispatch = useDispatch();
    const [activeQuestion, setActiveQuestion] = useState(0);
    const test = useSelector(state => state.test.test);
    const selectedAnswers = useSelector(state => state.test.selectedAnswers);
    const testSubmitLoading = useSelector(state => state.test.testSubmitLoading);
    const testSubmitError = useSelector(state => state.test.testSubmitError);
    const [showSubmitModal, setSubmitModalShow] = useState(false);
    const [showCheatingMessage, setShowCheatingMessage] = useState(false);
    let history = useHistory();
    useBeforeunload(() => "You'll lose your data!");

    const handleSubmitModalClose = () => {
        if (!testSubmitLoading) {
            setSubmitModalShow(false)
        }
    };
    const handleSubmitModalShow = () => setSubmitModalShow(true);

    const handlePrev = () => {
        if (activeQuestion !== 0) {
            setActiveQuestion(activeQuestion - 1);
        }
    };
    const handleNext = () => {
        if (activeQuestion < test.questions.length - 1) {
            setActiveQuestion(activeQuestion + 1);
        }
    };

    const handleSubmit = () => {
        dispatch(submitTest(history));
    };

    const numberUnansweredQuestions = test && selectedAnswers && test.questions ?
        test.questions.filter(question => {
            return !selectedAnswers[question.id] ||
                selectedAnswers[question.id].length === 0;
        }).length : 0;

    const cheatingDetected = () => {
        setShowCheatingMessage(true);
    };

    useEffect(() => {
        window.addEventListener('blur', cheatingDetected);
        return () => {
            window.removeEventListener('blur', cheatingDetected);
        };
    }, [test]);

    const handleRightClick = (e) => {
        e.preventDefault()
    };

    const nonSelectedStyle = {
        msUserSelect: "none",
        mozUserSelect: "none",
        webkitUserSelect: "none",
        userSelect: "none"
    };

    return (
        <div onContextMenu={handleRightClick} style={nonSelectedStyle}>
            <Toast className="border-warning"
                   onClose={() => setShowCheatingMessage(false)} show={showCheatingMessage}
                   style={{
                       position: 'fixed',
                       bottom: 80,
                       right: "2%",
                       zIndex: 10,
                       width: "300px"
                   }}>
                <Toast.Header className="bg-warning">
                    <strong className="mr-auto text-black-50">Cheating detected</strong>
                </Toast.Header>
                <Toast.Body>Don't leave the page. And don't try to copy questions.</Toast.Body>
            </Toast>
            <Modal show={showSubmitModal} onHide={handleSubmitModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Submit your test for grading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                        asperiores dicta est harum laudantium libero neque.</p>
                    {!!numberUnansweredQuestions && <div className="rounded border border-warning p-3">
                        <p className="mb-0">You have <Badge pill
                                                            variant="warning">{numberUnansweredQuestions}</Badge> not
                            answered {numberUnansweredQuestions === 1
                                ? 'question'
                                : 'questions'}!</p>
                    </div>}
                    {testSubmitError &&
                    <Alert className="mt-3" variant="danger">
                        {testSubmitError}
                    </Alert>}
                </Modal.Body>
                <Modal.Footer>
                    <Button disabled={testSubmitLoading} variant="secondary" onClick={handleSubmitModalClose}>
                        Back to test
                    </Button>
                    <Button disabled={testSubmitLoading} variant="success" onClick={handleSubmit}>
                        {testSubmitLoading ? "Loading..." : "Submit"}
                    </Button>
                </Modal.Footer>
            </Modal>
            <TestControlBar/>
            <Container fluid className="pb-5">
                <Row>
                    <Col md={3} className="px-0">
                        {test && <QuestionList className="shadow">
                            {test.questions.map((question, index) => (
                                <QuestionListItem key={'q' + question.id}
                                                  active={activeQuestion === index}
                                                  onClick={() => setActiveQuestion(index)}
                                                  text={question.text}
                                                  index={index}
                                                  done={selectedAnswers &&
                                                  !!selectedAnswers[question.id] &&
                                                  !!selectedAnswers[question.id].length}
                                />
                            ))}
                        </QuestionList>}
                    </Col>
                    <Col>
                        {test && <Question question={test.questions[activeQuestion]}
                                           index={activeQuestion}/>}
                    </Col>
                </Row>
            </Container>
            <div className="text-center fixed-bottom bg-white">
                <ProgressBar now={activeQuestion / (test.questions.length - 1) * 100}
                             style={{height: '3px'}}/>
                <Button onClick={handlePrev} className="mr-3 my-3"
                        variant="secondary">Previous</Button>
                {activeQuestion === (test.questions.length - 1) ?
                    <Button disabled={testSubmitLoading} onClick={handleSubmitModalShow} className="my-3"
                            variant="success">Submit</Button>
                    :
                    <Button onClick={handleNext} className="my-3"
                            variant="primary">Next</Button>
                }
            </div>
        </div>

    );
};

export default Test;
