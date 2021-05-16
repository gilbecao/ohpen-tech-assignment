import React from 'react';

import Card from 'react-bootstrap/Card';

import './SubscriptionsEnabled.css';

function SubscriptionsEnabled() {
  return (
    <Card className="enabled-list has-shadow" border="light">
      <Card.Body>Enabled Subscriptions will be listed here...</Card.Body>
    </Card>
  );
}

export default SubscriptionsEnabled;
