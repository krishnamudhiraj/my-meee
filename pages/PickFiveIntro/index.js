import React, { Component } from 'react';
import ButtonTheme from '../../components/ButtonTheme';
import TextSection from '../../components/TextSection';
import withAuth from '../../utils/functions/withAuth';

class PickFiveIntro extends Component {
  render() {
    return (
      <div className="pick-five-intro">
        <div className="pick-five-intro-in">
          <img
            className="img-responsive hidden-xs"
            src={require('../../utils/assets/meeLogo2.png')}
          />
          <div className="text-section">
            <TextSection
              textColor="black"
              textAlign="center"
              body="Thanks for selecting your cards. Now we’d like to cut down your selection to find your top five. These are the ones that really matter to you."
            />
            <div className="text-section-separator" style={{ margin: 15 }} />
            <TextSection
              textColor="black"
              textAlign="center"
              body="Ready?"
            />
          </div>
          <div className="intro-img-item">
            <div className="img-item-in">
              <img
                className="body-img img-responsive"
                src={require('../../utils/assets/shortlistTheCard.png')}
              />
            </div>
          </div>

          <div className="input-btn">
            <ButtonTheme
              lg={true}
              text="Pick your top five"
              onPress={'/PickFive'}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(PickFiveIntro);
