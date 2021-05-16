import { combineReducers } from 'redux';
import subscriptions from './subscriptionReducer';
import user from './userReducer';

export default combineReducers({
  subscriptions,
  user,
});
