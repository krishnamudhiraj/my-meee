import React, { Component } from 'react';
import Link from '../utils/functions/routerFunction';

class ButtonTheme extends Component {
  render() {
    const { text, iconForward, iconBack, textColor, onPress, onPressFunction, lg, sm, backgroundColor, outline } = this.props;

    return onPress ? <Link href={onPress}>
      <div className="button-theme" style={[lg && { height: 60 }, sm && { height: 40 }, backgroundColor && { backgroundColor }]}>
        {iconBack && <img className="img-responsive" style={{ marginRight: 10 }} src={iconBack} />}
        <p className="button-theme-text" style={textColor && { textColor }}>
          {text}
        </p>
        {iconForward && <img className="img-responsive" style={{ marginLeft: 10 }} src={iconForward} />}
      </div>
    </Link> : onPressFunction ? <button type="button" className="btn-theme-button" onClick={onPressFunction}>
      <div className="button-theme" style={[lg && { height: 60 }, sm && { height: 40 }, backgroundColor && { backgroundColor }]}>
        {iconBack && <img className="img-responsive" style={{ marginRight: 10 }} src={iconBack} />}
        <p className="button-theme-text" style={textColor && { textColor }}>
          {text}
        </p>
        {iconForward && <img className="img-responsive" style={{ marginLeft: 10 }} src={iconForward} />}
      </div>
    </button> : null;
  }
}

export default ButtonTheme;
