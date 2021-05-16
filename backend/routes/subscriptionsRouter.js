const { Router } = require('express');
const subscriptions = require('../constants/mockData');

function routes() {
  const subscriptionsRoutes = Router();

  subscriptionsRoutes
    .route('/')
    .get((req, res) => {
      res.json(subscriptions);
    });

  return subscriptionsRoutes;
}

module.exports = routes();
