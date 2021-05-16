import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

import { logout } from '../../redux/actions/actionCreators';

import './Header.css';

function Header({ user, dispatch }) {
  return (
    <>
      <Navbar className="color-nav" collapseOnSelect expand="lg" bg="light">
        <Navbar.Brand href="#">
          <img
            src="/logo.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Ohpen logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/dashboard">Dashboard</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/subscriptions">Subscriptions</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            {
                user.email
                  ? (
                    <>
                      <Nav.Link>
                        {user.name || user.email}
                      </Nav.Link>

                      <Nav.Link>
                        <Button
                          variant="outline-secondary"
                          onClick={() => dispatch(logout())}
                        >
                          Logout
                        </Button>

                      </Nav.Link>

                    </>
                  )
                  : (
                    <Nav.Link>
                      <Link to="/">Login</Link>
                    </Nav.Link>
                  )
            }

          </Nav>
        </Navbar.Collapse>
      </Navbar>

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
