import React, { Component } from 'react';
import ButtonTheme from '../../components/ButtonTheme';

class CardGetStarted extends Component {
  render() {
    return (
      <div className="card-get-started">
        <p className="head-text">
          By helping you to choose values that resonate with you, we can empower
          you to understand and believe in who you are
        </p>
        <p className="offer-text">Get started now for just £5</p>

        <ButtonTheme text="Get started with Meee" onPress={'/SignUp'} />
      </div>
    );
  }
}

export default CardGetStarted;
