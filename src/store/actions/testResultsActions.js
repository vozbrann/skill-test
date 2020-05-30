import api from '../../utils/api';
import {
  UPDATE_RESULT_LIST,
  RESULT_LIST_LOADING,
  RESULT_LIST_ERROR,
  RESULT_STATUS_LOADING,
  RESULT_STATUS_ERROR
} from '../actions/actionsTypes';

const results = [
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

export const changePublicStatus = (newStatus, handleStatusModalClose) => {
  return (dispatch, getState) => {
    dispatch(testStatusLoading(true));
    setTimeout(() => {
      dispatch(updateResultList(results));
      dispatch(testStatusLoading(false));
      handleStatusModalClose();
    }, 2000)
  }
};
