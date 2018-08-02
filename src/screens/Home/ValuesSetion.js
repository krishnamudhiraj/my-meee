import React, { Component } from 'react';
import TextSection from '../../components/TextSection';

class ValuesSetion extends Component {
  render() {
    return (
      <div className="values-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <TextSection
                title="What are your values?"
                body="Values are incredibly important. If you can understand, nurture and connect with your values, you can start creating the kind of life you want to lead."
              />
              <TextSection
                titleH2="Why complete this exercise?"
                body="All too often we live on autopilot. So this is your chance to stop and think about what really matters to you. In just a few minutes, you’ll begin to see yourself – and your future – in a new light."
              />
            </div>
            <div className="col-sm-5" />
          </div>
        </div>
      </div>
    );
  }
}

export default ValuesSetion;
