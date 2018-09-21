import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import { get } from 'lodash';
import { Image } from 'react-bootstrap';
import { onSchoolLogin } from '../../redux/reducers/code/actions';

class SelectSchool extends Component {
  constructor() {
    super();
    this.state = {
      showError: false
    };
    this.loginUser = this.loginUser.bind(this);
  }

  loginUser = () => {
    const { onSchoolLogin } = this.props;
    onSchoolLogin().then((flag) => {
      if (flag) {
        Router.push('/UserDetails');
      } else {
        this.setState({ showError: true });
        setTimeout(() => {
          this.setState({ showError: false });
        }, 5000);
      }
    });
  }

  render() {
    const { schoolName, message } = this.props;
    const { showError } = this.state;

    return (
      <div className="select-school">
        <div className="select-school-content">
          <Image
            className="meee-image hidden-xs"
            src={require('../../utils/assets/meeLogo2.png')}
            responsive
          />
          <div className="visible-xs" />

          <div className="box-text">
            <p className="whichschool">Are you from</p>
            <p className="schoolname">{schoolName}?</p>
          </div>

          <div className="input-btn">
            <button className="back-button" onClick={() => Router.push('/GetStartedSchool')}>
              <div className="btn-up-body">
                <Image
                  className="next-arrow"
                  src={require('../../utils/assets/leftArrowBlack.png')}
                  responsive
                />
                <p>No, I{'\''}m not</p>
              </div>
              <p className="btm-text">Re-enter your code</p>
            </button>

            <button className="forward-button" onClick={this.loginUser}>
              <div className="btn-up-body">
                <p>Yes, I am!</p>
                <Image
                  className="next-arrow"
                  src={require('../../utils/assets/rightArrow.png')}
                  responsive
                />
              </div>
              <p className="btm-text">Get going</p>
            </button>
          </div>

          {showError && <p style={{ color: 'red', position: 'absolute', bottom: -40 }}>{message}</p>}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  onSchoolLogin: () => dispatch(onSchoolLogin())
});

const mapStateToProps = ({ getStarted, code }) => ({
  isLoading: get(getStarted, 'isLoading'),
  schoolName: get(getStarted, 'schoolName'),
  message: get(code, 'message'),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectSchool);
