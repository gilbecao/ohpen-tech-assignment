import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadSubscriptions } from '../../redux/actions/actionCreators';

function Subscriptions({ subscriptions, dispatch }) {
  useEffect(() => {
    if (!subscriptions.length) {
      dispatch(loadSubscriptions());
    }
  }, []);
  return (
    <ul>
      {subscriptions.map((subscription) => (
        <li>
          <p>{subscription.title}</p>
          <p>{subscription.description}</p>
          <p>{subscription.isEnabled ? 'true' : 'false'}</p>
        </li>
      ))}
    </ul>
  );
}

Subscriptions.propTypes = {
  subscriptions: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ subscriptions }) {
  return { subscriptions };
}

export default connect(mapStateToProps)(Subscriptions);
