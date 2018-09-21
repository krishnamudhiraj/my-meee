import React, { Component } from 'react';

class QuoteSection extends Component {
  render() {
    const { renderView } = this.props;
    return (
      <div className="quote-section">
        <div className="container">
          <div className="quote-section-container">
            {renderView}
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteSection;
