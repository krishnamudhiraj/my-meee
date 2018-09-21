import React from 'react';
import ButtonTheme from '../../components/ButtonTheme';

export default class PaymentSuccessModal extends React.Component {
  render() {
    return (
      <div className="payment-success-modal">
        <div className="payment-success-modal-card">
          <p className="title">Payment Successful</p>
          <p className="body">A mail with the login code has been sent to your provided email address, please use it in order to start the test.</p>
          <ButtonTheme text="Thank You" onPress={'/PaymentSuccess'} />
        </div>
      </div>
    );
  }
}
