import React, { Component } from 'react';
import ButtonTheme from './ButtonTheme';

export default class CardsScreenHeader extends Component {
  render() {
    const { onForwardPress, forwardText, onBackPress, selection, topFive, errorMessage } = this.props;

    return <div className="cards-screen-header">
      {onBackPress
        && <div className="cards-screen-header-back-btn">
          <ButtonTheme iconBack={require('../utils/assets/leftArrow.png')} text="Back" onPress={onBackPress} />
        </div>
      }

      <img className="img-responsive hidden-xs logo-img" src={require('../utils/assets/meeeLogo.png')} />

      {onForwardPress && <div className="cards-screen-header-btn">
        <ButtonTheme iconForward={require('../utils/assets/rightArrow.png')} text={forwardText} onPress={selection === undefined ? onForwardPress : topFive !== undefined ? (selection > 0 && selection < 6) && onForwardPress : (selection > 0 && onForwardPress)} />
        {selection !== undefined && selection < 1 && <p className="selection">Please select at least one card</p>}
        {selection !== undefined && selection < 1 && <p className="selection">to move to next screen.</p>}
        {selection !== undefined && topFive && selection > 5 && <p className="selection">You can{'\''}t select more then 5.</p>}
        {!errorMessage && selection !== undefined && selection > 0 && <p className="selection">{selection} selected</p>}
        {errorMessage && <p className="selection" style={{ color: 'red', textDecoration: 'underline' }}>You can{'\''}t select more then 5</p>}
      </div>}
    </div>;
  }
}
