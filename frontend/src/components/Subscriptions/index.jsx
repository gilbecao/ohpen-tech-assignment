import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { loadSubscriptions, updateSubscription } from '../../redux/actions/actionCreators';
import SubscriptionCard from './SubscriptionCard';
import SubscriptionEnabled from './SubscriptionsEnabled';

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
    <>
      <Row>
        {subscriptions.map((subscription) => (
          <SubscriptionCard
            key={subscription._id}
            subscription={subscription}
            toggleSubscription={toggleSubscription}
          />
        ))}
      </Row>
      <Row className="mt-5">
        <Col>
          <SubscriptionEnabled />
        </Col>
      </Row>
    </>

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
