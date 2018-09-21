import React, { Component } from 'react';
import Header from '../../components/Header';
import ThankYouSection from './ThankYouSection';
import ButtonTheme from '../../components/ButtonTheme';
import ButtonTransparent from '../../components/ButtonTransparent';

export default class PaymentSuccess extends Component {
  render() {
    return <div className="app">
      <Header />
      <ThankYouSection />

      <div className="btn-view">
        <p>Something not working?</p>
        <div className="contact-mee-btn">
          <ButtonTheme text="Contact Mee" onPress={'/'} />
          <ButtonTransparent onPress={'/GetStarted'} text="Let's get started." textColor="black"/>
        </div>
      </div>
    </div>;
  }
}
