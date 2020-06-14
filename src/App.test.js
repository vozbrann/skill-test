import React from 'react';
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import {fireEvent, render, screen, waitForElement} from './test-utils.js';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
// import { waitForElement } from '@testing-library/react';

describe('App guest routing', () => {
  test('guest allowed routes', () => {
    const history = createMemoryHistory();
    const {getByText, getByTestId} = render(
      <Router history={history}>
        <App/>
      </Router>,
      {
        initialState: {
          user: {
            userInfoLoading:false
          },
        }
      },
    );

    history.push('/');
    expect(screen.getByTestId('main-page'));

    history.push('/catalog');
    expect(screen.getByTestId('catalog-page'));

    history.push('/catalog/1');
    expect(screen.getByTestId('testDetails-page'));

    history.push('/signUp');
    expect(screen.getByTestId('signUp-page'));

    history.push('/login');
    expect(screen.getByTestId('login-page'));

  });

  test('guest redirect routes', async () => {
    const history = createMemoryHistory();
    const {getByText, getByTestId} = render(
      <Router history={history}>
        <App/>
      </Router>,
      {
        initialState: {
          user: {
            userInfoLoading: false,
            user: null
          },
        }
      },
    );

    history.push('/profile');
    expect(await waitForElement(() => screen.getByTestId('main-page')));

    history.push('/myResults');
    expect(await waitForElement(() => screen.getByTestId('main-page')));

    history.push('/allResults');
    expect(await waitForElement(() => screen.getByTestId('main-page')));

    history.push('/result/1');
    expect(await waitForElement(() => screen.getByTestId('main-page')));

    history.push('/test');
    expect(await waitForElement(() => screen.getByTestId('main-page')));
  });
});

describe('App user routing', () => {
  test('user allowed routes', () => {
    const history = createMemoryHistory();
    const {getByText, getByTestId} = render(
      <Router history={history}>
        <App/>
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

    history.push('/');
    expect(screen.getByTestId('main-page'));

    history.push('/catalog');
    expect(screen.getByTestId('catalog-page'));

    history.push('/catalog/1');
    expect(screen.getByTestId('testDetails-page'));

    history.push('/profile');
    expect(screen.getByTestId('profile-page'));

    history.push('/myResults');
    expect(screen.getByTestId('myResults-page'));

    history.push('/allResults');
    expect(screen.getByTestId('allResults-page'));

    history.push('/result/1');
    expect(screen.getByTestId('result-page'));

  });

  test('user redirect routes', async () => {
    const history = createMemoryHistory();
    const {getByText, getByTestId} = render(
      <Router history={history}>
        <App/>
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
            userInfoLoading:false
          },
        }
      },
    );

    history.push('/login');
    expect(await waitForElement(() => screen.getByTestId('main-page')));

    history.push('/signUp');
    expect(await waitForElement(() => screen.getByTestId('main-page')));
  });
});

