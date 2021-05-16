const { Router } = require('express');
const subscriptionController = require('../controllers/subscriptionController');

function routes() {
  const subscriptionsRoutes = Router();

  subscriptionsRoutes
    .route('/')
    .get(subscriptionController.getAllSubscriptions)
    .post(subscriptionController.createSubscription);

  subscriptionsRoutes
    .route('/:subscriptionId')
    .put(subscriptionController.updateSubscriptionById);

  return subscriptionsRoutes;
}

module.exports = routes();
