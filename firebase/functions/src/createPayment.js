var { stripeSecretKey } = require("./config/keys");
const stripe = require("stripe")(stripeSecretKey);

exports.createPayment = async function(request, response) {
  try {
    const stripeToken = request.body.stripeToken;
    const amountToBePaid = request.body.amount;
    const cardID = request.body.cardId;
    const userEmail = request.body.userEmail;

    const stripeCustomerID = await getStripeCustomerOrCreate(userEmail);
    const cardId = await getCardIDOrCreate(
      stripeToken,
      cardID,
      stripeCustomerID
    );

    const success = await stripe.charges.create({
      amount: amountToBePaid,
      currency: "eur",
      customer: stripeCustomerID,
      source: cardID,
      description: "Merchant wallet fillup"
    });

    response.send(success);
  } catch (error) {
    response.send(false);
  }
};

function getStripeCustomerOrCreate(userID, userEmail) {
  return new Promise((resolve, reject) => {
    stripe.customers
      .create({
        email: userEmail
      })
      .then(customer => {
        return resolve(customer.id);
      })
      .catch(error => {
        reject(error);
      });
  }).catch(error => {
    reject(error);
  });
}

function getCardIDOrCreate(stripeToken, cardID, customerID) {
  return new Promise((resolve, reject) => {
    if (!cardID) {
      stripe.customers
        .createSource(customerID, {
          source: stripeToken
        })
        .then(card => {
          return resolve(card.id);
        })
        .catch(error => {
          reject(error);
        });
    } else {
      resolve(cardID);
    }
  }).catch(error => {
    reject(error);
  });
}
