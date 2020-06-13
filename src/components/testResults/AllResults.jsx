import React, {useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import TestScorePreview from './TestScorePreview';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchResults,
} from '../../store/actions/testResultsActions';

const AllResults = () => {
  const dispatch = useDispatch();
  const resultList = useSelector(state => state.testResults.resultList);
  const resultListLoading = useSelector(
    state => state.testResults.resultListLoading);
  const resultListError = useSelector(
    state => state.testResults.resultListError);

  useEffect(() => {
    dispatch(fetchResults());
  }, []);
  return (
    <Container className="my-3">
      <h1 className="mb-4 text-center">All results</h1>
      {resultListLoading && !!resultList.length &&
      <div className="text-center my-3"><Spinner animation="border"/></div>}
      {resultListError &&
      <Alert variant="warning">
        resultListError
      </Alert>}
      {!!resultList.length ?
        <div>
          {resultList.map(result => (
            <TestScorePreview key={result.id} result={result}/>
          ))}
        </div> :
        <>
          <TestScorePreview/>
          <TestScorePreview/>
          <TestScorePreview/>
          <TestScorePreview/>
        </>
      }
    </Container>
  );
};

export default AllResults;
