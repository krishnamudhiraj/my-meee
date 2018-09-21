import { addUser } from '../../../services/users';
import { addCode } from '../../../services/code';

import { productionURL, developmentURL } from '../../../config/constants';
const url = (process.env.NODE_ENV === 'production' ? productionURL : developmentURL);

import {
  ON_EMAIL_SUBMITTING,
  ON_EMAIL_SUBMITTED,
  ON_PAYMENT_REQUESTED,
  ON_PAYMENT_COMPLETED
} from './types';

export const onSubmitingEmail = (email, isEmailSubscribed) => (dispatch, getState) => {
  dispatch({ type: ON_EMAIL_SUBMITTING });
  dispatch({ type: ON_EMAIL_SUBMITTED, email, isEmailSubscribed });
};

export const onPaymentCall = (userData, tokenData) => async (dispatch, getState) => {
  dispatch({ type: ON_PAYMENT_REQUESTED });
  const { isEmailSubscribed } = getState().payment;

  const stripeData = { stripeToken: tokenData.id, amount: 500, cardID: tokenData.card.id, userEmail: userData.email };

  try {
    const response = await fetch(
      `${url}createPayment`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(stripeData)
      }
    );
    const responseJson = await response.json();

    if (responseJson !== false) {
      const user = {
        customer_id: responseJson.customer,
        name: userData.name,
        email: userData.email,
        is_email_subscribed: isEmailSubscribed,
        type: userData.type,
        payment_id: responseJson.id,
        payment_status: responseJson.status
      };

      await addUser(user);

      if (responseJson.status === 'succeeded') {
        const generateCode = await addCode({
          customer_id: responseJson.customer
        });
        await sendCodeMail({
          customer_id: responseJson.customer,
          email: userData.email,
          name: userData.name,
          code: generateCode
        });
      }
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Payment Error: ', error);
  }
};

export const onPaymentCompletion = () => async (dispatch, getState) => {
  dispatch({ type: ON_PAYMENT_COMPLETED });
};

async function sendCodeMail(userData) {
  try {
    await fetch(
      `${url}sendCodeMail`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      }
    );
  } catch (error) {
    console.error(error);
  }
}
