import React, { Component } from 'react';

export default class NextButton extends Component {
  render() {
    const { text, onPress, bottomText, warning } = this.props;

    return <button type="button" className="btn-next-button" onClick={onPress}>
      <div className="button-theme">
        <div className="top-content">
          <p className="button-theme-text">
            {text}
          </p>
          <img className="img-responsive" style={{ marginLeft: 10 }} src={require('../utils/assets/rightArrow.png')} />
        </div>
        <p className="btm-text">{bottomText}</p>
      </div>
      {warning && <p className="warning">{warning}</p>}
    </button>;
  }
}
