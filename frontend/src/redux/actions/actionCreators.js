import axios from 'axios';
import actionTypes from './actionTypes';

const url = `${process.env.REACT_APP_API_URL}/subscriptions`;

export function login() {
  return {
    type: actionTypes.LOGIN,
  };
}

export function logout() {
  return {
    type: actionTypes.LOGOUT,
  };
}

export function loadSubscriptions() {
  return async (dispatch) => {
    const { data } = await axios(url);
    dispatch({
      type: actionTypes.LOAD_SUBSCRIPTIONS,
      subscriptions: data,
    });
  };
}

export function updateSubscriptions(subscription) {
  return async (dispatch) => {
    const { data } = await axios.put(`${url}/${subscription._id}`);
    dispatch({
      type: actionTypes.LOAD_SUBSCRIPTIONS,
      subscription: data,
    });
  };
}
