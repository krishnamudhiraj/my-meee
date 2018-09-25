import React, { Component } from 'react';
import Router from 'next/router';
import { Image } from 'react-bootstrap';

class SchoolValues extends Component {
  render() {
    return (
      <div className="school-values">
        <div className="school-values-content">
          <Image
            className="meee-image"
            src={require('../../utils/assets/meeLogo2White.png')}
            responsive
          />

          <div>
            <p className="text-values-title">What are your values?</p>
            <p className="text-values-body">
              Values are very important. If you can understand your values, you
              can make better decisions, take clear action and create the kind
              of life you want.
            </p>
          </div>

          <div>
            <p className="text-values-title-sm">Why complete this exercise</p>
            <p className="text-values-body">
              All too often we live on autopilot. So this is your chance to stop
              and think about what really matters to you. In just a few minutes,
              you
              {"'"}
              ll begin to see yourself – and your future – in a new light.
            </p>
          </div>

          <div className="card-get-started1">
            <p className="head-text">
              What matters to you? Choose the values that resonate with you to
              begin your exciting new journey
            </p>
            <div className="input-btn">
              <button
                className="startbtn"
                onClick={() => Router.push('/GetStartedSchool')}
              >
                Get started with the Meee Values Cards
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SchoolValues;
