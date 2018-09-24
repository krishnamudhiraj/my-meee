import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import { get } from 'lodash';
import { onSchoolSignupRequested } from '../../redux/reducers/getStarted/actions';
import { Image } from 'react-bootstrap';
import Loader from '../../components/Loader';
import InputTheme from '../../components/InputTheme';

class GetStartedSchool extends Component {
  handleSubmit = ev => {
    ev.preventDefault();
    const { onSchoolSignupRequested } = this.props;
    const inputCode = ev.target.input_name.value;
    onSchoolSignupRequested(inputCode);
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.status === 'success') {
      Router.push('/SelectSchool');
    }
  }

  render() {
    const { isLoading, status } = this.props;

    return (
      <div className="get-statred">
        {isLoading && <Loader />}
        <div className="get-started-in">
          <Image src={require('../../utils/assets/meeLogo2.png')} responsive />

          <div className="text-section">
            <p className="head-text">
              Let
              {"'"}s get started
            </p>
            <p className="body-text">Enter the code you have been given:</p>
          </div>

          <form onSubmit={this.handleSubmit}>
            <InputTheme placeholder="e.g. 0391" textAlign="center" />

            <div className="input-btn">
              <button>Sounds Good</button>
            </div>
          </form>
          <div style={{ height: 20 }}>
            {status !== 'success' && <p className="error-text">{status}</p>}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  onSchoolSignupRequested: code => dispatch(onSchoolSignupRequested(code)),
});

const mapStateToProps = ({ getStarted }) => ({
  isLoading: get(getStarted, 'isLoading'),
  status: get(getStarted, 'status'),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetStartedSchool);
