import {
  AUTH_USER,
  LOGIN_LOADING,
  SIGN_UP_LOADING,
  USER_INFO_ERROR,
  USER_INFO_LOADING,
} from '../actions/actionsTypes';

const initialState = {
  user: null,
  userInfoLoading: true,
  userInfoError: '',
  loginLoading: false,
  signUpLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {...state, user: action.payload};
    case LOGIN_LOADING:
      return {...state, loginLoading: action.payload};
    case SIGN_UP_LOADING:
      return {...state, signUpLoading: action.payload};
    case USER_INFO_ERROR:
      return {...state, userInfoError: action.payload};
    case USER_INFO_LOADING:
      return {...state, userInfoLoading: action.payload};
    default:
      return state;
  }
};
