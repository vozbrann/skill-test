import React from 'react';
import friendImage from '../../img/undraw_sign_in_e6hj.svg';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import {Formik} from 'formik';
import * as Yup from 'yup';

import {useDispatch, useSelector} from 'react-redux';
import {signUpUser} from '../../store/actions/userActions';

import {useHistory} from 'react-router-dom';

import styled from 'styled-components';

const MyContainer = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const validationSchema = Yup.object().shape({
  username: Yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup
    .string()
    .email('Invalid email')
    .required('Required'),
  password: Yup
    .string()
    .required()
    .min(8, 'Seems a bit short...'),
  confirmPassword: Yup
    .string()
    .required()
    .test('passwords-match', 'Passwords must match ya fool', function(value) {
      return this.parent.password === value;
    }),
});

const SignUp = () => {
  const dispatch = useDispatch();
  const signUpLoading = useSelector(state => state.user.signUpLoading);

  let history = useHistory();

  return (
    <MyContainer>
      <Container>
        <Row>
          <Col className="px-md-5">
            <h1 className="text-center">Sign up</h1>
            <Formik
              initialValues={{
                username: 'Roman',
                email: 'roman@gmail.com',
                password: '12345678',
                confirmPassword: '12345678',
              }}
              validationSchema={validationSchema}
              onSubmit={(values, {setErrors}) => {
                // same shape as initial values
                dispatch(signUpUser(values, history, setErrors));
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
                  <Form.Group>
                    <Form.Label>Your name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name..."
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      isValid={touched.username && !errors.username}
                      isInvalid={touched.username && !!errors.username}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.username}
                    </Form.Control.Feedback>
                  </Form.Group>
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
                    <Form.Control.Feedback
                      type="invalid">{errors.email}</Form.Control.Feedback>
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
                    <Form.Control.Feedback
                      type="invalid">{errors.password}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm password..."
                      name="confirmPassword"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      isValid={touched.confirmPassword &&
                      !errors.confirmPassword}
                      isInvalid={touched.confirmPassword &&
                      !!errors.confirmPassword}
                    />
                    <Form.Control.Feedback
                      type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
                  </Form.Group>
                  {errors.form && <Alert variant='danger'>
                    {errors.form}
                  </Alert>}
                  <Button variant="primary" type="submit">
                    {signUpLoading ? 'Loading...' : 'Submit'}
                  </Button>
                </Form>
              )}
            </Formik>
          </Col>
          <Col md={6}>
            <Image className="mt-5" fluid src={friendImage}/>
          </Col>
        </Row>
      </Container>
    </MyContainer>
  );
};

export default SignUp;
