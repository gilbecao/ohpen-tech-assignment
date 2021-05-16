import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/actions/actionCreators';

function Header({ user, dispatch }) {
  return (
    <>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/subscriptions">Subscriptions</Link>
      {
      user.email
        ? (
          <>
            <span>{user.name || user.email}</span>
            <button
              type="button"
              onClick={() => dispatch(logout())}
            >
              Logout
            </button>
          </>
        )
        : (
          <Link to="/">Login</Link>
        )
  }
    </>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,

  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ user, isLoggedIn }) {
  return {
    user,
    isLoggedIn,
  };
}

export default connect(mapStateToProps)(Header);
