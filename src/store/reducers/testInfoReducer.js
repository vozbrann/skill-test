import {
  TEST_INFO_LIST_ERROR,
  TEST_INFO_LIST_LOADING,
  TEST_INFO_LIST_SET,
} from '../actions/actionsTypes';

const initialState = {
  testInfoList: [],
  testInfoListLoading: true,
  testInfoListError: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TEST_INFO_LIST_SET:
      return {...state, testInfoList: action.payload};
    case TEST_INFO_LIST_LOADING:
      return {...state, testInfoListLoading: action.payload};
    case TEST_INFO_LIST_ERROR:
      return {...state, testInfoListError: action.payload};
    default:
      return state;
  }
};
