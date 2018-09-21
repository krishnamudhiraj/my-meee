import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import { get } from 'lodash';
import { onSubmitingEmail } from '../../redux/reducers/payment/actions';
import Loader from '../../components/Loader';
import InputTheme from '../../components/InputTheme';

class CheckoutCard extends Component {
  constructor() {
    super();
    this.state = {
      isEmailSubscribed: false
    };
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { onSubmitingEmail } = this.props;
    const { isEmailSubscribed } = this.state;
    const email = ev.target.input_name.value;
    onSubmitingEmail(email, isEmailSubscribed);
    Router.push('/Payment');
  }

  render() {
    const { isLoading } = this.props;
    const { isEmailSubscribed } = this.state;
    return <div className="checkout-card-started">
      {isLoading && <Loader />}
      <p className="head-text">
          Sign up today and start your Meee adventure for just £5 (£1 will go to the charity Mind)
      </p>

      <form onSubmit={this.handleSubmit}>
        <InputTheme
          type="email"
          labelText="Your email address"
          placeholder="jane.doe@example.com"
          message="Once you purchase the exercise, we'll send you a unique access code to your email."
        />


        <div className="checkbox-view">
          <input type="checkbox" name="vehicle1" value={isEmailSubscribed} onClick={() => this.setState({ isEmailSubscribed: !isEmailSubscribed })} />
          <p>By clicking this box you would like to receive more information about our services, events, news and offers.</p>
        </div>

        <div className="btn-view">
          <button>Checkout</button>
        </div>
      </form>
    </div>;
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  onSubmitingEmail: (email, isEmailSubscribed) => dispatch(onSubmitingEmail(email, isEmailSubscribed))
});

const mapStateToProps = ({ payment }) => ({
  isLoading: get(payment, 'isLoading')
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutCard);
