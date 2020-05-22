import { combineReducers } from 'redux'
import userReducer from './userReducer';
import testInfoReducer from './testInfoReducer';

export default combineReducers({
  user: userReducer,
  testInfo: testInfoReducer,
});
