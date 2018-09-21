import React, { Component } from 'react';
import Router from 'next/router';
import { Image } from 'react-bootstrap';
import TextSection from '../../components/TextSection';

class School extends Component {
  render() {
    return <div className="school">
      <div className="school-content">
        <Image className="meee-image" src={require('../../utils/assets/meeLogo2.png')} responsive />

        <div className="school-body">
          <Image className="bg-image" src={require('../../utils/assets/welcomeMeeBgSm.png')} responsive />
          <div className="text-view">
            <TextSection textAlign="center" title="Welcome to the Meee Values Cards" body="These cards empower people to understand and believe in who they are" />
          </div>
        </div>

        <div className="input-btn">
          <button onClick={() => Router.push('/SchoolValues')}>Get started</button>
        </div>
      </div>
    </div>;
  }
}

export default School;
