import React, { Component } from 'react';
import ButtonTheme from './ButtonTheme';

const backgroundGradient = [
  'linear-gradient(rgb(0, 158, 225), rgb(0, 139, 199))',
  'linear-gradient(rgb(255, 248, 166), rgb(255, 236, 2))',
  'linear-gradient(rgb(246, 68, 165), rgb(229, 1, 129))'
];

export default class CardRemove extends Component {
  render() {
    const { data, shortlist, onCardPress, marginZero, fixedWidth } = this.props;
    const backgroundGradientColors = data.color === 'blue' ? backgroundGradient[0] : data.color === 'yellow' ? backgroundGradient[1] : backgroundGradient[2];
    const textColor = data.color === 'yellow' ? 'black' : 'white';

    return (
      <div
        className="card-remove card-top-five card-shadow"
        style={{ background: backgroundGradientColors, marginRight: marginZero ? 0 : 25, marginLeft: marginZero ? 0 : 15, width: fixedWidth && 300 }}
      >
        <p className="heading" style={{ color: textColor }}>{data.type}</p>
        <p className="sub-heading" style={{ color: textColor }}>{data.moto}</p>

        <ButtonTheme
          text={shortlist ? 'Remove from shortlist' : 'Remove this card'}
          backgroundColor="white"
          textColor="black"
          onPressFunction={() => onCardPress(data)}
        />
      </div>
    );
  }
}
