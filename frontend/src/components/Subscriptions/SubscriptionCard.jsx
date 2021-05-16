import React from 'react';
import { PropTypes } from 'prop-types';

function SubscriptionCard({ subscription, toggleSubscription }) {
  return (
    <li>
      <p>{subscription.title}</p>
      <p>{subscription.description}</p>
      <input
        type="checkbox"
        checked={subscription.isEnabled}
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
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isEnabled: PropTypes.bool.isRequired,
  }).isRequired,
  toggleSubscription: PropTypes.func.isRequired,
};

export default SubscriptionCard;
