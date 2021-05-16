import actionTypes from '../actions/actionTypes';

function subscriptionReducer(subscriptions = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_SUBSCRIPTIONS:
      return action.subscriptions;

    case actionTypes.UPDATE_SUBSCRIPTIONS:
      return subscriptions.map((subscription) => (subscription._id === action.subscription._id
        ? action.subscription
        : subscription));

    default:
      return subscriptions;
  }
}

export default subscriptionReducer;
