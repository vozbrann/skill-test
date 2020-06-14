import React, {useEffect} from 'react';

import certificationImage from '../../img/undraw_certification_aif8.svg';
import graduationImage from '../../img/undraw_Graduation_ktn0.svg';
import hiringImage from '../../img/undraw_people_search_wctu.svg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import styled from 'styled-components';
import {Link} from 'react-router-dom';
import StyledLink from '../StyledLink';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTestInfoList} from '../../store/actions/testInfoActions';
import SmallTestCard from '../SmallTestCard';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

const StyledTopSection = styled(Container)`
  h1 {
    font-size: 4em;
  }
`;

const Main = () => {
  const testInfoList = useSelector(state => state.testInfo.testInfoList);
  const testInfoListLoading = useSelector(
    state => state.testInfo.testInfoListLoading);
  const testInfoListError = useSelector(
    state => state.testInfo.testInfoListError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTestInfoList());
  }, []);

  return (
    <div data-testid='main-page'>
      <StyledTopSection className="my-5 py-3">
        <Row>
          <Col md={7}
               className="px-3 d-flex flex-column justify-content-center">
            <h1 className="mb-0">Skill test</h1>
            <p className="text-secondary h4 mb-4">Lorem ipsum dolor sit amet,
              consectetur</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              consequatur dolorum, eius eligendi expedita iste mollitia nisi,
              officia porro quaerat quas quasi qui rerum sequi sunt tempore,
              tenetur veniam voluptas.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              consequatur dolorum, eius eligendi expedita iste mollitia nisi,
              officia porro quaerat quas quasi qui.</p>
            <div>
              <Button as={Link} to="/catalog" variant="primary px-5">Explore
                tests</Button>
            </div>
          </Col>
          <Col className="px-4">
            <Image fluid src={certificationImage}/>
          </Col>
        </Row>
      </StyledTopSection>

      <div className="pt-4 pb-5 bg-light">
        <Container className="py-3">
          <h2 className="mt-3">Popular test</h2>
          {testInfoListLoading && !!testInfoList.length &&
          <div className="text-center mb-4">
            <Spinner animation="border"/>
          </div>
          }
          {testInfoListError &&
          <Alert variant="warning" className="mt-3">
            {testInfoListError}
          </Alert>
          }
          {testInfoList.length ?
            <Row>
              {testInfoList.slice(0, 3).map(test => (
                <Col key={test.id} as={StyledLink} to={'/catalog/' + test.id}
                     md={4} className="my-3">
                  <SmallTestCard test={test}/>
                </Col>
              ))}
            </Row> :
            <Row>
              <Col md={4} className="my-3">
                <SmallTestCard />
              </Col>
              <Col md={4} className="my-3">
                <SmallTestCard />
              </Col>
              <Col md={4} className="my-3">
                <SmallTestCard />
              </Col>
            </Row>
          }
        </Container>
      </div>

      <div className="py-5 my-3">
        <Container>
          <Row>
            <Col md={5}>
              <Image fluid src={graduationImage}/>
            </Col>
            <Col className="d-flex flex-column justify-content-center">
              <h2 className="mb-4">Lorem ipsum dolor sit amet</h2>
              <ul className="h5">
                <li className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  cum
                  cumque, cupiditate deleniti.
                </li>
                <li className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </li>
                <li className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  cum
                  cumque, cupiditate deleniti earum facilis laudantium maxime
                  numquam.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="py-5 bg-light">
        <Container>
          <Row>
            <Col className="d-flex flex-column justify-content-center px-4">
              <h2 className="mb-4">Lorem ipsum dolor sit amet</h2>
              <p className="h5 mb-4">Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Ab
                eaque, illum ipsa laborum quae tempore veritatis. Eos error
                facilis quidem?</p>
              <p className="h5 mb-4">Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. At
                perspiciatis sit tempore?</p>
              <div>
                <Button disabled variant="primary px-5">Sign up as HR</Button>
              </div>
            </Col>
            <Col md={5} className="px-3">
              <Image fluid src={hiringImage}/>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Main;
