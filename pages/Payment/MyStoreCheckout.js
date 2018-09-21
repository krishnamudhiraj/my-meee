import React from 'react';
import { Elements } from 'react-stripe-elements-universal';

import InjectedCheckoutForm from './CheckoutForm';

class MyStoreCheckout extends React.Component {
  render() {
    const { onSubmit, email, errorInTransaction } = this.props;
    return <Elements>
      <InjectedCheckoutForm onSubmit={onSubmit} email={email} errorInTransaction={errorInTransaction}/>
    </Elements>;
  }
}

export default MyStoreCheckout;
