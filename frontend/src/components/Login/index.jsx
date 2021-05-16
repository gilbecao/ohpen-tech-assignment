import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { login } from '../../redux/actions/actionCreators';

function Login({ user, dispatch }) {
  return (
    user.email
      ? <Redirect to="/profile" />
      : (
        <>
          <button
            type="button"
            onClick={() => dispatch(login(true))}
          >
            Login as Admin
          </button>
          <button
            type="button"
            onClick={() => dispatch(login(false))}
          >
            Login as RRHH
          </button>
        </>
      )
  );
}

Login.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(Login);
