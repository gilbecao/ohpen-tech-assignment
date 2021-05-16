import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

function Profile({ user }) {
  return (
    <p>
      email:
      {user.email}
    </p>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
};

function mapStateToProps({ user }) {
  return { user };
}
export default connect(mapStateToProps)(Profile);
