import React from 'react';
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import {fireEvent, render, wait} from '../../test-utils';
import '@testing-library/jest-dom/extend-expect';
import SignUp from './SignUp';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

describe('SignUp form', () => {
  test('submits correct values', async () => {
    const history = createMemoryHistory();
    const {getByText, getByTestId, container} = render(
      <Router history={history}>
        <SignUp/>
      </Router>,
    );
    const username = container.querySelector('input[name="username"]');
    const email = container.querySelector('input[name="email"]');
    const password = container.querySelector('input[name="password"]');
    const confirmPassword = container.querySelector('input[name="confirmPassword"]');
    const submit = container.querySelector('button[type="submit"]');

    await wait(() => {
      fireEvent.change(username, {
        target: {
          value: 'username',
        },
      });
    });

    await wait(() => {
      fireEvent.change(email, {
        target: {
          value: 'mock@email.com',
        },
      });
    });

    await wait(() => {
      fireEvent.change(password, {
        target: {
          value: '1234567890',
        },
      });
    });

    await wait(() => {
      fireEvent.change(confirmPassword, {
        target: {
          value: '1234567890',
        },
      });
    });

    await wait(() => {
      fireEvent.click(submit);
    });

    expect(container.querySelector('button[type="submit"]').innerHTML).toBe('Loading...');
  });
});
