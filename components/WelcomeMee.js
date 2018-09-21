import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import TextSection from './TextSection';
import ButtonTheme from './ButtonTheme';

class WelcomeMee extends Component {
  render() {
    const { onPressLearnMore } = this.props;

    return <div className="welcome-mee">
      <div className="welcome-mee-body">
        <div className="text-section">
          <TextSection textAlign="center" title="Welcome to the Meee Values Cards" body="These cards empower people to understand and believe in who they are" />
        </div>
        <div className="btn-section">
          {/* <ButtonTheme text="Learn More" onPressFunction={onPressLearnMore()} /> */}
          <button className="button-theme" onClick={() => onPressLearnMore()}>Buy Now</button>
        </div>

        <Image className="welcome-bg" src={require('../utils/assets/welcomeMeeBg.png')} />
        <Image className="welcome-bg-sm" src={require('../utils/assets/welcomeMeeBgSm.png')} />

      </div>
    </div>;
  }
}

export default WelcomeMee;
