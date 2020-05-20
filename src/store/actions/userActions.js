import api from '../../utils/api';
import {
  AUTH_USER,
  LOGIN_LOADING,
  SIGN_UP_LOADING,
  USER_INFO_ERROR,
  USER_INFO_LOADING,
} from '../actions/actionsTypes';

const authUser = user => ({
  type: AUTH_USER,
  payload: user
});

const userInfoError = errorMessage => ({
  type: USER_INFO_ERROR,
  payload: errorMessage
});

const userInfoLoading = bool => ({
  type: USER_INFO_LOADING,
  payload: bool
});

const loginLoading = bool => ({
  type: LOGIN_LOADING,
  payload: bool
});

const signUpLoading = bool => ({
  type: SIGN_UP_LOADING,
  payload: bool
});

export const logoutUser = () => {
  return (dispatch, getState) => {
    localStorage.setItem("access_token", '');
    dispatch(authUser(null));
  }
};

export const getUserInfo = () => {
  return (dispatch, getState) => {
    dispatch(userInfoLoading(true));
    api.get('/skillful/current_user/', {
      headers: {
        'Accept': 'application/json',
        'Authorization': `JWT ${localStorage.getItem("access_token")}`
      },
    })

      .then((response) => {
        dispatch(authUser(response.data));
      })
      .catch((error) => {
        logoutUser();
        if(error.response) {
          dispatch(userInfoError(error.response.data.errorText));
        } else {
          dispatch(userInfoError("Something went wrong."));
        }
      })
      .finally(() => {
        dispatch(userInfoLoading(false));
      })
  }
};

export const loginUser = (user, history, setErrors) => {
  return (dispatch, getState) => {
    dispatch(loginLoading(true));
    api({
      method: 'post',
      url: '/token-auth/',
      data: user,
      headers: {
        'Accept': 'application/json'
      },
    })
      .then((response) => {
        localStorage.setItem("access_token", response.data.token);
        dispatch(authUser(response.data.user));
        history.push('/');
      })
      .catch((error) => {
        if(error.response) {
          setErrors(transformApiErrors(error.response.data));
        } else {
          setErrors({form: "Something went wrong. Please try again"});
        }
      })
      .finally(() => {
        dispatch(loginLoading(false));
      })
  }
};

export const signUpUser = (user, history, setErrors) => {
  return (dispatch, getState) => {
    dispatch(signUpLoading(true));
    api({
      method: 'post',
      url: '/skillful/users/',
      data: user,
      headers: {
        'Accept': 'application/json'
      },
    })
      .then((response) => {
        localStorage.setItem("access_token", response.data.token);
        dispatch(authUser(response.data));
        history.push('/');
      })
      .catch((error) => {
        if(error.response) {
          setErrors(transformApiErrors(error.response.data));
        } else {
          setErrors({form: "Something went wrong. Please try again"});
        }
      })
      .finally(() => {
        dispatch(signUpLoading(false));
      })
  }
};

const transformApiErrors = (data) => {
  let res = {};
  for (let [key, value] of Object.entries(data)) {
    res[key] = value.reduce((res, errMessage) => res + " " + errMessage);
  }
  return res;
};
