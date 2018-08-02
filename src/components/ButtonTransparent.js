import React, { Component } from 'react';

class ButtonTransparent extends Component {
  render() {
    const { text } = this.props;
    return (
      <div className="button-transparent">
        <p className="button-transparent-text">{text}</p>
      </div>
    );
  }
}

export default ButtonTransparent;
