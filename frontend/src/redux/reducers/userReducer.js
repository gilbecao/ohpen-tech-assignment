import actionTypes from '../actions/actionTypes';

function userReducer(user = {}, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        email: 'dev@ohpen.com',
        role: 'administrator',
      };

    case actionTypes.LOGOUT:
      return {};

    default:
      return user;
  }
}

export default userReducer;
