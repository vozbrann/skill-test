import {
  AUTH_USER,
  LOGIN_LOADING,
  SIGN_UP_LOADING,
  USER_INFO_LOADING,
  USER_LIST_SET,
  USER_LIST_LOADING,
  USER_LIST_ERROR,
  UPDATE_PUBLIC_PROFILE,
  PUBLIC_PROFILE_LOADING,
  PUBLIC_PROFILE_ERROR,
} from '../actions/actionsTypes';

const initialState = {
  user: null,
  userInfoLoading: true,
  loginLoading: false,
  signUpLoading: false,
  userList: [],
  userListLoading: false,
  userListError: null,
  publicProfile: null,
  publicProfileError: "",
  publicProfileLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {...state, user: action.payload};
    case LOGIN_LOADING:
      return {...state, loginLoading: action.payload};
    case SIGN_UP_LOADING:
      return {...state, signUpLoading: action.payload};
    case USER_INFO_LOADING:
      return {...state, userInfoLoading: action.payload};
    case USER_LIST_LOADING:
      return {...state, userListLoading: action.payload};
    case USER_LIST_ERROR:
      return {...state, userListError: action.payload};
    case USER_LIST_SET:
      return {...state, userList: action.payload};
    case UPDATE_PUBLIC_PROFILE:
      return {...state, publicProfile: action.payload};
    case PUBLIC_PROFILE_LOADING:
      return {...state, publicProfileLoading: action.payload};
    case PUBLIC_PROFILE_ERROR:
      return {...state, publicProfileError: action.payload};
    default:
      return state;
  }
};
