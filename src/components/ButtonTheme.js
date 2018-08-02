import React, { Component } from 'react';

class ButtonTheme extends Component {
  render() {
    const { text } = this.props;
    return (
      <div className="button-theme">
        <p className="button-theme-text">{text}</p>
      </div>
    );
  }
}

export default ButtonTheme;
