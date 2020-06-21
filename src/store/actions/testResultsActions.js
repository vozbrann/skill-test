import api from '../../utils/api';
import {
  UPDATE_RESULT_LIST,
  RESULT_LIST_LOADING,
  RESULT_LIST_ERROR,
  RESULT_STATUS_LOADING,
  RESULT_STATUS_ERROR,
  UPDATE_USER_RESULT_LIST,
  USER_RESULT_LIST_LOADING,
  USER_RESULT_LIST_ERROR
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
    setTimeout(() => {
      dispatch(updateResultList(results));
      dispatch(testResultListLoading(false));
    }, 2000)
  }
};

export const fetchUserResults = () => {
  return (dispatch, getState) => {
    // dispatch(testUserResultListLoading(true));
    // setTimeout(() => {
    //   dispatch(updateUserResultList(userResults));
    //   dispatch(testUserResultListLoading(false));
    // }, 2000);

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
        if (error.response) {
          dispatch(testUserResultListError(error.response.data || []));
        } else {
          dispatch(testUserResultListError('Something went wrong. Please try again'));
        }

      })
      .finally(() => {
        dispatch(testUserResultListLoading(false));
      })
  }
};

export const changePublicStatus = (newStatus, handleStatusModalClose) => {
  return (dispatch, getState) => {
    dispatch(testStatusLoading(true));
    setTimeout(() => {
      dispatch(updateUserResultList(userResults));
      dispatch(testStatusLoading(false));
      handleStatusModalClose();
    }, 2000)
  }
};
