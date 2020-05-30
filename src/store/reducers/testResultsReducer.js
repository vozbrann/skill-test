import {
  UPDATE_RESULT_LIST,
  RESULT_LIST_LOADING,
  RESULT_LIST_ERROR,
  RESULT_STATUS_LOADING,
  RESULT_STATUS_ERROR
} from '../actions/actionsTypes';

const initialState = {
  resultList: [],
  resultListLoading: false,
  resultListError: '',
  resultStatusLoading: false,
  resultStatusError: '',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_RESULT_LIST:
      return {...state, resultList: action.payload};
    case RESULT_LIST_LOADING:
      return {...state, resultListLoading: action.payload};
    case RESULT_LIST_ERROR:
      return {...state, resultListError: action.payload};
    case RESULT_STATUS_LOADING:
      return {...state, resultStatusLoading: action.payload};
    case RESULT_STATUS_ERROR:
      return {...state, resultStatusError: action.payload};
    default:
      return state;
  }
};