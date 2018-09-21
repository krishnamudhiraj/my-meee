import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import { get } from 'lodash';
import { onPaymentCall, onPaymentCompletion } from '../../redux/reducers/payment/actions';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import { StripeProvider } from 'react-stripe-elements-universal';
import MyStoreCheckout from './MyStoreCheckout';

import { stripePublishableKey } from '../../config/keys';

class Payment extends Component {
  constructor() {
    super();
    this.state = {
      stripe: null,
      isPaymentError: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.errorInTransaction = this.errorInTransaction.bind(this);
  }

  errorInTransaction = () => {
    this.setState({ isPaymentError: true });
    setTimeout(() => {
      this.setState({ isPaymentError: false });
    }, 2000);
  }

  onSubmit = (userData, tokenData) => {
    const { onPaymentCall, onPaymentCompletion } = this.props;
    onPaymentCall(userData, tokenData).then((isSuccess) => {
      onPaymentCompletion();
      if (isSuccess) {
        Router.push('/PaymentSuccess');
      } else {
        this.setState({ isPaymentError: true });
        setTimeout(() => {
          this.setState({ isPaymentError: false });
        }, 2000);
      }
    });
  };

  render() {
    const { isLoading, email } = this.props;
    const { isPaymentError } = this.state;

    return (
      <div className="app">
        <Header />
        {isLoading && <Loader />}
        <div className="payment">
          <StripeProvider apiKey={stripePublishableKey}>
            <MyStoreCheckout
              onSubmit={this.onSubmit}
              email={email}
              errorInTransaction={this.errorInTransaction}
            />
          </StripeProvider>
          {isPaymentError && <p className="error-text">Payment Failure!</p>}
          <div className="blue-bg-absolute" />
          <div className="white-bg-absolute" />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  onPaymentCall: (userData, tokenData) => dispatch(onPaymentCall(userData, tokenData)),
  onPaymentCompletion: () => dispatch(onPaymentCompletion())
});

const mapStateToProps = ({ payment }) => ({
  isLoading: get(payment, 'isLoading'),
  email: get(payment, 'email'),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Payment);


