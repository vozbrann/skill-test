import {
  TEST_SET,
  TEST_START_LOADING,
  TEST_START_ERROR,
  SET_SELECTED_ANSWERS,
  TEST_SUBMIT_LOADING,
  TEST_SUBMIT_ERROR,
} from '../actions/actionsTypes';

const initialState = {
  test: null,
  testStartLoading: false,
  testStartError: '',
  selectedAnswers: {},
  testSubmitLoading: false,
  testSubmitError: '',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case TEST_SET:
      return {...state, test: action.payload};
    case TEST_START_LOADING:
      return {...state, testStartLoading: action.payload};
    case TEST_START_ERROR:
      return {...state, testStartError: action.payload};
    case SET_SELECTED_ANSWERS:
      return {...state, selectedAnswers: action.payload};
    case TEST_SUBMIT_LOADING:
      return {...state, testSubmitLoading: action.payload};
    case TEST_SUBMIT_ERROR:
      return {...state, testSubmitError: action.payload};
    default:
      return state;
  }
};
