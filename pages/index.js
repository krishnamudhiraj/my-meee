import React, { Component } from 'react';
// import { init, captureMessage } from '@sentry/node';
import App from './App';
import '../styles/index.scss';

// init({
//   dsn: 'https://9208cc998dfb4dce91f02fe6b416fee5@sentry.io/1256822'
// });

// captureMessage('Hello, world!');

export default class Index extends Component {
  render() {
    return (
      <App />
    );
  }
}
