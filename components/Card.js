import React, { Component } from 'react';
import ButtonTheme from './ButtonTheme';

const backgroundGradient = [
  'linear-gradient(rgb(0, 158, 225), rgb(0, 139, 199))',
  'linear-gradient(rgb(255, 248, 166), rgb(255, 236, 2))',
  'linear-gradient(rgb(246, 68, 165), rgb(229, 1, 129))',
];

export default class Card extends Component {
  render() {
    const { data, onCardPress } = this.props;
    const backgroundGradientColors = (data.color === 'blue') ? backgroundGradient[0] : (data.color === 'yellow') ? backgroundGradient[1] : backgroundGradient[2];
    const textColor = (data.color === 'yellow') ? 'black' : 'white';

    return <div className="card card-shadow-dark" style={{ background: backgroundGradientColors }}>
      <p className="heading" style={{ color: textColor }}>
        {data.type}
      </p>
      <p className="sub-heading" style={{ color: textColor }}>
        {data.moto}
      </p>

      <p className="body" style={{ color: textColor }}>
        {data.message}
      </p>

      <ButtonTheme text="Select this Card" backgroundColor="white" textColor="black" onPressFunction={() => onCardPress(data)} />
    </div>;
  }
}
