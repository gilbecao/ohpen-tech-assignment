const Subscription = require('../models/subscriptionModel');

function subscriptionController() {
  async function getAllSubscriptions(req, res) {
    try {
      const subscriptions = await Subscription.find();
      res.json(subscriptions);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function createSubscription(req, res) {
    try {
      const subscription = new Subscription(req.body);
      await subscription.save();
      res.json(subscription);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function updateSubscriptionById(req, res) {
    try {
      const updatedSubscription = await Subscription.findByIdAndUpdate(
        req.params.subscriptionId,
        req.body,
        { new: true, useFindAndModify: false },
      );
      res.json(updatedSubscription);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  return {
    getAllSubscriptions,
    createSubscription,
    updateSubscriptionById,
  };
}

module.exports = subscriptionController();
