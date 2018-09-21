import React from 'react';
import { injectStripe, CardNumberElement, CardExpiryElement, CardCVCElement } from 'react-stripe-elements-universal';

const createOptions = () => ({
  style: {
    base: {
      fontSize: '18px',
      color: '#424770',
      letterSpacing: '0.025em',
      fontFamily: 'Source Code Pro, monospace',
      '::placeholder': {
        color: '#aab7c4'
      }
    },
    invalid: {
      color: '#9e2146'
    }
  }
});

class CheckoutForm extends React.Component {
  handleSubmit = ev => {
    const { onSubmit, errorInTransaction } = this.props;

    ev.preventDefault();
    const name = ev.target.name.value;
    const email = ev.target.email.value;
    const userData = { email, name, type: 'public' };

    this.props.stripe.createToken().then(({ token }) => {
      if (token === undefined) {
        errorInTransaction();
      } else {
        onSubmit(userData, token);
      }
    });
  };

  render() {
    const { email } = this.props;
    return <form onSubmit={this.handleSubmit}>
      <p style={{ margin: 10 }}>Pay safely and securely. All transactions are encrypted and we don’t store your payment details.</p>
      <label>
          Name
        <input className="input" name="name" type="text" placeholder="Jane Doe" required />
      </label>
      <label>
          Email
        <input className="input" name="email" type="email" defaultValue={email} placeholder="jane.doe@example.com" required />
      </label>
      <label>
          Card number
        <CardNumberElement {...createOptions()} />
      </label>
      <label>
          Expiration date
        <CardExpiryElement {...createOptions()} />
      </label>
      <label>
          CVC code
        <CardCVCElement {...createOptions()} />
      </label>
      <button>Confirm order</button>
    </form>;
  }
}

export default injectStripe(CheckoutForm);
