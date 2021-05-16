import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadSubscriptions, updateSubscription } from '../../redux/actions/actionCreators';
import SubscriptionCard from './SubscriptionCard';

function Subscriptions({ subscriptions, dispatch }) {
  useEffect(() => {
    if (!subscriptions.length) {
      dispatch(loadSubscriptions());
    }
  }, []);

  function toggleSubscription(subscription) {
    dispatch(updateSubscription(subscription));
  }
  return (
    <ul>
      {subscriptions.map((subscription) => (
        <SubscriptionCard
          key={subscription._id}
          subscription={subscription}
          toggleSubscription={toggleSubscription}
        />
      ))}
    </ul>
  );
}

Subscriptions.propTypes = {
  subscriptions: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    isEnabled: PropTypes.bool,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ subscriptions }) {
  return { subscriptions };
}

export default connect(mapStateToProps)(Subscriptions);
