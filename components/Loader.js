import React, { Component } from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../utils/assets/animations/trailLoading.json';
import * as animationDataWhite from '../utils/assets/animations/trailLoadingWhite.json';
import '../styles/loader.scss';

export default class Loader extends Component {
  render() {
    const { bg, loadingText, reduxLoader } = this.props;
    const defaultOptions = { loop: true, autoplay: true, animationData, rendererSettings: { preserveAspectRatio: 'xMidYMid slice' } };
    const defaultOptionsWhite = { loop: true, autoplay: true, animationData: animationDataWhite, rendererSettings: { preserveAspectRatio: 'xMidYMid slice' } };

    return (
      <div className="loader">
        {
          !reduxLoader && (bg ? <div className="gradient">
            <Lottie options={defaultOptionsWhite} height={140} width={140} />
            <p>{loadingText}</p>
          </div> : <div className="opac"><Lottie options={defaultOptions} height={100} width={100} /></div>)
        }

        {
          reduxLoader && <div className="lds-dual-ring" />
        }
      </div>
    );
  }
}
