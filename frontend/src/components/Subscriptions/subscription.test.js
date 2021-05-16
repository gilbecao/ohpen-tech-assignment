/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { fireEvent, render, screen } from '../../utils/test-utils';

import Subscriptions from '.';

import { loadSubscriptions, updateSubscription } from '../../redux/actions/actionCreators';
import actionTypes from '../../redux/actions/actionTypes';
import subscriptionMock from '../../constants/subscription.mock';

jest.mock('../../redux/actions/actionCreators');

describe('SubscriptionCard', () => {
  describe('with empty state', () => {
    beforeEach(() => {
      loadSubscriptions.mockReturnValueOnce({
        type: actionTypes.LOAD_SUBSCRIPTIONS,
        subscriptions: [],
      });
      render(
        <Subscriptions />,
      );
    });

    test('should render no subscriptions', () => {
      expect(screen.queryByText('Subscription 1')).not.toBeInTheDocument();
    });
  });

  describe('with subscriptions loaded', () => {
    beforeEach(() => {
      loadSubscriptions.mockReturnValueOnce({
        type: actionTypes.LOAD_SUBSCRIPTIONS,
        subscriptions: subscriptionMock,
      });

      updateSubscription.mockReturnValueOnce({
        type: actionTypes.UPDATE_SUBSCRIPTIONS,
        subscription: { _id: '60a0ddfe6b4b194872373750', isEnable: false },
      });

      render(
        <Subscriptions />,
        { initialState: { subscriptions: subscriptionMock } },
      );
    });

    test('should render Subscription 1', () => {
      expect(screen.getByText(/Subscription 1/i)).toBeInTheDocument();
    });

    test('should call updateSubscription on Subscription 1', () => {
      const toggleElement = screen.getByTestId('toggle-subscription-60a0ddfe6b4b194872373750');
      fireEvent.click(toggleElement);
      expect(updateSubscription).toHaveBeenCalled();
    });
  });
});
