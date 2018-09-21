import React, { Component } from 'react';
import { get } from 'lodash';
import { connect } from 'react-redux';
import withAuth from '../../utils/functions/withAuth';
import { mailMePDF } from '../../redux/reducers/valueCards/actions';

class DownloadPDF extends Component {
  constructor() {
    super();
    this.state = {
      emailId: null
    };
    this.emailPDF = this.emailPDF.bind(this);
  }

  async componentDidMount() {
    const { email } = this.props;
    await this.setState({ emailId: email });
  }

  emailPDF = () => {
    const { mailMePDF } = this.props;
    const { emailId } = this.state;
    mailMePDF(emailId);
  }

  render() {
    return <div className="download-pdf">
      <div className="content-body">
        <img className="img-responsive" src={require('../../utils/assets/meee.png')} />

        <div className="text-area">
          <p className="title">Live your values</p>
          <p className="body-text">
              Congratulations! You’ve taken a big step on an exciting new
              journey.
          </p>
          <p className="body-text">
              Please download your values to keep as a reminder.
          </p>
          <p className="body-text">
              If you would like any further information, please email us at values@meee.global
          </p>
        </div>
        <div className="button-area">
          <a rel="" className="button-theme" href="/PdfFile">
            <img className="img-responsive" src={require('../../utils/assets/downloadIcon.png')} />
              Download as PDF
          </a>
          {/* <button className="btn-transparent" onClick={this.emailPDF}>
              or email the PDF to me
          </button> */}
        </div>
      </div>
    </div>;
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  mailMePDF: (email) => dispatch(mailMePDF(email)),
});

const mapStateToProps = ({ payment, code }) => ({
  email: get(payment, 'email')
});

export default withAuth(connect(
  mapStateToProps,
  mapDispatchToProps
)(DownloadPDF));
