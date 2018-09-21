import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import { get } from 'lodash';
import { onSignupRequested } from '../../redux/reducers/getStarted/actions';
import { clearCards } from '../../redux/reducers/valueCards/actions';
import { onLogin } from '../../redux/reducers/code/actions';
import { Image } from 'react-bootstrap';
import Loader from '../../components/Loader';
import InputTheme from '../../components/InputTheme';

class GetStarted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: props.isLoggedIn,
      status: null
    };
  }

  async verifyCode(inputCode) {
    const { onSignupRequested, onLogin, clearCards } = this.props;
    const flag = await onSignupRequested(inputCode);

    if (flag) {
      await onLogin();
      await clearCards();
      Router.push('/WhatAreValues');
    } else {
      this.setState({ status: 'Code already used' });
      setTimeout(() => {
        this.setState({ status: '' });
      }, 2000);
    }
  }

  handleSubmit = ev => {
    ev.preventDefault();
    const inputCode = ev.target.input_name.value;
    this.verifyCode(inputCode);
  };

  render() {
    const { isLoading } = this.props;
    const { status } = this.state;

    return <div className="get-statred">
      {isLoading && <Loader />}
      <div className="get-started-in">
        <Image src={require('../../utils/assets/meeLogo2.png')} responsive />

        <div className="text-section">
          <p className="head-text">Ready to get started?</p>
          <p className="body-text">Enter the code we emailed you:</p>
        </div>

        <form onSubmit={this.handleSubmit}>
          <InputTheme placeholder="e.g. 0391" textAlign="center" />

          <div className="input-btn">
            <button>Enter</button>
          </div>
        </form>
        <div style={{ height: 20 }}>
          {status !== '' && (
            <p className="error-text">{status}</p>
          )}
        </div>
      </div>
    </div>;
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  onSignupRequested: code => dispatch(onSignupRequested(code)),
  onLogin: () => dispatch(onLogin()),
  clearCards: () => dispatch(clearCards()),
});

const mapStateToProps = ({ getStarted }) => ({
  isLoading: get(getStarted, 'isLoading')
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetStarted);
