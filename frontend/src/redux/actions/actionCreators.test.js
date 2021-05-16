import axios from 'axios';
import {
  loadSubscriptions,
  login,
  logout,
  updateSubscription,
} from './actionCreators';
import actionTypes from './actionTypes';

jest.mock('axios');

describe('login', () => {
  test('should return action type login', () => {
    const action = login();
    expect(action.type).toBe(actionTypes.LOGIN);
  });
});

describe('logout', () => {
  test('should return action type logout', () => {
    const action = logout();
    expect(action.type).toBe(actionTypes.LOGOUT);
  });
});

describe('loadSubscriptions', () => {
  test('should return action type loadSubscriptions', async () => {
    const dispatch = jest.fn();
    axios.mockResolvedValueOnce({ data: [] });

    await loadSubscriptions()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_SUBSCRIPTIONS,
      subscriptions: [],
    });
  });
});

describe('updateSubscription', () => {
  test('should return action type updateSubscription', async () => {
    const dispatch = jest.fn();
    axios.put.mockResolvedValueOnce({ data: {} });

    await updateSubscription({ _id: 1, isEnabled: true })(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.UPDATE_SUBSCRIPTIONS,
      subscription: {},
    });
  });
});
