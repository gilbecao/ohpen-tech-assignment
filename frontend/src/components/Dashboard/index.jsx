import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';

function Dashboard({ user }) {
  return (
    <>
      {user.isAdmin
        ? <p>Dashboard works!</p>
        : <Redirect to="/subscriptions" />}
    </>
  );
}

function mapStateToProps({ user }) {
  return { user };
}

Dashboard.propTypes = {
  user: PropTypes.shape({
    isAdmin: PropTypes.bool,
  }).isRequired,
};

export default connect(mapStateToProps)(Dashboard);
