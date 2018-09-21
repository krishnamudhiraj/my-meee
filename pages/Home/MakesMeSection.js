import React, { Component } from 'react';
import TextSection from '../../components/TextSection';

class MakesMeSection extends Component {
  render() {
    return (
      <div className="makes-me-section">
        <div className="container">
          <div className="row makes-me-section-row">
            <div className="col-sm-5 hidden-xs">
              <img
                src={require('../../utils/assets/makesMeList.png')}
                className="img-responsive"
                alt="makes me list"
              />
            </div>
            <div className="col-sm-7 col-xs-12">
              <TextSection
                textColor="black"
                title="What makes me, me?"
                body="What do I stand for? What really matters in my life? These are questions most of us ask ourselves at some point. Finding the answer means taking a moment to look at yourself anew: what’s important to you? What do you want to achieve?"
              />
              <div className="text-section-separator" style={{ margin: 15 }} />
              <TextSection
                textColor="black"
                body="It can be tricky to know where to begin. But the Meee Values Cards are here to help. We’ll help you pin down and rank your values, giving you clarity, confidence and belief in who you are and what you can achieve."
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MakesMeSection;
