import React from 'react';

import certificationImage from '../../img/undraw_certification_aif8.svg';
import graduationImage from '../../img/undraw_Graduation_ktn0.svg';
import hiringImage from '../../img/undraw_people_search_wctu.svg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import styled from 'styled-components';
import StyledTestCardSmall from '../StyledTestCardSmall'
import {Link} from 'react-router-dom';

const StyledTopSection = styled(Container)`
  h1 {
    font-size: 4em;
  }
`;

const Main = () => {
  return (
    <div>

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
              <Button as={Link} to="/catalog" variant="primary px-5">Explore tests</Button>
            </div>
          </Col>
          <Col className="px-4">
            <Image fluid src={certificationImage}/>
          </Col>
        </Row>
      </StyledTopSection>

      <div className="pt-4 pb-5 bg-light">
        <Container className="py-3">
          <h2 className="mb-4">Popular test</h2>
          <Row>
            <Col md={4}>
              <StyledTestCardSmall className="rounded p-3">
                <div
                  className="d-flex justify-content-between align-items-center mb-3">
                  <p className="h4 mb-0">HTML</p>
                </div>
                <p className="mb-0">Some quick example text to build on the card
                  title and make up
                  the bulk of the card's content.</p>
              </StyledTestCardSmall>
            </Col>
            <Col md={4}>
              <StyledTestCardSmall className="rounded p-3">
                <div
                  className="d-flex justify-content-between align-items-center mb-3">
                  <p className="h4 mb-0">Java Script</p>
                </div>
                <p className="mb-0">Some quick example text to build on the card
                  title and make up
                  the bulk of the card's content.</p>
              </StyledTestCardSmall>
            </Col>
            <Col md={4}>
              <StyledTestCardSmall className="rounded p-3">
                <div
                  className="d-flex justify-content-between align-items-center mb-3">
                  <p className="h4 mb-0">SQL</p>
                </div>
                <p className="mb-0">Some quick example text to build on the card
                  title and make up
                  the bulk of the card's content.</p>
              </StyledTestCardSmall>
            </Col>
          </Row>
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
              <p className="h5 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                eaque, illum ipsa laborum quae tempore veritatis. Eos error
                facilis quidem?</p>
              <p className="h5 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
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
