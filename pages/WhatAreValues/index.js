import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import ButtonTheme from '../../components/ButtonTheme';
import TextSection from '../../components/TextSection';
import withAuth from '../../utils/functions/withAuth';

class WhatAreValues extends Component {
  render() {
    return <div className="what-are-values">
      <div className="get-started-in">
        <Image src={require('../../utils/assets/meeLogo2White.png')} responsive />

        <div className="text-section">
          <TextSection textColor="black" title="What are values?" body="Our values play a massive role in the choices we make. But we can be swayed by family, friends and society to move away from what we really believe. Now is the time to reconnect." />
          <div className="text-section-separator" style={{ margin: 15 }} />
          <TextSection textColor="black" body="You’re about to see 56 Meee Values Cards, carefully chosen by the Meee team. Please pick the ones that reflect your values." />
        </div>

        <div className="input-btn">
          <Image src={require('../../utils/assets/carouselDots.png')} responsive />
          <ButtonTheme text="Next" onPress={'/CardsCarousel'} />
        </div>
      </div>
    </div>;
  }
}

export default withAuth(WhatAreValues);
