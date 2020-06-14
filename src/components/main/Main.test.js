import React from 'react';
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import {fireEvent, render, screen, waitForElement} from '../../test-utils';
import '@testing-library/jest-dom/extend-expect';
import Main from './Main';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

describe('Popular tests', () => {
  test('3 popular test rendered', () => {
    const history = createMemoryHistory();
    const {getByText, getByTestId} = render(
      <Router history={history}>
        <Main/>
      </Router>,
      {
        initialState: {
          testInfo: {
            testInfoList: [
              {
                id: 1,
                title: 'HTML',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aut autem consequatur distinctio dolor dolore dolores doloribus eaque eos est et eveniet excepturi facilis fuga id ipsa magnam mollitia nisi non provident quasi qui quidem quis reiciendis sapiente suscipit, voluptates? Accusantium cupiditate dolores eaque ipsum iste magni maiores minima odit quae quibusdam quisquam, quo reiciendis repudiandae sapiente temporibus, tenetur!',
                img: 'https://www.positronx.io/wp-content/uploads/2019/06/space-in-html-00.jpg',
                duration: 60000,
                timeBetweenAttempts: 2592000000,
              },
              {
                id: 2,
                title: 'JavaScript',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aut autem consequatur distinctio dolor dolore dolores doloribus eaque eos est et eveniet excepturi facilis fuga id ipsa magnam mollitia nisi non provident quasi qui quidem quis reiciendis sapiente suscipit, voluptates? Accusantium cupiditate dolores eaque ipsum iste magni maiores minima odit quae quibusdam quisquam, quo reiciendis repudiandae sapiente temporibus, tenetur!',
                img: 'https://blog.kdchang.cc/2016/12/21/javascript101-tutorial/javascript.png',
                duration: 1800000,
                timeBetweenAttempts: 2592000000,
              },
              {
                id: 3,
                title: 'CSS',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aut autem consequatur distinctio dolor dolore dolores doloribus eaque eos est et eveniet excepturi facilis fuga id ipsa magnam mollitia nisi non provident quasi qui quidem quis reiciendis sapiente suscipit, voluptates? Accusantium cupiditate dolores eaque ipsum iste magni maiores minima odit quae quibusdam quisquam, quo reiciendis repudiandae sapiente temporibus, tenetur!',
                img: 'https://s3.tproger.ru/uploads/2019/07/iconfinder_Css-File_377666-cover-1.jpg',
                duration: 300000,
                timeBetweenAttempts: 86400000,
              },
              {
                id: 4,
                title: 'React.js',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aut autem consequatur distinctio dolor dolore dolores doloribus eaque eos est et eveniet excepturi facilis fuga id ipsa magnam mollitia nisi non provident quasi qui quidem quis reiciendis sapiente suscipit, voluptates? Accusantium cupiditate dolores eaque ipsum iste magni maiores minima odit quae quibusdam quisquam, quo reiciendis repudiandae sapiente temporibus, tenetur!',
                img: 'https://ru.reactjs.org/logo-og.png',
                duration: 300000,
                timeBetweenAttempts: 86400000,
              },
              {
                id: 5,
                title: 'Vue.js',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aut autem consequatur distinctio dolor dolore dolores doloribus eaque eos est et eveniet excepturi facilis fuga id ipsa magnam mollitia nisi non provident quasi qui quidem quis reiciendis sapiente suscipit, voluptates? Accusantium cupiditate dolores eaque ipsum iste magni maiores minima odit quae quibusdam quisquam, quo reiciendis repudiandae sapiente temporibus, tenetur!',
                img: 'https://markup-ua.com/blog/wp-content/uploads/2017/09/vue.jpeg',
                duration: 300000,
                timeBetweenAttempts: 86400000,
              },
            ]
          },
        }
      },
    );
    expect(screen.queryAllByTestId('smallTestCard')).toHaveLength(3) ;
    expect(screen.getByText('HTML'));
    expect(screen.getByText('JavaScript'));
    expect(screen.getByText('CSS'));
    expect(screen.queryByText('React.js')).toBeNull();
  });

  test('popular tests loading skeletons', () => {
    const history = createMemoryHistory();
    const {getByText, getByTestId} = render(
      <Router history={history}>
        <Main/>
      </Router>,
      {
        initialState: {
          testInfo: {
            testInfoList: []
          },
        }
      },
    );
    expect(screen.queryAllByTestId('smallTestCardSkeleton')).toHaveLength(3) ;
  });

  test('popular tests loading spinner', () => {
    const history = createMemoryHistory();
    const {getByText, getByTestId} = render(
      <Router history={history}>
        <Main/>
      </Router>,
      {
        initialState: {
          testInfo: {
            testInfoList: [
              {
                id: 1,
                title: 'HTML',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aut autem consequatur distinctio dolor dolore dolores doloribus eaque eos est et eveniet excepturi facilis fuga id ipsa magnam mollitia nisi non provident quasi qui quidem quis reiciendis sapiente suscipit, voluptates? Accusantium cupiditate dolores eaque ipsum iste magni maiores minima odit quae quibusdam quisquam, quo reiciendis repudiandae sapiente temporibus, tenetur!',
                img: 'https://www.positronx.io/wp-content/uploads/2019/06/space-in-html-00.jpg',
                duration: 60000,
                timeBetweenAttempts: 2592000000,
              },
              {
                id: 2,
                title: 'JavaScript',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aut autem consequatur distinctio dolor dolore dolores doloribus eaque eos est et eveniet excepturi facilis fuga id ipsa magnam mollitia nisi non provident quasi qui quidem quis reiciendis sapiente suscipit, voluptates? Accusantium cupiditate dolores eaque ipsum iste magni maiores minima odit quae quibusdam quisquam, quo reiciendis repudiandae sapiente temporibus, tenetur!',
                img: 'https://blog.kdchang.cc/2016/12/21/javascript101-tutorial/javascript.png',
                duration: 1800000,
                timeBetweenAttempts: 2592000000,
              },
              {
                id: 3,
                title: 'CSS',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aut autem consequatur distinctio dolor dolore dolores doloribus eaque eos est et eveniet excepturi facilis fuga id ipsa magnam mollitia nisi non provident quasi qui quidem quis reiciendis sapiente suscipit, voluptates? Accusantium cupiditate dolores eaque ipsum iste magni maiores minima odit quae quibusdam quisquam, quo reiciendis repudiandae sapiente temporibus, tenetur!',
                img: 'https://s3.tproger.ru/uploads/2019/07/iconfinder_Css-File_377666-cover-1.jpg',
                duration: 300000,
                timeBetweenAttempts: 86400000,
              },
              {
                id: 4,
                title: 'React.js',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aut autem consequatur distinctio dolor dolore dolores doloribus eaque eos est et eveniet excepturi facilis fuga id ipsa magnam mollitia nisi non provident quasi qui quidem quis reiciendis sapiente suscipit, voluptates? Accusantium cupiditate dolores eaque ipsum iste magni maiores minima odit quae quibusdam quisquam, quo reiciendis repudiandae sapiente temporibus, tenetur!',
                img: 'https://ru.reactjs.org/logo-og.png',
                duration: 300000,
                timeBetweenAttempts: 86400000,
              },
              {
                id: 5,
                title: 'Vue.js',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aut autem consequatur distinctio dolor dolore dolores doloribus eaque eos est et eveniet excepturi facilis fuga id ipsa magnam mollitia nisi non provident quasi qui quidem quis reiciendis sapiente suscipit, voluptates? Accusantium cupiditate dolores eaque ipsum iste magni maiores minima odit quae quibusdam quisquam, quo reiciendis repudiandae sapiente temporibus, tenetur!',
                img: 'https://markup-ua.com/blog/wp-content/uploads/2017/09/vue.jpeg',
                duration: 300000,
                timeBetweenAttempts: 86400000,
              },
            ],
            testInfoListLoading: true,
          },
        }
      },
    );
    expect(screen.getByTestId('testInfoListSpinner'));
  });
});

describe('Main page explore tests btn', () => {
  test('3 popular test rendered', async () => {
    const history = createMemoryHistory();
    const {getByText, getByTestId} = render(
      <Router history={history}>
        <Main/>
      </Router>
    );
    fireEvent.click(getByText(/explore tests/i));
    expect(history.location.pathname).toBe("/catalog");
  });
});
