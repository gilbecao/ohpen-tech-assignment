import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Login from './components/Login';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import Subscriptions from './components/Subscriptions';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Container className="my-3">
        <Switch>
          <Route exact path="/" component={Login} />
          <ProtectedRoute path="/subscriptions" component={Subscriptions} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <ProtectedRoute path="/profile" component={Profile} />
          <Route component={Login} />
        </Switch>
      </Container>

    </>
  );
}

export default App;
