import api from '../../utils/api';
import {transformApiErrors} from '../../utils/helpers'
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
import {fetchResult, fetchUserResults} from './testResultsActions';


const updatePublicProfile = profile => ({
  type: UPDATE_PUBLIC_PROFILE,
  payload: profile
});

const publicProfileLoading = bool => ({
  type: PUBLIC_PROFILE_LOADING,
  payload: bool
});

const  publicProfileError = error => ({
  type: PUBLIC_PROFILE_ERROR,
  payload: error
});

const updateUserList = userList => ({
  type: USER_LIST_SET,
  payload: userList
});

const userListLoading = bool => ({
  type: USER_LIST_LOADING,
  payload: bool
});

const userListError = error => ({
  type: USER_LIST_ERROR,
  payload: error
});

const authUser = user => ({
  type: AUTH_USER,
  payload: user
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

export const fetchPublicProfile = (id) => {
  return (dispatch, getState) => {
    dispatch(publicProfileLoading(true));
    api({
      method: 'get',
      url: '/users/'+id+'/',
      params: {
        user_id: id,
      },
      headers: {
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem("access_token")}`,
      },
    })
      .then((response) => {
        api({
          method: 'get',
          url: '/users/taken-tests/',
          params: {
            user_id: id,
          },
          headers: {
            'Accept': 'application/json',
            'Authorization': `Token ${localStorage.getItem("access_token")}`,
          },
        })
          .then((response2) => {
            dispatch(updatePublicProfile({...response.data, resultList: response2.data}));
          })
      })
      .catch((error) => {
        dispatch(publicProfileError('Something went wrong. Please try again'));
      })
      .finally(() => {
        dispatch(publicProfileLoading(false));
      })
  }
};

export const fetchUserList = (searchQuery) => {
  return (dispatch, getState) => {
    dispatch(userListLoading(true));
    api.get(`/users/${searchQuery ? "?search="+searchQuery : ""}`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem("access_token")}`
      },
    })
      .then((response) => {
        dispatch(updateUserList(response.data));
      })
      .catch((error) => {
        userListError("Something went wrong. Please try again");
      })
      .finally(() => {
        dispatch(userListLoading(false));
      })
  }
};

export const getUserInfo = () => {
  return (dispatch, getState) => {
    dispatch(userInfoLoading(true));
    api.get('/user/', {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem("access_token")}`
      },
    })

      .then((response) => {
        dispatch(authUser(response.data));
      })
      .catch(() => {
        logoutUser();
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
      url: '/auth/login/',
      data: user,
      headers: {
        'Accept': 'application/json'
      },
    })
      .then((response) => {
        localStorage.setItem("access_token", response.data.token);
        dispatch(getUserInfo());
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
      url: '/auth/create-user/',
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
        console.log(getState());
      })
  }
};
