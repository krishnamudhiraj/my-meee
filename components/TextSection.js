import React, { Component } from 'react';

class TextSection extends Component {
  render() {
    const { title, titleH2, body, textColor, quote, quoteBy, textAlign } = this.props;
    return <div>
      {title && <p className="text-section-h1" style={(textColor && { color: textColor }, { textAlign })}>
        {title}
      </p>}
      {titleH2 && <p className="text-section-h2" style={(textColor && { color: textColor }, { textAlign })}>
        {titleH2}
      </p>}
      <p className="text-body" style={(textColor && { color: textColor }, { textAlign })}>
        {body}
      </p>

      {quote && <p className="quote-text">{quote}</p>}

      {quoteBy && <p className="quote-by-text">{quoteBy}</p>}
    </div>;
  }
}

export default TextSection;
