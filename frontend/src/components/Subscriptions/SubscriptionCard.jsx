import React from 'react';
import { PropTypes } from 'prop-types';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import './SubscriptionCard.css';

function SubscriptionCard({ subscription, toggleSubscription }) {
  return (
    <Col xs={12} sm={6} lg={4}>
      <Card className="my-2 has-shadow" border="light">
        <Card.Body>
          <Card.Title className="font-weight-light float-left text-uppercase">
            {subscription.title}
          </Card.Title>
          <Form className="float-right">
            <Form.Check
              type="switch"
              data-testid={`toggle-subscription-${subscription._id}`}
              checked={subscription.isEnabled || false}
              id={`switch-subscription-${subscription._id}`}
              onChange={() => toggleSubscription({
                _id: subscription._id,
                isEnabled: !subscription.isEnabled,
              })}
            />
          </Form>
          <Card.Text className="float-left">
            {subscription.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

SubscriptionCard.propTypes = {
  subscription: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    isEnabled: PropTypes.bool,
  }).isRequired,
  toggleSubscription: PropTypes.func.isRequired,
};

export default SubscriptionCard;
