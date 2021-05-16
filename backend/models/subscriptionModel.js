const { model, Schema } = require('mongoose');

const subscriptionSchema = Schema({
  id: Number,
  user_group: String,
  title: String,
  description: String,
});

module.exports = model('Subscription', subscriptionSchema);
