import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import TestCard from '../TestCard';
import StyledLink from '../StyledLink';
import {useSelector, useDispatch} from 'react-redux';
import { fetchTestInfoList } from '../../store/actions/testInfoActions'

import { CSSTransition } from 'react-transition-group'

const Catalog = () => {
  const [searchInput, setSearchInput] = useState("");

  const testInfoList = useSelector(state => state.testInfo.testInfoList);
  const testInfoListLoading = useSelector(state => state.testInfo.testInfoListLoading);
  const testInfoListError = useSelector(state => state.testInfo.testInfoListError);

  const dispatch = useDispatch();

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredTestList = testInfoList.filter(test => {
    return test.title.toLowerCase().includes(searchInput.toLowerCase())
  });

  useEffect(() => {
    dispatch(fetchTestInfoList());
  }, []);

  return (
    <div>
      <Container fluid="lg" className="py-4">
        <h1 className="mb-4">Catalog</h1>
        <InputGroup className="mb-5 col-md-5 px-0">
          <InputGroup.Prepend>
            <InputGroup.Text
              className="d-flex align-items-center bg-white border-secondary">
              <span className="material-icons">search</span>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            className="border-secondary"
            placeholder="Test title..."
            value={searchInput}
            onChange={handleSearchInputChange}
          />
        </InputGroup>

        {testInfoListLoading &&
          <div className="text-center mb-4">
            <Spinner animation="border" />
          </div>
        }
        {testInfoListError &&
          <Alert variant="warning">
            {testInfoListError}
          </Alert>
        }
        <Row className="mb-4">
          {filteredTestList.map(testInfo => (
            <Col as={StyledLink} to={"/catalog/"+testInfo.id} key={testInfo.id} md={6} lg={4} className="mb-4">
              <TestCard testInfo={testInfo}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Catalog;
