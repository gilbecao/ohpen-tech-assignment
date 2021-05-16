const Subscription = require('../models/subscriptionModel');
const {
  getAllSubscriptions,
  createSubscription,
  updateSubscriptionById,
} = require('./subscriptionController');

jest.mock('../models/subscriptionModel');

describe('subscriptionController', () => {
  const res = {
    json: jest.fn(),
    status: jest.fn(),
    send: jest.fn(),
  };

  describe('Given a getAllSubscriptions function', () => {
    describe('When is invoked', () => {
      test('Then call json', async () => {
        await getAllSubscriptions(null, res);

        expect(res.json).toHaveBeenCalled();
      });

      describe('And there is an error', () => {
        beforeEach(async () => {
          Subscription.find.mockRejectedValueOnce();

          await getAllSubscriptions(null, res);
        });
        test('Then call res.status with 500', async () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });
        test('Then call res.send', async () => {
          expect(res.send).toHaveBeenCalled();
        });
      });
    });
  });

  describe('Given a createSubscription function', () => {
    describe('When is invoked', () => {
      test('Then call json', async () => {
        await createSubscription({ body: {} }, res);

        expect(res.json).toHaveBeenCalled();
      });

      describe('And there is an error', () => {
        beforeEach(async () => {
          Subscription.mockReturnValueOnce({ save: jest.fn().mockRejectedValueOnce() });
          await createSubscription({ body: {} }, res);
        });
        test('Then call res.status with 500', async () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call res.send', async () => {
          expect(res.send).toHaveBeenCalled();
        });
      });
    });
  });

  describe('Given a updateSubscriptionById function', () => {
    describe('When is invoked', () => {
      test('Then call json', async () => {
        const req = {
          body: {},
          params: {
            subscriptionId: '',
          },
        };

        await updateSubscriptionById(req, res);

        expect(res.json).toHaveBeenCalled();
      });

      describe('And there is an error', () => {
        beforeEach(async () => {
          const req = {
            body: {},
            params: {
              subscriptionId: '',
            },
          };

          Subscription.findByIdAndUpdate.mockRejectedValueOnce();

          await updateSubscriptionById(req, res);
        });
        test('Then call res.status with 500', async () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });
        test('Then call res.send', async () => {
          expect(res.send).toHaveBeenCalled();
        });
      });
    });
  });
});
