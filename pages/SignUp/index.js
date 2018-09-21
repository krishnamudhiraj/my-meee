import React, { Component } from 'react';
import Header from '../../components/Header';
import TextSection from '../../components/TextSection';
import QuoteSection from '../../components/QuoteSection';
import ButtonTransparent from '../../components/ButtonTransparent';
import CheckoutCard from './CheckoutCard';

export default class SignUp extends Component {
  render() {
    return <div className="app">
      <Header />
      <QuoteSection renderView={<TextSection quote="&quot;Education is when you read the fine print; experience is what you get when you don’t&quot;" quoteBy="- Tony Banks, Head of RBS" />} />

      <div className="signup-view">
        <CheckoutCard />

        <div className="text-center btn-already-token">
          <ButtonTransparent text="Already have a code?" textColor="#008BC6" onPress={'/GetStarted'} />
        </div>
        <div className="blue-bg-absolute" />
        <div className="white-bg-absolute" />
      </div>
    </div>;
  }
}
