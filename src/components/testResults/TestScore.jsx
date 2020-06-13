import React from 'react';
import Container from 'react-bootstrap/Container';
import hireImage from '../../img/undraw_hire_te5y.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import ProgressBar from 'react-bootstrap/ProgressBar';

const TestImage = styled(Image)`
  height: 300px;
  width: 100%;
  object-fit: cover;
`;

const TestScore = () => {
  return (
    <Container className="my-4">
      <Row className="mb-5">
        <Col className="">
          <div className="mb-4">
            <div className="d-flex justify-content-between">
              <h1 className="mb-4">JavaScript</h1>
              <p className="h1">40%</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              beatae consectetur culpa cupiditate dicta dignissimos distinctio
              dolor, dolorem dolores ducimus ea error.</p>
            <p className="h6">Your score is higher than 40% of users.</p>
          </div>
          <Button variant="primary">Publish results</Button>
        </Col>
        <Col>
          <TestImage
            src="https://www.positronx.io/wp-content/uploads/2019/06/space-in-html-00.jpg"
            alt=""/>
        </Col>
      </Row>
      <Row className="pt-3 mb-5">
        <Col md={6}>
          <Image fluid src={hireImage} alt=""/>
        </Col>
        <Col
          className="d-flex flex-column justify-content-center align-items-start">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet
            asperiores deleniti deserunt doloribus, error excepturi explicabo
            hic, id inventore itaque iure, labore nisi nobis odio perferendis
            quibusdam quos sequi similique sint tempore temporibus voluptas
            voluptatem. Deserunt ea iure sunt.</p>
          <div className="w-100">
            <div
              className="d-flex text-center border border-primary border-bottom-0 rounded-top">
              <div className="w-100 p-3 border-right">
                Beginner
              </div>
              <div className="w-100 p-3 border-right">
                Intermediate
              </div>
              <div className="w-100 p-3">
                Advanced
              </div>
            </div>
            <ProgressBar
              className="border border-primary rounded-0 border-top-0"
              now={45}/>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TestScore;
