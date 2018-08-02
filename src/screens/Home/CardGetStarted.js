import React, { Component } from 'react';
import ButtonTheme from '../../components/ButtonTheme';

class CardGetStarted extends Component {
  render() {
    const { title, titleH2, body } = this.props;
    return (
      <div className="card-get-started">
        <p className="head-text">
          By helping you to choose values that resonate with you, we can empower
          you to understand and believe in who you are
        </p>
        <p className="offer-text">Get started now for just £2</p>

        <ButtonTheme text="Get started with Mee" />
      </div>
    );
  }
}

export default CardGetStarted;
