import {
  TEST_INFO_LIST_ERROR,
  TEST_INFO_LIST_LOADING,
  TEST_INFO_LIST_SET,
  TEST_INFO_ERROR,
  TEST_INFO_LOADING,
  TEST_INFO_SET
} from '../actions/actionsTypes';

const initialState = {
  testInfoList: [],
  testInfoListLoading: true,
  testInfoListError: '',
  testInfo: null,
  testInfoLoading: true,
  testInfoError: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TEST_INFO_LIST_SET:
      return {...state, testInfoList: action.payload};
    case TEST_INFO_LIST_LOADING:
      return {...state, testInfoListLoading: action.payload};
    case TEST_INFO_LIST_ERROR:
      return {...state, testInfoListError: action.payload};
    case TEST_INFO_SET:
      return {...state, testInfo: action.payload};
    case TEST_INFO_LOADING:
      return {...state, testInfoLoading: action.payload};
    case TEST_INFO_ERROR:
      return {...state, testInfoError: action.payload};
    default:
      return state;
  }
};
