

import React, { Component } from 'react';
import TextSection from '../../components/TextSection';

export default class ThankYouSection extends Component {
  render() {
    return <div className="thank-you-section">
      <TextSection title="A huge thank you" body="Thanks for buying the Meee Values Cards. We’ve emailed over your unique link and code, which gives you access to the Meee Values Cards for 24 hours." />
      <div className="text-section-separator" />
      <TextSection body="We hope you enjoy learning what makes you, you!" />
    </div>;
  }
}
