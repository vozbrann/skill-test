import React from 'react';
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import {fireEvent, render, screen} from '../test-utils.js';
import '@testing-library/jest-dom/extend-expect';
import AppBar from '../components/AppBar';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

describe('App bar', () => {
  test('app bar links for logged user', () => {
    const history = createMemoryHistory();
    const {getByText, getByTestId} = render(
      <Router history={history}>
        <AppBar/>
      </Router>,
      {
        initialState: {
          user: {
            user: {
              id: 93,
              token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkI…vbSJ9.o9tqGb8d45bu0CuPbrHcPcRNFxapRM9kt48YS_wrgjk',
              email: 'roman@gmail.com',
              username: 'Romanasdae',
            },
          },
        }
      },
    );
    expect(screen.getByTestId('logo-home-link'));
    expect(screen.getByText('Home'));
    expect(screen.getByText('Catalog'));
    expect(screen.getByText('My results', { exact: false }));
    expect(screen.getByText('All results', { exact: false }));
    expect(screen.getByTestId('profile-link'));
    expect(screen.queryByText('Login')).toBeNull();
    expect(screen.queryByText('SignUp')).toBeNull();
  });

  test('app bar user preview', () => {
    const history = createMemoryHistory();
    const {getByText, getByTestId} = render(
      <Router history={history}>
        <AppBar/>
      </Router>,
      {
        initialState: {
          user: {
            user: {
              id: 93,
              token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkI…vbSJ9.o9tqGb8d45bu0CuPbrHcPcRNFxapRM9kt48YS_wrgjk',
              email: 'roman@gmail.com',
              username: 'TestName',
            },
            userInfoLoading:false
          },
        }
      },
    );
    expect(screen.getByTestId('profile-link')).toHaveTextContent('TestName');
  });

  test('app bar links for guests', () => {
    const history = createMemoryHistory();
    const {getByText, getByTestId} = render(
      <Router history={history}>
        <AppBar/>
      </Router>,
      {
        initialState: {
          user: {
            userInfoLoading:false
          },
        }
      },
    );
    expect(screen.getByTestId('logo-home-link'));
    expect(screen.getByText('Home'));
    expect(screen.getByText('Catalog'));
    expect(screen.queryByText('My results', { exact: false })).toBeNull();
    expect(screen.queryByText('All results', { exact: false })).toBeNull();
    expect(screen.queryByTestId('profile-link')).toBeNull();
    expect(screen.getByText('Login', { exact: false }));
    expect(screen.getByText('SignUp', { exact: false }));
  });

  test('app bar loading state', () => {
    const history = createMemoryHistory();
    const {getByText, getByTestId} = render(
      <Router history={history}>
        <AppBar/>
      </Router>
    );
    expect(screen.getByTestId('logo-home-link'));
    expect(screen.getByText('Home'));
    expect(screen.getByText('Catalog'));
    expect(screen.queryByText('My results', { exact: false })).toBeNull();
    expect(screen.queryByText('All results', { exact: false })).toBeNull();
    expect(screen.queryByTestId('profile-link')).toBeNull();
    expect(screen.getByTestId('loading-spinner'));
  });
});
