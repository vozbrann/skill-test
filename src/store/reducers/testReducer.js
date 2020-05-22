import {
  TEST_SET,
  TEST_START_LOADING,
  TEST_START_ERROR
} from '../actions/actionsTypes';

const initialState = {
  test: null,
  testStartLoading: false,
  testStartError: ''
};
export default (state = initialState, action) => {
  switch (action.type) {
    case TEST_SET:
      return {...state, test: action.payload};
    case TEST_START_LOADING:
      return {...state, testStartLoading: action.payload};
    case TEST_START_ERROR:
      return {...state, testStartError: action.payload};
    default:
      return state;
  }
};
