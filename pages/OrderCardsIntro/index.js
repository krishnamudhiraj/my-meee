import React, { Component } from 'react';
import ButtonTheme from '../../components/ButtonTheme';
import TextSection from '../../components/TextSection';
import withAuth from '../../utils/functions/withAuth';

class OrderCardsIntro extends Component {
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
              title="One last thing…"
              body="You’re nearly done. All that’s left is for you to put your cards in order – from most to least relevant."
            />
            <TextSection textColor="black" textAlign="center" body="Ready?" />
          </div>
          <div className="intro-img-item">
            <div className="img-item-in">
              <img
                className="body-img img-responsive"
                src={require('../../utils/assets/orderIntro1.png')}
              />
              <img
                className="body-img img-responsive"
                src={require('../../utils/assets/orderIntro2.png')}
              />
              <img
                className="body-img img-responsive"
                src={require('../../utils/assets/orderIntro3.png')}
              />
            </div>
          </div>

          <div className="input-btn">
            <ButtonTheme
              lg={true}
              text="Pick your top five"
              onPress={'/OrderCards'}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(OrderCardsIntro);
