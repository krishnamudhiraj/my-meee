import React, { Component } from 'react';
import ButtonTheme from '../../components/ButtonTheme';
import ButtonTransparent from '../../components/ButtonTransparent';

class GetStartedWithCards extends Component {
  render() {
    return <div className="get-statred-width-cards-section">
      <div className="container-fluid">
        <div className="row get-statred-width-cards-row">
          <div className="col-sm-3 hidden-xs col-no-padding">
            <img className="img-responsive float-left" src={require('../../utils/assets/getStartedCardLeft.png')} alt="" />
          </div>
          <div className="col-sm-6">
            <div className="get-started-body">
              <p className="body-title">
                  This exercise takes roughly 15-30 minutes to complete. It
                  could be the start of an amazing, fulfilling journey!
              </p>
              <p className="signup-text">
                  Sign up today and start your Meee adventure for just £5 (£1 will go to the charity Mind)
              </p>
              <div className="btn-theme">
                <ButtonTheme lg={true} text="Get started with the Meee Values Cards" onPress={'/SignUp'} />
              </div>
              <div className="button-transparent">
                <ButtonTransparent text="Already have a code?" textColor="#008BC6" onPress={'/GetStarted'} />
              </div>
            </div>
          </div>
          <div className="col-sm-3 hidden-xs col-no-padding">
            <img className="img-responsive float-right" src={require('../../utils/assets/getStartedCardRight.png')} alt="" />
          </div>
        </div>
      </div>
    </div>;
  }
}

export default GetStartedWithCards;
