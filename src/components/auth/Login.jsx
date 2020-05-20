import React from 'react';
import welcomeImage from '../../img/undraw_welcoming_xvuq.svg';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../../store/actions/userActions'

import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
const MyContainer = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const validationSchema = Yup.object().shape({
  email: Yup
    .string()
    .email('Invalid email')
    .required('Required'),
  password: Yup
    .string()
    .required()
    .min(8, 'Seems a bit short...'),
});

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const loginLoading = useSelector(state => state.user.signUpLoading);
  let history = useHistory();

  return (
    <MyContainer>
      <Container>
        <Row>
          <Col md={6}>
            <Image fluid src={welcomeImage}/>
          </Col>
          <Col className="px-5">
            <h1 className="text-center">Login</h1>
            <Formik
              initialValues={{
                email: 'roman@gmail.com',
                password: '12345678',
              }}
              validationSchema={validationSchema}
              onSubmit={(values, {setErrors}) => {
                // same shape as initial values
                dispatch(loginUser(values, history, setErrors));
              }}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email..."
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      isValid={touched.email && !errors.email}
                      isInvalid={touched.email && !!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password..."
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      isValid={touched.password && !errors.password}
                      isInvalid={touched.password && !!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                  </Form.Group>
                  {errors.form && <Alert variant='danger'>
                    {errors.form}
                  </Alert>}
                  <Button variant="primary" type="submit">
                    {loginLoading ? "Loading..." : "Submit"}
                  </Button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </MyContainer>
  );
};

export default Login;
