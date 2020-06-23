import api from '../../utils/api';
import {
  UPDATE_RESULT_LIST,
  RESULT_LIST_LOADING,
  RESULT_LIST_ERROR,
  RESULT_STATUS_LOADING,
  RESULT_STATUS_ERROR,
  UPDATE_USER_RESULT_LIST,
  USER_RESULT_LIST_LOADING,
  USER_RESULT_LIST_ERROR,
  UPDATE_RESULT,
  RESULT_LOADING,
  RESULT_ERROR,
} from '../actions/actionsTypes';
import {logoutUser} from './userActions';

const userResults = [
  {
    id:"1234tysdf",
    title:"HTML",
    score:50,
    public:false,
    date:"14:59 27.05.2020",
  },
  {
    id:"1234tyvd",
    title:"JavaScript",
    score:89,
    public:false,
    date:"14:59 27.05.2020",
  },
  {
    id:"1234tyasdf",
    title:"CSS",
    score:74,
    public:true,
    date:"14:59 27.05.2019",
  },
  {
    id:"1234tyasdfsd",
    title:"SQL",
    score:54,
    public:false,
    date:"12:00 27.05.2020",
  }
];

const results = [
  {
    id:"1234tysdf",
    title:"HTML",
    score:50,
    public:false,
    date:"14:59 27.05.2020",
    user: {
      username:"Roman"
    }
  },
  {
    id:"1234tyvd",
    title:"JavaScript",
    score:89,
    public:false,
    date:"14:59 27.05.2020",
    user: {
      username:"Ivan"
    }
  },
  {
    id:"1234tyasdf",
    title:"CSS",
    score:74,
    public:true,
    date:"14:59 27.05.2019",
    user: {
      username:"Ivan"
    }
  },
  {
    id:"1234tyasdfsd",
    title:"SQL",
    score:54,
    public:false,
    date:"12:00 27.05.2020",
    user: {
      username:"Ivan"
    }
  }
];

const updateResult = result => ({
  type: UPDATE_RESULT,
  payload: result
});

const resultLoading = bool => ({
  type: RESULT_LOADING,
  payload: bool
});

const resultError = error => ({
  type: RESULT_ERROR,
  payload: error
});

const updateUserResultList = resultList => ({
  type: UPDATE_USER_RESULT_LIST,
  payload: resultList
});

const testUserResultListLoading = bool => ({
  type: USER_RESULT_LIST_LOADING,
  payload: bool
});

const testUserResultListError = error => ({
  type: USER_RESULT_LIST_ERROR,
  payload: error
});

const updateResultList = resultList => ({
  type: UPDATE_RESULT_LIST,
  payload: resultList
});

const testResultListLoading = bool => ({
  type: RESULT_LIST_LOADING,
  payload: bool
});

const testResultListError = error => ({
  type: RESULT_LIST_ERROR,
  payload: error
});

const testStatusLoading = bool => ({
  type: RESULT_STATUS_LOADING,
  payload: bool
});

const testStatusError = error => ({
  type: RESULT_STATUS_ERROR,
  payload: error
});

export const fetchResults = () => {
  return (dispatch, getState) => {
    dispatch(testResultListLoading(true));
    api.get('/all-taken-tests-date/', {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem("access_token")}`
      },
    })
      .then((response) => {
        dispatch(updateResultList(response.data));
      })
      .catch((error) => {
        dispatch(testUserResultListError('Something went wrong. Please try again'));
      })
      .finally(() => {
        dispatch(testResultListLoading(false));
      })
  }
};

export const fetchUserResults = () => {
  return (dispatch, getState) => {
    dispatch(testUserResultListLoading(true));
    api.get('/user/taken-tests/', {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem("access_token")}`
      },
    })
      .then((response) => {
        dispatch(updateUserResultList(response.data));
      })
      .catch((error) => {
        dispatch(testUserResultListError('Something went wrong. Please try again'));
      })
      .finally(() => {
        dispatch(testUserResultListLoading(false));
      })
  }
};

export const fetchResult = (id) => {
  return (dispatch, getState) => {
    dispatch(resultLoading(true));
    api.get('/taken-test/', {
      params: {
        test_taken_id: id,
      },
      headers: {
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem("access_token")}`
      },
    })
      .then((response) => {
        dispatch(updateResult(response.data));
      })
      .catch((error) => {
        dispatch(resultError('Something went wrong. Please try again'));
      })
      .finally(() => {
        dispatch(resultLoading(false));
      })
  }
};

export const changePublicStatus = (id, handleStatusModalClose) => {
  return (dispatch, getState) => {
    dispatch(testStatusLoading(true));
    api({
      method: 'patch',
      url: '/taken-test/update/',
      params: {
      test_taken_id: id,
      },
      headers: {
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem("access_token")}`,
      },
    })
      .then(() => {
        dispatch(fetchUserResults());
        dispatch(fetchResult(id));
        handleStatusModalClose();
      })
      .catch((error) => {
        dispatch(resultError('Something went wrong. Please try again'));
      })
      .finally(() => {
        dispatch(testStatusLoading(false));
      })
  }
};
