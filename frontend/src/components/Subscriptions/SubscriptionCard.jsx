import React from 'react';
import { PropTypes } from 'prop-types';

function SubscriptionCard({ subscription, toggleSubscription }) {
  return (
    <li>
      <p>{subscription.title}</p>
      <p>{subscription.description}</p>
      <input
        type="checkbox"
        data-testid={`toggle-subscription-${subscription._id}`}
        checked={subscription.isEnabled || false}
        onChange={() => toggleSubscription({
          _id: subscription._id,
          isEnabled: !subscription.isEnabled,
        })}
      />
    </li>
  );
}

SubscriptionCard.propTypes = {
  subscription: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    isEnabled: PropTypes.bool,
  }).isRequired,
  toggleSubscription: PropTypes.func.isRequired,
};

export default SubscriptionCard;
