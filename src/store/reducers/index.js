import { combineReducers } from 'redux'
import userReducer from './userReducer';
import testInfoReducer from './testInfoReducer';
import testReducer from './testReducer';
import testResultsReducer from './testResultsReducer';

export default combineReducers({
  user: userReducer,
  testInfo: testInfoReducer,
  test: testReducer,
  testResults: testResultsReducer,
});
