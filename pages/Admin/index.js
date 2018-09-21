import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import { get } from 'lodash';
import { adminAuth } from '../../redux/reducers/admin/actions';
import { Image } from 'react-bootstrap';
import Loader from '../../components/Loader';
import '../../styles/userDetails.scss';

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      authorised: false
    };
    this.authenticateAdmin = this.authenticateAdmin.bind(this);
  }

  handleSubmit = ev => {
    ev.preventDefault();
    const email = ev.target.email_input.value;
    const password = ev.target.password_input.value;
    this.authenticateAdmin({ email, password });
  };

  async authenticateAdmin(auth) {
    const { adminAuth } = this.props;
    const flag = await adminAuth(auth);
    if (flag) {
      this.setState({ authorised: true });
      // Router.push("/SchoolData");
    }
  }

  render() {
    const { isLoading, message } = this.props;
    const { authorised } = this.state;

    return (
      <div className="generate-codes" style={{ justifyContent: 'center' }}>
        {isLoading && <Loader />}
        <div className="generate-codes-content">
          <Image
            className="meee-image"
            src={require('../../utils/assets/meeLogo2.png')}
            responsive
          />
          {!authorised && <form onSubmit={this.handleSubmit}>
            <div className="input-view" style={{ paddingTop: 45, paddingBottom: 45 }}>
              <div className="input-view-in">
                <p className="question">Email (administrator): </p>
                <input
                  type="email"
                  name="email_input"
                  className="form-control"
                  placeholder="test@email.com"
                  required
                />
              </div>

              <div className="input-view-in">
                <p className="question">Password: </p>
                <input
                  type="password"
                  name="password_input"
                  className="form-control"
                  placeholder="********"
                  required
                />
              </div>
            </div>

            <div className="btn-view">
              <button className="next-button">Let{'\''}s Go!</button>
            </div>
          </form>}

          {!authorised && <p className="code-generation-info">{message}</p>}

          {authorised && <div className="btn-view admin-btn">
            <button className="next-button" onClick={() => Router.push('/GenerateCodes')}>
              Generate Codes for School
            </button>
            <button className="next-button" onClick={() => Router.push('/SchoolData')}>
              View School Data
            </button>
          </div>}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  adminAuth: email => dispatch(adminAuth(email))
});

const mapStateToProps = ({ admin }) => ({
  isLoading: get(admin, 'isLoading'),
  message: get(admin, 'message'),
  isAuthorised: get(admin, 'isAuthorised')
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
