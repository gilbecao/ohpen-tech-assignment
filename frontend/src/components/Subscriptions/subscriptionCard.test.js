/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, fireEvent, screen } from '../../utils/test-utils';

import SubscriptionCard from './SubscriptionCard';
import subscriptionsMock from '../../constants/subscription.mock';

describe('SubscriptionCard', () => {
  const toggleSubscription = jest.fn();
  beforeEach(() => {
    render(
      <SubscriptionCard
        subscription={subscriptionsMock[0]}
        toggleSubscription={toggleSubscription}
      />,
      { initialState: { subscriptions: subscriptionsMock } },
    );
  });
  test('should render Subscription 1', () => {
    expect(screen.getByText(/Subscription 1/i)).toBeInTheDocument();
  });

  test('should render description', () => {
    expect(screen.getByText(/printing and typesetting industry/i)).toBeInTheDocument();
  });

  test('should call toggleSubscription on Subscription 1', () => {
    const toggleElement = screen.getByTestId('toggle-subscription-60a0ddfe6b4b194872373750');
    fireEvent.click(toggleElement);
    expect(toggleSubscription).toHaveBeenCalled();
  });
});
