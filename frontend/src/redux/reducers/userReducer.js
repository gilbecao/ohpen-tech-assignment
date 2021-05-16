import actionTypes from '../actions/actionTypes';

function userReducer(user = {}, action) {
  const getUserName = (isAdmin) => (isAdmin ? 'admin' : 'rrhh');
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        email: `${getUserName(action.isAdmin)}@ohpen.com`,
        isAdmin: action.isAdmin,
      };

    case actionTypes.LOGOUT:
      return {};

    default:
      return user;
  }
}

export default userReducer;
