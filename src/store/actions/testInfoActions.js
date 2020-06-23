import api from '../../utils/api';
import {
  TEST_INFO_LIST_ERROR,
  TEST_INFO_LIST_LOADING,
  TEST_INFO_LIST_SET,
  TEST_INFO_ERROR,
  TEST_INFO_LOADING,
  TEST_INFO_SET
} from '../actions/actionsTypes';

import {transformApiErrors} from '../../utils/helpers'

const testList = [
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
];

const testInfo = {
  id: 5,
  title: 'Vue.js',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aut autem consequatur distinctio dolor dolore dolores doloribus eaque eos est et eveniet excepturi facilis fuga id ipsa magnam mollitia nisi non provident quasi qui quidem quis reiciendis sapiente suscipit, voluptates? Accusantium cupiditate dolores eaque ipsum iste magni maiores minima odit quae quibusdam quisquam, quo reiciendis repudiandae sapiente temporibus, tenetur!',
  img: 'https://markup-ua.com/blog/wp-content/uploads/2017/09/vue.jpeg',
  duration: 300000,
  timeBetweenAttempts: 86400000,
};

const setTestInfoList = testInfoList => ({
  type: TEST_INFO_LIST_SET,
  payload: testInfoList
});

const testInfoListLoading = bool => ({
  type: TEST_INFO_LIST_LOADING,
  payload: bool
});

const testInfoListError = error => ({
  type: TEST_INFO_LIST_ERROR,
  payload: error
});

const setTestInfo = testInfo => ({
  type: TEST_INFO_SET,
  payload: testInfo
});

const testInfoLoading = bool => ({
  type: TEST_INFO_LOADING,
  payload: bool
});

const testInfoError = error => ({
  type: TEST_INFO_ERROR,
  payload: error
});

export const fetchTestInfoList = () => {
  return (dispatch, getState) => {
    dispatch(testInfoListLoading(true));
    api.get('/tests/', {
      headers: {
        'Accept': 'application/json',
      },
    })
      .then((response) => {
        dispatch(setTestInfoList(response.data));
      })
      .catch((error) => {
        if(error.response) {
          testInfoListError(transformApiErrors(error.response.data));
        } else {
          testInfoListError({form: "Something went wrong. Please try again"});
        }
      })
      .finally(() => {
        dispatch(testInfoListLoading(false));
      })

    // dispatch(testInfoListLoading(true));
    // setTimeout(() => {
    //   dispatch(setTestInfoList(testList));
    //   dispatch(testInfoListLoading(false));
    // }, 2000)
  }
};

export const fetchTestInfo = (id, history) => {
  return (dispatch, getState) => {
    dispatch(testInfoLoading(true));
    api.get(`/tests/${id}/`, {
      headers: {
        'Accept': 'application/json',
      },
    })
      .then((response) => {
        dispatch(setTestInfo(response.data));
      })
      .catch((error) => {
        testInfoError('Something went wrong. Please try again');
      })
      .finally(() => {
        dispatch(testInfoLoading(false));
      })
  }
};
