import React, { Component } from 'react';

class TextSection extends Component {
  render() {
    const { title, titleH2, body } = this.props;
    return (
      <div>
        {title && <p className="text-section-h1">{title}</p>}
        {titleH2 && <p className="text-section-h2">{titleH2}</p>}
        <p className="text-body">{body}</p>
      </div>
    );
  }
}

export default TextSection;
