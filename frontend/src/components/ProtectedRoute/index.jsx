import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

function ProtectedRoute({ user, component, path }) {
  return user.email
    ? <Route path={path} component={component} />
    : <Redirect to="/" />;
}

ProtectedRoute.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  component: PropTypes.shape({}).isRequired,
  path: PropTypes.string.isRequired,
};

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(ProtectedRoute);
