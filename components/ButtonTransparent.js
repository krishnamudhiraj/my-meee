import React, { Component } from 'react';
import Link from '../utils/functions/routerFunction';

class ButtonTransparent extends Component {
  render() {
    const { text, textColor, onPress } = this.props;
    return <Link href={onPress}>
      <div className="button-transparent">
        <p className="button-transparent-text" style={textColor && { color: textColor }}>
          {text && text}
        </p>
      </div>
    </Link>;
  }
}

export default ButtonTransparent;
