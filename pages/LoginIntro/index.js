import React, { Component } from 'react';
import Router from 'next/router';
import { Image } from 'react-bootstrap';

class LoginIntro extends Component {
  render() {
    return (
      <div className="login-intro">
        <div className="login-intro-content">
          <Image
            className="meee-image hidden-xs"
            src={require('../../utils/assets/meeLogo2.png')}
            responsive
          />
          <div className="visible-xs" />

          <div className="box-text">
            <p className="text-values-body">Values are incredibly important. If you can understand, nurture and connect with your values, you can start creating the kind of life you want to lead</p>
          </div>

          <div className="input-btn">
            <button className="hidden-xs" onClick={() => Router.push('/GetStartedSchool')}>Sounds Good</button>
            <button className="next-btn" onClick={() => Router.push('/GetStartedSchool')}>
              Next
              <Image
                className="next-arrow"
                src={require('../../utils/assets/rightArrow.png')}
                responsive
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginIntro;
