import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../../store/actions/userActions'

import {useHistory} from 'react-router-dom';
import AuthContainer from './AuthContainer';

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
    <AuthContainer data-testid='login-page'>
      <h1 className="h3">Login</h1>
      <p className="text-secondary mb-4">Welcome back, please login to your account.</p>
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
              <Form.Label>Email</Form.Label>
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
    </AuthContainer>
  );
};

export default Login;
